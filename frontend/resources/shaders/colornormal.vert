#version 1.0;

argument vec4 a_position;
argument vec4 a_normal;
argument vec4 a_color;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_modelViewProjectionMatrix;

varying vec4 v_color; // Maps to v0
varying vec3 v_normal; // Maps to v1

// 1. Transform position to clip space
m44 op.xyzw, a_position.xyzw, u_modelViewProjectionMatrix

// 2. Pass vertex color to v0
mov v0.xyzw, a_color.xyzw

// 3. Transform normal to view space and pass to v1
// Using m33 for 3x3 rotation/scale transformation
m33 v1.xyz, a_normal.xyz, u_modelViewMatrix
mov v1.w, vc0.x // Ensure w is initialized (usually 1.0)