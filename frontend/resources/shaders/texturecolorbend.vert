#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;

uniform vec4 u_materialAmbient;

varying vec4 v_color;
varying vec2 v_texCoord;

m44 vt0.xyzw, a_position.xyzw, u_modelViewProjectionMatrix
div vt1.x, vt0.xxxx, vc4.xxxx
mul vt2.y, vc4.yyxx, vt1.xxxx
mov op.xyzw, vt0.xyzw
mul vt2.x, vt2.yxxx, vt1.xxxx
mov op, u_modelViewProjectionMatrix
sub op.y, vt0.yyxx, vt2.xxxx
mov vt1.w, vc4.zzzz
mov vt1.x, u_materialAmbient.wxxx
mov vt1.y, u_materialAmbient.wwxx
mov vt1.z, u_materialAmbient.wwwx

mul v0.xyzw, a_color.xyzw, vt1.xyzw
mov v1, u_modelViewProjectionMatrix
mov v1.xy, a_texCoord.xyxx

