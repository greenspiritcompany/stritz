#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec4 v_pixelpos;

sampler2D u_texture;

uniform mat4 u_time;

uniform vec4 Settings;

mul ft1.z, v1.x, fc0.x
mov ft1.y, Settings.zzxx
add ft0.w, u_time.x, ft1.z
add ft1.x, ft1.yxxx, Settings.wxxx
mov ft0.z, ft0.wwwx
sub ft0.y, ft0.zzxx, Settings.zzxx
min ft0.x, ft0.yxxx, Settings.wxxx
max ft1.w, ft0.x, fc0.y
div ft1.z, ft1.wwwx, Settings.wwwx
mul ft1.y, ft1.zzxx, fc0.zzxx
sin ft1.x, ft1.yxxx
mul ft0.w, Settings.x, ft1.x
max ft0.z, ft0.wwwx, fc0.yyyx
pow ft0.y, ft0.zzxx, Settings.yyxx
tex ft1, v1.xyxx, fs0 <linear mipnone repeat 2d>
mul ft0.x, ft0.yxxx, ft1.wxxx
mov oc, ft1
mov ft1.xyz, ft0.x
mov oc, fc0
mov oc.xyz, ft1.xyzx
mul oc, v0, oc
