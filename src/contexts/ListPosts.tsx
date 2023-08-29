
import { createContext } from "react";

interface Issue {
  id: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
  number: number;
}

// interface ApiResponse {
//   items: Issue[];
// }

interface ListPostsContextType {
  myState: Issue[]; // Ou o tipo correto do estado
  setMyState: React.Dispatch<React.SetStateAction<Issue[]>>; // Ou o tipo correto da função
}

const ListPosts = createContext<ListPostsContextType | undefined>(undefined);

export default ListPosts