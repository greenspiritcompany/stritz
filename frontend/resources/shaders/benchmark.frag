#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;

sampler2D u_texture;

mov ft1.xyz, fc0.xyzx
tex ft0, v1.xyxx, fs0 <linear mipnone repeat 2d>
mov ft1.w, ft0.w
mul oc, v0, ft1
