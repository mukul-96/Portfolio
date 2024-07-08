import { services } from "../constants";
import Card from "./Card";

const Overview = () => {
    return (
        <div id="about"  className="flex flex-col justify-center items-center py-12 px-4 md:px-8 lg:px-16">
            <div className="mt-12 max-w-3xl text-center">
                <div className="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins">INTRODUCTION</div>
                <h1 className="text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins mt-4">
                    Overview.
                </h1>
                <p className="mt-4 text-taupe text-[18px] leading-[30px]">
                I am a passionate and detail-oriented full-stack developer with a keen focus on creating impactful and user-centric web applications. My journey in software development is driven by a blend of curiosity, creativity, and a relentless pursuit of excellence. With a strong foundation in both frontend and backend technologies, I thrive on crafting seamless digital experiences that balance form and function.
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <Card key={service.id} icon={service.icon} title={service.title} />
                ))}
            </div>
        </div>
    );
};

export default Overview;
