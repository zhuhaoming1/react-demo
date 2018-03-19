import React, { Component } from 'react';
import '../../App.css';
import echarts from 'echarts';

class RealTimeEvaluation extends Component {
  componentDidMount() {
        this.showChart();
  }
  showChart(){
  //基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));
  //使用指定的配置项和数据显示图表
  myChart.setOption({
      title:{
        text:'ECharts 图表'
      },
      tooltip:{},
      legend:{
        data:['销量']
      },
      xAxis:{
        data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","毛衣"]
      },
      yAxis:{},
      series:[{
        name:'销量',
        type:'bar',
        data:[5,20,36,57,30,10,40,54]
      }]
  })
  }
  render() {
    return (
      <div>
        <div id="main" style={{width:'600px',height:'400px'}}></div>
      </div>
      
    );
  }
}

export default RealTimeEvaluation;
