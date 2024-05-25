import { map } from "../assets";
    const Hero=()=>{
        return(
        <div className="  w-screen h-[100vh]  overflow-hidden ">
        
            <img src={map} className="scale-[0.85] absolute h-full  w-screen "></img>
                <div className="z-10  mt-[150px] flex-col flex absolute " >
                    <div className='relative  left-[200px] overflow-hidden'>
                        <h1 className="font-black text-eerieBlack lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2 text-eerieBlack font-poppins uppercase">Hi,i'M</h1>
                        <span className="sm:text-battleGray sm:text-[90px] 
                    text-eerieBlack text-[50px] font-mova
                    font-extrabold uppercase"> MUKUL</span>
                    
                    </div>
                    <div className="text-eerieBlack font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-eerieBlack relative left-[200px] overflow-hidden">Lorem ipsum dolor,<br/> 
                    sit amet consectetur adipisicing elit.<br/> 
                    Ea, soluta. </div>
                </div>
                <div className="absolute top-0 left-[570px] w-full h-full overflow-hidden">
                <img src="src/assets/background/pngwing.com.png" className="scale-[2] opacity-90 h-full" alt="Overlay image" />
            </div>
                 
                
        </div>
        )
    }
    export default Hero;
