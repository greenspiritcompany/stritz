#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec4 v_pixelpos;

sampler2D u_texture;
uniform mat4 u_time;

// Initialize temps
mov ft0, fc0
mov ft1, fc0
mov ft2, fc0
mov ft3, fc0

// Build small constants from fc0.x = 1.0 (one constant per instruction)
mov ft3.x, fc0.x                       // 1.0
add ft3.y, ft3.x, fc0.x                // 2.0
rcp ft3.z, ft3.y                       // 0.5
add ft3.w, ft3.y, fc0.x                // 3.0

// Sample texture (we mainly want .a, like the GLSL .aaaa swizzle)
tex ft1, v2, fs0 <2d, wrap, linear>

// Wave 1:  clamp(0.5 + sin((pixelpos.x + 1) * 3 + time * 3), 0, 1)
add ft0.x, v1.x, fc0.x                 // pixelpos.x + 1
mul ft0.x, ft0.x, ft3.w                // * 3
mul ft0.y, ft3.w, u_time.x             // time * 3
add ft0.z, ft0.x, ft0.y                // combined phase
sin ft0.w, ft0.z
add ft0.w, ft0.w, ft3.z                // + 0.5
max ft0.w, ft0.w, fc0.y                // clamp >= 0
min ft0.w, ft0.w, fc0.x                // clamp <= 1

// Wave 2 gate: step(0, sin(pixelpos.x + time))
add ft0.x, v1.x, u_time.x
sin ft0.y, ft0.x
sge ft0.z, ft0.y, fc0.y                // 1 if sin >= 0 else 0

// Combined intensity in [0, 1]
mul ft0.w, ft0.w, ft0.z

// rgb = tex.a + intensity * 0.5 * tex.a   ; alpha = tex.a
mul ft0.x, ft0.w, ft3.z                // intensity * 0.5
mul ft0.x, ft0.x, ft1.w                // * texture.alpha
add ft2.xyz, ft1.w, ft0.x              // tex.a + shine
mov ft2.w,   ft1.w
mul oc, v0, ft2
