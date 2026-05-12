#version 1.0;
varying vec4 v_color;
varying vec2 v_texCoord;
uniform vec4 u_color4;
sampler2D u_texture;

// Sample texture (clamp is usually better for alpha masks)
tex ft1, v1, fs0 <2d, clamp, linear, mipdisable>
mul ft0, u_color4, v0
// Use .wwww to explicitly smear the alpha to all channels for safe output
mul oc, ft0, ft1.wwww