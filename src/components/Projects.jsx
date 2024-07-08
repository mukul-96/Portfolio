import ProjectCard from './ProjectCard'; import { oneVote } from '../assets'; 

const projects = [
  {
    id: '01',
    image: oneVote,
    title: 'oneVote',
    description: 'Created a voting app where users can sign up, authenticate, and vote. Developed a secure JWT-based authentication system and an admin panel to manage parties, monitor voter activities, and reset data. Used Chart.js for visualizing voter turnout and party vote statistics...                           **Admin id**=mukul@gmail.com **password**=mukul3421',
    githubLink: 'https://github.com/mukul-96/oneVote',
    liveLink: 'https://onevote.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="project" className="w-screen">
      <div className="bg-black h-full min-h-[100vh] flex justify-center items-center py-20">
        <div className="w-full max-w-5xl px-4 sm:px-8 lg:px-16 text-center">
          <div className="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins">
            CASE STUDIES
          </div>
          <h1 className="text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins mt-4">
            Projects.
          </h1>
          <div className="mt-4 text-taupe text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] max-w-3xl mx-auto">
            These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image} 
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
