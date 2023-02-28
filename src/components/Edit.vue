<template>
    <Teleport class="modal" tabindex="-1" role="dialog" to="body">
        <div class="modal-dialog" role="document" v-if="isVisible">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit</h5>
            </div>
            <div class="modal-body">
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
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteElement">Delete</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Close</button>
            </div>
            </div>
        </div>
        </Teleport>
</template>

<script>
    import {editItem, deleteItem } from '../models/model'
    export default{
        name: 'Edit',
        data(){
            let item = JSON.parse(this.itemData);
            let now = new Date(item.date);
            let day = ("0" + now.getDate()).slice(-2);
            let month = ("0" + (now.getMonth() + 1)).slice(-2);
            let today = now.getFullYear()+"-"+(month)+"-"+(day) ;
            return({
                label : item.label,
                amount : item.amount,
                date : today,
                itemID : item.id,
                type : item.type,
                isVisible : true
            })
        },
        props:{
            itemData : { type : String}
        },
        methods:{
            async saveChanges(){
                const res = await editItem(this.type, this.itemID, {
                    title : this.label,
                    amount : this.amount,
                    date : this.date
                });
                if(res.status == 200) this.close() 
            },
            async deleteElement(){
                const res = await deleteItem(this.type, this.itemID);
                if(res.status == 200) this.close()
            },
            close(){
                this.$router.back()
            }
        }
    }
</script>
