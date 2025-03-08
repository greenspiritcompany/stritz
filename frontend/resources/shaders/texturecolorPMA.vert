#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;

uniform vec4 u_materialAmbient;

varying vec4 v_color;
varying vec2 v_texCoord;

m44 op.xyzw, a_position.xyzw, u_modelViewProjectionMatrix

mov vt0.w, vc4.xxxx
mov vt0.x, u_materialAmbient.wxxx
mov vt0.y, u_materialAmbient.wwxx
mov vt0.z, u_materialAmbient.wwwx

mul vt1.xyzw, a_color.xyzw, vt0.xyzw
mul v0.xyzw, vt1.xyzw, a_color.wxxx
mov v1, u_modelViewProjectionMatrix
mov v1.xy, a_texCoord.xyxx

