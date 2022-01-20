import fetch from 'cross-fetch';

interface GetTodosResponse{
        userId: number,
        id: number,
        title: string,
        completed: boolean
}

function getTodosByCount(count: number){
    for (let i = 0; i < count; i++) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.text())
  .then<GetTodosResponse>(responseText => {
      return JSON.parse(responseText)})
      .then(responseText=>console.log(responseText))
}
}
getTodosByCount(10)