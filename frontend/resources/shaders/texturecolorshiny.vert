#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;

uniform vec4 u_materialAmbient;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec4 v_pixelpos;

// Clip-space position
m44 vt0.xyzw, a_position.xyzw, u_modelViewProjectionMatrix
mov op.xyzw, vt0.xyzw

// v_color: rgb = a_color.rgb * u_materialAmbient.a, alpha = a_color.a
// The old code did `mov vt1.w, vc4.xxxx` to get the literal 1.0 for the
// alpha multiplier, but vc4 is never set by the engine -> v0.w was always 0
// -> output was always fully transparent. Fix: just copy a_color.w directly.
mul v0.xyz, a_color.xyz, u_materialAmbient.wwww
mov v0.w, a_color.w

// v_texCoord (we only use .xy in the frag shader)
mov v2, u_modelViewProjectionMatrix
mov v2.xy, a_texCoord.xyxx

// v_pixelpos
mov v1.xyzw, vt0.xyzw
