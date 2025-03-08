#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewProjectionMatrix;

uniform vec4 u_materialAmbient;

varying vec4 v_color;
varying vec2 v_texCoord;

m44 op, a_position, u_modelViewProjectionMatrix
mov vt0.w, vc0.x
mov vt0.x, u_materialAmbient.wxxx
mov vt0.y, u_materialAmbient.wwxx
mov vt0.z, u_materialAmbient.wwwx
mul v0, a_color, vt0
mov v1, u_modelViewProjectionMatrix
mov v1.xy, a_texCoord.xyxx
