#version 1.0;

argument vec4 a_position;
argument vec4 a_color;
argument vec4 a_texCoord;
uniform mat4 u_modelViewMatrix;
uniform mat4 u_modelViewProjectionMatrix;

varying vec4 v_color;    // v0
varying vec4 v_texCoord; // v1
varying vec4 v_params;   // v2

// 1. Calculate Clip Space Position
m44 op, a_position, u_modelViewProjectionMatrix

// 2. PASS COLOR DATA (This fixes the blue tint)
mov v0, a_color

// 3. Initialize v1 (UV Coords)
mov v1.xy, a_texCoord.xy
mov v1.zw, vc0.yy // Fill with 0.0

// 4. Initialize v2 (Parameters)
// Assuming vc0.yz contains your smoothing thresholds
mov v2.xy, vc0.yz 
mov v2.zw, vc0.yy