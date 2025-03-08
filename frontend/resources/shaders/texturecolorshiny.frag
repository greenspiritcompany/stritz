#version 1.0;

varying lowp vec4 v_color;
varying lowp vec2 v_texCoord;
varying mediump vec4 v_pixelpos;

uniform sampler2D u_texture;

uniform highp float u_time;
// x=intensity, y=power, z=spacing length, w=animation length


/*			Settings.w
Settings.z	_________
0 _________I

*/

uniform highp vec4 Settings;

#define M_PI 3.1415926535897932384626433832795


void main() {
	float intensity = Settings.x * sin(clamp(mod(u_time + (v_texCoord.x)*3.0,Settings.z + Settings.w) - Settings.z, 0.0, Settings.w)/Settings.w * M_PI);
	intensity = pow(max(intensity, 0.0), Settings.y);
	gl_FragColor = texture2D(u_texture, v_texCoord);
	
	gl_FragColor.rgb = vec3(intensity * gl_FragColor.a);
	gl_FragColor = v_color * gl_FragColor;
}