#version 1.0;
varying vec4 v_color;
varying vec2 v_texCoord;
sampler2D u_texture;

tex ft0, v1, fs0 <2d, wrap, linear, mipdisable>
mul oc, v0, ft0