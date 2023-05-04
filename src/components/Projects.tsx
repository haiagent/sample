import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Project 1 description',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Project 2',
    description: 'Project 2 description',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Project 3',
    description: 'Project 3 description',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const Projects: React.FC = () => (
  <div className="container mx-auto py-12">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={project.imageUrl}
            alt={project.title}
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;