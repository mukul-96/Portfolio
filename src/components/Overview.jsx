import { services } from "../constants";
import Card from "./Card";
const Overview=()=>{
return(
    <div className="flex-col h-[100vh] w-screen ml-[200px]">
        <div className="mt-[130px] " >
            <div className="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins">INTRODUCTION</div>
            <h1 className="text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">Overview.</h1>
            <div className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.</div>
        </div>
        {/* cards */}
        <div className="mt-20 flex flex-wrap gap-10 ">
           { services.map((service)=>(
                <Card key={service.id} icon={service.icon} title={service.title}  ></Card>
            ))}
        </div>
    </div>
)
}
 export default Overview;