import userEdit from './user-edit.vue'
export default {
  name: 'usersList',
  components: {
    userEdit
  },
  props: ['UsersList'],
  data(){
    return {
      selectedUser: undefined,
      users: undefined
    }
  },
   methods: {
        onUpdate() {
          this.selectedUser = undefined
      }
    },
  watch: {
    UsersList: {
      handler() {
        this.$emit('updateParent')
        localStorage.users = JSON.stringify(this.UsersList);
      },
      deep: true
    },
  },
}
