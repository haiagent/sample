import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="bg-cover bg-no-repeat pt-32 pb-20 relative h-96" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?programming,technology')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">Jaseunda</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">Web Developer</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Experienced web developer specializing in front-end development, with a strong background in React, TypeScript, and modern web technologies. I'm committed to creating clean, efficient, and visually appealing user interfaces and experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;