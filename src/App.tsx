import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Star, Award, BookOpen, Code, Database, Globe, Terminal, Users, Download } from 'lucide-react';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">AG.</span>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10"
        >
          <img src="Arnab Goswami"
            alt="Arnab Goswami"
            className="w-40 h-40 rounded-full mb-8 object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/20"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Arnab Goswami
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Electronics and Communication Engineering Student</p>
          <div className="flex gap-6 mb-8">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:arnabgos629@gmail.com" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors shadow-lg shadow-blue-500/20"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              I am an aspiring IT professional with a strong foundation in Electronics and Communication Engineering. 
              My passion lies in leveraging technology to create innovative solutions. I am seeking opportunities 
              to expand my knowledge and contribute to challenging projects that push the boundaries of what's possible.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">450+</p>
                <p className="text-gray-400">DSA Problems</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">5⭐</p>
                <p className="text-gray-400">HackerRank</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">2+</p>
                <p className="text-gray-400">Projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard icon={<Code />} title="Programming" items={['Java']} />
            <SkillCard icon={<Globe />} title="Web Development" items={['HTML', 'CSS', 'JavaScript', 'ReactJs']} />
            <SkillCard icon={<Database />} title="Backend" items={['SQL', 'APIs', 'Database Integration']} />
            <SkillCard icon={<Terminal />} title="Developer Tools" items={['GitHub', 'VS Code', 'Intellij IDEA', 'Eclipse']} />
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-800/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-700/50 rounded-xl p-8 shadow-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Terminal className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">PWC Launchpad Programme</h3>
                  <p className="text-blue-400 mb-4">February 2024 - July 2024</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                      <span>Completed comprehensive training in IT Fundamentals, RDBMS, Java, Web Development, and Cloud Fundamentals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                      <span>Participated in expert-led masterclasses to gain in-depth insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                      <span>Enhanced practical skills in programming, database management, and web development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProjectCard
              title="Donation Website"
              tech="HTML, CSS, JavaScript"
              description="A donation platform to support underprivileged children with secure payment integration and responsive design."
            />
            <ProjectCard
              title="News App"
              tech="HTML, CSS, JavaScript"
              description="A responsive news website with real-time API integration and optimized performance."
            />
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gray-800/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AchievementCard icon={<Star />} title="450+ DSA Questions" description="Solved on GFG and LeetCode" />
            <AchievementCard icon={<Users />} title="Fix-a-Robo Workshop" description="Participated in IETE workshop" />
            <AchievementCard icon={<BookOpen />} title="NEEDS Teacher" description="Non-profit organization" />
            <AchievementCard icon={<Award />} title="5-star HackerRank" description="Coding proficiency" />
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <EducationCard
              degree="Bachelor of Technology"
              major="Electronics and Communication Engineering"
              school="Haldia Institute Of Technology"
              year="2021 - 2025"
              grade="CGPA 7.73 (till 7th sem)"
            />
            <EducationCard
              degree="Intermediate"
              school="Ukhra Kunja Behari Institution"
              year="2020"
              grade="Percentage 82.6"
            />
            <EducationCard
              degree="Matriculation"
              school="Ukhra Kunja Behari Institution"
              year="2018"
              grade="Percentage 79.1"
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:arnabgos629@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">© 2024 Arnab Goswami. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-gray-700/50 rounded-xl p-8 text-center backdrop-blur-sm shadow-xl"
    >
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-blue-400 bg-blue-500/10 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="text-gray-300">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, tech, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-gray-700/50 rounded-xl p-8 shadow-xl backdrop-blur-sm"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-blue-400 mb-4">{tech}</p>
      <p className="text-gray-300 mb-6">{description}</p>
      <a 
        href="#" 
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
      >
        View Project <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  );
}

function AchievementCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-gray-700/50 rounded-xl p-8 text-center backdrop-blur-sm shadow-xl"
    >
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-blue-400 bg-blue-500/10 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function EducationCard({ degree, major, school, year, grade }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-gray-700/50 rounded-xl p-8 shadow-xl backdrop-blur-sm"
    >
      <h3 className="text-2xl font-bold mb-2">{degree}</h3>
      {major && <p className="text-blue-400 mb-2">{major}</p>}
      <p className="text-xl text-gray-300 mb-2">{school}</p>
      <div className="flex justify-between items-center text-gray-400">
        <p>{year}</p>
        <p>{grade}</p>
      </div>
    </motion.div>
  );
}

export default App;