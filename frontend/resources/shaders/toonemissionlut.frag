#version 1.0;

varying vec2 v_texCoord;
varying vec2 v_texCoord1;

sampler2D u_texture;
sampler2D u_texture1;
uniform vec4 u_color4;


tex ft0.xyzw, v1.xyxx, fs0 <2d,wrap,linear>
tex ft1.xyzw, v0.xyxx, fs1 <2d,wrap,linear>
mul ft2.xyz, ft0.xyzx, u_color4.xyzx
sub ft0.x, fc1.xxxx, ft1.wxxx
mul ft3.xyz, ft2.xyzx, ft1.wxxx
mov oc.xyzw, ft1.xyzw
add ft2.xyz, ft0.xxxx, ft3.xyzx
mov oc, u_color4
mul oc.xyz, ft1.xyzx, ft2.xyzx
mov oc.w, u_color4.wwww

