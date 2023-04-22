import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Thumbnail = styled.div`
  position: relative;
  margin: 0 10px;
  cursor: pointer;
`;

const ThumbnailImage = styled(Image)`
  border-radius: 10px;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

const HoverIcon = styled.div`
  color: #fff;
  font-size: 36px;
`;

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Image
        src={selectedImage}
        alt="Selected Image"
        width={500}
        height={500}
      />
      <GalleryContainer>
        {images.map((image) => (
          <Thumbnail key={image} onClick={() => handleImageSelect(image)}>
            <ThumbnailImage
              src={image}
              alt="Thumbnail"
              width={100}
              height={100}
            />
            <HoverOverlay>
              <HoverIcon>+</HoverIcon>
            </HoverOverlay>
            
          </Thumbnail>
          
        ))}
        
      </GalleryContainer>
    </>
  );
};

export default Gallery;
