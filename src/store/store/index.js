const state = {
  tasks: []
}

const mutations = {
  setTaskToState: (state, task) => {
    task.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    state.tasks.push(task)
  },
  deleteTaskInState: (state, id) => {
    const newTasks = state.tasks.filter(task => task.id !== id)
    console.log(newTasks, 'new tasks')
    state.tasks = newTasks
  }
}

const actions = {
  createTask: (ctx, task) => {
    ctx.commit('setTaskToState', task)
  },
  deleteTask: (ctx, id) => {
    console.log(id, 'task id')
    ctx.commit('deleteTaskInState', id)
  }

}

const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
