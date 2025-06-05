// import React from 'react'
import Icon1 from '../assets/Amazing views.png'
import Icon2 from '../assets/Beachfronts.png'
import Icoon3 from '../assets/Boats.jpg'
import Icoon4 from '../assets/Cabins.png'
import Icoon5 from '../assets/Grand pianos.png'
import Icoon6 from '../assets/Icon.jpg'
import Icoon7 from '../assets/Luxe.jpg'
import Icoon8 from '../assets/Amazing pools.jpg'
import Icoon9 from '../assets/Mansions.png'
import Icoon10 from '../assets/OMG!.png'
import Icoon11 from '../assets/Treehouses.png'
import Icoon12 from '../assets/Skiing.png'
import { ChevronRight } from 'lucide-react'
import { Settings2 } from 'lucide-react'

function Header() {
  return (
    <div className='hidden md:flex justify-between items-center gap-6 mx-5 mt-5 cursor-pointer overflow-hidden'>
        <div>
            <img src={Icon1} alt="" className='mx-auto' />
            <p>Amaizing views</p>
        </div>
        <div>
            <img src={Icon2} alt="" className='mx-auto' />
           <p>Beachfronts</p>
        </div>
        <div>
            <img src={Icoon3} alt="" className='mx-auto' />
             <p>Boat</p>
        </div>
        <div>
            <img src={Icoon4} alt="" className='mx-auto' />
            <p>Cabins</p>
        </div>
        <div>
            <img src={Icoon5} alt="" className='mx-auto' />
            <p>Grand pianos</p>
        </div>
        <div>
            <img src={Icoon6} alt="" className='mx-auto' />
            <p>Icon</p>
        </div>
        <div>
            <img src={Icoon7} alt="" className='mx-auto' />
            <p>Luxe</p>
        </div>
        <div>
            <img src={Icoon8} alt="" className='mx-auto' />
            <p>Amaizing pools</p>
        </div>
        <div>
            <img src={Icoon9} alt="" className='mx-auto' />
            <p>Mansions</p>
        </div>
        <div>
            <img src={Icoon10} alt="" className='mx-auto' />
            <p>OMG!</p>
        </div>
        <div>
            <img src={Icoon11} alt="" className='mx-auto' />
            <p>Treehouses</p>
        </div>
        <div>
            <img src={Icoon12} alt="" className='mx-auto' />
            <p>Skiing</p>
        </div>
        <div>
            <ChevronRight className='bg-gray-50 rounded-full shadow-sm'/>
        </div>
        <div className='flex items-center justify-center bg-gray-50 p-2 rounded-sm shadow-sm'>
            <Settings2 />
            <p>Filter</p>
        </div>
    </div>
  )
}

export default Header