#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;

uniform vec4 u_color4;
sampler2D u_texture;

mul ft0.xyzw, u_color4.xyzw, v0.xyzw
tex ft1.xyzw, v1.xyxx, fs0 <2d,wrap,linear>
mul oc.xyzw, ft0.xyzw, ft1.wxxx

