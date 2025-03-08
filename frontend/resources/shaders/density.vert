/* note: currently not working */

#version 1.0;

argument vec4 a_position;
argument vec4 a_texCoord;

uniform mat4 u_modelViewProjectionMatrix;

varying vec2 v_texCoord;

mov v0, u_modelViewProjectionMatrix
mov v0.xy, a_texCoord.xyxx

m44 op.xyzw, a_position.xyzw, u_modelViewProjectionMatrix

