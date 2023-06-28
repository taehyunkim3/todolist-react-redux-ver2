import React from 'react'
import { styled } from 'styled-components'
import TodoInput from '../components/TodoInput';

const TodoInputContainerBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

height: 200px;
width: 100%;



`;


const TodoInputContainer = () => {
  return (
<>
<TodoInputContainerBlock>


<TodoInput>

</TodoInput>

</TodoInputContainerBlock>


</>
  )
}

export default TodoInputContainer