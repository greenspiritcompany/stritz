#version 1.0;

varying vec2 v_texCoord;
varying vec2 v_texCoord1;

sampler2D u_texture;
sampler2D u_texture1;
uniform vec4 u_color4;


tex ft0.xyzw, v1.xyxx, fs0 <2d,wrap,linear>
tex ft1.xyzw, v0.xyxx, fs1 <2d,wrap,linear>
mul ft2.xyzw, ft0.xyzw, u_color4.xyzw
mul oc.xyzw, ft1.xyzw, ft2.xyzw

