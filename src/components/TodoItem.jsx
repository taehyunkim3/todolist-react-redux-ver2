import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'






const TodoItemBlock = styled.div`
border-bottom: 1px dotted gray;



    display: grid;
    grid-template-columns: 1fr 14fr 2fr 2fr;
    font-size: 1.8rem;

p{
    height: 20px;
    cursor: pointer;
}
.done{
    font-size: 1.4rem;
    
}
.delete{
    font-size: 1.4rem;
}
`;





const TodoItem = ({todo, onDelete, onChange}) => {

const navigate = useNavigate();

  return (
    <TodoItemBlock>

            <p>1. </p>
            <p className='title' onClick={()=>{navigate(`/${todo.id}`)}}>{todo.title}</p>
            <p className='done' onClick={()=>{onChange(todo.id)}}>완료하기!</p>
            <p className='delete' onClick={()=>{onDelete(todo.id)}}>지우기!</p>

    </TodoItemBlock>
  )
}

export default TodoItem