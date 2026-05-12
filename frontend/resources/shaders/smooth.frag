#version 1.0;
varying vec4 v_color;    // v0 (Now vertex color)
varying vec2 v_texCoord; // v1 (UV Map)
varying vec4 v_params;   // v2 (Smoothing)

sampler2D u_texture;

// 1. Reset
mov ft0, fc0
mov ft1, fc0

// 2. Sample texture
tex ft0, v1, fs0 <2d, wrap, linear>

// 3. Smooth the edges using the alpha channel
sub ft1.z, ft0.w, v2.x
sub ft1.w, v2.y, v2.x
div ft1.y, ft1.z, ft1.w
min ft1.x, ft1.y, fc0.x
max ft1.w, ft1.x, fc0.y

// 4. Final Output
// Combine texture RGB with vertex color RGB
mul ft0.xyz, ft0.xyz, v0.xyz
// Multiply original alpha * calculated smoothness * vertex alpha
mul ft0.w, ft0.w, ft1.w
mul ft0.w, ft0.w, v0.w

mov oc, ft0