import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/styles/ProductsGrid";
import Title from "@/styles/StyledTitle";

const ProductsPage = ({ products }) => {
  return (
    <>
      <Header />
      <Center>
        <Title>Bütün məhsullar</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: "_id" - 1 });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
