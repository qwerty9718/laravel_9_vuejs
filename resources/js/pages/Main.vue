<template>
    <div class="content-wrapper kanban" style="margin-left: 0">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Kanban Board</h1>
                    </div>
                    <div class="col-sm-6 d-none d-sm-block">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Kanban Board</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="content pb-3">
            <div class="container-fluid h-100">
                <Column v-for="column in getColumns" :key="column.id" :column="column" :class="column.style">
                    <template v-if="column.title === 'Список задач'" v-slot:button>
                        <button class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-plus" style="color: #ffffff;"></i></button>
                    </template>
                    <template  v-for="task in column.tasks" :key="task.id"><Task :task="task"/></template>
                </Column>
            </div>
        </section>
    </div>

    <ModalForm/>


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
            fetchColumns: 'column/fetchColumns'
        })
    },

    computed:{
        ...mapGetters({
            getColumns: 'column/getColumns'
        })
    },
    mounted() {

        this.fetchColumns();
    }
}
</script>

<style scoped>

</style>
