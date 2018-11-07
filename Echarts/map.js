var chart=echarts.init(document.getElementById("map"))
var option={
    geo:{
        map:"china",
        regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0, label: {show: false}}}}],
        itemStyle: {                    // 定义样式
            normal: {                    // 普通状态下的样式
                areaColor: '#de832a',
                // borderColor: '#111'
            },
            emphasis: {                    // 高亮状态下的样式
                areaColor: '#dbcb45'
            }
        }
    },
}
chart.setOption(option)