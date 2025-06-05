import React, { useState } from 'react';
import { Earth, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';


function Footer() { 
  const [showAllPopular, setShowAllPopular] = useState<boolean>(false);
  const [showMap, setShowMap] = useState<boolean>(false)
  // An array to hold all your "Popular" data
  // This makes it easier to manage and render them dynamically.
  const popularItems = [
    { id: 1, title: 'Popular', subtitle: 'Popular' },
    { id: 2, title: 'Popular', subtitle: 'Popular' },
    { id: 3, title: 'Popular', subtitle: 'Popular' },
    { id: 4, title: 'Popular', subtitle: 'Popular' },
    { id: 5, title: 'Popular', subtitle: 'Popular' },
    { id: 6, title: 'Popular', subtitle: 'Popular' },
    { id: 7, title: 'Popular', subtitle: 'Popular' },
    { id: 8, title: 'Popular', subtitle: 'Popular' },
    { id: 9, title: 'Popular', subtitle: 'Popular' },
    { id: 10, title: 'Popular', subtitle: 'Popular' },
    { id: 11, title: 'Popular', subtitle: 'Popular' },
    { id: 12, title: 'Popular', subtitle: 'Popular' },
    { id: 13, title: 'Popular', subtitle: 'Popular' },
    { id: 14, title: 'Popular', subtitle: 'Popular' },
    { id: 15, title: 'Popular', subtitle: 'Popular' },
    { id: 16, title: 'Popular', subtitle: 'Popular' },
    { id: 17, title: 'Popular', subtitle: 'Popular' },
    { id: 18, title: 'Popular', subtitle: 'Popular' },
    { id: 19, title: 'Popular', subtitle: 'Popular' },
    { id: 20, title: 'Popular', subtitle: 'Popular' },
    { id: 21, title: 'Popular', subtitle: 'Popular' },
    { id: 22, title: 'Popular', subtitle: 'Popular' },
    { id: 23, title: 'Popular', subtitle: 'Popular' },
    { id: 24, title: 'Popular', subtitle: 'Popular' },
    { id: 25, title: 'Popular', subtitle: 'Popular' },
    { id: 26, title: 'Popular', subtitle: 'Popular' },
    { id: 27, title: 'Popular', subtitle: 'Popular' },
    { id: 28, title: 'Popular', subtitle: 'Popular' },
    { id: 29, title: 'Popular', subtitle: 'Popular' },
    { id: 30, title: 'Popular', subtitle: 'Popular' },
  ];

  // Define how many items to show initially before the "Show more" button appears
  const initialPopularCount = 12;

  // Determine which items to render based on the 'showAllPopular' state
  const itemsToDisplay = showAllPopular
    ? popularItems
    : popularItems.slice(0, initialPopularCount);

  // Check if there are more items than initially displayed to decide if the button is needed
  const shouldShowToggleButton = popularItems.length > initialPopularCount;

  return (
    <footer className=' bg-gray-200 overflow-hidden mt-5'>
      <div className='mt-15'>
        <p className='font-semibold text-3xl mb-8 text-center md:ml-10 md:font-normal md:text-lg'>Inspiration for future gateways</p>
        <ul className=' text-2xl space-y-4 md:flex gap-8 md:text-lg cursor-pointer mb-5 ml-10'>
          <li className='hover:font-semibold hover:underline'>Popular</li>
          <li className='hover:font-semibold hover:underline'>Historical</li>
          <li className='hover:font-semibold hover:underline'>Coastal</li>
          <li className='hover:font-semibold hover:underline'>Island</li>
          <li className='hover:font-semibold hover:underline'>Lakes</li>
          <li className='hover:font-semibold hover:underline'>Unique stays</li>
          <li className='hover:font-semibold hover:underline'>Category</li>
          <li className='hover:font-semibold hover:underline'>Things to do</li>
        </ul>
        <hr className='text-gray-50 shadow-sm' />
      </div>

      
        <div className='grid grid-cols-2 text-center text-2xl md:grid-cols-6 gap-10 items-center justify-center md:text-lg ml-10 mt-10 mb-5'>
        {/* Map over the items to display */}
        {itemsToDisplay.map((item) => (
          <p key={item.id} className='font-semibold'>
            {item.title} <br /><span className='font-normal text-gray-400'>{item.subtitle}</span>
          </p>
        ))}
      </div>

      {shouldShowToggleButton && (
        <div className='text-center md:ml-10 mb-15'>
          <button
            onClick={() => setShowAllPopular(!showAllPopular)} // Toggle the state on click
            className='text-gray-500 hover:underline font-semibold focus:outline-none'
          >
            {showAllPopular ? 'Show less' : 'Show more v'}
          </button>
        </div>
      )}
      
     <div className=' -mb-5 grid justify-center items-center'>
        <button
          onClick={() => setShowMap(!showMap)}
          className='text-gray-200 bg-gray-500 p-2 rounded-full cursor-pointer font-semibold focus:outline-none'
        >
          {showMap ? 'Hide Map' : 'Show Map'} {/* Button text changes */}
        </button>
         {showMap && ( // Conditionally render the map iframe
          <div className='mt-5'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.072535497258!2d3.376822574972688!3d6.3776999936239125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b41e8c1b2b2b3%3A0x6b4b4b4b4b4b4b4b!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }} // Use style object for React
              allowFullScreen={true} // React prop for allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // React prop for referrerpolicy
              title="Interactive Map" // Add a title for accessibility
            ></iframe>
          </div>
        )}
      </div>

      <hr className='text-gray-50' />

      <div className='grid items-center text-2xl gap-6 md:flex justify-between md:text-lg mt-16 mb-16 ml-10 mr-30 '>
        <div>
          <h4 className='font-semibold'>Support</h4>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
        </div>

        <div>
          <h4 className='font-semibold'>Support</h4>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
        </div>

        <div>
          <h4 className='font-semibold'>Support</h4>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
          <p>Help center</p>
        </div>
      </div>
      <hr className='text-gray-50' />

      <div className='grid gap-10 md:flex items-center justify-between mx-10 my-10'>
        <div className='grid font-bold text-2xl md:flex gap-5 cursor-pointer md:font-normal md:text-lg'>
          <p>© 2023 Airbnb, Inc.</p>
          <ul className='grid md:flex gap-5'>
            <li>Privacy</li>
            <li>Term</li>
            <li>Site map</li>
            <li>UK Mordern Slavery Act</li>
            <li>Company details</li>
          </ul>
        </div>
        <div className='grid md:flex gap-5 cursor-pointer'>
          <Earth />
          <p>English (GP)</p>
          <p>£</p>
          <p>GBP</p>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;