$(function(){
    var h5 = new H5();

   /* h5.whenAddPage = function(){
        this.addComponent('slide_up',{
            bg:'imgs/footer.png',
            css:{
                opacity:0,
                left:0,bottom:-20,
                width:'100%',height:'20px',zIndex:999
            },
            animateIn:{
                opacity:1,bottom:'-1px'
            },
            animateOut:{
                opacity:0,bottom:'-20px'
            },
            delay:500
        });
    };*/

    h5
        .addPage('face')
            .addComponent('logo',{
            center:true,
            width:395,
            height:130,
            bg:'imgs/logo.png',
            css:{opacity:0},
            animateIn:{top:100,opacity:1},
            animateOut:{top:0,opacity:0},
        })
            .addComponent('face_img_left',{
            width:370,
            height:493,
            bg:'imgs/face_img_left.png',
            css:{opacity:0,left:-50,bottom:-50},
            animateIn:{opacity:1,left:0,bottom:0},
            animateOut:{opacity:0,left:-50,bottom:-50},
            delay:1000
        })
            .addComponent('face_img_right',{
            width:276,
            height:449,
            bg:'imgs/face_img_right.png',
            css:{opacity:0,right:-50,bottom:-50},
            animateIn:{opacity:1,right:0,bottom:0},
            animateOut:{opacity:0,right:-50,bottom:-50},
            delay:1000
        })
            .addComponent('slogan',{
            //center:true,
            type:'img',
            width:160,
            height:160,
            src:'imgs/icebear1.png',
            css:{opacity:0,top:'30%',
                left:'35%',marginLeft:'-40px'
            },
            animateIn:{opacity:1},
            animateOut:{opacity:0},
            delay:500
        })
            .addComponent('slogan yang',{
            //center:true,
            fontFamily:'华文细黑',
            width:300,
            height:160,
            text:'杨小事er',
            css:{opacity:0,top:'30%',
                fontSize:'25px',
                paddingTop:'30px',
                color:'#fff',
                left:'70%',
                marginLeft:'-75px'
            },
            animateIn:{opacity:1},
            animateOut:{opacity:0},
            delay:500
        })
        .addPage()
            .addComponent('caption',{text:'这是个标题'})
            .addComponent('text_big',{
            width:500,
            height:30,
            center:true,
            text:'对，这就是一个广告!',
            css:{
                opacity:0,textAlign:'center',color:'#5D5D5D',fontSize:'26px', fontWeight:'700',
                fontFamily:'Tahoma,Arial,”Helvetica Neue“,”Hiragino Sans GB”,Simsun,sans-self'
            },
            animateIn:{opacity:1,top:120},
            animateOut:{opacity:0,top:240},
        })
            .addComponent('description',{
            center:true,
            width:481,
            height:295,
            bg:'imgs/description_bg.png',
            css:{
                opacity:0,
                padding:'20px 10px 10px 10px',
                color:'#000',
                fontSize:'18px',
                lineHeight:'20px',
                textAlign:'justify',
                top:240
            },
            text:['想让你的简历脱颖而出？想拥有一份在线简历？或者想做一份H5的摄影约片广告？' +
            '或者想交给boss一份在线观看的数据报表？'],
            animateIn:{opacity:1,top:190},
            animateOut:{opacity:0,top:240},
            delay:1000
        })
            .addComponent('people',{
            center:true,
            width:515,
            height:305,
            bg:'imgs/p1_people.png',
            css:{
                opacity:0,
                bottom:0
            },
            animateIn:{opacity:1,bottom:40},
            animateOut:{opacity:0,bottom:0},
            delay:500
        })
        .addPage()
            .addComponent('caption',{text:'这只是个标题'})
            .addComponent('text_big',{
                width:500,
                height:30,
                center:true,
                text:'可以做图文展示页面，也可以做图表展示页面。',
                css:{
                    opacity:0,textAlign:'center',color:'#5D5D5D',fontSize:'22px', fontWeight:'700',
                    fontFamily:'Tahoma,Arial,”Helvetica Neue“,”Hiragino Sans GB”,Simsun,sans-self'
                },
                animateIn:{opacity:1,top:120},
                animateOut:{opacity:0,top:240},
            })
            .addComponent('text_big',{
                width:550,
                height:30,
                center:true,
                text:'这里可以放很多很多的文字!',
                css:{
                    opacity:0,textAlign:'center',color:'#5D5D5D',fontSize:'26px', fontWeight:'700',
                    fontFamily:'Tahoma,Arial,”Helvetica Neue“,”Hiragino Sans GB”,Simsun,sans-self'
                },
                animateIn:{opacity:1,top:'40%'},
                animateOut:{opacity:0,top:'30%'},
                delay:400
            })
            .addComponent('text_big',{
                width:550,
                height:30,
                center:true,
                text:'这里就以放置图片巴blabla的~',
                css:{
                    opacity:0,textAlign:'center',color:'#5D5D5D',fontSize:'20px', fontWeight:'500',
                    fontFamily:'Tahoma,Arial,”Helvetica Neue“,”Hiragino Sans GB”,Simsun,sans-self'
                },
                animateIn:{opacity:1,bottom:210},
                animateOut:{opacity:0,bottom:0},
                delay:800
            })
            .addComponent('icebear',{
                center:true,
                width:300,
                height:300,
                bg:'imgs/icebear1.png',
                css:{
                    opacity:0,
                    bottom:0
                },
                animateIn:{opacity:1,bottom:40},
                animateOut:{opacity:0,bottom:0},
                delay:800
            })
        .addPage('polyline')
            .addComponent('caption',{text:'这又是个标题'})
            .addComponent('polyline',{
                type:'polyline',
                data:[['array[0]',.4,'#ff7676'],['array[1]',.2],['array[2]',.3,'blue'],['array[3]',.1]],
                width:600,
                height:400,
                center:true,
                lineColor:'#0094bd',
                shadowColor:'rgba(127, 236, 255, 0.47)',
                css:{opacity:0,top:200},
                animateIn:{opacity:1,top:250},
                animateOut:{opacity:0,top:100},
            })
            .addComponent('msg',{
                text:'折线 折线 折线图',
                css:{
                    opacity:0,top:160,fontSize:'20px',fontWeight:700,
                    textAlign:'center',width:'100%',color:'#2198ad'
                },
                animateIn:{ opacity:1},
                animateOut:{ opacity:0}
            })
        .addPage('pie')
            .addComponent('caption',{text:'这还是个标题'})
            .addComponent('pie',{
                type:'pie',
                data:[
                    ['array[0]' ,  .4 ,'#ff7676'],
                    ['array[1]' ,      .3 ,'#5ddbd8'],
                    ['array[2]' , .2 ,'#99c1ff'],
                    ['array[3]' , .1 ,'#ffad69'],
                ],
                css:{top:200,opacity:0},
                width:300,
                height:300,
                center:true,
                animateIn:{opacity:1},
                animateOut:{opacity:0},
                //delay:1500
            })
            .addComponent('msg',{
                text:'这 这 这是饼 饼 饼图',
                css:{
                    opacity:0,bottom:120,fontSize:'20px',fontWeight:700,
                    textAlign:'center',width:'100%',color:'#2198ad'
                },
                animateIn:{ opacity:1},
                animateOut:{ opacity:0}
            })
        .addPage('bar') //bar（bar_v）
            .addComponent('caption',{text:'前端开发课程'})
            .addComponent('bar', {
                    type : 'bar',
                    width : 530,
                    height : 600,
                    data:[
                        ['array[0]' , .4  ,'#ff7676'],
                        ['array[1]' , .2  ],
                        ['array[2]' , .1 ],
                        ['array[3]' , .2  ],
                        ['array[4]' , .35 ],
                        ['array[5]' , .05 ],
                        ['array[6]' , .09  ]
                    ],
                    css : {top:100,opacity:0},
                    animateIn:{opacity:1, top:200},
                    animateOut:{opacity:0, top:100},
                    center : true,
                })
            .addComponent('msg',{
                text:'柱状 柱状 柱状图',
                css:{
                    opacity:0,bottom:120,fontSize:'20px',fontWeight:700,
                    textAlign:'center',width:'100%',color:'#2198ad'
                },
                animateIn:{ opacity:1},
                animateOut:{ opacity:0}
            })
        .addPage()
            .addComponent('caption',{text:'这还是个标题'})
            .addComponent('radar',{
                type : 'radar',
                width : 400,
                height : 400,
                data:[
                    ['null' , .9  ,'#5395FB'],
                    ['undefined' , .8 ],
                    ['[ ]' , .7  ],
                    ['\' \'' , .6  ],
                    ['NaN' , .5 ]
                ],
                css : {
                    top:100,
                    opacity:0
                },
                animateIn:{
                    opacity:1,
                    top:200,
                },
                animateOut:{
                    opacity:0,
                    top:100,
                },
                center : true,
            })
            .addComponent('msg',{
                text:'这 这 这是雷达 雷达图',
                css:{
                    opacity:0,bottom:80,fontSize:'20px',fontWeight:700,
                    textAlign:'center',width:'100%',color:'#5395FB'
                },
                animateIn:{ opacity:1},
                animateOut:{ opacity:0},
                delay:800
            })
        .addPage('point')
            .addComponent('caption',{text:'这还是个标题'})
            .addComponent('point',{
                type : 'point',
                width : 300,
                height : 300,
                data:[
                    ['壹' , .4  ,'#ff7676'],
                    ['贰' , .2  ,'#ffa3a4', '-20%' ,'-60%'],
                    ['叁' , .3  ,'#99c1ff', '50%' ,'-120%']
                ],
                css : {
                    bottom:'20%'
                },
                center : true,
            })
            .addComponent('msg',{
                text:'这 这 这是散点 散点图',
                css:{
                    opacity:0,bottom:80,fontSize:'20px',fontWeight:700,
                    textAlign:'center',width:'100%',color:'#5395FB'
                },
                animateIn:{ opacity:1},
                animateOut:{ opacity:0},
                delay:800
            })
        .addPage('tail')
            .addComponent('logo',{
                type:'img',
                center:true,
                width:191,
                height:194,
                src:'imgs/twoweima.jpg',
                css:{top:220,opacity:0},
                animateIn:{opacity:1,top:210},
                animateOut:{opacity:0,top:240},
            })
            .addComponent('slogan',{
            center:true,
            width:314,
            height:46,
            bg:'imgs/tail_slogan.png',
            css:{top:320,opacity:0},
            animateIn:{opacity:1,left:'50%'},
            animateOut:{opacity:0,left:'0%'},
            delay:500
        })
            .addComponent('share',{
                width:128,
                height:120,
                bg:'imgs/tail_share.png',
                css:{opacity:0,top:110,right:110},
                animateIn:{opacity:1,top:10,right:10},
                animateOut:{opacity:0,top:110,right:110},
                delay:1000
            })
            .addComponent('back',{
            width:52,
            height:50,
            bg:'imgs/tail_back.png',
            center:true,
            onclick : function(){
                $.fn.fullpage.moveTo( 1 )
            }
        })
        .loader([ 'imgs/logo.png','imgs/icebear1.png','imgs/face_img_left.png','imgs/icebear1.png',
            'imgs/tail_back.png','imgs/tail_share.png','imgs/tail_slogan.png' ] );
});