<template> 
    <h3>Add {{ this.addFct ==='incomes' ? 'income' : 'expense' }}</h3>
     <form >
         <div class="row align-items-center">
            <div class="col-auto">
                <label for="label" class="col-form-label">Label</label>
            </div>
            <div class="col-auto">
                <input type="text" class="form-control" id="label" v-model="label">
            </div>
            <div class="col-auto">
                <label for="amount" class="col-form-label">Amount</label>
            </div>
            <div class="col-auto">
                <input type="number" class="form-control" id="amount" v-model="amount">
            </div>
            <div class="col-auto">
                <label class="col-form-label" for="date">Date</label>
            </div>
            <div class="col-auto">                
                <input type="date" class="form-control date" id="date" v-model="date">
            </div>
        </div>
        <div class ="row justify-content-center">
            <button class="btn btn-primary" @click="add" style="width:15%; margin: 20%;">Add</button>
        </div>
    </form>
</template>

<script>
    import { addData } from '../models/model'
    export default{
        name : "Add",
        props:{
            addFct : String
        },
        data(){

            return({
                label : "",
                amount : null,
                date : new Date()
            })
        },
        methods:{
            async add(){                
                const res = await addData({
                    title : this.label,
                    amount : this.amount,
                    date : this.date,
                    addFct : this.addFct
                });
                if(res.status == 201) this.$router.replace({ path : '/list/'+this.addFct}) 
            },
        }
    }
</script>