#version 1.0;

varying mediump vec4 v_color;
varying mediump vec2 v_texCoord;

uniform mediump float u_time;
uniform mediump sampler2D u_texture;

void main() {
	/* Some extra computation per pixel*/
	mediump vec3 temporaryValue0 = normalize(texture2D(u_texture, v_texCoord).rgb - vec3(0.5, 0.5, 0.5));
	float temporaryValue1 = clamp(dot(normalize(vec3(-0.4 + (v_color.x * 0.1), 0.3 + (v_color.y * 0.1), v_color.z)), temporaryValue0), 0.0, 1.0);
	float temporaryValue2 = clamp(dot(normalize(vec3(-0.2 - (v_color.x * 0.1), 0.4 - (v_color.y * 0.1), v_color.z)), temporaryValue0), 0.0, 1.0);
	float temporaryValue3 = clamp(dot(normalize(vec3(sin(u_time * 10.0), -0.3 * sin(u_time * 10.0), cos(u_time * 10.0))), temporaryValue0), 0.0, 1.0);
	
	gl_FragColor = v_color * vec4(1, 1, 1, texture2D(u_texture, v_texCoord).a);
}