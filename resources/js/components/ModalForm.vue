<template>
    <!-- Модальное окно -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Создание новой задачи</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">

                    <form>
                        <div class="mb-3">
                            <label class="form-label">Название</label>
                            <input type="text" class="form-control" v-model="getTask.title">
                            <p class="err">{{getError.title}}</p>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Описание</label>
                            <textarea cols="30" rows="7" class="form-control" type="text" v-model="getTask.text"></textarea>
                        </div>
                    </form>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary" @click.prevent="createTask"  :data-bs-dismiss="getTask.title ? 'modal' : null">Сохранить изменения</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "ModalForm",

    methods:{
        ...mapActions({
            createTask:'task/createTask'
        })
    },

    computed:{
        ...mapGetters({
            getError:'task/getError',
            getTask: 'task/getTask',
        })
    },

    mounted() {

    }
}
</script>

<style scoped>
.err{
    color: red;
}
</style>
