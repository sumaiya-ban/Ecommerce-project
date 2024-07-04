import React from 'react'
import Container from './Container'
import Title from './Title'
import BCategoryItem from './BCategoryItem'
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";


const BCategory = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",justifyContent:"center",alignItems:"center", background: "#f5f5f5" ,width:"46px",height:"46px" ,
          borderRadius:"50%" ,position:"absolute",right:"0%",top:"-96px"}}
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
          height:'50px',width:'50px',borderRadius:'50%',position:"absolute" ,right:"55px",top:"-96px", background: "#f5f5f5" }}
        onClick={onClick}
      ><FaArrowLeft /></div>
    );
  }
  
  var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
   
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: "",
      prevArrow: "",
      arrows:false,
          
        }
      },
    ]
  };
  
  return (
    <section>
        <Container>
            <Title  subtitle="Categories" title="Browse By Category" />
            <div className='mt-[60px] '>
            <Slider {...settings}>
            <BCategoryItem />
            <BCategoryItem/>
            <BCategoryItem/>
            <BCategoryItem/>
            <BCategoryItem/>
            <BCategoryItem/>
            </Slider>
            
            
            </div>
            
        </Container>
      
    </section>
  )
}

export default BCategory
