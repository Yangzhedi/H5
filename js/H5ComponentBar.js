/*散点图组件对象*/
var H5ComponentPoint = function( name, cfg ){
	var component = new H5ComponentBase( name, cfg );
    //component.text('text H5ComponentPoint');

    var base = cfg.data[0][1];    //以第一个数据的  比例为大小的  100%

    //输出每一个point
    $.each(cfg.data, function(index, item){

        var point = $('<div class="point '+index+'">');
        //point.text(item[0]+'-'+item[1]);

        var name = $('<div class="name">'+item[0]+'</div>');
        var rate = $('<div class="per">'+(item[1]*100)+'%</div>');
        name.append(rate);
        point.append(name);

        var per = (item[1]/base*100)+'%';
        point.width(per).height(per);

        //item[2] 控制背景颜色
        if(item[2]){
            point.css('backgroundColor',item[2])
        }
        //item[3] 控制x轴偏移   item[4] 控制y轴偏移
        if(item[3] !== undefined && item[4] !== undefined){
            point.css('left',item[3]).css('top',item[4]);
        }

        component.append( point );
    });


    return component;
};