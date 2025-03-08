#version 1.0;

varying lowp vec4 v_color;
varying mediump vec2 v_texCoord;
varying mediump vec4 v_pixelpos;

uniform sampler2D u_texture;

uniform highp float u_time;

void main() {
	gl_FragColor = texture2D(u_texture, v_texCoord).aaaa;
	
	//float intensity = clamp((sin(v_pixelpos.x*0.9+mod(u_time,8.0)*3.0))*3.0-2.0,0.0,1.0);
	
	//float intensity = clamp(0.5+0.5*sin(v_pixelpos.x),0,1) * mix(sin(v_pixelpos.x*0.5));
	
	float intensity = 0.5+sin((1.0+v_pixelpos.x)*3.0+mod(u_time,4.0)*3.0);
	float stepyo = step(0.51,sin(v_pixelpos.x*1.0+mod(u_time,4.0)*1.0));
	
	intensity = intensity * stepyo;
	intensity = clamp(intensity, 0.0, 1.0);
	
	gl_FragColor.rgb = gl_FragColor.rgb + vec3(intensity * 0.5 * gl_FragColor.a);
	gl_FragColor = v_color * gl_FragColor;
}