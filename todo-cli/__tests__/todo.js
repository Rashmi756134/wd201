/* eslint-disable no-undef */
const todoList = require("../todo");

describe("Todolist Test suite", () => {
  let all, markAsComplete, dueLater, dueToday, overdue, today;

  beforeAll(() => {
    ({ all, markAsComplete, add, dueLater, dueToday, overdue } = todoList());

    today = new Date().toISOString().slice(0, 10);
  });

  test("should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should overdue items", () => {
    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .slice(0, 10);

    add({
      title: "Test overdue todo",
      completed: false,
      dueDate: yesterday,
    });
    expect(overdue().length).toBe(1);
  });

  test("should add a todo to due today array", () => {
    add({
      title: "Test due today",
      completed: false,
      dueDate: today,
    });
    expect(dueToday().length).toBe(2);
  });

  test("should add a todo to due later array", () => {
    let tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .slice(0, 10);

    add({
      title: "Test due later",
      completed: false,
      dueDate: tomorrow,
    });

    expect(dueLater().length).toBe(1);
  });
});
