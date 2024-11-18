import dynamic from "next/dynamic";
import ListProjects from "../components/list-projects";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";

const Scene = dynamic(() => import("../components/Scene/"), {
  ssr: false,
});

export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const user = data?.user;
  const { timeline } = user;

  return (
    <main>
      <div className="h-dvh w-dvw md:absolute md:block hidden">
        <Scene />
      </div>

      <div
        id="mobile-header"
        className="h-screen flex flex-col justify-between px-2 mb-3 md:hidden"
      >
        <div className="py-5 mb-22">
          <p className="text-white text-sm">©FOLIO2024</p>
        </div>
        <div>
          <div className="grid grid-cols-12 mt-32">
            <div className="text-white col-start-1 col-span-3 flex items-center gap-2 mb-5">
              <Image
                className="rounded-full"
                src="/images/pfp.jpg"
                width={150}
                height={150}
                alt="Profile Picture"
              />
              <div className="p-1 w-1 h-1 shadow shadow-green-400 bg-green-400 rounded-full"></div>
              <p>Online</p>
            </div>
          </div>
          {/* Greeting Message */}
          <p className="text-white col-start-2 col-span-12 text-4xl">
            Ciao! I&#39;m Andrea,
            <br />a creative problem solver.
          </p>
        </div>
        {/* Read More Section */}

        <div className="flex items-center justify-between">
          <p className="text-white text-4xl">
            Read more
            <br />
            <span className="text-white underline decoration-wavy decoration-red-700">
              abuot me
            </span>
          </p>
          <Link href={"/about"} className="text-white text-9xl">
            ↗
          </Link>
        </div>

        {/* Projects Section (Placed at the bottom) */}
        <div className="flex items-center justify-between">
          <p className="text-white col-span-10 text-4xl">
            Take a look at
            <br />
            my projects
          </p>
          <Link href={"/#projects"} className="text-white text-9xl">
            ↓
          </Link>
        </div>
      </div>

      <section className="md:h-dvh md:w-dvw overflow-hidden p-2 md:block hidden">
        <div className="relative h-full w-full">
          <div className="flex justify-end flex-col h-full pb-10">
            <div className="grid grid-cols-4">
              <h1 className="text-white col-span-4 about md:text-9xl text-4xl font-bold">
                <p className="uppercase">Creative</p>
              </h1>
              <h1 className="text-white col-start-2 col-span-3 grid-cols-subgrid md:text-9xl text-4xl font-bold">
                <p className="uppercase">problem solver</p>
              </h1>
            </div>
            <div className="grid grid-cols-subgrid col-span-3">
              <div className="md:text-5xl py-4 flex text-white justify-end px-4 gap-2">
                <p>I&#39;m Andrea, read more</p>
                <Link
                  href={"/about"}
                  className="text-white flex items-center underline decoration-wavy md:mr-2 gap-1"
                >
                  aobut me
                </Link>{" "}
                ↗
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative md:grid md:grid-cols-9 md:pt-20 md:pb-60 grid-cols-1 gap-4 px-2"
      >
        <div className="col-span-1 relative md:pb-0 pb-4">
          <p className="text-3xl sm:text-5xl text-white md:block hidden">
            Projects
          </p>
        </div>
        <div className="md:col-span-8 col-span-1 relative md:pb-0 pb-4">
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
