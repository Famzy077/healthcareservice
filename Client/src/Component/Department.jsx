// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const departmentData = [
    {   img: `/images/emergency.png`,
        service: 'Emergency', 
        department: 'Department'
    },
    {   img: `/images/Pediatric.png`,
        service: 'Pediatric', 
        department: 'Department'
    },
    {   img: `/images/Gynecology.png`,
        service: 'Gynecology', 
        department: 'Department'
    },
    {   img: `/images/Cardiology.png`,
        service: 'Cardiology', 
        department: 'Department'
    },
    {   img: `/images/Neurology.png`,
        service: 'Neurology', 
        department: 'Department'
    },
    {   img: `/images/Psychiatry.png`,
        service: 'Psychiatry', 
        department: 'Department'
    },
]
const Department = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
  return (
    <div className="getDepart w-3/4 m-auto h-52 place-content-center">
        <div className="" >
            <Slider {...settings} >
                {departmentData.map((getData, dataKey) => (
                    <main key={dataKey} className=" p-5 text-center">

                        <main className="flex justify-center">
                            <img src={getData.img} alt="department" className="text-center flex gap-5"/>
                        </main>
                        <main>
                            <h1 className="text-xl text-[#81d4fa] font-semibold">{getData.service}</h1>
                            <h2 className="text-xl text-[#81d4fa] font-semibold">{getData.department}</h2>
                        </main>
                    </main>
                ))}
            </Slider> 
        </div>
    </div>
  )
}

export default Department