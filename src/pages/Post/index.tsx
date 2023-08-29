import { useParams } from "react-router-dom";
import { ContentPost } from "../../components/ContentPost"
import { InfosIssues } from "../../components/InfosIssues"
import { Container } from "./styles"
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  avatar_url: string;
  login: string;
}

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  number: number;
  comments: number;
  user: User
}

export function Post() {
  const [issueDatas, setIssueDatas] = useState<Issue>()

  const { IssueItem } = useParams();
  
  const handleSearch = async () => {
    try {
      const { data } = await axios.get<Issue>(
        `https://api.github.com/repos/feh-franc0/Rocketseat-Desafio-Github-Blog/issues/${IssueItem}`
      );
      setIssueDatas(data);
    } catch (error) {
      console.log("Erro ao buscar dados: ", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  console.log("issueDatas: ", issueDatas)

  return (
    <div>
      <Container>
        <InfosIssues />
        <ContentPost />
      </Container>
    </div>
  )
}