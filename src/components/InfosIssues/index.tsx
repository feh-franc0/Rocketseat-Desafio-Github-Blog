import { BackToHome, Container, Content, Header, IconText, IconTextLink, InfosProfile } from "./styles";

import githubBrands from "../../assets/icons/github-brands.svg";
import calendarDaySolid from "../../assets/icons/calendar-day-solid.svg";
import commentSolid from "../../assets/icons/comment-solid.svg";
import chevronLeftSolid from "../../assets/icons/chevron-left-solid.svg";
import arrowUpRightFromSquareSolid from "../../assets/icons/arrow-up-right-from-square-solid.svg";
import { Link } from "react-router-dom";
import { differenceInDays, parseISO } from 'date-fns';

interface Props {
  title?: string;
  user?: string;
  created_at?: string;
  comment?: number
  urlGithub?: string
}

export function InfosIssues( {title = '', user = '',comment = 0, created_at = '', urlGithub = ''}: Props ) {
  console.log({title, user,comment, created_at})
  const createdAt = created_at;
  const parsedCreatedAt = parseISO(createdAt);

  const today = new Date();
  const daysSinceCreation = differenceInDays(today, parsedCreatedAt);

  return (
    <Container>
      <Content>
        <InfosProfile>
          
          <Header>
            <BackToHome>
              <Link to="/">
              <img src={chevronLeftSolid} alt="" style={{ marginRight: '8px', width: '12px', height: '12px' }} />
              Voltar
              </Link>
            </BackToHome>

            <IconTextLink href={urlGithub} target="_blank">
              <div>
                ver no github
              </div>
              <div>
                <img src={arrowUpRightFromSquareSolid} alt="" style={{ marginLeft: '8px', width: '12px', height: '12px' }}/>
              </div>
            </IconTextLink>
          </Header>

          <h1>{title}</h1>

          <div className="infos">
            <IconText>
              <img src={githubBrands} alt="" style={{ marginRight: '8px', width: '18px' }} />
              {user}
            </IconText>
            <IconText>
            <img src={calendarDaySolid} alt="" style={{ marginRight: '8px', width: '18px' }} />
              Há {daysSinceCreation} {daysSinceCreation === 1 ? 'dia' : 'dias'}.
            </IconText>
            <IconText>
            <img src={commentSolid} alt="" style={{ marginRight: '8px', width: '18px' }} />
              {comment} comentários
            </IconText>
          </div>
        </InfosProfile>
      </Content>
    </Container>
  );
}
