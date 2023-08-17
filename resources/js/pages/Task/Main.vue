<template>

    <div class="content-wrapper kanban" style="margin-left: 0" id="block_1">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row">
                </div>
            </div>
        </section>


        <section class="my_content pb-3" id="block_2">
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
import Column from "../../components/Task/Column";
import Task from "../../components/Task/Task";
import ModalForm from "../../components/Task/ModalForm";

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

.block_1,
.block_2{
    position	: relative;
    width		: 100%; /* for IE 6 */
}

.content-wrapper.kanban {
    height: 100vh
}



.content-wrapper.kanban .card.card-row {
    width: 450px;
    display: inline-block;
    margin: 0 0.5rem;
}

@media only screen and (max-width: 450px) {
    .content-wrapper.kanban .card.card-row {
        width: 300px;
        display: inline-block;
        margin: 0 0.5rem;
    }
}

</style>
