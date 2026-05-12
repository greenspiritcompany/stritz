#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;

uniform vec4 u_color4;
uniform vec4 u_materialAmbient;

varying vec4 v_color; // Maps to v0
varying vec2 v_texCoord; // Maps to v1

m44 op, a_position, u_modelViewProjectionMatrix

// Fix: Simplify color blending, avoiding piecemeal register writes
mul vt1, a_color, u_color4
mul v0, vt1, u_materialAmbient

// Correctly pass UV coordinates
mov v1, a_texCoord