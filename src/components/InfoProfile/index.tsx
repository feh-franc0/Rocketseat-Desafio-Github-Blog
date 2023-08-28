import { Container, Content, IconText, IconTextLink, ImgProfile, InfosProfile } from "./styles";

import githubBrands from "../../assets/icons/github-brands.svg";
import buildingSolid from "../../assets/icons/building-solid.svg";
import userGroupSolid from "../../assets/icons/user-group-solid.svg";
import arrowUpRightFromSquareSolid from "../../assets/icons/arrow-up-right-from-square-solid.svg";
import { useEffect, useState } from "react";
import axios from "axios";

interface GitHubUserData {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
}

export function InfoProfile() { 
  const [login, setLogin] = useState<string>('')
  const [avatarUrl, setAvatarUrl] = useState<string>('')
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>();
  const [bio, setBio] = useState<string>()
  const [followersCount, setFollowersCount] = useState<number>(0);

  const fetchUserGithubData = async () => {
    try {
      const {data} = await axios.get<GitHubUserData>(`https://api.github.com/users/feh-franc0`)
      const {avatar_url,bio,followers,company,login,name} = data
      
      setLogin(login)
      setAvatarUrl(avatar_url)
      setName(name)
      setCompany(company)
      setBio(bio)
      setFollowersCount(followers)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserGithubData()
  }, [])

  return (
    <Container>
      <Content>
        <ImgProfile src={avatarUrl} alt="" />

        <InfosProfile>
          <h1>{name}</h1>

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
              {bio}
            </span>
          </div>

          <div className="infos">
            <IconText>
              <img src={githubBrands} alt="" style={{ marginRight: '8px', width: '18px' }} />
              {login}
            </IconText>
            <IconText>
            <img src={buildingSolid} alt="" style={{ marginRight: '8px', width: '18px' }} />
              {company}
            </IconText>
            <IconText>
            <img src={userGroupSolid} alt="" style={{ marginRight: '8px', width: '18px' }} />
              {followersCount} seguidores
            </IconText>
          </div>
        </InfosProfile>
      </Content>
    </Container>
  );
}
