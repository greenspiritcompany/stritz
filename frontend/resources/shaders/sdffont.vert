#version 1.0;

attribute highp vec4 a_position;
attribute lowp vec4 a_color;
attribute mediump vec2 a_texCoord;
attribute lowp vec3 a_textScale;
uniform highp mat4 u_modelViewMatrix;
uniform highp mat4 u_modelViewProjectionMatrix;

uniform lowp vec4 u_color4;
uniform lowp vec4 u_materialAmbient;

varying lowp vec4 v_color;
varying mediump vec2 v_texCoord;
varying mediump vec2 v_weight;

void main() {
	gl_Position = u_modelViewProjectionMatrix * a_position;
	v_color = a_color * u_color4 * vec4(u_materialAmbient.a, u_materialAmbient.a, u_materialAmbient.a, 1.0);
	v_texCoord = a_texCoord;
	
	mat3 transform = mat3(u_modelViewMatrix[0].xyz,
							u_modelViewMatrix[1].xyz,
							u_modelViewMatrix[2].xyz);
	vec3 another = transform * a_textScale;
	
	v_weight = vec2(0.5 - clamp(exp(-another.x) * 0.5, 0.0, 0.5), 0.5 + clamp(exp(-another.y) * 0.5, 0.0, 0.5));
}