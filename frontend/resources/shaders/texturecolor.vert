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

{
 "info": "",
 "types": {
  "vc1": "mat4",
  "v1": "vec2",
  "va0": "vec4",
  "op0": "vec4",
  "v0": "vec4",
  "vc5": "vec4",
  "va1": "vec4",
  "va2": "vec2"
 },
 "consts": {
  "vc0": [
   1,
   0,
   0,
   0
  ]
 },
 "storage": {
  "vc1": "ir_var_uniform",
  "v1": "ir_var_out",
  "va0": "ir_var_in",
  "op0": "ir_var_out",
  "v0": "ir_var_out",
  "vc5": "ir_var_uniform",
  "va1": "ir_var_in",
  "va2": "ir_var_in"
 },
 "agalasm": "",
 "varnames": {
  "a_position": "va0",
  "unnamed_1": "vt0",
  "a_texCoord": "va2",
  "gl_Position": "op0",
  "v_color": "v0",
  "unnamed_0": "vc0",
  "a_color": "va1",
  "u_materialAmbient": "vc5",
  "u_modelViewProjectionMatrix": "vc1",
  "v_texCoord": "v1"
 }
}