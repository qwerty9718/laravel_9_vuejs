<template>
    <div class="container-fluid" v-if="getPosts">


        <div v-for="post in getPosts" :key="post">
            <Post :post="post" :showOpenBtn="true" class="w-75"/>
        </div>


    </div>
</template>

<script>
import Post from "./Post";
import {mapActions,mapGetters} from 'vuex';

export default {
    name: "PostList",

    components: {Post},
    methods:{
        ...mapActions({
            findAllPosts: 'postList/findAllPosts'
        })
    },
    computed:{
        ...mapGetters({
            getPosts: 'postList/getPosts'
        })
    },
    mounted() {
        this.findAllPosts();
    }
}
</script>

<style scoped>

</style>
