import React from 'react'
import { Link } from 'react-router-dom';

const HiddenSidebar = () => {
  return (
    <section className="p-5 shadow-lg w-1/12 text-center sm:hidden">
    <Link to='/'>
      <h2 className=" py-2 text-lg">
        <span>
          <img
            className="h-8 mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          />
        </span>{" "}
        Home
      </h2>
    </Link>

    <h2 className=" py-2 text-lg">
      <span>
        <img
          className="h-8 mx-auto"
          src="https://www.iconpacks.net/icons/5/free-youtube-shorts-logo-icon-15251-thumb.png"
        />
      </span>{" "}
      Shorts
    </h2>

    <h2 className=" py-2 text-lg">
      <span>
        <img
          className="h-8 mx-auto"
          src="https://icons.iconarchive.com/icons/pictogrammers/material/256/youtube-subscription-icon.png"
        />
      </span>{" "}
      Subscriptions
    </h2>
   
   
   
  
    
   
    
  </section>
  )
}

export default HiddenSidebar