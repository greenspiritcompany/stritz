#version 1.0;

varying lowp vec4 v_color;
varying mediump vec2 v_texCoord;
varying mediump vec2 v_weight;

uniform sampler2D u_texture;

void main() {
	lowp float sdf = texture2D(u_texture, v_texCoord.xy).a;
	lowp float a = smoothstep(v_weight.x, v_weight.y, sdf);
	gl_FragColor = v_color;
	gl_FragColor.a = gl_FragColor.a * a;
}