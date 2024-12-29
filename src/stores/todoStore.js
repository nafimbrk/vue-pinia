import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    // count: 5, name: "Eduardo"

    todoList: [
      { name: "Belajar Html", isDone: false },
      { name: "Belajar Css", isDone: false },
      { name: "Belajar Javascript", isDone: false },
      { name: "Belajar Php", isDone: false },
    ],
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,

    showAll(state) {
      return state.todoList;
    },
    doneOnly(state) {
      return state.todoList.filter((item) => item.isDone);
    },
    undoneOnly(state) {
      return state.todoList.filter((item) => !item.isDone);
    },
  },
  actions: {
    // increment() {
    //   this.count++;
    // },

    setAsDone(name) {
      // console.log(index)
      // console.log(this.todoList[index].name)
      // this.todoList[index].isDone = true;

      // console.log(name);
      this.todoList.find(item => item.name == name).isDone = true
    },
    setAsUndone(name) {
      // this.todoList[index].isDone = false;

      // console.log(name);
      this.todoList.find(item => item.name == name).isDone = false
    },
    addTodo(data) {
      // console.log(data)

      let exists = this.todoList.filter((item) => item.name == data).length;

      // console.log(exists)

      if (exists) {
        alert("new todo is existed in data");
        return;
      }

      this.todoList.push({ name: data, isDone: false });
    },
  },
});
