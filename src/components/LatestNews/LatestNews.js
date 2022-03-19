import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import arrowRight from "../img/a-right.svg"
import arrowLeft from "../img/left.png"
import "pure-react-carousel/dist/react-carousel.es.css";
import Item from "../NewsItem/NewsItem";
import "./LatestNews.scss"
import rightBtn from "../img/rightBtn.png"

export default class extends React.Component {
  render() {
    return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-2 border-right title-contain bg-latest">
                    <div className="layer">
                        <h1>Latest News</h1>
                    </div>
                </div>
                <div className="col-lg-10 slider-contain">
                    <div className="btn-row " > 
                                  <span className=''>More</span> 
                                  <button><img width="17" src={rightBtn} /></button>
                                                                    </div>
                   <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={225}
        totalSlides={8}
        visibleSlides={4.5}
        currentSlide={1}
        
      >
        <Slider>
          <Slide index={0}> <Item /> </Slide>
          <Slide index={1}><Item /></Slide>
          <Slide index={2}><Item /></Slide>
          <Slide index={3}><Item /></Slide>
          <Slide index={4}><Item /></Slide>
          <Slide index={5}><Item /></Slide>
          <Slide index={6}><Item /></Slide>
          <Slide index={7}><Item /></Slide>
        </Slider>
        <div className="slide-btn">
        <ButtonBack><img className="rotate" src={arrowRight} /></ButtonBack>
        <ButtonNext><img  src={arrowRight} /></ButtonNext>
        </div>
      </CarouselProvider>
      </div>
      </div>
            </div>
    );
  }
}
