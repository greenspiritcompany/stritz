#version 1.0;

#extension GL_OES_standard_derivatives : enable

#ifdef GL_ES
precision highp float;
#endif

varying vec2 v_texCoord;

uniform sampler2D u_texture;
uniform vec4 u_color4;
uniform ivec2 u_textureSize;

const float MINIFICATIONLIMIT = 8.0 / 6.0; // ie 8 texels drawn in 6 screen pixels
const float MAGNIFICATIONLIMIT = 8.0 / 12.0; // ie 8 texels drawn in 12 screen pixels
const float CHECKERBOARDSQUARESIZEPX = 16.0;
const vec3 NORMALCOLOUR = vec3(0.0, 1.0, 0.0);
const vec3 TOOMINIFIEDCOLOUR = vec3(0.0, 0.0, 1.0);
const vec3 TOOMAGNIFIEDCOLOUR = vec3(1.0, 0.0, 0.0);


// Return 0 or 1 depending on where the point lies on a checkerboard
bool isOddGridSquare(vec2 coord, float squareSize) {

	bool isOddH = abs(mod(coord.x, 2.0 * squareSize)) < squareSize;
	bool isOddV = abs(mod(coord.y, 2.0 * squareSize)) < squareSize;
	bool isOdd = (isOddH == isOddV);

	return isOdd;
}


// Greyscale from colour
vec3 greyscale(vec3 colour) {

	float grey = (0.3 * colour.r) + (0.59 * colour.g) + (0.11 * colour.b);
	return vec3(grey);
}


// Calculate the min/mag factor
// See : http://stackoverflow.com/questions/24388346/how-to-access-automatic-mipmap-level-in-glsl-fragment-shader-texture
float minMagFactor(vec2 texCoordInTexels) {

	// Get texel derivatives in x and y
	vec2 A = dFdx(texCoordInTexels);
	vec2 B = dFdy(texCoordInTexels);

	float C = max(dot(A, A), dot(B, B));
	float minMagFactor = 0.5 * log2(C); // ie log2(sqrt(C))

	// Alternative method : http://michael-david-palmer.com/fisa/UDK-2010-07/Engine/Shaders/TextureDensityShader.usf
	// vec2 C = A.xy * B.yx;
	// float texelArea = abs(C.x - C.y);

	return minMagFactor;
}


// Return a colour based on the min/mag factor
vec3 minMagColour(vec2 texCoordInTexels) {

	// How is this texture scaled in screenspace compared to texelspace?
	float factor = minMagFactor(texCoordInTexels);
	float textureIsTooMinified = float(factor > log2(MINIFICATIONLIMIT));
	float textureIsTooMagnified = float(factor < log2(MAGNIFICATIONLIMIT));

	vec3 finalColour = mix(NORMALCOLOUR, TOOMINIFIEDCOLOUR, textureIsTooMinified);
	finalColour = mix(finalColour, TOOMAGNIFIEDCOLOUR, textureIsTooMagnified);

	return finalColour;
}


void main() {

	vec4 texColour = texture2D(u_texture, v_texCoord);
	texColour.rgb = greyscale(texColour.rgb);

	// Translate normalised UV space into texel space
	vec2 texCoordInTexels = v_texCoord * vec2(u_textureSize.xy);

	// Where are we on a fixed-size, texel-space checkerboard?
	float isOdd = float(isOddGridSquare(texCoordInTexels, CHECKERBOARDSQUARESIZEPX));

	// How is this texture scaled in screenspace compared to texelspace?
	vec3 densityColour = minMagColour(texCoordInTexels);

	// Blend between the source texture colour and our debug info
	vec4 colFinal = vec4(mix(texColour.rgb, densityColour, 0.85 * isOdd), texColour.a);
	
	gl_FragColor = colFinal;
}