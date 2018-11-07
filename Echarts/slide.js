var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};
chart.on("click", chartClick);
function chartClick(parmes){
    // console.log(parmes);
    if(parmes.name in provinces){
        $.getJSON("map/json/province/"+provinces[parmes.name]+".json",function(data){
            console.log(provinces[parmes.name]);
            var d = [];
            for( var i=0;i<data.features.length;i++ ){
                d.push({
                    name:data.features[i].properties.name
                })
            }
            console.log(d);

                var chart = echarts.init(document.getElementById("slide"));

                echarts.registerMap('"'+provinces[parmes.name]+'"', data);
                chart.setOption({
                    tooltip:{
                        // trigger: 'item',

                    },
                    series : {
                        type : 'map',
                        map : '"'+provinces[parmes.name]+'"',
                        layoutCenter : [ '50%', '50%' ],
                        layoutSize : '100%',
                        label : {
                            normal : {
                                show : 1,
                                textStyle : {
                                    color : "transparent",
                                    fontSize:20,
                                }
                            },
                            emphasis : {
                                show : true,
                                textStyle : {
                                    color : '#000',
                                    fontSize:20,
                                }
                            }
                        },
                        itemStyle : {
                            normal : {
                                areaColor : 'rgba(24,65,91,0.3)',
                                borderColor : '#9DDCEB',
                                borderWidth : 1,
                                shadowColor : '#9DDCEB',
                                shadowBlur : 20
                            },
                            emphasis : {
                                areaColor : 'rgba(24,65,91,0.3)'
                            }
                        }
                    }
                })
            });




        // })
    }
}