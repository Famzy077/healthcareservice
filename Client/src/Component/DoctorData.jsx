import React from "react"; 
import { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
const doctorData = [
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_1.png',
        specialist:'Emergency Department',
        name: 'Dr. Lisa Chen, MD',
        department: 'Emergency Medicine Specialist',
        text: 'Dr. Chen has over 10 years of experience in emergency medicine and is board certified in emergency medicine.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_5.png',
        specialist:'Emergency Department',
        name: 'Jonees Festus',
        department: 'Emergency Medicine Specialist',
        text: 'Dr. Lee is a skilled emergency medicine physician with expertise in the treatment of acute medical conditions. ',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_2.png',
        specialist:'Emergency Department',
        name: 'Dr. Michael Johnson, MD',
        department: 'Emergency',
        text: 'Dr. Johnson is a highly experienced emergency medicine physician with over 15 years of experience. ',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_3.png',
        specialist:'Pediatric Department',
        name: 'Dr. Sarah Patel, MD',
        department: 'Pediatrician',
        text: 'Dr. Chen has over 10 years of experience in emergency medicine and is board certified in emergency medicine.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_5.png',
        specialist:'Pediatric Department',
        name: 'Dr. David Nguyen, MD',
        department: 'Pediatrician',
        text: 'Dr. Johnson is a highly experienced emergency medicine physician with over 15 years of experience.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_4.png',
        specialist:'Pediatric Department',
        name: 'Dr. Susan Bones, MD',
        department: 'Pediatrician',
        text: 'Dr. Lee is a skilled emergency medicine physician with expertise in the treatment of acute medical conditions.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_7.png',
        specialist: 'Cardiologist Department',
        name: 'Dr. Michelle Kim, MD',
        department: 'Cardiologist',
        text: 'Dr. Patel is a compassionate pediatrician with over 15 years of experience.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_8.png',
        specialist: 'Cardiologist Department',
        name: 'Dr. Lisa Chen, MD',
        department: 'Cardiologist',
        text: 'Dr. Nguyen is a highly skilled pediatrician with expertise in the treatment ',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_9.png',
        specialist: 'Cardiologist Department',
        name: 'Dr. John Smith, MD',
        department: 'Cardiologist',
        text: 'Dr. Bones is a dedicated pediatrician with a focus on providing comprehensive care to children of all ages.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_10.png',
        specialist: 'Psychiatry Department',
        name: 'Dr. Sarah Lee, MD',
        department: 'Psychiatry',
        text: 'Best doctor with good records Dr. Kim is a renowned cardiologist with over 20 years of experience.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_11.png',
        specialist: 'Psychiatry Department',
        name: 'Dr. David Park, MD',
        department: 'Psychiatry',
        text: 'Dr. Lee is a skilled cardiologist with expertise in the diagnosis and treatment of cardiovascular disease.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_12.png',
        specialist: 'Psychiatry Department',
        name: 'Dr. Maria Rodriguez, MD',
        department: 'Psychiatry',
        text: 'Dr. Smith is a board-certified cardiologist with extensive experience in the management of complex cardiac conditions.',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_4.png',
        specialist: 'Dentist Department',
        name: 'Akingbola Isaiah',
        department: 'Emergency',
        text: 'With more than 15 years of experience learning human psychology and behavior',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_5.png',
        specialist: 'Dentist Department',
        name: 'Akingbola Isaiah',
        department: 'Emergency',
        text: 'Best doctor with good records and reputation in the works of place',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    },
    {
        img: 'https://html.laralink.com/prohealth/assets/img/doctors/doctor_1.png',
        specialist: 'Dentist Department',
        name: 'Akingbola Isaiah',
        department: 'Emergency',
        text: 'Dr. Nguyen is a highly skilled pediatrician with expertise in the treatment',
        linkedin: "href://famzy1223",
        instagram: "href://famzy0288",
        x: "href://famzy0288"
    }
]
const DoctorData = () => {
    const itemsPerPage = 6; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the current items to 
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = doctorData.slice(startIndex, startIndex + itemsPerPage);

  const getItemProps = (index) =>
    ({
      variant: currentPage === index ? "filled" : "text",
      color: "gray",
      onClick: () => setCurrentPage(index),
    });
 
  const next = () => {
    if (currentPage === 3) return;
 
    setCurrentPage(currentPage + 1);
  };
 
  const prev = () => {
    if (currentPage === 1) return;
 
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
        <main  className="grid doctorData p-5 md:grid-cols-3">
          {currentItems.flatMap((data, key) => 
          <div className="bg-[whitesmoke] border border-blue-gray-200 m-2 rounded-t-xl text-center" key={key}>
              <div className=" mb-10 rounded-t-xl bg-light-blue-50">
                  <img className="rounded-ful rounded-xl rounded-b-[0] w-[100%] h-[270px] object-fill bg-light-blue-50" src={data.img} alt="profile picture" /><hr />
                  <h2 className="bg-blue-700 text-white mx-8 transform translate-y-[-4%] p-3 rounded-t-[20px] font-semibold ">{data.specialist}</h2>
              </div>
              <div className="m-5 my-10">
                  <h1 className="text-xl text-gray-800 font-semibold md:text-2xl">{`${data.name}`}</h1>
                  <p className="text-xl">{`${data.department}`}</p>
                  <p className="text-gray-700">{`${data.text}`}</p>
              </div>
              <main className="m-5 text-2xl">
                  <a className="m-2 drop-shadow-lg" href={data.linkedin}><i className="fa-brands fa-linkedin   rounded-full bg-blue-700 p-3 text-white"></i></a>
                  <a className="m-2 drop-shadow-lg" href={data.x}><i className="fa-brands fa-square-facebook  rounded-full bg-blue-700 p-3 text-white"></i></a>
                  <a className="m-2 drop-shadow-lg" href={data.instagram}><i className="fa-brands fa-instagram  rounded-full bg-blue-700 p-3 text-white"></i></a>
              </main>
          </div>)}
        </main>


        <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
            <IconButton {...getItemProps(1)}><a href="#">1</a></IconButton>
            <IconButton {...getItemProps(2)}><a href="#">2</a></IconButton>
            <IconButton {...getItemProps(3)}><a href="#">3</a></IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={currentPage === 3}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
            
    </div>
  )
}

export default DoctorData