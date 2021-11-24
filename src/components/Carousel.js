import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousel({ data, urls }) {
  // console.log(data);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const captionItem = data.map((item) => {
    return (
      <Carousel.Item className="text-danger">
        <Carousel.Caption className="text-danger">
          <p className="text-danger">{item}</p>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {captionItem}
    </Carousel>
  );
}
