<template>
  <div>
      <div>
          <div id='main'></div>
      </div>
 </div>
</template>

<script>
 import * as echarts from 'echarts';
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '用户分布图',
    // subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 200, name: '上海'},
        { value: 250, name: '深圳' },
        { value: 2000, name: '其他' },
        { value: 400, name: '北京' },
        { value: 150, name: '杭州' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);
  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
#main{
    width: 800px;
    height: 400px;
}
</style>
