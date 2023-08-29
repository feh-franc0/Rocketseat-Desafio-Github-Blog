import { Link } from "react-router-dom";
import { PublicationsList, Publication } from "./styles";
import ListPosts from "../../contexts/ListPosts";
import { useContext } from "react";

export function ListPublications() {

  const context = useContext(ListPosts);

  if (!context) { throw new Error("ListPostsContext not provided"); }

  const { myState } = context;

  console.log("myState: ", myState)

  return(
    <PublicationsList>

      {myState.map((issue) => (
        <Publication key={issue.id}>
          <Link to={`/post/${issue.number}`} style={{
            color: 'inherit',
            textDecoration: 'none'
          }}>
          <h2>{issue.title}</h2>
          <div>{issue.created_at}</div>
          <p> {issue.body} </p>
          </Link>  
        </Publication>
      ))}

    </PublicationsList>
  )
}