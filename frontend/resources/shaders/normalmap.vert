#version 1.0;

attribute mediump vec4 a_position;
attribute mediump vec2 a_texCoord;
attribute mediump vec3 a_normal;

uniform mediump mat4 u_modelViewProjectionMatrix;
uniform mediump mat4 u_modelViewMatrix;

uniform highp float u_time;
varying mediump vec2 v_texCoord0;
varying mediump vec3 v_L2dir;
//varying mediump mat3 v_normalSpaceTransform;
varying mediump vec3 v_normalSpaceTransformX;
varying mediump vec3 v_normalSpaceTransformY;
varying mediump vec3 v_normalSpaceTransformZ;

void main() {
	gl_Position = u_modelViewProjectionMatrix * a_position;
	
	
	/* Send currently drawn pixel to fragment shader */
	highp vec2 v_pixelPos = vec2(gl_Position.x+sin(u_time), gl_Position.y+cos(u_time)) * 0.1;
	
	v_texCoord0 = a_texCoord;
	
	// need to abs the scale values, because of calculating light for batched/non-batched objects 
	mediump mat3 normalTransform = mat3(abs(u_modelViewMatrix[0].x), u_modelViewMatrix[0].y, u_modelViewMatrix[0].z,
								u_modelViewMatrix[1].x, abs(u_modelViewMatrix[1].y), u_modelViewMatrix[1].z,
								u_modelViewMatrix[2].x, u_modelViewMatrix[2].y, abs(u_modelViewMatrix[2].z));
								
	/* a make believe tangent space */
	mediump vec3 z = normalize(a_normal);
	mediump vec3 y = cross(z, vec3(1,0,0));
	mediump vec3 x = cross(y, z);
	
	
	v_normalSpaceTransformX = normalTransform * x;
	v_normalSpaceTransformY = normalTransform * y;
	v_normalSpaceTransformZ = normalTransform * z;
	
	//v_normalSpaceTransform = mat3(x,y,z);
	
	//v_L1dir = normalize(vec3(-0.4+v_pixelPos.x, -0.3+v_pixelPos.y, 1.0));
	v_L2dir = normalize(vec3(-0.3-v_pixelPos.x, -0.4-v_pixelPos.y, 1.0));
}