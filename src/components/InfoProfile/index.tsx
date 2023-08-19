import { Container, Content, IconText, IconTextLink, ImgProfile, InfosProfile } from "./styles";

import avatar from "../../assets/avatar.png";
import githubBrands from "../../assets/icons/github-brands.svg";
import buildingSolid from "../../assets/icons/building-solid.svg";
import userGroupSolid from "../../assets/icons/user-group-solid.svg";
import arrowUpRightFromSquareSolid from "../../assets/icons/arrow-up-right-from-square-solid.svg";

export function InfoProfile() {
  return (
    <Container>
      <Content>
        <ImgProfile src={avatar} alt="" />

        <InfosProfile>
          <h1>Cameron Williamson</h1>

          <IconTextLink href="#">
            <div>
              Github
            </div>
            <div>
              <img src={arrowUpRightFromSquareSolid} alt="" style={{ marginLeft: '8px', width: '12px', height: '12px' }}/>
            </div>
          </IconTextLink>

          <div className="desc">
            <span>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </span>
          </div>

          <div className="infos">
            <IconText>
              <img src={githubBrands} alt="" style={{ marginRight: '8px', width: '18px' }} />
              cameronwll
            </IconText>
            <IconText>
            <img src={buildingSolid} alt="" style={{ marginRight: '8px', width: '18px' }} />
              Rocketseat
            </IconText>
            <IconText>
            <img src={userGroupSolid} alt="" style={{ marginRight: '8px', width: '18px' }} />
              32 seguidores
            </IconText>
          </div>
        </InfosProfile>
      </Content>
    </Container>
  );
}
