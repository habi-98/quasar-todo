<template>
    <div v-if="tasks.length > 0" class="q-ma-md">
        <q-scroll-area
         style="height: 400px">
        <q-card v-for="(task, index) in tasks" :key="index" flat bordered style="margin: 0 0 15px 0" class="my-card">
            <q-card-section>
                <div class="text-h6">{{ task.title }}</div>
                <div class="text-subtitle2">{{ task.desc }}</div>
            </q-card-section>
            <q-btn size="10px" @click="deleteTask(task.id)" class="delete-tsk" color="red" icon="delete" round />

        </q-card>
        </q-scroll-area>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Tasks',
  computed: {
    ...mapState('index', ['tasks'])
  },
  methods: {
    ...mapActions('index', ['deleteTask'])
  }
}
</script>
<style lang="scss">
.delete-tsk {
   position: absolute;
   top: 5px;
   right: 0;
   margin-right: 3px;
//    left: -10px;
}
</style>
