#version 1.0;
argument vec4 a_position;
argument vec4 a_normal;
uniform mat4 u_modelViewProjectionMatrix;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_projectionMatrix;

// Initialize v0
mov v0, vc0.xxxx

// Outline expansion logic
mov vt0.w, vc0.x
mov vt0.xyz, a_normal.xyz
m44 vt1, vt0, u_modelViewMatrix
nrm vt1.xyz, vt1.xyz
mov vt1.w, vc0.y

m44 vt0, a_position, u_modelViewMatrix
mul vt2, vt1, u_modelViewProjectionMatrix.y // expansion amount
add vt0, vt0, vt2
m44 op, vt0, u_projectionMatrix