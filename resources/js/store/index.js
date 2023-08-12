import {createStore} from "vuex";
import {taskModule} from "./taskModule";
import {columnModule} from "./columnModule";
import {cardModule} from "./cardModule";


export default createStore({
   modules:{
       task: taskModule,
       column: columnModule,
       card: cardModule
   }
});




