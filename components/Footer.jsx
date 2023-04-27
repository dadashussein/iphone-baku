import styled from "styled-components";

const Container = styled.footer`
  margin-top: 20px;
  background-color: #222;
  padding: 10px 15px;
`;

const CenterFooter = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.4fr 1fr;
  font-size: 0.8rem;

  @media screen and (max-width: 580px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
  }
`;

const ContentFooter = styled.div`
  padding: 10px 15px;
  color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style-type: none;
  }
`;

const FooterIcons = styled.svg`
  width: 20px;
  height: 20px;
`;

const ContentTitle = styled.span`
  color: #aaa;
  border-bottom: 1px solid #8d52fb;
  margin-bottom: 5px;
`;

const ContactLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const BottomFooter = styled.div`
  background-color: #0e0e0e;
  color: #aaa;
  text-align: center;
  padding: 10px 0;
  font-size: 0.8rem;
  @media screen and (max-width: 580px) {
    font-size: 0.6rem;
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <CenterFooter>
          <ContentFooter>
            <ContentTitle>Iphone Baku</ContentTitle>
            <p>
              Orjinal və amerika qiymətinə uyğun telefonları bizim mağazamızdan
              əldə edə bilərsiniz. Keyfiyyətə zəmanət verilir. Bütün məhsulları
              onlayn olaraq əldə edə bilərsiniz.
            </p>
          </ContentFooter>
          <ContentFooter>
            <ContentTitle>Məhsullar</ContentTitle>
            <ul>
              <li>Telefonlar</li>
              <li>Noutbuklar</li>
              <li>Smart Watchlar</li>
              <li>Qulaqlıqlar</li>
            </ul>
          </ContentFooter>
          <ContentFooter>
            <ContentTitle>Əlaqə</ContentTitle>
            <ul>
              <ContactLi>
                <FooterIcons
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </FooterIcons>
                Bakı şəhəri, Abbas M k.
              </ContactLi>
              <ContactLi>
                <FooterIcons
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </FooterIcons>
                info@iphonebaku.com
              </ContactLi>
              <ContactLi>
                <FooterIcons
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </FooterIcons>
                +994602002626
              </ContactLi>
            </ul>
          </ContentFooter>
        </CenterFooter>
      </Container>
      <BottomFooter>
        {" "}
        Copright &copy; Iphone Baku 2023. Bütün hüquqlar qorunur
      </BottomFooter>
    </>
  );
};

export default Footer;
