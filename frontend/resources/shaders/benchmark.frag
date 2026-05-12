#version 1.0;
varying vec4 v_color;
varying vec2 v_texCoord;
sampler2D u_texture;

// Initialize to prevent Error #3648
mov ft1, fc0 

mov ft1.xyz, fc0.xyz
tex ft0, v1, fs0 <2d, linear, mipdisable, repeat>
mov ft1.w, ft0.w
mul oc, v0, ft1