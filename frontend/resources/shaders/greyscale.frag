#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;

sampler2D u_texture;


tex ft0.xyzw, v1.xyxx, fs0 <2d,wrap,linear>
dp3 ft1.x, ft0.xyyy, fc0.xyyy
mov ft2.x, ft1.xxxx
mov ft2.y, ft1.xxxx
mov ft2.z, ft1.xxxx
mov ft2.w, ft0.wwww

mul oc.xyzw, v0.xyzw, ft2.xyzw

