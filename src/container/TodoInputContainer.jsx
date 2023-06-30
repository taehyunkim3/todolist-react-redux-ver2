import React from 'react'
import { styled } from 'styled-components'
import TodoInput from '../components/TodoInput';

const TodoInputContainer = () => {
  return (
      <TodoInputContainerBlock>
        <TodoInput/>
      </TodoInputContainerBlock>
  )
}

const TodoInputContainerBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 200px;
width: 100%;
`;

export default TodoInputContainer