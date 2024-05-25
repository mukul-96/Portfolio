import { technologies } from "../constants";
const Skills=()=>{
const SkillCard=({icon})=>{
    return(
        <div className="w-28 h-28">
        <img src={icon}></img>
        </div>
    )
}

return(
    <div className="w-screen h-[100vh] overflow-hidden bw-gradient ">
    <div className="z-[-1] absolute h-full w-full overflow-hidden"><img src="src\assets\background\nairobi.png" className="top-[-190px] absolute"></img></div>
    <div className=" z-2  ml-[200px] mr-[200px] mt-[80px]">
    
    <div className="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold    font-poppins text-gray-400">MY SKILLS</div>
        <h1 className="text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins text-white">Technologies.</h1>
        <div className="flex flex-wrap justify-center gap-10 mt-14 ">
        {technologies.map((tech)=>(
        <SkillCard key={tech.name} icon={tech.icon}></SkillCard>
        ))}
    </div>
    </div>
   
    
</div>
)
}
export default Skills;