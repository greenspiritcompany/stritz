#version 1.0;

attribute highp vec4 a_position;
attribute highp vec2 a_texCoord;

uniform highp mat4 u_modelViewProjectionMatrix;

varying highp vec2 v_texCoord;

void main() {
	v_texCoord = a_texCoord;
	gl_Position = u_modelViewProjectionMatrix * a_position;
}