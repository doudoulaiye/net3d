$(document).ready(function(){
    $('.basetime').hover(function(event) {
        $(event.target).addClass("btnbg");
    }, function() {
        console.log(currentTime!=event.target.innerHTML,currentTime,event.target.innerHTML);
        if(currentTime!=event.target.innerHTML){
            $(event.target).removeClass("btnbg");
        }
    });
    $('.basetime').click(function(event) {
        $('.basetime').removeClass("btnbg");
        currentTime = event.target.innerHTML;
        $(event.target).addClass("btnbg");
    });
 });
/**
 * 绘制事件线
 *
 */
function eventline(events){
    //let date
    debugger
    let material = new THREE.LineBasicMaterial({ color: 0x00ffff, opacity: 0.1, linewidth: 1 });
    var tmp_geo = new THREE.Geometry();
    for(let i=0;i<events.length;i++){
        let event = events[i];
        let xy = event.position.split(" ");
        let x = xy[0]-0;
        let y = xy[1]-0;

        let webxy = LonLat2WebGL(x,y);
        tmp_geo.vertices.push(new THREE.Vector3(webxy.x,webxy.y, mapZValue-1));
    }

    let line = new THREE.Line(tmp_geo,material);
    //line.scale.x = line.scale.y = line.scale.z = 1;
    //line.originalScale = 1;

    // NOTE: Deactivated frustumCulled, otherwise it will not draw all lines (even though
    // it looks like the lines are in the view frustum).
    //line.frustumCulled = false;

    rightGroup.add(line);
}