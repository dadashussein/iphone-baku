import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useCart } from "./CartContext";

const ProductWrapper = styled.div``;

const Box = styled(Link)`
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  img {
    max-width: 140px;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const ProductBox = ({ _id, title, description, price, images }) => {
  const { addProduct } = useCart();

  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <Box href={url}>
        <div>
          <StyledImage src={images[0]} alt={title} width={500} height={500} />
        </div>
      </Box>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>{price} AZN</Price>
          <div>
            {" "}
            <Button onClick={() => addProduct(_id)} primary outline>
              Əlavə et
            </Button>
          </div>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
};

export default ProductBox;
