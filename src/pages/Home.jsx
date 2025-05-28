import React from "react";
import Banner from "../component/Banner";
import NewHomePageSections from "../component/NewHomePageSections.jsx";
import bg from "../assets/bg1.jpg"
import bg2 from "../assets/bg2.jpg"
import MiddleSection from "../component/MiddleSection.jsx";
import LowerMiddle from "../component/lowerMiddle.jsx";
import { Parallax } from "react-parallax";





const Home = () => {
  return (
 <div>
  <Banner />
  {/* First Section with Parallax */}
      <Parallax blur={{ min: -15, max: 15 }} bgImage={bg} bgImageAlt="Hero Background" strength={300}>
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20">
            
            <MiddleSection />
          </div>
        </div>
      </Parallax>

      {/* Second Section - Static or another parallax */}
      <Parallax bgImage={bg} bgImageAlt="Lower Middle" strength={200}>
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20">
            <LowerMiddle />
          </div>
        </div>
      </Parallax>

      {/* Third Section with a different background */}
      <Parallax bgImage={bg2} bgImageAlt="New Section" strength={200}>
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20">
            <NewHomePageSections />
          </div>
        </div>
      </Parallax>
 </div>
  );
};

export default Home;
