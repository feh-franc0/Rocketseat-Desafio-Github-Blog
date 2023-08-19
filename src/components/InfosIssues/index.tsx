import { BackToHome, Container, Content, Header, IconText, IconTextLink, InfosProfile } from "./styles";

import githubBrands from "../../assets/icons/github-brands.svg";
import calendarDaySolid from "../../assets/icons/calendar-day-solid.svg";
import commentSolid from "../../assets/icons/comment-solid.svg";
import chevronLeftSolid from "../../assets/icons/chevron-left-solid.svg";
import arrowUpRightFromSquareSolid from "../../assets/icons/arrow-up-right-from-square-solid.svg";
import { Link } from "react-router-dom";

export function InfosIssues() {
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

            <IconTextLink href="#">
              <div>
                Github
              </div>
              <div>
                <img src={arrowUpRightFromSquareSolid} alt="" style={{ marginLeft: '8px', width: '12px', height: '12px' }}/>
              </div>
            </IconTextLink>
          </Header>

          <h1>JavaScript data types and data structures</h1>

          <div className="infos">
            <IconText>
              <img src={githubBrands} alt="" style={{ marginRight: '8px', width: '18px' }} />
              cameronwll
            </IconText>
            <IconText>
            <img src={calendarDaySolid} alt="" style={{ marginRight: '8px', width: '18px' }} />
              Há 1 dia
            </IconText>
            <IconText>
            <img src={commentSolid} alt="" style={{ marginRight: '8px', width: '18px' }} />
              32 seguidores
            </IconText>
          </div>
        </InfosProfile>
      </Content>
    </Container>
  );
}
