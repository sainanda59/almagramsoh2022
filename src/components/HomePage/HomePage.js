import React from "react";
import HomeCard from "./HomeCard";
import "./HomePage.css";
import Slides from "./Slides";
export default function HomePage() {
  return (
    <div className="HomePage">
       <Slides/>
       <HomeCard/>
    </div>
  );
}
