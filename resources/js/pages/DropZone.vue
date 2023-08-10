<template>
    <div class="w-25" style="margin-left: 20px; margin-top: 20px">
        <div class="mb-3">
            <label>Название</label>
            <input type="text" class="form-control" v-model="task.title">
        </div>

        <div class="mb-3">
            <label>Текст</label>
            <input type="text" class="form-control" v-model="task.text">
        </div>

        <div ref="dropzone1" class="p-5 bg-dark text-center text-light">Upload</div>
        <button class="btn btn-success" @click="store">create</button>
    </div>
</template>

<script>
import Dropzone from 'dropzone';
import axios from "axios";
export default {
    name: "DropZone",

    data(){
        return{
            dropzone1: null,
            task: {title:'', text:'', column_id:1}
        }
    },

    methods:{
      async store(){
          const data = new FormData();
          const files = this.dropzone1.getAcceptedFiles();
          files.forEach(file => {
              data.append('images[]', file);
              this.dropzone1.removeFile(file);
          })
          data.append('title', this.task.title);
          data.append('text', this.task.text);
          data.append('column_id', 1);
          const response = await axios.post('http://127.0.0.1:8000/api/task',data);
          this.task = {title:'', text:'',};
      }
    },

    mounted() {
        this.dropzone1 = new Dropzone(this.$refs.dropzone1,{
            url:'123',
            autoProcessQueue:false,
            addRemoveLinks:true
        })
    }
}
</script>

<style scoped>

</style>
