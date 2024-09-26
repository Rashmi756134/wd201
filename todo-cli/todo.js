/* eslint-disable no-undef */
const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        return all.filter(item => {
            return item.dueDate == yesterday;
        })
      // Write the date check condition here and return the array
      // of overdue items accordingly.
    }
  
    const dueToday = () => {
        return all.filter (item => {
            return item.dueDate == today
        })
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
    }
  
    const dueLater = () => {
        return all.filter (item => {
            return item.dueDate == tomorrow
        })
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
    }

    const toDisplayableList = (list) => {
        let display = ""
        for(let i = 0; i < list.length; i++){
            if(list[i].dueDate == today){
                if(list[i].completed == true){
                    display += `[x] ${list[i].title}\n`
                }
                else{
                    display += `[ ] ${list[i].title}`
                }
            }
            else{
                if(list[i].completed == true){
                    display += `[x] ${list[i].title} ${list[i].dueDate}\n`
                }
                else{
                    display += `[ ] ${list[i].title} ${list[i].dueDate}\n`
                }
            }
        }
        return display;
      // Format the To-Do list here, and return the output string
      // as per the format given above.
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
