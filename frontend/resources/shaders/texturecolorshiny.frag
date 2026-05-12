#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec4 v_pixelpos;

sampler2D u_texture;
uniform mat4 u_time;
uniform vec4 Settings;

// Initialize
mov ft0, fc0
mov ft1, fc0
mov ft2, fc0

// Logic
mul ft1.z, v1.x, fc0.x
mov ft1.y, Settings.z
add ft0.w, u_time.x, ft1.z
add ft1.x, ft1.y, Settings.w
mov ft0.z, ft0.w
sub ft0.y, ft0.z, Settings.z
min ft0.x, ft0.y, Settings.w
max ft1.w, ft0.x, fc0.y
div ft1.z, ft1.w, Settings.w
mul ft1.y, ft1.z, fc0.z
sin ft1.x, ft1.y
mul ft0.w, Settings.x, ft1.x
max ft0.z, ft0.w, fc0.y
pow ft0.y, ft0.z, Settings.y
tex ft1, v2, fs0 <2d, repeat, linear, mipdisable> 
mul ft0.x, ft0.y, ft1.w

// FIX FOR ERROR #3701: Do not use oc.xyz
mov ft2, fc0        // Use ft2 as a buffer
mov ft2.xyz, ft0.x  // Apply your shiny effect to the RGB of the buffer
mul oc, v0, ft2     // Final combined output (full write)