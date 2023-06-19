import { ShoppingCart, User } from 'phosphor-react'
import {
  HeaderActionsIcon,
  HeaderContainer,
  HeaderContent,
  HeaderLinksContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>VASHIRT</h2>

        <HeaderLinksContainer>
          <a href="#">INICIO</a>
          <a href="#">PRODUTOS</a>
          <a href="#">CONTATO</a>
        </HeaderLinksContainer>

        <HeaderActionsIcon>
          <User size={24} />
          <ShoppingCart size={24} />
        </HeaderActionsIcon>
      </HeaderContent>
    </HeaderContainer>
  )
}
