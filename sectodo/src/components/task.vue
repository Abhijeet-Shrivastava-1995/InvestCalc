
// <template>
//   <div class="container base">
    
//       <h2>This is my <kbd>Todo App</kbd></h2>
//       <br/>
//       <form>
//         <div class="row">
//           <div class="col-md-offset-3 col-md-4 col-sm-5 text-holder">
//             <input  type="text" placeholder="Type your todo here..." v-model="newTask">
//           </div>
//           <div class="col-md-2 col-sm-3 btn-holder">
//             <button class="btn btn-success" type="button" 
//               v-on:click="sendtodo" >Add Task</button>
//           </div>
//         </div>
//       </form>
        
      
//       <div class="row">
//         <h3> Task pending </h3>

//         <p class="col-sm-8 col-md-8 col-lg-2" v-for="todo in todos" v-bind:key="todo.taskTitle">
//           {{todo.taskTitle}} 
//           <button class="btn btn-danger" type="button" v-on:click="deleted (todo)">Task Completed</button>
//         </p>
//       </div>
     
    
//   </div>
// </template>

// <script type="text/javascript">
// export default {
//   props: ['todo'],
//   data () {
//     return {
//       newTask: '  ',
//       todos: [{
//         taskTitle: 'Task Number 1'
//       }]
//     }
//   },
//   methods: {
//     sendtodo () {
//       if (this.newTask.length > 0) {
//         const task = this.newTask
//         this.todos.push({
//           taskTitle: task
//         })
//       }
//       this.newTask = ' '
//     },
//     deleted (todo) {
//       const todoIndex = this.todos.indexOf(todo)
//       this.todos.splice(todoIndex, 1)
//     }
//   }
// }

// </script>

// <style>
//   .base{
//     margin: 10px 150px 100px 150px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
//   .base .text-holder{
//     padding-right: 0px;
//   }
//   .base .btn-holder{
//     padding-left: 0px;
//   }
//   .base input[type="text"] {
//     float: right;
//     width: 100%;
//     margin-right: 0px;
//     height: 34px;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//     border-bottom-right-radius: 0px;
//     border-top-right-radius: 0px;
//   }
//   .base button {
//     float: left;
//     width: 100%;
//     text-align: center;
//     margin-left: 0px;
//     border-bottom-left-radius: 0px;
//     border-top-left-radius: 0px;

//   }
// </style>
