/*基本图文组件对象*/
var H5ComponentUrl = function( name, cfg ){
	var cfg = cfg || {};
	//给div加id
	var id = ( 'h5_c_' + Math.random()).replace(".","_") ;
	//把当前的组件类型添加到样式中进行标记
	var cls = 'h5_component_' + cfg.type  ;
	var component = $('<a href="http://www.baidu.com" class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');

	cfg.text && component.text(cfg.text);

    cfg.css && component.css(cfg.css);

    if( cfg.decoration === false){
        component.css({
            textDecoration : 'none'
        })
    }
    //通过居中参数 设置居中
    if( cfg.center === true){
        component.css({
            marginLeft:(cfg.width/4 * -1) + 'px',
            left:"50%"
            /*marginTop:(cfg.height/4 * -1) + 'px',
            top:"50%"*/
        })
    }
    //  ...很多自定义的参数

    component.on('onLoad',function(){
        component.addClass(cls+'_load').removeClass(cls+'_leave');
        //动画
        cfg.animateIn && component.animate( cfg.animateIn );
        return false;
    });
    component.on('onLeave',function(){
        component.addClass(cls+'_leave').removeClass(cls+'_load');
        //动画
        cfg.animateOut && component.animate( cfg.animateOut );
        return false;
    });

	return component;
};