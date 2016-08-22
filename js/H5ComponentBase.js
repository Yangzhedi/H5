/*基本图文组件对象*/
var H5ComponentBase = function( name, cfg ){
	var cfg = cfg || {};
	//给div加id
	var id = ( 'h5_c_' + Math.random()).replace(".","_") ;
	//把当前的组件类型添加到样式中进行标记
	var cls = 'h5_component_' + cfg.type  ;
	var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');

	cfg.text   && component.text(cfg.text);
	cfg.width  && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);

    cfg.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage','url('+ cfg.bg +')');

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