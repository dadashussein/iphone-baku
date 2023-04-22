import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useCart } from "./CartContext";
import Bars from "./icons/Bars";
import { useState } from "react";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${(props) => (props.menu ? `display: block;` : `display : none;`)}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { cartProducts } = useCart();
  const [menu, setMenu] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>İphone Nakhchivan</Logo>
          <StyledNav menu={menu}>
            <NavLink href={"/"}>Ana səhifə</NavLink>
            <NavLink href={"/products"}>Bütün məhsullar</NavLink>
            <NavLink href={"/categories"}>Kategoriyalar</NavLink>
            <NavLink href={"/account"}>Şəxsi kabinet</NavLink>
            <NavLink href={"/cart"}>Səbət({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMenu((prev) => !prev)}>
            <Bars />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
