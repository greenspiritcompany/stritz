#version 1.0;

varying vec4 v_color;
varying vec2 v_texCoord;

sampler2D u_texture;

// 1. Sample the texture
// Changed 'wrap' to 'clamp' to prevent thin lines appearing around letters
tex ft1, v1, fs0 <2d, clamp, linear, mipdisable>

// 2. THE FIX: Use the Red channel (ft1.x) for the alpha mask
// If your font is in a texture atlas, the shape is usually in the RGB data
mov ft0.w, ft1.x 

// 3. Use the uniform color (fc0) for the RGB portion
mov ft0.xyz, fc0.xyz

// 4. Final output
// Multiply by v0 (vertex color) to allow for transparency/tinting from the engine
mul oc, ft0, v0