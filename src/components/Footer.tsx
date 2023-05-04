import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-center">
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-4">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-4">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 mx-4">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;