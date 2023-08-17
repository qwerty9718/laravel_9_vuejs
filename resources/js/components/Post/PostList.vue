<template>

    <div class="container-fluid" v-if="getPosts">
        <div v-for="post in getPosts" :key="post">
            <Post :post="post" :showOpenBtn="true" class="w-75"/>
        </div>
        <div class="observer" ref="observer"></div>
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
            findAllPosts: 'postList/findAllPosts',
            loadMore: 'postList/loadMore'
        })
    },
    computed:{
        ...mapGetters({
            getPosts: 'postList/getPosts',
            getPage: 'postList/getPage',
            getTotalPages: 'postList/getTotalPages'
        })
    },
    mounted() {
        this.findAllPosts();

        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting  && this.getPage < this.getTotalPages){
                this.loadMore()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
    }
}
</script>

<style scoped>
.observer{
    height: 30px;
    margin-bottom: 50px;
}
</style>
