<template>
    <div class="container" v-show="getId == getTask.id">

        <div class="card" style="width: 45rem; margin: auto; margin-top: 100px">
            <div v-for="image in getTask.images" :key="image.id" class="text-lg-start ml-2">
                <img :src="image.url" alt="" class="card-img-top myImg" style="height: 532px; object-fit: cover">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{getTask.title}}</h5>
                <p class="card-text">{{getTask.text}}</p>
                <router-link class="btn btn-primary" :to="{name:'main'}">вернуться</router-link>
            </div>
        </div>


    </div>



</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
import Task from "../components/Task";
import ModalForm from "../components/ModalForm";
export default {
    name: "Card",
    components: {Task},
    computed:{
        ...mapGetters({
            getId:'card/getId',
            getTask:'card/getTask'
        })
    },

    methods:{
        ...mapMutations({
            setId:'card/setId'
        }),
        ...mapActions({
            getTaskById:'card/getTaskById'
        })
    },

    mounted() {
        this.setId(this.$route.params.id);
        this.getTaskById(this.getId);
    }
}
</script>

<style scoped>

</style>
