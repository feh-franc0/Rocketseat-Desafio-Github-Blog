import { Link } from "react-router-dom";
import { PublicationsList, Publication } from "./styles";

export function ListPublications() {
  return(
    <PublicationsList>
      
    <Publication>
      <Link to="/post" style={{
        color: 'inherit',
        textDecoration: 'none'
      }}>
      <h2>subtitulo</h2>
      <div>Há 1 dia</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo veritatis iure! Repellendus tenetur mollitia ipsam deleniti facere, accusantium ea aliquam veritatis, corrupti quaerat libero perspiciatis doloremque tempora? In, dignissimos.
      </p>
      </Link>  
    </Publication>
      
    <Publication>
      <Link to="/post" style={{
        color: 'inherit',
        textDecoration: 'none'
      }}>
      <h2>subtitulo</h2>
      <div>Há 1 dia</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo veritatis iure! Repellendus tenetur mollitia ipsam deleniti facere, accusantium ea aliquam veritatis, corrupti quaerat libero perspiciatis doloremque tempora? In, dignissimos.
      </p>
      </Link>  
    </Publication>

    </PublicationsList>
  )
}