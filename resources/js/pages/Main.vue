<template>


    <div class="content-wrapper kanban" style="margin-left: 0">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Kanban Board  </h1>
                    </div>
                </div>
            </div>
        </section>


        <section class="my_content pb-3">
            <div class="container-fluid h-100">
                <Column v-for="column in getColumns" :key="column.id" :column="column" :class="column.style">
                    <template v-if="column.id === 1" v-slot:button>
                        <button class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="defaultTask"><i class="fas fa-plus" style="color: #ffffff;"></i>Добавить</button>
                    </template>
                    <template  v-for="task in column.tasks" :key="task.id"><Task :task="task" :style="column.style" :showActions="true"/></template>
                </Column>
            </div>
        </section>

    </div>


    <ModalForm :task="getTask"/>



</template>

<script>
import {mapGetters,mapActions} from "vuex";
import Column from "../components/Column";
import Task from "../components/Task";
import ModalForm from "../components/ModalForm";

export default {
    name: "Main",
    components: {ModalForm, Task, Column},

    methods:{
        ...mapActions({
            fetchColumns: 'column/fetchColumns',
            defaultTask:'task/defaultTask'
        })
    },

    computed:{
        ...mapGetters({
            getColumns: 'column/getColumns',
            getTask: 'task/getTask',
            showTable: 'column/getShowTable'
        })
    },
    mounted() {
        this.fetchColumns();
    }
}
</script>

<style scoped>



.content-wrapper.kanban {
    height: 100vh
}
</style>
