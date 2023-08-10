<template>
    <div class="card card-row">
        <div class="card-header" style="display:flex; justify-content: space-between">
            <h3 class="card-title" style="margin: 7px">
                {{ column.title }}
            </h3>
            <slot name="button"></slot>
        </div>
        <div class="card-body">
            <!--  Слот с Task  -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Column",
    props: {
        column: {type: Object, required: true}
    }
}
</script>

<style scoped>

</style>
