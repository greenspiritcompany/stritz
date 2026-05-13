#version 1.0;

argument vec4 a_position;
argument vec4 a_texCoord;
argument vec4 a_normal;

uniform mat4 u_modelViewProjectionMatrix;
uniform mat4 u_modelViewMatrix;

uniform mat4 u_time;
varying vec2 v_texCoord0;
varying vec3 v_L2dir;
varying vec3 v_normalSpaceTransformX;
varying vec3 v_normalSpaceTransformY;
varying vec3 v_normalSpaceTransformZ;

m44 vt0.xyzw, va0.xyzw, u_modelViewProjectionMatrix
mov op.xyzw, vt0.xyzw

mov vt1.y, u_time.xxxx
sin vt1.x, vt1.yyyy
add vt2.x, vt0.xxxx, vt1.xxxx
mov vt1.w, u_time.xxxx
cos vt1.z, vt1.wwwx
add vt2.y, vt0.yyxx, vt1.zzxx
mov v4, u_modelViewProjectionMatrix
mov v4.xy, a_texCoord.xyxx

mov vt0.x, u_modelViewMatrix.xxxx
abs vt1.x, vt0.xxxx
mov vt0.y, u_modelViewMatrix.yyxx
abs vt1.y, vt0.yyxx
mov vt0.z, u_modelViewMatrix.zzzx
abs vt1.z, vt0.zzzx


nrm vt1.xyz, va2.xyzx
crs vt0.xyz, vt1.xyzx, vc9.xyzx
crs vt3.xyz, vt0.xyzx, vt1.xyzx
mov v1, u_modelViewProjectionMatrix
mov v1.xyz, vt3.xyzx

mov v2, u_modelViewProjectionMatrix
mov v2.xyz, vt0.xyzx

mov v3, u_modelViewProjectionMatrix
mov v3.xyz, vt1.xyzx
mov vt3.z, vc10.yyyx
mul vt0.xy, vt2.xyxx, vc10.xxxx
sub vt3.x, vc10.zxxx, vt0.xxxx
sub vt3.y, vc10.wwxx, vt0.yyxx
nrm vt2.xyz, vt3.xyzx
mov v0, u_modelViewProjectionMatrix
mov v0.xyz, vt2.xyzx

