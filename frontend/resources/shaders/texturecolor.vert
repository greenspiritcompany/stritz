#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;
uniform vec4 u_materialAmbient;

varying vec4 v_color;
varying vec2 v_texCoord;

// 1. Project the position to clip space
m44 op, a_position, u_modelViewProjectionMatrix

// 2. Pass the vertex color to varying v0
// We multiply by material ambient (default 1,1,1,1) to allow for brightness control
mul v0, a_color, u_materialAmbient

// 3. Pass the UV coordinates to varying v1
// Removed the 'mov v1, u_modelViewProjectionMatrix' which was corrupting the UV data
mov v1, a_texCoord