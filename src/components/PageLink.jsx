import React from 'react'
import { useNavigate } from 'react-router-dom';
import {styled} from 'styled-components'

const LinkContainer = styled.div`
margin-top: 300px;

`;
const DoneLink = styled.div`
background-color:#2db57d;
height: 60px;
width: 100px;
margin-top:10px;
text-align: right;
z-index:0;
translate: -30px;
cursor:pointer;
`;

const PageLink = () => {
    const navigate=useNavigate();
  return (<LinkContainer>
  <DoneLink onClick={()=>{navigate('/done')}}>완료목록</DoneLink>
  <DoneLink onClick={()=>{navigate('/done')}}>돌아가기</DoneLink>
  <DoneLink onClick={()=>{navigate('/done')}}>할일목록</DoneLink>
  </LinkContainer>

  )
}

export default PageLink