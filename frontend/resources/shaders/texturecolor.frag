#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;

uniform vec4 u_color4;
sampler2D u_texture;

tex ft0, v1.xyxx, fs0 <linear mipdisable repeat 2d>
mul ft0, u_color4, ft0
mul oc, v0, ft0
