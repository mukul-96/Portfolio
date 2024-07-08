import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi'; 
import { SiCodechef} from 'react-icons/si';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="https://codeforces.com/profile/aggarwalmukul96" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" className="text-red-600 w-8 h-8">
              <path fill="#F44336" d="M23.25,18.875V12c0-0.759-0.672-1.375-1.5-1.375h-3c-0.828,0-1.5,0.616-1.5,1.375v6.875c0,0.759,0.672,1.375,1.5,1.375h3C22.578,20.25,23.25,19.634,23.25,18.875z"></path>
              <path fill="#2196F3" d="M13.5,20.25c0.828,0,1.5-0.616,1.5-1.375V5.125c0-0.759-0.672-1.375-1.5-1.375h-3C9.673,3.75,9,4.366,9,5.125v13.75c0,0.759,0.673,1.375,1.5,1.375H13.5z"></path>
              <path fill="#FFC107" d="M0.75,18.875c0,0.759,0.673,1.375,1.5,1.375h3c0.828,0,1.5-0.616,1.5-1.375V9.25c0-0.759-0.672-1.375-1.5-1.375h-3c-0.827,0-1.5,0.616-1.5,1.375V18.875z"></path>
              <path d="M21.844 21h-3.188c-1.189 0-2.156-.953-2.156-2.125V12c0-1.172.967-2.125 2.156-2.125h3.188C23.033 9.875 24 10.828 24 12v6.875C24 20.047 23.033 21 21.844 21zM18.656 11.375C18.294 11.375 18 11.655 18 12v6.875c0 .345.294.625.656.625h3.188c.362 0 .656-.28.656-.625V12c0-.345-.294-.625-.656-.625H18.656zM13.375 21h-2.75C9.453 21 8.5 20.047 8.5 18.875V5.125C8.5 3.953 9.453 3 10.625 3h2.75C14.547 3 15.5 3.953 15.5 5.125v13.75C15.5 20.047 14.547 21 13.375 21zM10.625 4.5C10.28 4.5 10 4.78 10 5.125v13.75c0 .345.28.625.625.625h2.75C13.72 19.5 14 19.22 14 18.875V5.125C14 4.78 13.72 4.5 13.375 4.5H10.625zM5.344 21H2.156C.967 21 0 20.047 0 18.875V9.25c0-1.172.967-2.125 2.156-2.125h3.188C6.533 7.125 7.5 8.078 7.5 9.25v9.625C7.5 20.047 6.533 21 5.344 21zM2.156 8.625C1.794 8.625 1.5 8.905 1.5 9.25v9.625c0 .345.294.625.656.625h3.188C5.706 19.5 6 19.22 6 18.875V9.25c0-.345-.294-.625-.656-.625H2.156z"></path>
            </svg>
          </a>
          
          <a href="https://leetcode.com/aggarwalmukul96" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FiCode className="text-3xl" />
          </a>
          <a href="https://www.codechef.com/users/aggarwalmukul9" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <SiCodechef className="text-3xl" />
          </a>
        </div>

        <div className="space-x-8">
          <a href="mailto:aggarwalmukul96@gmail.com" className="text-white hover:text-gray-400">
            <HiOutlineMail className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/mukul2003/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    