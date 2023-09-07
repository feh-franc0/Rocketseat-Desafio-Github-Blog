import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 864px;
  max-height: 212px;
  min-height: 168px;
  
  margin: 0 auto;
  /* padding: 0 1.5rem; */

  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 2rem;

  margin-top: -5rem;
`;

export const Content = styled.div`
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: row;
  background: ${props => props.theme["Base-Profile"]};
  border-radius: 6px;
  padding: 2rem;
  width: 100%;  
`;

export const ImgProfile = styled.img`
  width: 148px;
  height: 148px;
  margin-right: 32px;
`;

export const InfosProfile = styled.div`
  color: ${({theme}) => theme["Base-Text"]};
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  position: relative;

  a {
    position: absolute;
    top: 0;
    right: 0;
    /* padding: 10px; */
    color: ${({theme}) => theme.Blue};
    
    text-transform: uppercase;
    text-decoration: none;
  }

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${({theme}) => theme.white};
  }

  .infos {
    display: flex;
    flex-direction: row;
    gap: 24px;
    
    img {
      width: 18px;
    }
  }
`;

export const IconText = styled.div`
  display: flex;
  align-items: center;
`;


export const IconTextLink = styled.a`
  display: flex;
  flex-direction: row;
  /* align-items: center; */

  div {
    display: flex;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;