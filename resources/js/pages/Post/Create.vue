<template>

    <div class="container">
        <div class="mb-3 w-50">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" v-model="getPost.title">
        </div>

        <div class="mb-3 w-50">
            <label class="form-label">Text</label>
            <textarea class="form-control" cols="30" rows="10"  v-model="getPost.text"></textarea>
        </div>


        <div class="mb-3 w-50">
            <div ref="images_block" class="p-5 bg-dark text-center text-light">Установить картинку</div>
        </div>


        <div class="container">
            <button class="btn btn-success" @click="createPost">create</button>
        </div>

    </div>


</template>

<script>
import Dropzone from "dropzone";
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
    name: "Create",

    methods:{
        ...mapActions({
            createPost:'dropzone_Module/createPost'
        }),

        ...mapMutations({
            setDropzone:'dropzone_Module/setDropzone'
        })
    },
    computed:{
        ...mapGetters({
            getPost: 'dropzone_Module/getPost'
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
