import { useContext } from "react";
import { InfoProfile } from "../../components/InfoProfile";
import { ListPublications } from "../../components/ListPublications";
import ListPosts from "../../contexts/ListPosts";
import { SearchForm } from "./components/SearchForm";
import { Container, HeaderContent, TransactionsContainer } from "./styles";

export function Home() {
  
  const context = useContext(ListPosts);

  if (!context) { throw new Error("ListPostsContext not provided"); }

  const { myState } = context;

  return (
    <Container>
      <InfoProfile />

      <TransactionsContainer>
        <HeaderContent>
          <h3> Publicações </h3>
          <span> {myState.length} {myState.length === 1 ? 'publicação' : 'publicações'} </span>
        </HeaderContent>

        <SearchForm />
        <ListPublications />
      </TransactionsContainer>
    </Container>
  )
}