<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Kanban Board</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name:'start-page'}" class="nav-link active">Главная</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{name:'main'}" class="nav-link active">Таблица задач</router-link>
                    </li>


                    <li class="nav-item">
                        <router-link :to="{name:'all-posts'}" class="nav-link active">Список постов</router-link>
                    </li>


                </ul>

                <form class="d-flex" role="search" v-if="$route.name === 'main'">
                    <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" v-model="query">
                    <button class="btn btn-outline-success" type="submit">Поиск</button>
                    <ul class="list-group d-flex justify-content-end" id="list_res">
                        <li class="list-group-item" v-for="item in sortedAndSearchPosts" :key="item.id">
                            <router-link :to="{name:'card', params:{id:item.id}}">{{item.title}}</router-link>
                        </li>
                    </ul>
                </form>

            </div>
        </div>
    </nav>
</template>

<script>
import {mapActions,mapGetters, mapMutations,mapState} from 'vuex';
export default {
    name: "Navbar",
    data(){
        return{
            query: '',
            tasks:[]
        }
    },
    computed:{
        ...mapGetters({
            getTasksArray:'column/getTasksArray'
        }),

        sortedAndSearchPosts(){
            if (this.query !== ''){
                return this.getTasksArray.filter(task => task.title.toLowerCase().includes(this.query.toLowerCase()))
            }

        }
    },

    methods:{
        ...mapActions({

        }),
        ...mapMutations({

        }),

    },
}
</script>

<style scoped>
#list_res {
    position: absolute;
    top	: 47px;
    width: 13rem;
    z-index: 50;
}

@media only screen and (max-width: 990px) {
    #list_res {
        top: 173px;
    }
}

#ds{
    left: -320px;
}
</style>
