import { ContentPost } from "../../components/ContentPost"
import { InfosIssues } from "../../components/InfosIssues"
import { Container } from "./styles"

export function Post() {
  return (
    <div>
      <Container>
        <InfosIssues />
        <ContentPost />
      </Container>
    </div>
  )
}