
import Center from "./Center";
import ProductsGrid from "@/styles/ProductsGrid";
import Title from "@/styles/StyledTitle";

const NewProducts = ({ products }) => {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
};

export default NewProducts;
