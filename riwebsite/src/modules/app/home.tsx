import React from "react";
import ServiceCard from "../cards/service/servicecard";
import TechCard from "../cards/tech/techcard";
import TeamCard from "../cards/team/teamcard";
import { Carousel } from "antd";

import carouselleft from "../../assets/images/carouselleft.png";
import carouselright from "../../assets/images/carouselright.png";
import { CarouselLinkLeft, CarouselLinkRight, CarouselImage } from "./styles";
import Blockchain from '../app/header/blockchain'

//@ts-ignore
export default function Home() {
  //@ts-ignore
  const props = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  //@ts-ignore
  let { carousel } = React.createRef();

  //@ts-ignore

  const previous=()=> {
    carousel.prev();


    // console.log("previosu---");
  }

  //@ts-ignore
  const  next=()=> {
    carousel.next();

    //console.log("next---->")
  }

  return (
    <div>
      <Blockchain/>
    <div>
      <CarouselLinkLeft onClick={previous}>
        <CarouselImage src={carouselleft} alt="imagee" />
       
      </CarouselLinkLeft>

      <Carousel ref={node => (carousel = node)} {...props}>
        <ServiceCard />

        <ServiceCard />
      </Carousel>

      <CarouselLinkRight onClick={next}>
        <CarouselImage src={carouselright} alt="image" />
      </CarouselLinkRight>

      <TechCard />
      <TeamCard />
    </div>

    </div>
  );
}
