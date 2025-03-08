/* note: currently not working */

#version 1.0;

precision highp float;

varying vec2 v_texCoord;

uniform sampler2D u_texture;
uniform vec4 u_color4;
uniform ivec2 u_textureSize;


bool isOddGridSquare(vec2 coord, float squareSize) {

	bool isOddH = abs(mod(coord.x, 2.0 * squareSize)) < squareSize;
	bool isOddV = abs(mod(coord.y, 2.0 * squareSize)) < squareSize;
	bool isOdd = (isOddH == isOddV);

	return isOdd;
}


vec3 greyscale(vec3 colour) {

	float grey = (0.3 * colour.r) + (0.59 * colour.g) + (0.11 * colour.b);
	return vec3(grey);
}

float minMagFactor(vec2 texCoordInTexels) {

	vec2 A = dFdx(texCoordInTexels);
	vec2 B = dFdy(texCoordInTexels);

	float C = max(dot(A, A), dot(B, B));
	float minMagFactor = 0.5 * log2(C);

	return minMagFactor;
}


vec3 minMagColour(vec2 texCoordInTexels) {

	float factor = minMagFactor(texCoordInTexels);
	float textureIsTooMinified = float(factor > log2(8.0 / 6.0));
	float textureIsTooMagnified = float(factor < log2(8.0 / 12.0));

	vec3 finalColour = mix(vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0), textureIsTooMinified);
	finalColour = mix(finalColour, vec3(1.0, 0.0, 0.0), textureIsTooMagnified);

	return finalColour;
}


void main() {

	vec4 texColour = texture2D(u_texture, v_texCoord);
	texColour.rgb = greyscale(texColour.rgb);

	vec2 texCoordInTexels = v_texCoord * vec2(u_textureSize.xy);

	float isOdd = float(isOddGridSquare(texCoordInTexels, 16.0));

	vec3 densityColour = minMagColour(texCoordInTexels);

	vec4 colFinal = vec4(mix(texColour.rgb, densityColour, 0.85 * isOdd), texColour.a);
	
	gl_FragColor = colFinal;
}