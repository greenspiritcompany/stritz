#version 1.0;

argument vec4 a_position;
argument vec4 a_normal;
argument vec4 a_texCoord;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_modelViewProjectionMatrix;

varying vec2 v_texCoord;
varying vec2 v_texCoord1;



m44 op.xyzw, a_position.xyzw, u_modelViewProjectionMatrix
mov v0, u_modelViewProjectionMatrix
mov v0.xy, a_normal.xyxx



mov vt0.xyz, u_modelViewMatrix.xyzx

mov vt0.xyz, u_modelViewMatrix.xyzx

mov vt0.xyz, u_modelViewMatrix.xyzx

mov vt0.y, vc8.zzxx
mov vt3.xyzw, vt0
m33 vt0.xyz, a_texCoord.xyzx, vt3
nrm vt3.xyz, vt0.xyzx
add vt0.xy, vt3.xyxx, vc8.xyxx
dp4 vt3.z, vt0.xxxy, vt0.xxxy
sqt vt3.y, vt3.zzxx
m33 vt3.x, vc9.xxxx, vt3.yxxx
sub vt0.x, vc9.yxxx, vt3.xxxx
mov v1, u_modelViewProjectionMatrix
mov v1.xy, vt0.xyxx

