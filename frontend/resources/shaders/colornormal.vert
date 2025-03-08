#version 1.0;

argument vec4 a_position;
argument vec4 a_normal;
argument vec4 a_color;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_modelViewProjectionMatrix;

varying vec4 v_color;
varying vec3 v_normal;

m44 op.xyzw, a_position.xyzw, u_modelViewProjectionMatrix
mov v0.xyzw, a_color.xyzw


mov vt0.xyz, u_modelViewMatrix.xyzx

mov vt0.xyz, u_modelViewMatrix.xyzx

mov vt0.xyz, u_modelViewMatrix.xyzx

mov v1, u_modelViewProjectionMatrix
mul v1.xyz, vt0, a_normal.xyzx

