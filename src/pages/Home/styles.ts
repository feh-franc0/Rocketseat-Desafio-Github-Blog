import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme["Base-Background"]};
`;

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 4rem auto 0;
  /* padding: 0 1.5rem; */
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;

  h3 {
    color: ${({theme}) => theme["Base-Subtitle"]};
  }

  span {
    color: ${({theme}) => theme["Base-Span"]};
    font-size: 12px;
  }
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme["Lime-Green"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.variant === 'income' ? props.theme["Blue-Gray"] : props.theme["Turquoise-Green"]}
`;