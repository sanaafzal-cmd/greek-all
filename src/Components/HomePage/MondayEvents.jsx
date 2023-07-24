import React from 'react'
import Events from './Events'

export default function MondayEvents() {
  return (
    <div>
       <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
         
         <div class="carousel-inner">
        
           <div class="carousel-item active pt-3">
             <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
             </div>
           </div>
          
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
          
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
        
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
         
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
          
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
       </div>
    </div>
  )
}
