function randomNumBoth(min,max){
    let range = max - min;
    let rand = Math.random();
    let num = min + Math.round(rand*range);
    return num;
}
function randomNumBothXY(min,max){
    let range = max - min;
    let rand = Math.random();
    let num = min + rand*range;
    return num.toFixed(6);
}
/**
 * 随机数从。。到。。
 *
 */
function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

/**
 * 提供字体和图片，以及绘制的参数
 * 返回纹理对象 图片的宽度和高度 和对应的缩放
 */
function imgTxtDraw(param,fun,x,y,z){
    let canvas = document.createElement("canvas"),
    ctx = canvas.getContext('2d'),
    img = param.img;
    //img.onload = function(){
    let imgRWidth = 200;
    let imgRHeight = 200;
    //let imgRWidth = img.width;
    //let imgRHeight = img.height;
    ctx.fillStyle = param.txtParam.fillStyle;
    ctx.font = param.txtParam.fontWeight+' '+param.txtParam.fontSize +' '+param.txtParam.fontFamily;//"bold 100px Arial";////
    ctx.lineWidth = param.txtParam.lineWidth;

    let measure = ctx.measureText(param.txt);
    let txtWidth = measure.width;
    //let txtHeight = measure.height;//没有高度
    //console.log(imgRWidth,imgRHeight,txtWidth);
    //使用图片的缩放高度或宽度，没有则使用原始高宽
    let imgWidth = param.imgParam.width? param.imgParam.width:imgRWidth;
    let imgHeight = param.imgParam.height?param.imgParam.height:imgRHeight;
    let fontSize = parseInt(param.txtParam.fontSize);
    let imageLeft,imageTop;//图片位置
    let txtLeft,txtTop;//文字位置
    //改变canvas 的长和宽度
    if(param.layout=='tb'|| param.layout=='bt'){//上下结构
        
        canvas.width = imgWidth>txtWidth? imgWidth :txtWidth;
        canvas.height = imgHeight+ param.distanceImgTxt +fontSize;
        //计算位置
        if(param.layout=='tb'){
            imageLeft = (canvas.width-imgWidth)/2;
            //图片居中显示，需要给我图片的真实中心点，然后进行相对返回位置
            imageTop = 0;
            txtLeft = (canvas.width-txtWidth)/2;
            //文字居中显示
            txtTop = imgHeight+ param.distanceImgTxt+fontSize/2;
        }else if(param.layout=='bt'){
            txtLeft = (canvas.width-txtWidth)/2;
            txtTop = fontSize/2;
            imageLeft = (canvas.width-imageWidth)/2;
            //图片居中显示，需要给我图片的真实中心点，然后进行相对返回位置
            imageTop = fontSize+ param.distanceImgTxt;
            
        }
    }else{//左右结构
        canvas.width = imgWidth + param.distanceImgTxt +txtWidth;
        canvas.height = fontSize>imgHeight?fontSize:imgHeight;
        //计算位置
        if(param.layout=='lr'){
            imageLeft = 0;
            //图片居中显示，需要给我图片的真实中心点，然后进行相对返回位置
            imageTop = (canvas.height-imgHeight)/2;
            txtLeft = imgWidth + param.distanceImgTxt;
            //文字居中显示
            txtTop = (canvas.height-fontSize)/2+fontSize;
        }else if(param.layout=='rl'){
            txtLeft = 0;
            txtTop = (canvas.height-fontSize)/2+fontSize;
            imageLeft = txtWidth + param.distanceImgTxt;
            //图片居中显示，需要给我图片的真实中心点，然后进行相对返回位置
            imageTop = (canvas.height-imgHeight)/2;
            
        }

    }
    ctx.drawImage(img,0,0,img.width,img.height,imageLeft,imageTop,imgWidth,imgHeight);

    ctx.fillStyle = param.txtParam.fillStyle;
    ctx.font = param.txtParam.fontWeight+' '+param.txtParam.fontSize +' '+param.txtParam.fontFamily;//"bold 100px Arial";////
    ctx.lineWidth = param.txtParam.lineWidth;
    ctx.fillText(param.txt,txtLeft,txtTop);
    let texture = new THREE.CanvasTexture(canvas);
    //texture.offset = new THREE.Vector2(-0.3,0);
    texture.needsUpdate = true;
    //传递绘制元素内容信息
    if(typeof(param.node)!=undefined){
        fun(x,y,z,texture,canvas.width,canvas.height,param.node);
    }else{
        fun(x,y,z,texture,canvas.width,canvas.height);
    }
}

/**
 * 绘制圆图形
 * color1外围，color2中心
 * 暂时不能 使用，原因未知
 */
function draw2Circle(color1Rgba,color2Rgba){
    let canvas = document.createElement("canvas");
    //默认300 150
    canvas.setAttribute("width","100");
    canvas.setAttribute("height","100");
    let ctx = canvas.getContext('2d');
    let imgRWidth = 100;
    
    //画一个实心圆
    ctx.beginPath();
    //起点为半径，半径长度 ，起始为0 2PI长度
    ctx.arc(imgRWidth/2,imgRWidth/2,imgRWidth/2,0, Math.PI * 2,false);
    ctx.fillStyle=color1Rgba;//填充颜色,默认是黑色
    ctx.fill();//画实心圆
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(imgRWidth/2,imgRWidth/2,imgRWidth/4,0, Math.PI * 2,false);
    ctx.fillStyle=color2Rgba;//填充颜色,默认是黑色
    ctx.fill();//画实心圆
    ctx.closePath();
    
    return canvas;
    
}