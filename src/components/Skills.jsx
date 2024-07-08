import { technologies } from "../constants";
import { nairobi } from "../assets";

const Skills = () => {
    return (
        <div id="Skills" className="relative w-screen h-full overflow-hidden bw-gradient">
            <div className="absolute inset-0 z-[-1] overflow-hidden">
                <img src={nairobi} alt="Background" className="object-cover w-full h-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16">
                <div className="text-center max-w-4xl">
                    <div className="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins">
                        MY SKILLS
                    </div>
                    <h1 className="text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins mt-2">
                        Technologies.
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 mt-14">
                    {technologies.map((tech) => (
                        <div key={tech.id} className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center animate-wobble">
                            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
