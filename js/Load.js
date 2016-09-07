/**
 * Created by Administrator on 2016/8/29.
 */
var res = [
    'Base','Bar','Bar_v','Point','Polyline',
    'Radar','Pie','Ring','Img'
];
var html = [];
for(s in res){
    html.push('<script type="text/javascript" src="js/H5Component'+res[s]+'.js"><\/script>');
    html.push('<link rel="stylesheet" type="text/css" href="css/H5Component'+res[s]+'.css">');
}
document.write( html.join('') );