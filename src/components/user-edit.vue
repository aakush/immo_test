<template>
  <div>
    <div class="modal-overlay"></div>
    <div class="modal-wrapper">
      <div class="modal-window">
    <h2>Изменить</h2>
    <form>
    <table class="user">
  
      <tr><td>Логин:</td><td>
        <input type="text" :class="{ error: isNameEmpty }" v-model="userModel.username" name="username" >
        <div v-if="isNameEmpty" class="error-message">
          Поле заполено неверно
        </div>
      </td></tr>
      <tr><td>Имя:</td><td><input type="text" name="name" v-model="userModel.name"></td></tr>
      <tr><td>Число задач:</td><td><input type="number" name="tasks" v-model.number="userModel.tasks" ></td></tr>
    </table>
    </form>
    <input type="button" value="Сохранить" v-on:click="save">
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'userEdit',
  props: ['user'],
  data() {
    return {
      userModel: JSON.parse(JSON.stringify(this.user))
    }
  },
  methods:{
    save: function(){
      for(let key in this.user){
        this.user[key] = this.userModel[key];
      }
      this.$emit('updateParent')
    }
  },
  computed: {
    isNameEmpty() {
      const song = this.user.name
      return !song
    }
    
  },
}
</script>
<style src="./main.css"></style>
<style src="./user-edit.css">


</style>