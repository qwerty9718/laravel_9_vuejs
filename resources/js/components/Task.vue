<template>
    <div :class="'card '+style">
        <div class="card-header"><h5 class="card-title">{{task.title}}</h5>
            <div class="card-tools">
                <router-link v-if="showActions" class="btn btn-tool" :to="{name:'card',params:{id:task.id}}">#{{task.id}}</router-link>
                <a href="#" v-if="showActions" class="btn btn-tool" @click.prevent="updateStatus({id:task.id,column_id:task.column_id})"><i class="fas fa-hand-pointer"></i></a>
                <a href="#" v-if="showActions" class="btn btn-tool" @click.prevent="getUpdateTask(task.id)" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-pen"></i></a>
                <a href="#" v-if="showActions" class="btn btn-tool"  @click.prevent="deleteTask(task.id)"><i class="fas fa-trash-alt"></i></a>
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
import ModalForm from "./ModalForm";

export default {
    name: "Task",
    components: {ModalForm},
    props:{
        task:{type:Object},
        style:{type:Object},
        showActions:{type: Boolean}
    },


    methods:{
        ...mapActions({
            deleteTask:'task/deleteTask',
            updateStatus:'task/updateStatus',
            getUpdateTask:'task/getUpdateTask'
        })
    },

    computed:{
        ...mapGetters({
            getTask: 'task/getTask',
        })
    }

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
