<template>
    <div class="px-4 py-5 my-5 text-center">
        <div class="container" id="img_container">
            <img class="d-block mx-auto mb-4 my_img_vue" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="">
            <img class="d-block mx-auto mb-4 my_img_lar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" alt="">
        </div>

        <h1 class="display-5 fw-bold text-body-emphasis">Kanban Board</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Данное приложение использует следующие технологии <br>
                <strong> Laravel 9, PHP 8.1, Vue.js 3 , Vuex, Vue-router</strong>
            </p>

            <p class="lead mb-4">Данное приложение может <br>
                <strong> Создавать задачу, проводить валидацию полей, устанавливать статус задаче, изменять значение полей,
                устанавливать картинку, удалять задачу , а также находить задачу через поиск в навигационной панели </strong>
            </p>

            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <router-link class="btn btn-primary btn-lg px-4 gap-3" :to="{name:'main'}">Перейти к списку задач</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Start-page"
}
</script>

<style scoped>
.my_img_vue{
    /*width: 400px;*/
    /*height: 200px;*/
    width: 23rem;
    height: 18rem;
}
.my_img_lar{
    /*width: 300px;*/
    /*height: 200px;*/
    width: 23rem;
    height: 18rem;
}

#img_container{
    display:flex;
    justify-content: space-between;

}


@media only screen and (max-width: 1000px) {
    #img_container{
        display:block;
    }

    .my_img_vue,
    .my_img_lar{
      margin: auto;
    }

}

@media only screen and (max-width: 650px) {
    .my_img_vue,
    .my_img_lar{
        width: 17rem;
        height: 13rem;
    }

}


</style>
