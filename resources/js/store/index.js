import {createStore} from "vuex";
import {taskModule} from "./taskModule";
import {columnModule} from "./columnModule";


export default createStore({
   modules:{
       task: taskModule,
       column: columnModule
   }
});




