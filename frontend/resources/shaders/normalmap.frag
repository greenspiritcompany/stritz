#version 1.0;

varying mediump vec2 v_texCoord0;
varying mediump vec3 v_L2dir;
         
//varying mediump mat3 v_normalSpaceTransform;
varying mediump vec3 v_normalSpaceTransformX;
varying mediump vec3 v_normalSpaceTransformY;
varying mediump vec3 v_normalSpaceTransformZ;
         
uniform lowp sampler2D u_texture; /* diffuse */
uniform lowp sampler2D u_texture1; /* normal map */
         
uniform mediump vec4 u_materialAmbient;
uniform mediump vec4 u_materialDiffuse;
uniform mediump vec4 u_materialSpecular;
uniform mediump float u_materialShininess;
uniform lowp vec4 u_color4;

void main() {
	mediump vec4 normalMap = texture2D(u_texture1, v_texCoord0);
	mediump mat3 normalSpaceTransform = mat3(v_normalSpaceTransformX, v_normalSpaceTransformY, v_normalSpaceTransformZ);
	mediump vec3 normal = normalize(normalSpaceTransform * (normalMap.rgb-vec3(0.5,0.5,0.5)));
	
	float diffuse = clamp(dot(v_L2dir, normal), 0.0, 1.0); // previously nDotL2
	float specular = pow(diffuse, u_materialShininess);

	gl_FragColor = texture2D(u_texture, v_texCoord0);
	
	gl_FragColor.rgb = gl_FragColor.rgb * (u_materialDiffuse * diffuse + u_materialAmbient).rgb + u_materialSpecular.rgb * specular * normalMap.a;

	// Used for fading through code (value between 0.0 and 1.0 sent in ambient alpha-channel)
	gl_FragColor.rgb = gl_FragColor.rgb * vec3(u_materialAmbient.a, u_materialAmbient.a, u_materialAmbient.a);

	// Use <Color>
	gl_FragColor = gl_FragColor * u_color4;
}