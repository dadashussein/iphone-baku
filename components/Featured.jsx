import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useCart } from "./CartContext";
import Image from "next/image";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: flex;
  gap: 40px;
  img {
    max-width: 100%;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    img {
      max-width: 300px;
      gap: 0;
    }
  }
  @media screen and (max-width: 520px) {
    img {
      max-width: 250px;
      gap: 0;
    }
  }
`;


const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Featured = ({ product }) => {
  const { addProduct } = useCart();
  const addFeaturedToCart = () => {
    addProduct(product._id);
  };
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  outline={1}
                  white={1}
                >
                  Daha çox
                </ButtonLink>
                <Button primary onClick={addFeaturedToCart}>
                  <CartIcon />
                  Səbətə əlavə et
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src={product.images[2]} alt="" />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
};

export default Featured;
