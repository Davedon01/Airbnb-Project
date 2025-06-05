import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
  signInWithPopup
} from '../fireBase';

type LoginModalProps = {
  onClose: () => void;
  redirectTo?: string;
  switchToSignUp: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ onClose, redirectTo = '/profile', switchToSignUp }) => {
  const redirect = () => {
    window.location.href = redirectTo;
  };

  const [loadingSpinner, setLoadingSpinner] = React.useState(false);
  const handleSocialLogin = async (provider: any) => {
    setLoadingSpinner(true);
    try {
      await signInWithPopup(auth, provider);
      redirect();
    } catch (error: any) {
      console.error('Login failed:', error.message);
      alert('Login failed: ' + error.message);
    } finally {
      setLoadingSpinner(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full relative">
        {/* Close button */}
        <button
          className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z" />
          </svg>
        </button>

        <div className="px-6 pt-6 text-center">
          <h2 className="text-sm font-semibold text-gray-600">Log in or sign up</h2>
        </div>

        <div className="px-6 py-6">
          <h1 className="text-sm font-semibold mb-4">Welcome to Airbnb</h1>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          <button
            onClick={redirect}
            disabled={loadingSpinner}
            className="w-full bg-gradient-to-r from-rose-400 via-rose-600 to-rose-700 text-white cursor-pointer font-semibold py-2 rounded-lg mb-6 transition"
          >
            {
              loadingSpinner ? (
                <BeatLoader className='aminate-spin'/>
              ) : (
                'Continue'
              )
            }
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social login buttons */}
          <div className="space-y-3">
            <button
              onClick={() => handleSocialLogin(facebookProvider)}
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
            >
              <img src="https://www.svgrepo.com/show/157806/facebook.svg" alt="fb" className="w-5 h-5 mr-2" />
              Continue with Facebook
            </button>
            <button
              onClick={() => handleSocialLogin(googleProvider)}
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
            >
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
            <button
              onClick={() => handleSocialLogin(appleProvider)}
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
            >
              <img src="https://www.svgrepo.com/show/452210/apple.svg" alt="apple" className="w-5 h-5 mr-2" />
              Continue with Apple
            </button>
            <button
              onClick={() => alert('Phone auth requires special handling')}
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l1 2 1-2h1l1 2 1-2h1l1 2 1-2h1l1 2 1-2h1l1 2 1-2h1" />
              </svg>
              Continue with Phone
            </button>
          </div>
        </div>
         <div className="text-sm text-center my-4">
          Don’t have an account?{" "}
          <button
            onClick={() => {
              onClose();         // Close the login modal
              switchToSignUp();  // Open the sign up modal
            }}
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign up
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default LoginModal;
