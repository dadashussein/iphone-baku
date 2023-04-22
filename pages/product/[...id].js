import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Title from "@/styles/StyledTitle";
import styled from "styled-components";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useCart } from "@/components/CartContext";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
  img {
    max-width: 100%;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 40px 0;
  }
`;

const Box = styled.div``;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.2rem;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useCart();
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <Box>
            <ProductImages images={product.images} />
          </Box>

          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>AZN {product.price}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon /> Səbətə at
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
