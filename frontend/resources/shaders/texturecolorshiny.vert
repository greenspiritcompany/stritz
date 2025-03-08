#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;

uniform vec4 u_materialAmbient;

varying vec4 v_color;
varying vec2 v_texCoord;
varying vec4 v_pixelpos;

m44 vt0.xyzw, a_position.xyzw, u_modelViewProjectionMatrix
mov op.xyzw, vt0.xyzw

mov vt1.w, vc4.xxxx
mov vt1.x, u_materialAmbient.wxxx
mov vt1.y, u_materialAmbient.wwxx
mov vt1.z, u_materialAmbient.wwwx

mul v0.xyzw, a_color.xyzw, vt1.xyzw
mov v2, u_modelViewProjectionMatrix
mov v2.xy, a_texCoord.xyxx
mov v1.xyzw, vt0.xyzw

