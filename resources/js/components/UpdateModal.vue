<template>

    <!-- Модальное окно -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Обновить задачу</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Название</label>
                            <input type="text" class="form-control" v-model="getUpdateTask.title">
                            <p class="err">{{ getError.title }}</p>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Описание</label>
                            <textarea cols="30" rows="7" class="form-control" type="text"
                                      v-model="getUpdateTask.text"></textarea>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary" @click="updateTaskMethod(getUpdateTask.id)"
                            :data-bs-dismiss="getUpdateTask.title ? 'modal' : null">Сохранить изменения
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations,} from "vuex";
import Dropzone from "dropzone";

export default {
    name: "UpdateModal",

    methods: {
        ...mapActions({
            updateTaskMethod: 'task/updateTaskMethod',
        }),

        ...mapMutations({
        })
    },
    computed: {
        ...mapGetters({
            getError: 'task/getError',
            getUpdateTask: 'task/getUpdateTask',
        })
    },


}
</script>

<style scoped>
.err {
    color: red;
}
</style>
