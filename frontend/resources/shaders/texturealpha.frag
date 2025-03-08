#version 1.0;

varying lowp vec4 v_color;
varying lowp vec2 v_texCoord;

uniform mediump vec4 u_color4;
uniform sampler2D u_texture;

void main() {
	gl_FragColor = u_color4 * v_color * texture2D(u_texture, v_texCoord).a;
}