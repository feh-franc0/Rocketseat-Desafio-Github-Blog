import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  /* background: ${props => props.theme['Dark-Blue']}; */
  /* padding: 2.5rem 0 7.5rem; */
`;

export const Cover = styled.div<{ backgroundimage: string }>`
  width: 100%;
  height: 296px;
  background-image: url(${props => props.backgroundimage});
  background-size: 100% 100%;
  position: relative;
`;

export const CenteredImage = styled.img`
  position: absolute;
  top: calc(50% - 40px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 148px;
  height: 116px;
`;


export const Image = styled.img`
  width: 100%;
  /* max-width: 1120px; */
  /* margin: 0 auto; */
  /* padding: 0 1.5rem; */
  height: 296px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 48px;
    border-radius: 50%;
    border: solid 2px black;
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme['Lime-Green']};
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme['Soft-Dark-Blue']};
    transition: background-color 0.2s;
  }
`;