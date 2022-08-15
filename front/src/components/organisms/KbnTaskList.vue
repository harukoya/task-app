<template>
  <div class="task-list">
    <KbnTaskListHeader
        :name="name"
        @add="shown = true"
    />
    <ul class="task-list-items">
      <draggable
          v-model="draggableItems"
          :options="{ group: 'tasks' }"
          @change="handleChange"
          @end="handleEnd"
      >
        <li
            v-for="item in draggableItems"
            :key="item.id"
        >
          <KbnTaskCard
              v-bind="item"
              @remove="handleRemove"
          />
        </li>
      </draggable>
    </ul>
    <KbnTaskAddForm
        v-if="shown"
        :list-id="id"
        @close="shown = false"
    />
  </div>
</template>

<script>
import KbnTaskListHeader from '@/components/molecules/KbnTaskListHeader'
import KbnTaskCard from '@/components/molecules/KbnTaskCard'
import KbnTaskAddForm from '@/components/molecules/KbnTaskAddForm'
import { mapState } from 'vuex'
import draggable from 'vuedraggable'

export default {
  components: {
    KbnTaskListHeader,
    KbnTaskCard,
    KbnTaskAddForm,
    draggable
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tasks: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      shown: false
    }
  },
  computed: {
    draggableItems: {
      get() { return this.tasks },
      set (value) {}
    },
    ...mapState({
      canMove: state => state.dragging.target !== null &&
        state.dragging.from !== null &&
        state.dragging.to !== null
    })
  },
  methods: {
    handleRemove ({ id, listId }) {
      return this.$store.dispatch('removeTask', { id, listId })
        .catch(err => Promise.reject(err))
    },

    handleChange ({ added, removed }) {
      if (added) {
        return this.$store.dispatch('moveToTask', {
          id: added.element.id,
          listId: this.id
        }).catch(err => Promise.reject(err))
      } else if (removed) {
        return this.$store.dispatch('moveTaskFrom', {
          id: removed.element.id,
          listId: this.id
        }).catch(err => Promise.reject(err))
      }
    },

    handleEnd () {
      if (this.canMove) {
        return this.$store.dispatch('performTaskMoving')
          .catch(err => Promise.reject(err))
      }
    }
  }
}

</script>
