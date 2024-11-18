// [projectname]/about.js

import fs from 'fs';
import path from 'path';
import ExperienceList from "../../components/data-list";

// Define the path to your JSON data
const dataFilePath = path.join(process.cwd(), 'public/data.json');

// Read and parse the JSON data
const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
const { experience = [], education = [] } = data.user;

export default function About() {
  return (
    <main className="relative">
      <section className="grid md:grid-cols-9 grid-cols-1 md:px-8 md:mt-20 py-20 px-4">
        <div className="col-span-1 relative">
          <span className="text-2xl sm:text-5xl text-white">About</span>
        </div>
        <p className="md:mt-0 mt-10 md:col-start-4 md:col-span-5 text-2xl sm:text-5xl text-white">
          I&#39;m Andrea, a neurodivergent graphic designer with 10 years of
          experience who&#39;s lately enjoying turning boring .docx into beautiful
          .jpeg. I&#39;ve specialized in social media graphics, though I come with a
          solid background in web design from my agency days.
          <br />
          <br />
          I&#39;m always thrilled to face new challenges that allow me to upgrade,
          but I also believe in work-life balance, so remote is my ideal
          setup—it allows me to be faster, hyper-focused, and smoother.
          <br />
          <br />
          In my free time, I love designing posters, experimenting with AI,
          listening to good music, singing, browsing Reddit, and working out.
          I&#39;m also learning Russian and Japanese because language learning has
          always been my biggest love. Vegan for 6 years. I love my cat.
        </p>
      </section>

      <section className="grid md:grid-cols-9 grid-cols-1 md:pb-40 pb-20 gap-4 px-2">
        <div className="col-span-1 relative">
          <span className="text-2xl sm:text-5xl text-white">Experience</span>
        </div>
        <div className="md:mt-0 mt-5 md:col-start-4 md:col-span-5 text-2xl sm:text-5xl text-white relative">
          {experience.map((exp, index) => (
            <ExperienceList
              key={index}
              anno={exp.anno}
              agency={exp.agency}
            />
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-9 grid-cols-1 md:pb-40 pb-20 gap-4 px-2">
        <div className="col-span-1 relative">
          <span className="text-2xl sm:text-5xl text-white">Education</span>
        </div>
        <div className="md:mt-0 mt-5 md:col-start-4 md:col-span-5 text-2xl sm:text-5xl text-white relative">
          {education.map((edu, index) => (
            <ExperienceList
              key={index}
              corso={edu.corso}
              competenze={edu.competenze}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
