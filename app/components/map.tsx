"use client";
import React from "react";

const Map = () => {
  return (
    <div className="flex gap-8 max-w-6xl w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6042.873188553656!2d-73.9656167!3d40.774414900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a29d3847f5%3A0x564dfbba0141774a!2s5th%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1724106192693!5m2!1sen!2sus"
        className="w-full h-[450px] rounded-lg"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        sandbox="allow-scripts"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
