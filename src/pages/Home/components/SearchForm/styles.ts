import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: solid 1px ${({theme}) => theme["Base-Border"]};
    background: ${props => props.theme["Base-Input"]};
    color: ${props => props.theme.Blue};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["Turquoise-Green"]};
    }
    &:hover {
      
    }
  }
`;