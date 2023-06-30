import React from 'react'
import TodoTemplate from '../layout/TodoTemplate'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageLink from '../components/PageLink';

const DetailPage = () => {
const todos = useSelector(todos=>todos.todos);
const param = useParams();
const todo = todos.find((a)=>a.id==param.id);

  return (
    <>
      <TodoTemplate>
          <h1>제목 :{todo.title}</h1>
          <h2>내용: {todo.body}</h2>
          <p>{todo.id}</p>
          <h2>{todo.isDone? '완료된 항목입니다!' : null}</h2>
        <Link to='/'>돌아가기</Link>
      </TodoTemplate>
      <PageLink/>
    </>
  )
}

export default DetailPage