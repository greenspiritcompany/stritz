#version 1.0;

varying vec2 v_texCoord;

sampler2D u_texture;
uniform vec4 u_textureSize;





mul ft0.xy, v0.xyxx, u_textureSize.xyxx
mov ft1.xy, ft0.xyxx
mov ft2.xy, ft0.xyxx



dp4 ft3.z, ft1.xxxy, ft1.xxxy
dp4 ft3.w, ft2.xxxx, ft2.xxxx
max ft3.y, ft3.zzxx, ft3.wwxx
log ft3.x, ft3.yxxx
mov ft1.y, fc1.yyxx
mul ft2.z, fc1.xxxx, ft3.xxxx
log ft1.x, ft1.yxxx
slt ft3.x, ft1.xxxx, ft2.zxxx
mov ft1.w, fc1.zzzz
mov ft4.x, ft3.xxxx
log ft1.z, ft1.wwwx
mov ft3.y, ft0.xxxx
mov ft3.z, ft0.yyyx
slt ft0.x, ft3.yxxx, fc2.xxxx
slt ft5.x, ft3.zxxx, fc2.xxxx
sub ft6.y, fc2.zzxx, ft4.xxxx
slt ft7.x, ft2.zxxx, ft1.zxxx
tex ft2.xyzw, v0.xyxx, fs0 <2d,wrap,linear>
mov ft1.x, ft0.xxxx
mul ft0.xyz, fc3.xyzx, ft6.yxxx
mul ft5.xyz, fc4.xyzx, ft4.xxxx
mov ft4.z, ft7.xxxx
mul ft7.y, fc5.yyxx, ft2.xxxx
mul ft7.z, fc5.xxxx, ft2.yyyx
mov ft3.x, ft1.xxxx
add ft1.xyz, ft0.xyzx, ft5.xyzx
sub ft6.z, fc2.zzzx, ft4.zzzx
add ft7.x, ft7.yxxx, ft7.zxxx
mul ft7.w, fc2.wwww, ft2.zzzz
mul ft4.w, fc2.yyyy, ft3.xxxx
mul ft0.xyz, ft1.xyzx, ft6.zxxx
mul ft1.xyz, fc6.xyzx, ft4.zxxx
add ft3.w, ft7.xxxx, ft7.wwww
sub ft6.x, fc2.zxxx, ft4.wxxx
add ft7.xyz, ft0.xyzx, ft1.xyzx
mul ft0.xyz, ft3.wwwx, ft6.xxxx
mul ft3.xyz, ft7.xyzx, ft4.wxxx
add ft7.xyz, ft0.xyzx, ft3.xyzx
mov ft7.w, ft2.wwww
mov oc.xyzw, ft7.xyzw

