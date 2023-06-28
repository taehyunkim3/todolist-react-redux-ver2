import React from 'react'
import TodoTemplate from '../layout/TodoTemplate'
import TodoInputContainer from '../container/TodoInputContainer'
import TodoItemContainer from '../container/TodoItemContainer'

const MainPage = () => {
  return (
   <>
   <TodoTemplate>
    <TodoInputContainer/>

    <TodoItemContainer/>

   </TodoTemplate>
   
   
   </>
  )
}

export default MainPage