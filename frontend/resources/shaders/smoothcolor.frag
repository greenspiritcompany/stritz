#version 1.0;

#define NUM_LIGHTS 1

varying vec3 v_normal;

struct Light {
	vec3	ambient;
	vec3	diffuse;
	vec3	specular;
	vec4	position;
};

/*uniform float u_time;*/
uniform vec4 u_materialAmbient;
uniform vec4 u_materialDiffuse;
uniform vec4 u_materialSpecular;
uniform vec4 u_materialEmission;
uniform float u_materialShininess;
uniform vec4 u_color4;

uniform Light u_lights[NUM_LIGHTS];

void main() {
	gl_FragColor = u_color4;	
	vec3 normal = normalize(v_normal);
	float nDotL1 = clamp(dot(vec3(0, 0, 1), normal), 0.0, 1.0);
	float diffuse = nDotL1;
	float specular = pow(nDotL1, u_materialShininess);
	
	gl_FragColor.rgb *= /*u_materialEmission +*/
						/*u_globalAmbient * u_materialAmbient + */
						 u_materialAmbient.rgb +
						 u_materialDiffuse.rgb * diffuse +
						 u_materialSpecular.rgb * specular;
						
	/* for glow */
	/*float glow = pow(1.0 - dot(normal, vec3(0, 0, 1)), 2.0);
	gl_FragColor.rgb += vec3(0.2, 0.2, 1.0) * glow * (sin(u_time * 30) * 0.5 + 0.5) * 3.0;*/
}