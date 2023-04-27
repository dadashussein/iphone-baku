import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useCart } from "./CartContext";

const ProductWrapper = styled.div`
  padding: 15px;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: 0.5s all;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transform: translateY(-5px);
  }
`;

const Box = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e1e1e1;
  img {
    max-width: 180px;
  }

  @media screen and (max-width: 520px) {
    img {
      max-width: 160px;
    }
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
`;

const Title = styled(Link)`
  display: flex;
  margin-top: 5px;
  font-size: 18px;
  text-align: center;
  justify-content: center;
  color: black;
  text-decoration: none;

  @media screen and (max-width: 2000px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media screen and (max-width: 520px) {
    font-size: 13px;
  }
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const ProductBox = ({ _id, title, description, price, images }) => {
  const { addProduct } = useCart();

  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <Box href={url}>
        <StyledImage src={images[0]} alt={title} width={500} height={500} />
      </Box>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>{price} AZN</Price>
          <div>
            {" "}
            <Button onClick={() => addProduct(_id)} primary>
              Səbətə at
            </Button>
          </div>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
};

export default ProductBox;
