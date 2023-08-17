<template>

    <div v-if="getPost && getPost.id == getId">
        <Post :post="getPost"/>
    </div>

</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex';
import Post from "../../components/Post/Post";
export default {
    name: "SinglePost",
    components: {Post},
    methods:{
        ...mapActions({
            findPostById:'post/findPostById',
        }),

        ...mapMutations({
            setId: 'post/setId'
        })
    },
    computed:{
        ...mapGetters({
            getId:'post/getId',
            getPost:'post/getPost',
        })
    },
    mounted() {
        this.setId(this.$route.params.id);
        this.findPostById(this.getId)
    }
}
</script>

<style scoped>

</style>
