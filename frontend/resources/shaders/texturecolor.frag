#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;

uniform vec4 u_color4;
sampler2D u_texture;

// 1. Sample the texture at the UV coordinates provided by v1
// 'fs0' refers to the first sampler (u_texture)
tex ft0, v1, fs0 <2d, linear, mipdisable, repeat>

// 2. Apply the uniform color (u_color4)
mul ft0, ft0, u_color4

// 3. Apply the vertex color/ambient (v0) and output to oc (output color)
mul oc, ft0, v0