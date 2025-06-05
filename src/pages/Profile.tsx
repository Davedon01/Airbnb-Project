import { useEffect, useState } from 'react';
import md5 from 'blueimp-md5'; // Ensure 'blueimp-md5' is installed and its types are available (npm install blueimp-md5 @types/blueimp-md5)

// Define an interface for the User object
// This ensures that any 'user' object in your state will consistently have an 'email' property.
interface User {
  email: string;
  // You can add other properties here if your user object will have them:
  // name?: string;
  // id?: string;
}

function Profile() { // Specify the return type of the functional component
  // Initialize user state as null or a User object.
  // useState<User | null> tells TypeScript that 'user' can be either a User object or null.
  const [user, setUser] = useState<User | null>(null);

  // useEffect hook runs once after the initial render (due to empty dependency array [])
  useEffect(() => {
    // --- Simulate user login/logout state ---
    // In a real application, you'd fetch this from an authentication context, local storage, or an API.

    const simulatedLoggedInUser: User = { // Explicitly type the simulated user
      email: 'davidcnelson150@gmail.com', // **CRITICAL: Use a valid email address here**
    };

    const isAuthenticated: boolean = true; // Set to `false` to simulate logged out

    if (isAuthenticated) {
      setUser(simulatedLoggedInUser);
    } else {
      setUser(null); // Explicitly set user to null when logged out
    }
  }, []); // Empty dependency array means this effect runs only once on mount

  /**
   * Generates a Gravatar URL for a given email address.
   * Handles cases where the email might be missing or not a string.
   * @param {string | null | undefined} email - The email address to generate the Gravatar for.
   * @param {number} size - The desired size of the Gravatar image (e.g., 60 for 60x60 pixels).
   * @returns {string} The Gravatar URL.
   */
  const getGravatarUrl = (email: string | null | undefined, size: number = 100): string => {
    // Ensure email is a non-empty string before processing
    if (!email || typeof email !== 'string' || email.trim() === '') {
      // Return a default identicon for invalid/empty emails
      // The 'd=identicon' parameter tells Gravatar to provide a generated image.
      return `https://www.gravatar.com/avatar/00000000000000000000000000000000?s=${size}&d=identicon`;
    }

    // Hash the email using MD5 for Gravatar
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
  };

  return (
    <div className='hidden md:block'>
      <div>
        {user ? (
          // --- Logged-in state: Display user's profile image ---
          <img
            src={getGravatarUrl(user.email, 60)} // TypeScript now knows 'user.email' is a string
            alt={`${user.email}'s profile`}
            className="rounded-full mt-2" // Assuming Tailwind CSS for styling
            style={{ width: '26px', height: '26px' }} // Match SVG size
          />
        ) : (
          // --- Logged-out state: Display a generic icon ---
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* SVG path for the generic user icon */}
            <path d="M12 6c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4m0 6c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2"></path>
            <path d="M12 2C6.49 2 2 6.49 2 12c0 3.26 1.58 6.16 4 7.98V20h.03c1.67 1.25 3.73 2 5.97 2s4.31-.75 5.97-2H18v-.02c2.42-1.83 4-4.72 4-7.98 0-5.51-4.49-10-10-10M8.18 19.02C8.59 17.85 9.69 17 11 17h2c1.31 0 2.42.85 2.82 2.02-1.14.62-2.44.98-3.82.98s-2.69-.35-3.82-.98m9.3-1.21c-.81-1.66-2.51-2.82-4.48-2.82h-2c-1.97 0-3.66 1.16-4.48 2.82A7.96 7.96 0 0 1 4 11.99c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.97 4.36-2.52 5.82"></path>
          </svg>
        )}
      </div>
    </div>
  );
}

export default Profile;