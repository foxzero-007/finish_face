var echarts = require('echarts');

var chartDom = document.getElementById('emotionPie');
var myChart = echarts.init(chartDom);

myChart._setEmotion = ({angry=1,disgust=1,fear=1,happy=1,sad=1,surprise=1,neutral=1})=>{
  console.log("mycharts");
  // const option = {
  //   title: {
  //     text: '情绪分析比例',
  //     subtext: '情绪占比',
  //     left: 'center'
  //   },
  //   tooltip: {
  //     trigger: 'item'
  //   },
  //   legend: {
  //     orient: 'vertical',
  //     left: 'left'
  //   },
  //   series: [
  //     {
  //       name: 'Access From',
  //       type: 'pie',
  //       radius: '50%',
  //       data: [
  //         { value: angry,name:'angry'},
  //         { value: disgust,name:'disgust'},
  //         { value: fear,name:'fear'},
  //         { value: happy,name:'happy'},
  //         { value: sad,name:'sad'},
  //         { value: surprise,name:'surprise'},
  //         { value: neutral,name:'neutral'},

  //       ],
  //       emphasis: {
  //         itemStyle: {
  //           shadowBlur: 10,
  //           shadowOffsetX: 0,
  //           shadowColor: 'rgba(0, 0, 0, 0.5)'
  //         }
  //       }
  //     }
  //   ]
  // };
  option = {
    title: {
      text: '情绪分析'
    },
    legend: {
      data: ['Emotion']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'angry', max: 100 },
        { name: 'disgust', max: 100 },
        { name: 'fear', max: 100 },
        { name: 'happy', max: 100 },
        { name: 'sad', max: 100 },
        { name: 'surprise', max: 100 },
        { name: 'neutral', max: 100 }
      ]
    },
    series: [
      {
        name: 'Emotion',
        type: 'radar',
        data: [
          {
            value: [angry, disgust, fear, happy, sad, surprise,neutral],
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };
  console.log(option);
  myChart.setOption(option);
}

module.exports = myChart