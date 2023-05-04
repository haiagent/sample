import React from 'react';

const About: React.FC = () => {
  return (
    <main className="min-h-screen">
      <section className="py-12 px-4 md:px-24 bg-gray-100">
        <h1 className="text-4xl font-semibold mb-6">About Me</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <img
            src="/jaseunda.jpeg"
            alt="Jaseunda"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <div>
            <p className="text-lg mb-4">
              Hi, I'm Jaseunda, a passionate web developer with a strong
              background in modern web technologies. I love crafting engaging,
              user-friendly websites and applications using React, TypeScript,
              and custom CSS.
            </p>
            <p className="text-lg">
              With a focus on mobile-first design and responsive layouts, I
              strive to provide an enjoyable browsing experience for every user
              regardless of their device. When I'm not coding, you can find me
              exploring new web design trends, learning new languages and
              frameworks, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-24 bg-white">
        <h2 className="text-4xl font-semibold mb-6">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="font-semibold mb-4">Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="font-semibold mb-4">Frameworks & Libraries</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="font-semibold mb-4">Tools & Platforms</h3>
            <ul>
              <li>Git</li>
              <li>Node.js</li>
              <li>npm / Yarn</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="font-semibold mb-4">Other Skills</h3>
            <ul>
              <li>Responsive Design</li>
              <li>SEO</li>
              <li>Performance Optimization</li>
              <li>Web Accessibility</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;