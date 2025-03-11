#version 1.0;

varying vec2 v_texCoord0;
varying vec3 v_L2dir;
         
//varying mat3 v_normalSpaceTransform;
varying vec3 v_normalSpaceTransformX;
varying vec3 v_normalSpaceTransformY;
varying vec3 v_normalSpaceTransformZ;
         
sampler2D u_texture;
sampler2D u_texture1;
         
uniform vec4 u_materialAmbient;
uniform vec4 u_materialDiffuse;
uniform vec4 u_materialSpecular;
uniform mat4 u_materialShininess;
uniform vec4 u_color4;


mov ft0.xyz, v1.xyzx
mov ft0.xyz, v2.xyzx
mov ft0.xyz, v3.xyzx

tex ft0.xyzw, v4.xyxx, fs0 <2d,wrap,linear>
sub ft3.xyz, ft0.xyzx, fc0.xyzx
m33 ft4.xyz, ft3.xyzx, ft0
nrm ft0.xyz, ft4.xyzx
dp3 ft4.y, v0.xxyy, ft0.xxyy
min ft4.x, ft4.yxxx, fc1.xxxx
max ft0.y, ft4.xxxx, fc0.wwxx
m33 ft3.xyzw, u_materialDiffuse.xyzw, ft0.yxxx
pow ft4.z, ft0.yyyx, u_materialShininess.xxxx
tex ft0.xyzw, v4.xyxx, fs1 <2d,wrap,linear>
add ft5.xyzw, ft3.xyzw, u_materialAmbient.xyzw
mul ft3.xyz, u_materialSpecular.xyzx, ft4.zxxx
m33 ft4.xyz, ft5.xyzx, ft0.xyzx
mul ft5.xyz, ft3.xyzx, ft0.wxxx
mov oc.xyzw, ft0.xyzw
add ft3.xyz, ft4.xyzx, ft5.xyzx
mov oc, fc0
mov oc.xyz, ft3.xyzx

mul oc.xyz, ft3.xyzx, u_materialAmbient.wwwx

mul oc.xyzw, oc.xyzw, u_color4.xyzw

