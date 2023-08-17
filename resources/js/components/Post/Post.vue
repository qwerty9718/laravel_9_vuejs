<template>

    <div class="container text-center post">
        <div class="container"><h2>ID : {{post.id}}</h2></div>
        <div class="container"><h2>Title : {{post.title}}</h2></div>
        <div class="container"><p>{{post.text}}</p></div>
        <div class="container img_block">
            <div v-for="image in post.images"><img :src="image.url" alt="" style="width: 20rem;" ></div>
        </div>

        <div class="container">

            <div class="container text-center">
                <div class="row">
                    <div class="col-8"></div>
                    <div class="col-4">
                        <div class="btn-group" role="group" aria-label="Простой пример">
                            <button type="button" class="btn" v-if="showOpenBtn" @click="deletePost(post.id)"><i class="fas fa-trash-alt" style="color: #ff0000;"></i></button>
                            <button type="button" class="btn" @click.prevent="getUpdatePost(post.id)" data-bs-toggle="modal" data-bs-target="#modalPost"><i class="far fa-edit"></i></button>
                            <router-link type="button" class="btn" v-if="showOpenBtn" :to="{name:'single-post',params:{id:post.id}}" ><i class="fas fa-arrow-circle-right" style="color: #1a6af4;"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "Post",
    props: {
        post: {type: Object, required: true},
        showOpenBtn:{type:Boolean}
    },

    methods:{
        ...mapActions({
            deletePost:'dropzone_Module/deletePost',
            getUpdatePost:'dropzone_Module/getUpdatePost'
        })
    }
}
</script>

<style scoped>
.post{
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #1cc3e5;
    border-radius: 20px;
}

.btn{
    border: transparent;
}

.btn-group{
    margin-bottom: 10px;
}

.img_block{
    display: flex; justify-content: space-between
}
</style>
