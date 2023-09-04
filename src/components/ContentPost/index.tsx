import { Container, Content } from "./styles";
import ReactMarkdown from 'react-markdown'

interface dataIssue {
  bodyText?: string
}

export function ContentPost({bodyText = ''}: dataIssue) {
  return (
    <Container>
      <Content>
        <ReactMarkdown>
          {bodyText}
        </ReactMarkdown>
      </Content>
    </Container>
  )
}