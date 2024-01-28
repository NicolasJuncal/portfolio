import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
height: 3rem;
font-size: 1rem;
font-weight: 1rem;
letter-spacing: 1px;
padding: 13px 50px 13px;
outline: 0;
border: 2px solid #E4E4DE; /* Ethereal Ivory */
cursor: pointer;
position: relative;
background-color: rgba(0, 0, 0, 0);
text-decoration: none;
color: black;

  &:hover {
    cursor: pointer;
    background-color: #595f39; /* Muted Moss */
    transition: linear 0.3s;
    color: rgb(250, 253, 255);
  }
`;
const EmojiContainer = styled.span`
  font-size: 1rem;
`;
export default function Nav() {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/Nicolas_Juncal_CV.pdf" download>
        Resume 
        <EmojiContainer>
        <span role="img" aria-label="Download"> 📂</span>
      </EmojiContainer>

      </StyledLink>
    </nav>
  );
}
