#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;

uniform vec4 u_color4;
sampler2D u_texture;

tex ft0, v1.xyxx, fs0 <linear mipdisable repeat 2d>
mul ft0, fc1, ft0
mul oc, v0, ft0

{
 "info": "",
 "types": {
  "oc0": "vec4",
  "fc1": "vec4",
  "fs0": "sampler2D",
  "v1": "vec2",
  "v0": "vec4"
 },
 "consts": {
  "fc0": [
   0,
   0,
   0,
   0
  ]
 },
 "storage": {
  "oc0": "ir_var_out",
  "fc1": "ir_var_uniform",
  "fs0": "ir_var_uniform",
  "v1": "ir_var_in",
  "v0": "ir_var_in"
 },
 "agalasm": "",
 "varnames": {
  "v_texCoord": "v1",
  "unnamed_1": "ft0",
  "u_texture": "fs0",
  "gl_FragColor": "oc0",
  "v_color": "v0",
  "unnamed_0": "fc0",
  "u_color4": "fc1"
 }
}