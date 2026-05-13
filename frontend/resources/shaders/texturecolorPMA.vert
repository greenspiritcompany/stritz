#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;
uniform vec4 u_materialAmbient;

varying vec4 v_color; // Maps to v0
varying vec2 v_texCoord; // Maps to v1

m44 op, a_position, u_modelViewProjectionMatrix

// Fix: Direct multiplication avoids "Temporary register not written to" errors
mul vt1, a_color, u_materialAmbient

// Pre-multiply alpha (PMA)
mul v0, vt1, vt1.wwww

// Correctly pass UV coordinates (removed the matrix corruption)
mov v1, a_texCoord