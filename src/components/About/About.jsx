import { useCallback } from 'react';
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/Anshul.png';

const About = () => {
  const cursorRenderer = useCallback((cursor) => (
    <span className="text-[#8245ec]">{cursor}</span>
  ), []);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Anshul Kumar
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight">
            I am a{' '}
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Problem Solver',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={cursorRenderer}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with a strong passion for learning and building scalable web applications. As a fresher, I constantly explore new technologies and hone my skills in both front-end and back-end development. I specialize in the MERN stack and modern tools to create seamless user experiences.
          </p>

          <a
            href="https://drive.google.com/file/d/1LN6qcQiT-3sNxowSyKpiEuD6UuiV22it/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-transform duration-300 hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={800}
            scale={1.05}
            transitionSpeed={800}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Anshul Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              loading="lazy"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
