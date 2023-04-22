import { useState } from "react";
import styled from "styled-components";

export default function ProductImages({ images }) {
  const [bigImage, setBigImage] = useState(images?.[0]);

  const Image = styled.img`
    max-width: 100%;
  `;

  const ImageButtons = styled.div`
    display: flex;
    gap: 5px;
    flex-grow: 0;
  `;

  const ImageButton = styled.div`
    border: 1px solid #aaa;
    ${(props) =>
      props.active
        ? `
border-color : #000;
`
        : ` opacity : .7;
        `}

    border-radius: 5px;
    cursor: pointer;
  `;

  const handleImg = (img) => {
    setBigImage(img);
  };
  return (
    <>
      <Image src={bigImage} />
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            onClick={() => handleImg(image)}
            active={image === bigImage}
            key={image}
          >
            <Image src={image} alt="title" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
