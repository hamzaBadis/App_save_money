<template >

    <h2 class="d-flex flex-row justify-content-center">{{ this.showList}}</h2>
    <table class="table table-hover" style="margin-top : 10%">

        <tbody>
            <tr v-for="item in items " :key="item.id" @click="edit(item)">
            <td >{{ item.title }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ formatD(item.date) }}</td>
            </tr>

        </tbody>
    </table>
    <div class="d-flex flex-row justify-content-center">
        <router-link  tag="div" :to="{ path : '/add/'+showList}">
            <button class="btn" style="">ADD</button>
        </router-link>
    </div>
</template>

<script>
    import {listItems, formatDate } from '../models/model';
    export default{
        name : 'List',
        data(){
            return{
                items : null,
            }
        },
        props:{
            showList : String
        },

        async mounted(){
            this.items = await listItems(this.showList);
        },
        methods:{
            edit(item){
                let data = JSON.stringify({
                            id : item.id,
                            label : item.title,
                            amount : item.amount,
                            date : item.date,
                            type : this.showList
                            })

              this.$router.push({ path : '/edit/'+data})
            }
        },
        methods :{
            formatD(d){
                return formatDate(d)
            }
        }

    }

</script>
<style scoped> </style>