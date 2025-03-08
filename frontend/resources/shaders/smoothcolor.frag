#version 1.0;

varying vec3 v_normal;

uniform vec4 u_materialAmbient;
uniform vec4 u_materialDiffuse;
uniform vec4 u_materialSpecular;
uniform vec4 u_materialEmission;
uniform mat4 u_materialShininess;
uniform vec4 u_color4;

nrm ft0.xyz, v0.xyzx
dp3 ft1.y, fc0.xxyy, ft0.xxyy
min ft1.x, ft1.yxxx, fc0.zxxx
max ft0.y, ft1.x, fc0.x
mul ft1.xyz, u_materialDiffuse.xyzx, ft0.yxxx
pow ft1.z, ft0.yyyx, u_materialShininess.x
add ft0.xyz, u_materialAmbient.xyzx, ft1.xyzx
mul ft1.xyz, u_materialSpecular.xyzx, ft1.zxxx
mov oc, u_color4
add ft1.xyz, ft0.xyzx, ft1.xyzx
mov oc, fc0
mul oc.xyz, u_color4.xyzx, ft1.xyzx