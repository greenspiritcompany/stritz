#version 1.0;

attribute vec4 a_position;
attribute vec3 a_normal;
attribute vec4 a_color;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_modelViewProjectionMatrix;

varying vec4 v_color;
varying vec3 v_normal;


void main() {
	gl_Position = u_modelViewProjectionMatrix * a_position;
	v_color = a_color;
	
	mat3 normalTransform = mat3(u_modelViewMatrix[0].xyz,
								u_modelViewMatrix[1].xyz,
								u_modelViewMatrix[2].xyz);
	
	v_normal = normalTransform * a_normal;
}