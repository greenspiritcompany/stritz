#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
argument vec4 a_textScale;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_modelViewProjectionMatrix;

uniform vec4 u_color4;
uniform vec4 u_materialAmbient;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec2 v_weight;

m44 op.xyzw, a_position.xyzw, u_modelViewProjectionMatrix

mov vt0.w, vc4.xxxx
mov vt0.x, u_materialAmbient.wxxx
mov vt0.y, u_materialAmbient.wwxx
mov vt0.z, u_materialAmbient.wwwx

mul vt1.xyzw, a_color.xyzw, u_color4.xyzw
mul v0.xyzw, vt1.xyzw, vt0.xyzw
mov v1, u_modelViewProjectionMatrix
mov v1.xy, a_texCoord.xyxx

mov vt1.xyz, u_modelViewMatrix.xyzx

mov vt1.xyz, u_modelViewMatrix.xyzx

mov vt1.xyz, u_modelViewMatrix.xyzx

mul vt1.xyz, vt0, a_textScale.xyzx
neg vt0.x, vt1.xxxx
mov vt2.w, vt0.xxxx
mul vt2.z, vt2.wwwx, vc4.yyyx
min vt2.y, vt2.zzxx, vc4.yyxx
max vt2.x, vt2.yxxx, vc4.zxxx
sub vt3.x, vc4.yxxx, vt2.xxxx
neg vt2.y, vt1.yyxx
mov vt2.x, vt2.yxxx
mul vt0.w, vt2.xxxx, vc4.yyyy
min vt0.z, vt0.wwwx, vc4.yyyx
max vt0.y, vt0.zzxx, vc4.zzxx
add vt3.y, vc4.yyxx, vt0.yyxx
mov v2, u_modelViewProjectionMatrix
mov v2.xy, vt3.xyxx

