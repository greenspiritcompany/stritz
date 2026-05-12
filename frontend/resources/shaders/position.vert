#version 1.0;
argument vec4 a_position;
uniform mat4 u_modelViewProjectionMatrix;

// 1. Calculate Clip Space Position
m44 op, a_position, u_modelViewProjectionMatrix

// 2. Initialize Varying 0 to prevent Linkage Error #3632
// If a frag shader expects color, we give it full white (vc0.xxxx assuming vc0 is [1,0,0,0])
mov v0, vc0.xxxx