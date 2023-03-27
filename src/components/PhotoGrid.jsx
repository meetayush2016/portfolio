import React from 'react'
import dog from "../assets/dog.png";
import glass from "../assets/fly.png";
import car from "../assets/car.png";
import motikey from "../assets/grass.png";
import keyboard from "../assets/keyboard.png";
import bridge from "../assets/bridg.png";

const PhotoGrid = () => {
  return (
    <div name="hobbies">
        
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">PHOTOGRAPHY</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Photography is my hobbie and I have an instagram page which contains some of my work.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={dog}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Feeding Mother</h1>
            <p className="leading-relaxed">This is a beautiful pic of a mother feeding her puppies.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={glass}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Dead Butterfly</h1>
            <p className="leading-relaxed">Photo showing colors of a beautiful butterfly even after its death.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={car}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Car in winter</h1>
            <p className="leading-relaxed">Dew on can in winter season</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={motikey}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Grass in lake</h1>
            <p className="leading-relaxed">Grass in lake after heavy rain</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={keyboard}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Keyboard love</h1>
            <p className="leading-relaxed">Keybord with a ring love symbol</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={bridge}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Winter Lake</h1>
            <p className="leading-relaxed">Lake in winter season with gloomy weather</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      

    </div>
  )
}

export default PhotoGrid
