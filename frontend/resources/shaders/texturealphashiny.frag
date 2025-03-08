#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec4 v_pixelpos;

sampler2D u_texture;

uniform mat4 u_time;

mov ft0.x, u_time.xxxx
mov ft1.y, u_time.xxxx
add ft2.y, fc1.wwxx, v1.xxxx
mov ft2.w, ft0.xxxx
mov ft1.x, ft1.yxxx
mul ft2.x, ft2.yxxx, fc1.zxxx
mul ft2.z, ft2.wwwx, fc1.zzzx
add ft0.w, v1.xxxx, ft1.xxxx
add ft1.w, ft2.xxxx, ft2.zzzz
sin ft0.z, ft0.wwwx
sin ft1.z, ft1.wwwx
sge ft2.x, ft0.zxxx, fc1.yxxx
add ft1.y, fc2.xxxx, ft1.zzxx
mov ft0.y, ft2.xxxx
mul ft1.x, ft1.yxxx, ft0.yxxx
min ft2.w, ft1.xxxx, fc1.wwww
max ft2.z, ft2.wwwx, fc2.yyyx
tex ft1.xyzw, v2.xyxx, fs0 <2d,wrap,linear>
mul ft2.y, ft2.zzxx, fc2.xxxx
mov oc.xyzw, ft1.wwww
mul ft2.x, ft2.yxxx, ft1.wxxx
mov oc, u_time
add oc.xyz, ft1.wwwx, ft2.xxxx
mul oc.xyzw, v0.xyzw, oc.xyzw

