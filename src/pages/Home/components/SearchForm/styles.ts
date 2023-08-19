import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: solid 1px ${({theme}) => theme["Base-Border"]};
    background: ${props => props.theme["Base-Input"]};
    color: ${props => props.theme["Base-Label"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["Turquoise-Green"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${props => props.theme["Soft-White"]};
    color: ${props => props.theme["Soft-Dark-Blue"]};
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: ${props => props.theme["gray-900"]};
      border-color: ${props => props.theme["gray-800"]};
      color: ${props => props.theme["gray-700"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;