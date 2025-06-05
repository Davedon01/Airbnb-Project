import React from 'react'
import LoginModal from './LoginModal'
import SignUp from './SignUp';

function Dropdown() {
  const [dropDown, setDropDown] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignUp, setShowSignUp] = React.useState(false);

  const changeDp = () => {
    setDropDown(!dropDown);
  };

  const handleLogout = () => {
    setShowLogin(true);  // Show login modal on logout
    setDropDown(false);  // Optionally close the dropdown
  };

  return (
    <div className='hidden md:flex justify-between items-center gap-5 mt-3 cursor-pointer'>
      <div onClick={changeDp} className='relative'>
        {
          dropDown ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 5H20V7H4z"></path><path d="M4 11H20V13H4z"></path><path d="M4 17H20V19H4z"></path>
            </svg>
          )
        }

        {dropDown &&
          <div className='bg-white/5 backdrop-blur-md text-shadow-white text-gray-900 border-none rounded-2xl p-4 space-y-2 shadow-lg absolute mt-13 right-0 w-48 z-50'>
            <ul className='space-y-3'>
              <li>Messages</li>
              <li>Trip</li>
              <li>Wishlist</li>
              <hr />
              <li>Manage listing</li>
              <li>Account</li>
              <hr />
              <li>Help center</li>
              <li onClick={handleLogout} className="cursor-pointer text-blue-600 font-semibold">Logout</li>
            </ul>
          </div>
        }
      </div>

      {/* Conditionally show LoginModal */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)}
        switchToSignUp={() => {setShowLogin(false);
          setShowSignUp(true);
        }} />
      )}

      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="relative w-full max-w-md">
            <button
              className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl font-bold"
              onClick={() => setShowSignUp(false)}
            >
              ✕
            </button>
            <div className='h-screen w-full overflow-y-scroll'>
              <SignUp />
            </div>
            </div>
            </div>
            )}
    </div>
  );
}

export default Dropdown;
