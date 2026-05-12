#version 1.0;
varying vec4 v_color;
varying vec2 v_texCoord;
sampler2D u_texture;

// Initialize to prevent Error #3648
mov ft2, fc0 

tex ft0, v1, fs0 <2d, wrap, linear>
dp3 ft1.x, ft0.xyz, fc0.xyz // Get luminance
mov ft2.xyz, ft1.xxx        // Assign luminance to RGB
mov ft2.w, ft0.w            // Keep original alpha
mul oc, v0, ft2