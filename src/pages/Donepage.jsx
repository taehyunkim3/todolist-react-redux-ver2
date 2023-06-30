import React from 'react'
import TodoTemplate from '../layout/TodoTemplate'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageLink from '../components/PageLink';

const DonePage = () => {

// const todos = useSelector(todos=>todos.todos);
// const param = useParams();
// const todo = todos.find((a)=>a.id==param.id);

  return (
    <>
        <TodoTemplate>
            <h1>donepage rhd</h1>
            <Link to='/'>돌아가기</Link>
        </TodoTemplate>
        <PageLink/> 
    </>
  )
}

export default DonePage