<template>
    <!-- Модальное окно -->
    <div class="modal fade" id="modalPost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Заголовок модального окна</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">


                    <div class="container">
                        <div class="mb-3">
                            <label class="form-label">Title</label>
                            <input type="text" class="form-control" v-model="getPost.title">
                            <p class="err text-red">{{getError.title}}</p>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Text</label>
                            <textarea class="form-control" cols="30" rows="10"  v-model="getPost.text"></textarea>
                        </div>


                        <div class="mb-3">
                            <div ref="images_block" class="p-5 bg-dark text-center text-light">Установить картинку</div>
                        </div>

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button v-if="!getPost.id" type="button" class="btn btn-primary" @click="createPost"  :data-bs-dismiss="getPost.title ? 'modal' : null">Сохранить изменения</button>
                    <button v-if="getPost.id" type="button" class="btn btn-primary" @click="updatePost(getPost.id)" :data-bs-dismiss="getPost.title ? 'modal' : null">Сохранить изменения</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Dropzone from "dropzone";
import {mapActions, mapGetters, mapMutations} from 'vuex';
export default {
    name: "PostModal",

    methods:{
        ...mapActions({
            createPost:'dropzone_Module/createPost',
            updatePost:'dropzone_Module/updatePost'
        }),

        ...mapMutations({
            setDropzone:'dropzone_Module/setDropzone'
        })
    },
    computed:{
        ...mapGetters({
            getPost: 'dropzone_Module/getPost',
            getError:'dropzone_Module/getError'
        })
    },

    mounted() {
        this.setDropzone(new Dropzone(this.$refs.images_block,{
            url:'123',
            autoProcessQueue:false,
            addRemoveLinks:true,
            maxFiles:4,
            maxfilesexceeded: function(file) {
                this.removeAllFiles();
                this.addFile(file);
            }
        }));

    }
}
</script>

<style scoped>

</style>
