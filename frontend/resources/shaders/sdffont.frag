#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec2 v_weight;

sampler2D u_texture;

tex ft0.xyzw, v1.xyxx, fs0 <2d,wrap,linear>
sub ft1.z, ft0.wwwx, v2.xxxx
sub ft1.w, v2.yyyy, v2.xxxx
div ft1.y, ft1.zzxx, ft1.wwxx
min ft1.x, ft1.yxxx, fc0.xxxx
max ft0.x, ft1.xxxx, fc0.yxxx
mul ft1.z, fc0.zzzx, ft0.xxxx
sub ft1.y, fc0.wwxx, ft1.zzxx
mul ft1.x, ft0.xxxx, ft1.yxxx
mul ft2.w, ft0.xxxx, ft1.xxxx
mov oc.xyzw, v0.xyzw
mov ft2.z, ft2.wwwx
mov oc, fc0
mul oc.w, v0.wwww, ft2.zzzz

