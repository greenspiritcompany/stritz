#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec4 v_pixelpos;

sampler2D u_texture;
uniform mat4 u_time;

// Initialize temp registers to avoid Error #3648
mov ft0, fc0
mov ft1, fc0
mov ft2, fc0
mov ft3, fc0 

// Original Logic
mov ft0.x, u_time.x
mov ft1.y, u_time.x
add ft2.y, fc1.w, v1.x
mov ft2.w, ft0.x
mov ft1.x, ft1.y
mul ft2.x, ft2.y, fc1.z
mul ft2.z, ft2.w, fc1.z
add ft0.w, v1.x, ft1.x
add ft1.w, ft2.x, ft2.z
sin ft0.z, ft0.w
sin ft1.z, ft1.w
sge ft2.x, ft0.z, fc1.y
add ft1.y, fc2.x, ft1.z
mov ft0.y, ft2.x
mul ft1.x, ft1.y, ft0.y
min ft2.w, ft1.x, fc1.w
max ft2.z, ft2.w, fc2.y
tex ft1, v2, fs0 <2d, wrap, linear> 

// FIX FOR ERROR #3701: Use ft3 instead of oc for intermediate math
mul ft2.y, ft2.z, fc2.x
mov ft3, ft1.w // Store alpha in ft3
mul ft2.x, ft2.y, ft1.w
mov ft3, u_time
add ft3.xyz, ft1.w, ft2.x // Perform partial write on ft3, not oc

// Final Output (Must be full xyzw)
mul oc, v0, ft3