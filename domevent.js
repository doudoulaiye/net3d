$(document).ready(function(){
    //时间选择
    $('.basetime').hover(function(event) {
        $(event.target).addClass("btnbg");
    }, function() {
        console.log(currentTime!=event.target.innerHTML,currentTime,event.target.innerHTML);
        if(currentTime!=event.target.innerHTML){
            $(event.target).removeClass("btnbg");
        }
    });
    $('.basetime').click(function(event) {
        if(currentTime!=event.target.innerHTML){
            $('.basetime').removeClass("btnbg");
            currentTime = event.target.innerHTML;
            $(event.target).addClass("btnbg");
        }else{
            $('.basetime').removeClass("btnbg");
            currentTime = null;
        }
        
    });
    //功能选择
    $('#autoPlayImg').click(
        function(e){
            if(!BUTTON_STATE || (BUTTON_STATE && BUTTON_STATE!=1)){
                //需要设置其它两个按钮样式为不选中
                setBtnState(true,false,false);
                BUTTON_STATE =1;
            }else if(BUTTON_STATE && BUTTON_STATE==1){
                setBtnState(false,false,false);
                BUTTON_STATE = null;
            }
        }
    );
    $('#eventTrackImg').click(
        function(e){
            if(!BUTTON_STATE || (BUTTON_STATE && BUTTON_STATE!=2)){
                //需要设置其它两个按钮样式为不选中
                setBtnState(false,true,false);
                BUTTON_STATE =2;
            }else if(BUTTON_STATE && BUTTON_STATE==2){
                setBtnState(false,false,false);
                BUTTON_STATE = null;
            }
        }
    );
    $('#gangfxImg').click(
        function(e){
            if(!BUTTON_STATE || (BUTTON_STATE && BUTTON_STATE!=3)){
                //需要设置其它两个按钮样式为不选中
                setBtnState(false,false,true);
                BUTTON_STATE =3;
            }else if(BUTTON_STATE && BUTTON_STATE==3){
                setBtnState(false,false,false);
                BUTTON_STATE = null;
            }
        }
    );
    window.addEventListener('resize',onResize,false);
 });
function onResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    composer.reset();
    renderer.setSize(window.innerWidth,window.innerHeight);
}
/**
 * 设置按钮状态
 * 
 */
function setBtnState(state1,state2,state3){
    if(state1){
        $('#autoPlayBtn').addClass("btnbg");
        $('#autoPlayBtn .btnfont').addClass("btnfontSelect");
        $('#autoPlayBtn .btnSelect').addClass("btnSelectSelect");
    }else{
        $('#autoPlayBtn').removeClass("btnbg");
        $('#autoPlayBtn .btnfont').removeClass("btnfontSelect");
        $('#autoPlayBtn .btnSelect').removeClass("btnSelectSelect");
    }
    if(state2){
        $('#eventTrackBtn').addClass("btnbg");
        $('#eventTrackBtn .btnfont').addClass("btnfontSelect");
        $('#eventTrackBtn .btnSelect').addClass("btnSelectSelect");
    }else{
        $('#eventTrackBtn').removeClass("btnbg");
        $('#eventTrackBtn .btnfont').removeClass("btnfontSelect");
        $('#eventTrackBtn .btnSelect').removeClass("btnSelectSelect");
    }
    if(state3){
        $('#gangfx').addClass("btnbg");
        $('#gangfx .btnfont').addClass("btnfontSelect");
        $('#gangfx .btnSelect').addClass("btnSelectSelect");
    }else{
        $('#gangfx').removeClass("btnbg");
        $('#gangfx .btnfont').removeClass("btnfontSelect");
        $('#gangfx .btnSelect').removeClass("btnSelectSelect");
    }
}
/**
 * 绘制事件线
 *
 */
function eventline(events){
    for(var i=eventLineGroup.children.length-1;i>-1;i--){
        let obj = eventLineGroup.children[i];
        eventLineGroup.remove(obj);
    }
    //let date
    let material = new THREE.LineBasicMaterial({ color: 0x00ffff, opacity: 0.1, linewidth: 1 });
    var tmp_geo = new THREE.Geometry();
    for(let i=0;i<events.length;i++){
        let event = events[i];
        let xy = event.position.split(" ");
        let x = xy[0]-0;
        let y = xy[1]-0;

        let webxy = LonLat2WebGL(x,y);
        tmp_geo.vertices.push(new THREE.Vector3(webxy.x,webxy.y, mapZValue+1));
    }

    let line = new THREE.Line(tmp_geo,material);
    //line.scale.x = line.scale.y = line.scale.z = 1;
    //line.originalScale = 1;

    // NOTE: Deactivated frustumCulled, otherwise it will not draw all lines (even though
    // it looks like the lines are in the view frustum).
    //line.frustumCulled = false;
    eventLineGroup.add(line);
}
