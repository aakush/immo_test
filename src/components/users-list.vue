<template>
  <div class="users-list" >
    <table class="table-users-list">
        <tr><th>Логин</th><th>Имя</th><th>Кол-во задач</th><th>Действия</th><tr>
        <tr v-for="user in UsersList" :key="user.id">
          <td>{{user.username}}</td> <td>{{user.name}}</td> <td>{{user.tasks}}</td> <td><input type="button" v-on:click="selectedUser = user" value="Редактировать"></td>
        </tr>
    </table>
    <user-edit v-if="selectedUser" v-bind:user="selectedUser" @updateParent="onUpdate"/>
  </div>
</template>

<script src="./users-list.js"></script>

<style src="./main.css"></style>
<style src="./users-list.css"></style>
