

// bg-flashWhite flex justify-end px-20 py-10 z-10 fixed top-0 w-full border-4 border-red-400 
const Navbar=()=>{
    return(
            <nav className="w-full flex  py-2 fixed 
            top-0 z-20 sm:opacity-[0.97] sm:px-16 px-6 justify-end bg-white overflow-hidden">         
                <div className='space-x-11'>
                    <a href="">ABOUT</a>
                    <a href="">PROJECT</a>
                    <a href="">CONTACT</a>
                </div>
            </nav>
    )
}
export default Navbar;