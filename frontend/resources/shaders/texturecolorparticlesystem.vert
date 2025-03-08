#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;

varying vec4 v_color;
varying vec2 v_texCoord;

m44 op.xyzw, a_position.xyzw, u_modelViewProjectionMatrix
mov v0.xyzw, a_color.xyzw
mov v1, u_modelViewProjectionMatrix
mov v1.xy, a_texCoord.xyxx

