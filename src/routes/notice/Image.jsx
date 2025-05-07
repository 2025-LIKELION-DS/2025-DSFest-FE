import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as I from '@notice/ImageStyle';
import Header from '@notice/components/Num';

function Image() {
  const location = useLocation();
  const { initialIndex, images } = location.state;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const settings = {
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialIndex,
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
  };

  return (
    <>
      <Header current={currentIndex + 1} total={images.length} />
      <I.Image>
        <I.ImageDetail>
          <Slider {...settings}>
            {images.map((img) => (
              <div key={img.id}>
                <img src={img.url} alt={`상세 이미지 ${img.id}`} style={{ width: '100%', height: 'auto' }} />
              </div>
            ))}
          </Slider>
        </I.ImageDetail>
      </I.Image>
    </>
  );
}

export default Image;
