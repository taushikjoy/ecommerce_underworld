import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItem } from "../Data";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  position: relative;
  overflow: hidden;

  .arrow {
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
  }

  .arrow1 {
    left: 10px;
    z-index: 100;
  }
  .arrow2 {
    right: 10px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  /* .slider1 {
      background-color: #f5fafd;
    } */
`;

const SliderStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  .imgcontainer {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;

    img {
      height: 80%;
    }
  }

  .infocontainer {
    flex: 1;

    h1 {
      font-size: 3.5rem;
      font-weight: 600;
    }

    P {
      margin: 50px 0;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 3px;
    }
    button {
      background-color: transparent;
      padding: 10px;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleclick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    console.log(slideIndex);
  };
  return (
    <Container>
      <div className='arrow arrow1' onClick={() => handleclick("left")}>
        <ArrowLeftOutlinedIcon />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderItem.map((item) => (
          <SliderStyle bg={item.bg} key={item.id}>
            <div className='imgcontainer'>
              <img src={item.img} alt='' />
            </div>
            <div className='infocontainer'>
              <div className='title'>
                <h1> {item.title}</h1>
                <p>{item.desc}</p>
                <button>SHOP NOW</button>
              </div>
            </div>
          </SliderStyle>
        ))}
      </Wrapper>
      <div className='arrow arrow2' onClick={() => handleclick("right")}>
        <ArrowRightOutlinedIcon />
      </div>
    </Container>
  );
}

export default Slider;

{
  /* <div className='slider slider2'>
          <div className='imgcontainer'>
            <img src={bikini} alt='' />
          </div>
          <div className='infocontainer'>
            <div className='title'>
              <h1>WINTER SALE !!</h1>
              <p>Don't Compromise on Style ! Get 30% off on New Arrival.</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div> */
}
