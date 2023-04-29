import ProductBox from "@/components/ProductBox";
import styled from "styled-components";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  @media screen and (max-width: 1227px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 445px){
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  }
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </StyledProductsGrid>
  );
}

