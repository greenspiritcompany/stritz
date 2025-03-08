#version 1.0;

argument vec4 a_position;
argument vec4 a_normal;
argument vec4 a_texCoord;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_modelViewProjectionMatrix;

varying vec3 v_normal;
varying vec2 v_texCoord;



m44 op.xyzw, a_position.xyzw, u_modelViewProjectionMatrix
mov v1, u_modelViewProjectionMatrix
mov v1.xy, a_normal.xyxx



mov vt0.xyz, u_modelViewMatrix.xyzx

mov vt0.xyz, u_modelViewMatrix.xyzx

mov vt0.xyz, u_modelViewMatrix.xyzx

mov vt0.xyzw, vt0
mul vt0.xyz, vt0, a_texCoord.xyzx
mov v0, u_modelViewProjectionMatrix
nrm v0.xyz, vt0.xyzx

