<template>

   <h2>    Like {{getLike}}     </h2>
    <button @click="addLike"> + </button>
    <button @click="addDislike"> - </button>

<router-view></router-view>
</template>

<script>
import {mapActions, mapState,mapMutations,mapGetters} from 'vuex';
export default {
    name: "Index",

    methods:{
        ...mapActions({
            addLike: 'post/addLike',
            addDislike: 'post/addDisLike'
        }),
        ...mapMutations({

        }),
    },

    computed:{
        ...mapState({
            like: state => state.post.like
        }),

        ...mapGetters({
            getLike: 'post/getLike'
        })
    }
}
</script>

<style scoped>

</style>
