#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;

sampler2D u_texture;

mov ft0.xyz, fc0.xyzx
tex ft1.xyzw, v1.xyxx, fs0 <2d,wrap,linear>
mov ft0.w, ft1.wwww

mul oc.xyzw, v0.xyzw, ft0.xyzw