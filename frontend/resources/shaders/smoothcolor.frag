#version 1.0;

// Match varying order with vertex shader
varying vec4 v_color;  // Maps to v0 (unused here, but needed for linkage)
varying vec3 v_normal; // Maps to v1

uniform vec4 u_materialAmbient;
uniform vec4 u_materialDiffuse;
uniform vec4 u_materialSpecular;
uniform vec4 u_materialEmission;
uniform mat4 u_materialShininess;
uniform vec4 u_color4;

// 1. Initialize temporary registers
mov ft0, fc0
mov ft1, fc0
mov ft2, fc0

// 2. Lighting Calculation using v1 (normal)
nrm ft0.xyz, v1.xyz
dp3 ft1.y, fc0.xyz, ft0.xyz

// Clamp diffuse factor
min ft1.x, ft1.y, fc0.z 
max ft0.y, ft1.x, fc0.x

// Calculate diffuse and specular components
mul ft1.xyz, u_materialDiffuse.xyz, ft0.yyy
pow ft1.z, ft0.y, u_materialShininess.x
add ft0.xyz, u_materialAmbient.xyz, ft1.xyz
mul ft1.xyz, u_materialSpecular.xyz, ft1.zzz
add ft1.xyz, ft0.xyz, ft1.xyz

// 3. Final Output (Fixes Error #3701 by writing full vec4)
mov ft2, u_color4
mul ft2.xyz, u_color4.xyz, ft1.xyz
mov oc, ft2