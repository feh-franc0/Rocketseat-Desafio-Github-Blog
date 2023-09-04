import { Link } from "react-router-dom";
import { PublicationsList, Publication } from "./styles";
import ListPosts from "../../contexts/ListPosts";
import { useContext } from "react";
import { differenceInDays, parseISO } from 'date-fns';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export function ListPublications() {

  const context = useContext(ListPosts);

  if (!context) { throw new Error("ListPostsContext not provided"); }

  const { myState } = context;

  console.log("myState: ", myState)

  return(
    <PublicationsList>
    {myState.map((issue) => {
      const parsedCreatedAt = parseISO(issue.created_at);
      const today = new Date();
      const daysSinceCreation = differenceInDays(today, parsedCreatedAt);

      return (
        <Publication key={issue.id}>
          <Link
            to={`/post/${issue.number}`}
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <h2>{issue.title}</h2>
            <div>há {daysSinceCreation} {daysSinceCreation === 1 ? 'dia' : 'dias'}.</div>
            <p>
              <ReactMarkdown>
                {issue.body.length > 300 ? issue.body.slice(0, 100 - 3) + "..." : issue.body}
              </ReactMarkdown>
            </p>
          </Link>
        </Publication>
      );
    })}
    </PublicationsList>
  )
}
