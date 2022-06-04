<template>
  <div id="app">
    <div id="trello-header" class="h-12 p-2">
      <h1 class="text-sm font-bold">Trello風タスク管理</h1>
    </div>
    <div id="trello-content" class="flex">
      <div
        v-for="(category, index) in displayCategories"
        :key="index"
        style="min-width: 400px;"
        >
        <div
          class="bg-gray-200 m-2 p-2 text-sm"
          @dragstart.self="dragCategory(category)"
          @dragover="dragOverCategory(category)"
          draggable=true
        >
          <div class="font-bold">{{ category.name }}</div>
          <div
            v-for="(task, index) in category.tasks"
            :key="index"
            class="m-2 bg-white p-2"
            @dragstart="dragTask(task)"
            @dragover="dragOverTask(task)"
            draggable=true
            >
            {{ task.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      task: '',
      category: '',
      type: '',
      categories: [
        {
          id: 1,
          name: "カテゴリ１",
          collapsed: false
        },
        {
          id: 2,
          name: "カテゴリ２",
          collapsed: false
        },
        {
          id: 3,
          name: "カテゴリ３",
          collapsed: false
        },
      ],
      tasks: [
        {
          id: 1,
          category_id: 1,
          name: "タスク１",
          start_date: "2022-06-01",
          end_date: "2022-06-05",
          incharge_user: "鈴木",
          percentage: 100
        },
        {
          id: 2,
          category_id: 3,
          name: "タスク２",
          start_date: "2022-06-11",
          end_date: "2022-06-15",
          incharge_user: "佐藤",
          percentage: 80
        },
        {
          id: 3,
          category_id: 2,
          name: "タスク３",
          start_date: "2022-06-21",
          end_date: "2022-06-25",
          incharge_user: "鈴木",
          percentage: 40
        },
        {
          id: 4,
          category_id: 1,
          name: "タスク４",
          start_date: "2022-06-02",
          end_date: "2022-06-15",
          incharge_user: "山下",
          percentage: 60
        }
      ]
    }
  },
  computed: {
    displayCategories() {
      return this.categories.map((category) => {
        const tasks = this.tasks.filter(
          (task) => task.category_id === category.id
        );
        return {
          id: category.id,
          name: category.name,
          tasks,
        };
      });
    }
  },
  methods: {
    dragTask(task) {
      this.task = task;
      this.type = 'task';
    },
    dragCategory(category) {
      this.category = category;
      this.type = 'category';
    },
    dragOverTask(overTask) {
      if (overTask.id !== this.task.id && this.type === 'task') {
        const deleteIndex = this.tasks.findIndex(
          (task) => task.id === this.task.id
        );
        const addIndex = this.tasks.findIndex(
          (task) => task.id === overTask.id
        );
        this.tasks.splice(deleteIndex, 1);
        this.task.category_id = overTask.category_id;
        this.tasks.splice(addIndex, 0, this.task);
      }
    },
    dragOverCategory(overCategory) {
      if (overCategory.id !== this.category.id && this.type === 'category') {
        const deleteIndex = this.categories.findIndex(
          (category) => category.id === this.category.id
        );
        const addIndex = this.categories.findIndex(
          (category) => category.id === overCategory.id
        );
        this.categories.splice(deleteIndex, 1);
        this.categories.splice(addIndex, 0, this.category);
      } else if (this.task.category_id !== overCategory.id) {
        const tasks = this.tasks.filter(
          (task) => task.category_id === overCategory.id
        );
        if (tasks.length === 0) this.task.category_id = overCategory.id;
      }
    }
  }
})
</script>

<style>

</style>
