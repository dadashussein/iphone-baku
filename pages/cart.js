import Button from "@/components/Button";
import { useCart } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Table from "@/styles/StyledTable";
import Input from "@/styles/StyledInput";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 130px;
  height: 130px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  img {
    max-width: 130px;
    max-height: 130px;
  }
  @media screen and (max-width: 768px) {
    padding: 2px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0 15px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useCart();
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rayon, setRayon] = useState("");
  const [kuce, setKuce] = useState("");
  const [tamunvan, setTamunvan] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
    }
  }, []);

  const moreProduct = (id) => {
    addProduct(id);
  };

  const lessProduct = (id) => {
    removeProduct(id);
  };

  const goToPayment = async () => {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      rayon,
      kuce,
      tamunvan,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  };

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Sifarişiniz üçün təşəkkür edirik!</h1>
              <p>Sifarişiniz göndərildikdə sizə e-poçt göndərəcəyik.</p>
              <span>Hörmətlə Dadaş Hüseynzadə</span>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Səbət</h2>
            {!cartProducts?.length && <div>Səbətiniz boşdur</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Məhsul</th>
                    <th>Miqdar</th>
                    <th>Cəm</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <Image
                            src={product.images[0]}
                            width={500}
                            height={500}
                            alt={product.title}
                          />
                        </ProductImageBox>
                        {product.title} :{" "}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => lessProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => moreProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        ₼
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td> ₼ {total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Sifariş məlumatları</h2>

              <Input
                type="text"
                placeholder="Ad"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="Rayon"
                  value={rayon}
                  onChange={(e) => setRayon(e.target.value)}
                  name="rayon"
                  required
                />
                <Input
                  type="text"
                  placeholder="Küçə"
                  value={kuce}
                  onChange={(e) => setKuce(e.target.value)}
                  name="kuce"
                  required
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Tam ünvan"
                value={tamunvan}
                onChange={(e) => setTamunvan(e.target.value)}
                name="tamunvan"
                required
              />

              <Button onClick={goToPayment} black size={"l"} block primary>
                Ödənişə keç
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
