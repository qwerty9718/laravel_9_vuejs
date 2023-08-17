<template>
<div class="container-fluid">


    <!-- Кнопка-триггер модального окна -->
    <button @click="defaultPost" type="button" class="btn btn-success mt-3 ml-5" data-bs-toggle="modal" data-bs-target="#modalPost">создать пост</button>
    <PostModal/>


    <PostList/>

</div>



</template>

<script>
import PostList from "../../components/Post/PostList";
import PostModal from "../../components/Post/PostModal";
import {mapActions} from "vuex";

export default {
    name: "Posts",
    components: {PostModal, PostList},
    methods:{
        ...mapActions({
            defaultPost:'dropzone_Module/defaultPost'
        })
    }
}
</script>

<style scoped>

</style>
