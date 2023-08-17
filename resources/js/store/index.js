import {createStore} from "vuex";
import {taskModule} from "./Task/taskModule";
import {columnModule} from "./Task/columnModule";
import {cardModule} from "./Task/cardModule";
import {navbarModule} from "./Task/navbarModule";
import {post_ListModule} from "./Post/post_ListModule";
import {post_Module} from "./Post/post_Module";
import {dropzone_Module} from "./Post/dropzone_Module";


export default createStore({
   modules:{
       task: taskModule,
       column: columnModule,
       card: cardModule,
       navbarModule: navbarModule,
       postList: post_ListModule,
       post: post_Module,
       dropzone_Module: dropzone_Module
   }
});




