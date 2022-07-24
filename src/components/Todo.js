import React from 'react'

function Todo({ todo }) {


  return (
    <div className="todoItem">

        <span>{todo.name}</span>
    </div>
  )
}

export default Todo