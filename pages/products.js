import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import ProductsGrid from "@/styles/ProductsGrid";
import Title from "@/styles/StyledTitle";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SelectType = styled.select`
  border: none;
  padding: 8px 13px;
  border-radius: 10px;
  height: min-content;

  option:nth-child(1) {
    color: gray;
  }
`;

const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  gap: 10px;

  input {
    border: none;
    padding: 8px 13px;
    border-radius: 10px;
    margin: 0 8px;
  }
  button {
    border: none;
    background-color: lightgray;
    border-radius: 10px;
    padding: 7px 15px;
  }

  @media screen and (max-width: 512px) {
    flex-direction: column;
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      button {
        max-width: 4rem;
      }
    }
  }
`;

const ProductsPage = ({ products, categories }) => {
  const [showProduct, setShowProduct] = useState([]);
  const [parent, setParent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [disableFilter, setDisableFilter] = useState(false);

  useEffect(() => {
    const parentCategory = () => {
      const selectedCategory = categories.find((cat) => cat.name === parent);

      if (selectedCategory) {
        const product = products.filter(
          (pro) => pro.category === selectedCategory._id
        );
        setShowProduct(product);
      }
    };

    parentCategory();
  }, [parent, categories, products]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter((product) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedProduct(filteredProducts);
    setDisableFilter(filteredProducts.length > 0);
  };

  return (
    <>
      <Header />
      <Center>
        <Title>Bütün məhsullar</Title>
        <StyledFilter>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Axtarış et..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Axtar</button>
          </form>

          <StyledCategory>
            <SelectType
              disabled={disableFilter}
              value={"non-cat"}
              onChange={(e) => {
                setParent(e.target.value);
              }}
            >
              <option value="non-cat" disabled hidden>
                -
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </SelectType>
            <p>Filter</p>
          </StyledCategory>
        </StyledFilter>
        <ProductsGrid
          products={
            searchedProduct.length > 0
              ? searchedProduct
              : showProduct.length > 0
              ? showProduct
              : products
          }
        />
      </Center>
    </>
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: "_id" - 1 });
  const categories = await Category.find({}, null, { sort: "_id" - 1 });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
