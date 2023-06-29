import React from 'react'
import TodoTemplate from '../layout/TodoTemplate'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageLink from '../components/PageLink';

const DonePage = () => {

const todos = useSelector(todos=>todos.todos);
const param = useParams();
console.log(param.id)

const todo = todos.find((a)=>a.id==param.id);
console.log(todo)

  return (
    <>
    <TodoTemplate>
 
<h1>donepage</h1>

<Link to='/'>돌아가기</Link>
    </TodoTemplate>
    <PageLink/>
    
    </>
  )
}

export default DonePage