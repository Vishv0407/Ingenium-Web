import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import eventsData from '../data/events.json';

// Event data structure
const eventData = {
  esports: [
    {
      id: 1,
      title: "EVENT 1",
      image: "/1.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "online",
      registrationPeriod: "1st Feb - 15th Feb",
    },
    {
      id: 2,
      title: "EVENT 2",
      image: "/3.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "offline",
      registrationPeriod: "5th Feb - 20th Feb",
    },
  ],
  csevents: [
    {
      id: 3,
      title: "EVENT 3",
      image: "/2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "hybrid",
      registrationPeriod: "10th Feb - 25th Feb",
    },
  ],
  mechevnets: [
    {
      id: 4,
      title: "EVENT 4",
      image: "/5.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "offline",
      registrationPeriod: "15th Feb - 28th Feb",
    },
  ],
  eeeevents: [
    {
      id: 5,
      title: "EVENT 5",
      image:"/6.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "online",
      registrationPeriod: "20th Feb - 5th Mar",
    },
  ],
  chemevents: [
    {
      id: 6,
      title: "EVENT 6",
      image:"/1.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "online",
      registrationPeriod: "20th Feb - 5th Mar",
    },
  ],
  concert: [
    {
      id: 7,
      title: "EVENT TITLE",
      image:"/6.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "online",
      registrationPeriod: "20th Feb - 5th Mar",
    },
  ],
};

const categories = [
  { id: 'esports', label: 'e-sports' },
  { id: 'csevents', label: 'CS Events' },
  { id: 'mechevnets', label: 'Mech Event' },
  { id: 'eeeevents', label: 'EEE Event' },
  { id: 'chemevents', label: 'Chem Events' },
  { id: 'concert', label: 'Concert' },
];

function CardComp({ event }) {
  const navigate = useNavigate();

  return (
    <div className="w-full sm:w-[90vw] md:w-[80vw] lg:w-[45vw] min-h-[300px] sm:h-[40vh] md:h-[45vh] flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <div className="w-full sm:w-[47%] h-[200px] sm:h-full">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col flex-1 justify-between p-4 sm:p-6 md:p-8">
        <div className="font-primaryFont text-xl sm:text-2xl md:text-3xl mb-4">{event.title}</div>
        <div className="font-secFont1 text-sm sm:text-base md:text-lg mb-4">
          {event.description}
        </div>
        <div className="font-secFont1 text-sm sm:text-base md:text-lg mb-4">
          <p className="mb-2"><span className="font-semibold">Meeting: </span><span>{event.meetingType}</span></p>
          <p><span className="font-semibold">Registration: </span><span>{event.registrationPeriod}</span></p>
        </div>
        <div className="font-secFont1 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="px-4 sm:px-6 py-2 bg-colPink text-white rounded-full hover:bg-pink-700 transition-colors text-sm sm:text-base">
            Register
          </button>
          <button 
            onClick={() => navigate(`/eventdetails/${event.id}`)}
            className="px-4 sm:px-6 py-2 border border-colPink text-colPink rounded-full hover:bg-colPink hover:text-white transition-colors text-sm sm:text-base"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export const EventLog = () => {
  const [selectedCategory, setSelectedCategory] = useState('esports');

  return (
    <section className="w-full bg-colBlack flex flex-col justify-center gap-8 sm:gap-12 md:gap-16 min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      {/* Event Log Header */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-16 sm:mt-20 md:mt-24">
        {/* Logo */}
        <div className="w-48 sm:w-56 md:w-64 mb-4 sm:mb-6 md:mb-8">
          <img 
            src="/Logos/Ing_White_2025.png" 
            alt="Ingenium Logo" 
            className="w-full h-auto"
          />
        </div>
        
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-primaryFont text-white text-center">
          EVENT LOG
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl font-secFont1 max-w-[90%] sm:max-w-[80%] md:max-w-[57vw] text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      {/* Card Section */}
      <div className="w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        {/* Event Selector Bars */}
        <div className="flex flex-wrap justify-center gap-2 bg-gray-200 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[52vw] rounded-full p-2 sm:p-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-sm sm:text-base md:text-lg font-secFont1 px-3 sm:px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id 
                ? 'bg-colPink text-white' 
                : 'text-black hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full items-center">
          <AnimatePresence mode="wait" initial={false}>
            {eventData[selectedCategory]?.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                layout
                className="w-full flex justify-center px-4 sm:px-6 md:px-8"
              >
                <CardComp event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
