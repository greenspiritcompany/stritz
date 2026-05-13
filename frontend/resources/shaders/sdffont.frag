#version 1.0;
varying vec4 v_color;
varying vec2 v_texCoord;
varying vec2 v_weight;
sampler2D u_texture;

// 1. Fully initialize registers (Fixes Error #3648)
mov ft0, fc0
mov ft1, fc0
mov ft2, fc0
mov ft3, fc0 

tex ft0, v1, fs0 <2d, wrap, linear>
sub ft1.z, ft0.w, v2.x
sub ft1.w, v2.y, v2.x
rcp ft2.x, ft1.w
mul ft1.y, ft1.z, ft2.x

// Cleaned up uninitialized swizzle reads
min ft1.x, ft1.y, fc0.x
max ft0.x, ft1.x, fc0.y
mul ft1.z, fc0.z, ft0.x
sub ft1.y, fc0.w, ft1.z
mul ft1.x, ft0.x, ft1.y
mul ft2.w, ft0.x, ft1.x

mov ft2.z, ft2.w

// 2. Fix Error #3701 (No partial oc writes)
// Store base color in ft3, apply modified alpha, then output
mov ft3, fc0 
mul ft3.w, v0.w, ft2.z
mov oc, ft3