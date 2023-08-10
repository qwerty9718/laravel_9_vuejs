<template>
    <div class="card card-light card-outline">
        <div class="card-header"><h5 class="card-title">{{task.title}}</h5>
            <div class="card-tools">
                <a href="#" class="btn btn-tool">#{{task.id}}</a>
                <a href="#" class="btn btn-tool"><i class="fas fa-pen"></i></a>
                <a href="#" class="btn btn-tool" @click.prevent="deleteTask(task.id)"><i class="fas fa-trash-alt"></i></a>
            </div>
        </div>

        <div class="mt-2 mb-2" v-if="task.images">
            <div v-for="image in task.images" :key="image.id" class="text-lg-start ml-2">
                <img :src="image.url" alt="" class="myImg">
            </div>
        </div>
        <div class="card-body"><p class="truncate-text">{{task.text}}</p></div>

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
.myImg{
    width: 30%;
    border: 4px solid #17a2b8;
    border-radius: 10px;
}

.truncate-text {
    overflow: visible;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    line-height: 1.3
}
</style>
