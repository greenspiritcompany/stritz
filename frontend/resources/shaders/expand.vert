#version 1.0;

argument vec4 a_position;
argument vec4 a_normal;

uniform mat4 u_modelViewProjectionMatrix;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_projectionMatrix;

mov vt0.w, u_modelViewProjectionMatrix.xxxx
mov vt0.xyz, a_normal.xyzx



m44 vt1.xyzw, vt0.xyzw, u_modelViewMatrix
nrm vt0.xyzw, vt1.xyzw
m44 vt1.xyzw, a_position.xyzw, u_modelViewMatrix
mul vt2.xyzw, vt0.xyzw, u_modelViewProjectionMatrix.yxxx
add vt0.xyzw, vt1.xyzw, vt2.xyzw
m44 op.xyzw, vt0.xyzw, u_projectionMatrix

