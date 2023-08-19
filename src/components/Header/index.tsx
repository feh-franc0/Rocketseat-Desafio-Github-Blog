import { CenteredImage, Cover, HeaderContainer } from "./styles";
// import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/Cover.jpg'
import LogoGithubBlog from '../../assets/LogoGithubBlog.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Cover backgroundimage={logoImg}>
        <CenteredImage src={LogoGithubBlog} alt="Imagem Centralizada" />
      </Cover>
    </HeaderContainer>
  )
}