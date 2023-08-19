import { CodeComment, CodeLine, CodePost, CodeValue, CodeVar, Container, Content, TextPost } from "./styles";

export function ContentPost() {
  return (
    <Container>
      <Content>
        <TextPost>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            <br />
            <br />
            <span> Dynamic typing </span>
            <br />
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
          </p>
        </TextPost>
        <CodePost>
          <CodeLine>
            <CodeVar>let</CodeVar> foo = <CodeValue>42</CodeValue>; <CodeComment>   // foo is now a number </CodeComment> <br />
          </CodeLine>
          <CodeLine>
            foo = <CodeValue>'bar'</CodeValue>; <CodeComment>   // foo is now a string </CodeComment> <br />
          </CodeLine>
          <CodeLine>
            foo = <CodeValue>true</CodeValue>; <CodeComment>   // foo is now a boolean </CodeComment>; <br />
          </CodeLine>
        </CodePost>
      </Content>
    </Container>
  )
}