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

// Build 3.0 from fc0.x = 1.0 (one constant per instruction; AGAL #3625)
mov ft3.x, fc0.x                       // 1.0
add ft3.y, ft3.x, fc0.x                // 2.0
add ft3.z, ft3.y, fc0.x                // 3.0

// Sample the candy texture
tex ft1, v2, fs0 <2d, repeat, linear, mipdisable>

// phase = u_time + v_texCoord.x * 3.0
mul ft0.x, v2.x, ft3.z                 // texCoord.x * 3
add ft0.y, ft0.x, u_time.x             // + time

// sin is naturally periodic -> we don't need mod() at all
sin ft0.z, ft0.y                       // sin(phase) in [-1, 1]
max ft0.z, ft0.z, fc0.y                // keep only positive half: [0, 1]

// Mask the shine by the texture's alpha (so shine only appears on the candy)
mul ft0.x, ft0.z, ft1.w                // shine * tex.alpha

// Output: rgb = shine, alpha = texture alpha
mov ft2.xyz, ft0.x
mov ft2.w,   ft1.w
mul oc, v0, ft2
