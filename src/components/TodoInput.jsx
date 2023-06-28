import React from 'react'
import { styled } from 'styled-components'




const TodoInputBlock = styled.div`

display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;

width:90%;
form {
    width: 100%;
    height: 100%;

}

input {
    height: 40px;
    width: 70%;
    background: none;
    border: none;
    border-bottom: 1px dotted gray;
margin-bottom: 5px;
font-size: 1.5rem;
font-family: 'Hi Melody', cursive;
}

button {
    height: 60px;
    border: none;
    border-radius: 20px;
    translate: 30px -30px;
    font-size: 1.5rem;
    font-family: 'Hi Melody', cursive;

}
`;


const TodoInput = () => {
  return (
    <TodoInputBlock>
        <form>
제목 : <input type='text'/><br/>
내용 : <input type='text'/>
<button type='submit'>등록하기</button>
        </form>



    </TodoInputBlock>
  )
}

export default TodoInput