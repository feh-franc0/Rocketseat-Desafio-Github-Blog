// import { MagnifyingGlass } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { SearchFormContainer } from "./styles";
import axios from "axios";
import ListPosts from "../../../../contexts/ListPosts";

interface Issue {
  id: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
  number: number;
}

interface ApiResponse {
  items: Issue[];
}

export function SearchForm() {
  const context = useContext(ListPosts);

  if (!context) { throw new Error("ListPostsContext not provided"); }

  const { setMyState } = context;

  const [textSearch, setTextSearch] = useState<string>("");
  // const [searchResults, setSearchResults] = useState<Issue[]>([]);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get<ApiResponse>(
        `https://api.github.com/search/issues?q=${textSearch}%20repo:feh-franc0/Rocketseat-Desafio-Github-Blog`
      );
      setMyState(data.items);
    } catch (error) {
      console.log("Erro ao buscar dados: ", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [textSearch]);

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="busque por posts"
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
      />
    </SearchFormContainer>
  );
}
