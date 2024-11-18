// [projectname]/page.js

import fs from 'fs';
import path from 'path';
import ProjectItem from "../../components/portfolio-item";
import ListProjects from "../../components/list-projects";

// Define the path to your JSON data
const dataFilePath = path.join(process.cwd(), 'public/data.json');

export async function generateStaticParams() {
  // Read and parse the JSON data file
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

  // Get all project names for static generation
  const projects = data.user.timeline;
  return projects.map((project) => ({ projectname: project.projectname }));
}

export default async function ProjectPage({ params }) {
  // Read the JSON data file on each request
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

  const user = data.user;
  const { timeline } = user;

  // Find the specific project by project name
  const project = timeline.find((proj) => proj.projectname === params.projectname);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectItem project={project} />

      <section className="relative md:grid md:grid-cols-9 grid-cols-1 gap-4 px-2 pt-20 md:pb-60">
        <div className="col-span-1 relative md:pb-0 pb-4">
          <span className="text-3xl sm:text-5xl text-white">Projects</span>
        </div>
        <div className="md:col-span-8 col-span-1 relative md:pb-0 pb-4">
          {timeline && timeline.map((project, index) => (
            <ListProjects
              key={index}
              startDate={project.startDate}
              heading={project.jobTitle}
              href={project.website || "#"}
              imgSrc={project.cover}
              videoSrc={project.videoSrc || null}
              category={project.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
