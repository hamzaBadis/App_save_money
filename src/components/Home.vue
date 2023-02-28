<template>
  <div class="d-flex flex-row justify-content-center">
      <h1 class="h1">MoneySave</h1>
  </div>

  <div class="container" style="width : 100%">
      <div class="row">
          <ChartView 
                  style="padding : 7%"
                  :dataLabels = "this.inLabels"
                  :inData = "this.incomesData"
                  dataType ="Incomes"
                  dataColor ="rgba(15, 141, 12, 0.55)" class="col-sm row-lg" 
                  >
          </ChartView>
          <ChartView 
                      style="padding : 7%"
                  :dataLabels = "this.exLabels"
                  :inData = "this.expensesData"
                  dataType ="Expenses"
                  dataColor ="rgba(250, 141, 150, 0.55)" class="col-sm row-lg" 
                  >
          </ChartView>
      </div>

  



  </div>

</template>

<script>
  import ChartView from './ChartView.vue'
  import { chartData } from '../models/model'
  export default {
    name: 'Home',
    data(){
      return {
        exLabels : [],
        inLabels : [],
        incomesData : [],
        expensesData : []
      }
    },
    async mounted(){
      const res = await chartData()
      this.exLabels = res.expensesLabels;
      this.inLabels = res.incomesLabels;
      this.incomesData = res.incomesData;
      this.expensesData = res.expensesData;
    },
    
    props: {
      msg: String
    },
    components:{
      ChartView
    }
  }
</script>
