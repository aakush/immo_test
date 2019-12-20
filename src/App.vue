<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="total"><div class="title">Всего задач: </div><div class="value">{{totalTasks}}</div></div>
    <users-list v-bind:UsersList="users" @updateParent="onUpdate"/>
  </div>
  
</template>

<script>
import usersList from './components/users-list.vue'

var users = [
      {
		"id": 1,
        "username": "login1",
        "name": "Вася Пупкин",
        "tasks": 10
      },
      {
		"id": 3,
        "username": "login2",
        "name": "Иван Иванов",
        "tasks": 8
      },
      {
		"id": 2,
        "username": "login3",
        "name": "Петр Петров",
        "tasks": 3
      }]
export default {
  name: 'app',
  components: {
    usersList
  },
  methods:{
    test: function(){
      alert('изменено');
      this.users[0].name = 'тест'
    },
    onUpdate: function(){
      this.totalTasks = 0
      for(let i=0;i< this.users.length;i++){
        this.totalTasks = this.totalTasks + this.users[i].tasks;
      }
      
    }
  },
  data(){
    return{
      users:[],
      totalTasks:0
	}
  },
  mounted() {
   if(localStorage.users){ this.users = JSON.parse(localStorage.users);}
   else {
    this.users = users;
    localStorage.users = JSON.stringify(this.users);
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.total{
    margin:30px 0;
}
.total .value{
   margin-left:10px;
   font-size:22px;
}
.total div{
   display:inline-block; 
   font-weight:bold;
   font-size:20px;
}
</style>
