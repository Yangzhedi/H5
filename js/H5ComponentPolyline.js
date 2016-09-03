/*折线图组件对象*/
var H5ComponentPolyline = function( name, cfg ) {
    var component = new H5ComponentBase(name, cfg);

    // 绘制网格线
    var w = cfg.width;
    var h = cfg.height;

    // 加入一个画布 （网格线的背景） - 背景层
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);


    // 水平网格线 100 份 -> 10 份
    var step = 10;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';

    window.ctx = ctx;
    for (var i = 0; i < step + 1; i++) {
        var y = (h / step) * i;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }

    // 垂直网格线 （根据项目的个数 分）
    var step_v = cfg.data.length + 1;
    var text_w = w / step_v >> 0;

    for (var i = 0; i < step_v + 1; i++) {
        var x = (w / (step_v)) * i;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);

        if (cfg.data[i]) {
            var text = $('<div class="text"></div>');
            text.text(cfg.data[i][0]);
            text.css('width', text_w / 2).css('left', x / 2 + text_w / 4);

            component.append(text);
        }

    }
    ctx.stroke();


    // 加入画布 - 数据层
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);

    /*
     * 绘制折线图已经对应的数据和阴影
     * @param {float} per  0到1之间的数据，会根据这个数据绘制最终的数据对应的中间状态
     * */
    var draw =function( per ){
        //清空画布
        ctx.clearRect(0,0,w,h);

        // 绘制折线数据
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = cfg.lineColor;

        var x = 0;
        var y = 0;
        // ctx.moveTo(100,100);
        // ctx.arc(100, 100, 5, 0, 2*Math.PI);
        //var step_v = cfg.data.length + 1;
        var row_w = (w / (cfg.data.length + 1));
        //画点
        for (var i in cfg.data) {
            var item = cfg.data[i];
            x = row_w * i + row_w;
            //y = h * (1 - item[1]);
            y = h - (item[1]* h * per);

            ctx.moveTo(x, y);
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
        }


        //连线
        // 移动画笔到第一个数据的点位置
        //ctx.moveTo(row_w, h * (1 - cfg.data[0][1]));
        ctx.moveTo(row_w, h - (cfg.data[0][1] * h *per));
        for (var i in cfg.data) {
            var item = cfg.data[i];
            x = row_w * i + row_w;
            //y = h * (1 - item[1]);
            y = h - (item[1]* h * per);
            ctx.lineTo(x, y);
        }

        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.fillStyle = 'rgba(255, 225, 225, 0)';
        //绘制 阴影
        ctx.lineTo(x, h);
        ctx.lineTo(row_w, h );
        ctx.fillStyle = cfg.shadowColor;
        ctx.fill();


        //写数据
        for (var i in cfg.data) {
            var item = cfg.data[i];
            x = row_w * i + row_w;
            //y = h * (1 - item[1]);
            y = h - (item[1]* h * per);

            ctx.fillStyle = item[2] ? item[2] : '#595959';
            ctx.fillText(((item[1] * 100) >> 0 ) + '%', x - 10, y - 10);
        }

        ctx.stroke();
    };
    //draw(0.5);
    component.on('onLoad',function(){
        //折线图生长动画
        var s = 0;
        for(var i =0;i<100;i++){
            setTimeout(function(){
                s+=0.01;
                draw(s);
            },i*10+500)
        }
    });
    component.on('onLeave',function(){
        //折线图退场动画
        var s = 1;
        for(var i =0;i<100;i++){
            setTimeout(function(){
                s-=0.01;
                draw(s);
            },i*10)
        }
    });


    return component;
};