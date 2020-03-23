<template>
  <div class="wraper">
      <h4>Add Todo</h4>
      <q-form @submit.prevent="addTask({
        title: task.title,
        desc: task.desc
      })">
      <q-input @input="checkField" label="title" rounded outlined v-model="task.title" style="margin: 0 0 20px 0"/>
      <q-input @input="checkField" label="description" rounded outlined v-model="task.desc"/>
      <div style="color: red; padding: 10px; font-size: 16px;" v-if="error">
          <p>{{ error }}</p>
      </div>
      <div class="wraper-button">
          <q-btn type="submit"  class="text-center" color="secondary" label="Save" />
      </div>
      </q-form>
      <Tasks></Tasks>
  </div>
</template>

<script>
import Tasks from '../components/Tasks'
import { mapActions } from 'vuex'
export default {
  name: 'PageTodo',
  components: {
    Tasks
  },
  data () {
    return {
      task: {
        title: '',
        desc: '',
        id: ''
      },
      error: ''
    }
  },
  methods: {
    ...mapActions('index', ['createTask']),
    addTask (task) {
      this.checkField()
      if (!this.error) {
        this.createTask(task)
        this.task.title = ''
        this.task.desc = ''
      }
    },
    checkField () {
      this.error = !this.task.title && !this.task.desc
        ? 'Необходимо заполнить поле title и descrption!' : ''
    }
  }
}
</script>

<style lang="scss">
  .wraper {
    max-width: 800px;
    min-width: 320px;
    margin: 0 auto;
  }
  .wraper-button {
    text-align: center;
    padding: 20px 0 0 0;
  }
</style>
