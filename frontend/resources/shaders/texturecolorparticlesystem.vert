#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;

varying vec4 v_color;
varying vec2 v_texCoord;

m44 op, a_position, u_modelViewProjectionMatrix

// Pass color directly
mov v0, a_color

// Pass UV correctly (removed matrix overwrite)
mov v1, a_texCoord