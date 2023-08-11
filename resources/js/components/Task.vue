<template>
    <div :class="'card '+style">
        <div class="card-header"><h5 class="card-title">{{task.title}}</h5>
            <div class="card-tools">
                <a href="#" class="btn btn-tool">#{{task.id}}</a>
                <a href="#" class="btn btn-tool" @click.prevent="updateStatus({id:task.id,column_id:task.column_id})"><i class="fas fa-hand-pointer"></i></a>
                <a href="#" class="btn btn-tool" @click.prevent="getUpdateTask(task.id)" data-bs-toggle="modal" data-bs-target="#updateModal"><i class="fas fa-pen"></i></a>
                <a href="#" class="btn btn-tool"  @click.prevent="deleteTask(task.id)"><i class="fas fa-trash-alt"></i></a>
            </div>
        </div>

        <div class="mt-2 mb-2" v-if="task.images">
            <div v-for="image in task.images" :key="image.id" class="text-lg-start ml-2">
                <img :src="image.url" alt="" class="myImg">
            </div>
        </div>
        <div class="card-body"><p class="truncate-text">{{task.text}}</p></div>

    </div>

    <UpdateModal/>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import UpdateModal from "./UpdateModal";

export default {
    name: "Task",
    components: {UpdateModal},
    props:{
        task:{type:Object},
        style:{type:Object}
    },


    methods:{
        ...mapActions({
            deleteTask:'task/deleteTask',
            getUpdateTask:'task/getUpdateTask',
            updateStatus:'task/updateStatus'
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
