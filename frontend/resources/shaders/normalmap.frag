#version 1.0;

varying vec2 v_texCoord0;
varying vec3 v_L2dir;

//varying mat3 v_normalSpaceTransform;
varying vec3 v_normalSpaceTransformX;
varying vec3 v_normalSpaceTransformY;
varying vec3 v_normalSpaceTransformZ;

sampler2D u_texture; /* diffuse */
sampler2D u_texture1; /* normal map */

uniform vec4 u_materialAmbient;
uniform vec4 u_materialDiffuse;
uniform vec4 u_materialSpecular;
uniform vec4 u_materialShininess;
uniform vec4 u_color4;


tex ft0.xyzw, v4.xyxx, fs1 <2d,wrap,linear>
sub ft3.xyz, ft0.xyzx, fc0.xyzx
dp3 ft4.x, ft3.xyzx, v1.xyzx
dp3 ft4.y, ft3.xyzx, v2.xyzx
dp3 ft4.z, ft3.xyzx, v3.xyzx
nrm ft0.xyz, ft4.xyzx
dp3 ft4.y, v0.xxyy, ft0.xxyy
min ft4.x, ft4.yxxx, fc1.xxxx
max ft0.y, ft4.xxxx, fc0.wwxx
mul ft3.xyz, u_materialDiffuse.xyzx, ft0.yyyy
pow ft4.z, ft0.yyyx, u_materialShininess.xxxx
tex ft0.xyzw, v4.xyxx, fs0 <2d,wrap,linear>
add ft5.xyz, ft3.xyzx, u_materialAmbient.xyzx
mul ft3.xyz, u_materialSpecular.xyzx, ft4.zxxx
mul ft4.xyz, ft5.xyzx, ft0.xyzx
mul ft5.xyz, ft3.xyzx, ft0.wxxx
add ft3.xyz, ft4.xyzx, ft5.xyzx
mul ft3.xyz, ft3.xyzx, u_materialAmbient.wwwx
mov ft3.w, ft0.wwww
mul oc, ft3, u_color4
