varying vec4 v_color;
varying vec2 v_texCoord;

uniform sampler2D u_texture;

void main() {
float pixelCount = 32.0; // todo: depend on texture size and send as uniform
	float pixelWidth = 1.0/float(pixelCount);

   float x = floor(v_texCoord.x/pixelWidth)*pixelWidth + pixelWidth/2.0;
   float y = floor(v_texCoord.y/pixelWidth)*pixelWidth + pixelWidth/2.0;

   gl_FragColor = texture2D(u_texture, vec2(x, y));
   
	//gl_FragColor = v_color * texture2D(u_texture, v_texCoord);
}