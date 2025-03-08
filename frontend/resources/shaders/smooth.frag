#version 1.0;

varying mediump vec3 v_normal;
varying lowp vec2 v_texCoord;

uniform sampler2D u_texture;
uniform lowp vec4 u_materialAmbient;
uniform lowp vec4 u_materialDiffuse;
uniform lowp vec4 u_materialSpecular;
uniform mediump float u_materialShininess;
uniform lowp vec4 u_color4;

void main() {
	gl_FragColor = u_color4 * texture2D(u_texture, v_texCoord);	
	float nDotL1 = clamp(dot(vec3(-0.181818, -0.625455, 0.818182), normalize(v_normal)), 0.0, 1.0);
	
	gl_FragColor.rgb *=	vec3(u_materialAmbient) +
						vec3(u_materialDiffuse) * nDotL1 +
						vec3(u_materialSpecular) * pow(nDotL1, u_materialShininess);
}