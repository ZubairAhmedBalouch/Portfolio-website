import React from 'react'

const footer = () => {
  return (
    <div>
  {/* Footer Section */}
  <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6 shadow-lg">
    <div className="container mx-auto text-center">
      <p className="text-base font-light">
        &copy; {new Date().getFullYear()} All Rights Reserved | Created by{" "}
        <span className="font-semibold text-yellow-300 hover:text-yellow-400 transition-colors duration-300">
          Zubair Ahmed Baloch
        </span>
      </p>
      
      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn link
          className="text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.282c-.966 0-1.5-.659-1.5-1.482s.545-1.482 1.5-1.482 1.5.659 1.5 1.482c0 .824-.545 1.482-1.5 1.482zm13.5 11.282h-3v-5.604c0-1.334-.471-2.245-1.653-2.245-.903 0-1.442.609-1.679 1.2-.086.211-.107.504-.107.799v5.85h-3s.04-9.48 0-10.438h3v1.479c.396-.614 1.104-1.488 2.686-1.488 1.964 0 3.453 1.285 3.453 4.044v6.403z"/>
          </svg>
        </a>
        <a
          href="https://github.com/your-username" // Replace with your GitHub link
          className="text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.998.107-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.405 1.022.006 2.048.139 3.006.405 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.767.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://twitter.com/your-username" // Replace with your Twitter link
          className="text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.917 2.201-4.917 4.917 0 .385.043.76.127 1.122-4.083-.205-7.702-2.159-10.126-5.134-.423.726-.666 1.569-.666 2.468 0 1.701.867 3.201 2.188 4.078-.805-.026-1.564-.247-2.229-.616v.062c0 2.377 1.693 4.358 3.946 4.807-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.089.631 1.966 2.463 3.396 4.632 3.436-1.698 1.331-3.834 2.123-6.155 2.123-.4 0-.79-.023-1.175-.068 2.192 1.403 4.798 2.22 7.597 2.22 9.114 0 14.093-7.548 14.093-14.093 0-.214-.005-.427-.014-.64.965-.695 1.8-1.562 2.462-2.549z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</div>

  )
}

export default footer
