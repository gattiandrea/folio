
import ListProjects from "../../components/list-projects"

export default async function Works() {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const user = data?.user;
  const { timeline } = user;
  return (
    <main className="relative md:pt-20">
       <section className="relative md:grid md:grid-cols-9 grid-cols-1 gap-4 px-2 pt-20 md:pb-60">
        <div className="col-span-1 relative md:pb-0 pb-4">
          <p className="text-3xl sm:text-5xl text-white">Projects</p>
        </div>
        <div className="md:col-span-8 col-span-1 relative pb-4">
          {timeline &&
            timeline.map((project, index) => (
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
        {/* <div className="grid grid-cols-subgrid col-span-9 relative">
          <div className="col-start-8 col-span-2">
            <div className="flex justify-end text-2xl sm:text-5xl text-white">
              LINK ↗
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
