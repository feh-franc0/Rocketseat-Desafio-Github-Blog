import { InfoProfile } from "../../components/InfoProfile";
import { ListPublications } from "../../components/ListPublications";
import { SearchForm } from "./components/SearchForm";
import { Container, HeaderContent, TransactionsContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <InfoProfile />

      <TransactionsContainer>
        <HeaderContent>
          <h3> Publicações </h3>
          <span> 6 publicações </span>
        </HeaderContent>
        <SearchForm />
        <ListPublications />
      </TransactionsContainer>
    </Container>
  )
}