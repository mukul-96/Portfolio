import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ image, title, description, githubLink, liveLink }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 transform ${expanded ? 'scale-105 bg-gray-800 text-white' : 'bg-gray-400 text-gray-800'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className={`mt-2 text-sm ${!expanded && 'hidden'}`}>
          {description}
        </p>
        <div className={`flex justify-between items-center mt-4 ${!expanded && 'hidden'}`}>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-pink-600 ">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
