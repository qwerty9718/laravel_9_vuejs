import {createStore} from "vuex";
import {taskModule} from "./taskModule";
import {columnModule} from "./columnModule";
import {cardModule} from "./cardModule";
import {navbarModule} from "./navbarModule";


export default createStore({
   modules:{
       task: taskModule,
       column: columnModule,
       card: cardModule,
       navbarModule: navbarModule
   }
});




