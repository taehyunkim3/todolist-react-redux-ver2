import React from 'react'
import TodoTemplate from '../layout/TodoTemplate'
import TodoInputContainer from '../container/TodoInputContainer'
import TodoItemContainer from '../container/TodoItemContainer'
import PageLink from '../components/PageLink'



const MainPage = () => {


  return (
   <>
   <TodoTemplate>
    <TodoInputContainer/>
    <TodoItemContainer/>
   </TodoTemplate>
  <PageLink/>
   
   </>
  )
}

export default MainPage