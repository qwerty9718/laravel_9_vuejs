<template>
    <div class="card card-light card-outline">
        <div class="card-header"><h5 class="card-title">{{task.title}}</h5>
            <div class="card-tools">
                <a href="#" class="btn btn-tool">#{{task.id}}</a>
                <a href="#" class="btn btn-tool"><i class="fas fa-pen"></i></a>
                <a href="#" class="btn btn-tool" @click.prevent="deleteTask(task.id)"><i class="fas fa-trash-alt"></i></a>
            </div>
        </div>
        <div class="card-body"><p>{{task.text}}</p></div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Task",
    props:{
        task:{type:Object}
    },


    methods:{
        ...mapActions({
            deleteTask:'task/deleteTask'
        })
    },

}
</script>

<style scoped>

</style>
