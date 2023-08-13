<template>
<Navbar/>
<router-view></router-view>
</template>

<script>
import {mapActions, mapState,mapMutations,mapGetters} from 'vuex';
import Navbar from "./components/Navbar";
export default {
    name: "Index",
    components: {Navbar},
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
