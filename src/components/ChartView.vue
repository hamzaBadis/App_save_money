<template>
 
  <Line
    :chart-data="chartData"
    :chart-options ="chartOptions"
  />


</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);
export default {
  name: 'ChartView',
  components: { Line },
  props: {
    inData : { type : Array },
    dataLabels : { type : Array },
    dataColor : { type : String},
    dataType : { type : String }
  },
  watch : {
    inData(newVal, oldVal){
       this.chartData.datasets[0].data = this.inData
    },

    dataLabels(newVal, oldVal){
      this.chartData.labels = this.dataLabels;
    }


  },
  data() {
    return {
      userData : [],
      userLabels : [],
      chartData: {
          labels: this.dataLabels,
          datasets: [ 
            { 
              data: this.inData ,
              tension :0.1,
              fill : {
                    target : 'origin',
                    above : this.dataColor
                },
              label : this.dataType,
              backgroundColor :  this.dataColor 
            }   
        ]
      },
      chartOptions: {
        scales : {
            y :{
                beginAtZero : true,
                ticks :{
                  display : false
                }
            }
        }
      },
    }
  },
}
</script>
<style scoped>

</style>
