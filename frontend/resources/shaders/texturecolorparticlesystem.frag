#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;
sampler2D u_texture;

tex ft0.xyzw, v1.xyxx, fs0 <2d,wrap,linear>
mul oc.xyzw, v0.xyzw, ft0.xyzw

