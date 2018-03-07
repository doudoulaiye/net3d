/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Convolution shader
 * ported from o3d sample to WebGL / GLSL
 * http://o3d.googlecode.com/svn/trunk/samples/convolution.html
 */

THREE.AreaInnerGlowShader = {

	defines: {

		"POINT_SIZE_INT": "100"

	},

	uniforms: {

		"tDiffuse":        { value: null },
		//面的边的经度
		"xPoints":         { value: [] },
		//面的边的维度
		"yPoints":         { value: [] },
		//屏幕分辨率
		"resolution":			 { value: null },//{x:1024,y:1024}
		//坐标翻转之前
		"x":							{value:0.0},
		//坐标翻转之前
		"y":							{value:0.0},
		//内发光距离（渐变长度） 暂时用像素好了10像素
		"inneLength":			{value:10.0},
		//内发光的明亮度
		"brightness":			{value:4.0},
		//渐变值
		"gradient":				{value:0.5},
		//渐变色
		"gradientColor":  {value:new THREE.Color(0xffffff)}
	},

	vertexShader: [
		//归一化的坐标
		"varying vec2 vUv;",
		//"uniform float x;",//不能传值不知为何，找不到定义的值 上面
		//"uniform float y;",
		
		"varying vec3 oposition;",
		"void main() {",

			"vUv = uv;",
			//"x = position.x;",
			//"y = position.y;",
			
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
			"oposition = gl_Position.xyz;",

		"}"

	].join( "\n" ),

	fragmentShader: [
		
		"uniform float xPoints[ POINT_SIZE_INT ];",
		"uniform float yPoints[ POINT_SIZE_INT ];",
		"uniform vec2 resolution;",
		"uniform sampler2D tDiffuse;",
		"varying vec3 oposition;",
		//"uniform vec3 position;",
		//"uniform float x;",
		//"uniform float y;",
		"uniform float inneLength;",
		"uniform float brightness;",
		"uniform float gradient;",
		"uniform vec3 gradientColor;",
		"varying vec2 vUv;",
		//获得点到线的最短距离
		"float getPoint2LineLength(float pointx,float pointy,float startX,float startY,float endX,float endY){",
			"float miniLength;",
			"vec2 point0 = vec2(pointx,pointy);",
			"vec2 point1 = vec2(startX,startY);",
			"vec2 point2 = vec2(endX,endY);",
			"float a = distance(point1,point2);",// 线段的长度
			"float b = distance(point1,point0);",// (x1,y1)到点的距离
			"float c = distance(point2,point0);",// (x2,y2)到点的距离
			"if (c <= 0.000001 || b <= 0.000001) {",
				"miniLength = 0.0;",
				"return miniLength;",
      "}",
      "if (a <= 0.000001) {",
      	"miniLength = b;",
      	"return miniLength;",
      "}",
      "if (c * c >= a * a + b * b) {",
      	"miniLength = b;",
      	"return miniLength;",
      "}",
			"if (b * b >= a * a + c * c) {",
				"miniLength = c;",
				"return miniLength;",
			"}",
			"float p = (a + b + c) / 2.0;",// 半周长
			"float s = sqrt(p * (p - a) * (p - b) * (p - c));",// 海伦公式求面积
			"miniLength = 2.0 * s / a;",// 返回点到线的距离（利用三角形面积公式求高）
			"return miniLength;",
		"}",
		//对比获得点到面的最小距离
		"float getMiniLengthOfPoint2Area(){",
			"float miniLength;",
			"for(int i=0;i<POINT_SIZE_INT-1;i++){",
				"float p2length = getPoint2LineLength(gl_FragCoord.x,gl_FragCoord.y,xPoints[i],yPoints[i],xPoints[i+1],yPoints[i+1]);",
				"if(i==0){",
					"miniLength = p2length;",
				"}else{",
					"miniLength = min(miniLength,p2length);",
				"}	",
			"}",
			"return miniLength;",
		"}",
		//返回颜色判断 radius
		"float getPointColor(float miniLength){",
			//小于内发光显示的距离则显示		    
	    "if (miniLength < inneLength) {",
	        
	        "float dd = miniLength/inneLength;",//归一
	        
	        //"return 0.0;",
	        "return smoothstep(0.0, gradient, 1.0 - pow(abs(dd), brightness));",
	        
	    "}",
	   	
	    "return 0.0;",
		"} ",
		
		"void main() {",
			//在形变之前对应的点位，最短距离
			//"x = gl_FragCoord.x;",
			//"y = gl_FragCoord.y;",
			
			"float miniLength = getMiniLengthOfPoint2Area();",//x,y,xPoints,yPoints
			
			"float pointColor = getPointColor(miniLength);",
			
			
			"vec2 imageCoord = vUv;",
			//取得上一次渲染对应的纹理颜色
			"vec4 textureColor = texture2D( tDiffuse, imageCoord );",
			"vec3 colorVec3 = textureColor.xyz * gradientColor ;",
			"gl_FragColor = vec4( colorVec3*pointColor, 1);",
			//"gl_FragColor = vec4(textureColor*pointColor*gradientColor,textureColor.w );",
			//"gl_FragColor = vec4(textureColor);",
			//"gl_FragColor = vec4(1.0,1.0,1.0,1.0);",
		"}"
	].join( "\n" )
};
