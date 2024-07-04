import React from 'react'
import Container from './Container'
import Title from './Title'
import SalesCounttime from './SalesCounttime'
import Flex from './Flex'
import ProductCard from './ProductCard'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom";

const Flashsales = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
          display: "flex",justifyContent:"center",alignItems:"center", background: "#f5f5f5", 
          height:'50px',width:'50px',borderRadius:'50%',
        position:"absolute",right:"0%",top:"-96px"
        }}
        onClick={onClick}
      ><FaArrowRight /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",justifyContent:"center",alignItems:"center",background:"#f5f5f5", 
          height:'50px',width:'50px',borderRadius:'50%',position:"absolute" ,right:"55px",top:"-96px" }}
        onClick={onClick}
      ><FaArrowLeft /></div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        arrows:false,
          nextArrow: "",
    prevArrow: "",
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        arrows:false,
          nextArrow: "",
    prevArrow: "",
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        arrows:false,
          nextArrow: "",
    prevArrow: "",
        }
      }
      ]
  };
  return (
    <section className='mt-10 lg:mt-[140px]'>
      <Container>
        <Flex className="mb-10 lg:flex-row flex-col">
        <Title subtitle="Today's" title="Flash Sales"/>
        <SalesCounttime/> 
        </Flex>
        <Slider {...settings}>
        <ProductCard/>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

        </Slider>
        <div className="text-center mt-[60px]">
        <Link className='rounded-[4px] font-poppins inline-block font-medium text-base leading-6 text-white
         bg-third py-2 lg:py-4 px-12 '>View All Products</Link>
        </div>
        
        
        
        
        
      </Container>
    </section>
  )
}

export default Flashsales
