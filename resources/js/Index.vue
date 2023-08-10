<template>

<router-view></router-view>
</template>

<script>
import {mapActions, mapState,mapMutations,mapGetters} from 'vuex';
export default {
    name: "Index",

    methods:{
        ...mapActions({
            addLike: 'task/addLike',
            addDislike: 'task/addDisLike'
        }),
        ...mapMutations({

        }),
    },

    computed:{
        ...mapState({
            like: state => state.task.like
        }),

        ...mapGetters({
            getLike: 'task/getLike'
        })
    }
}
</script>

<style scoped>

</style>
