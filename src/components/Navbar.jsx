const Navbar = () => {
    return (
        <nav className="w-full flex fixed px-4 py-3 text-[20px] top-0 z-20 bg-white sm:px-6 sm:py-4 md:px-10 md:py-5 lg:px-16 lg:py-6 justify-end">
            <div className="space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16 font-mova">
                <a href="#about" className="hover:underline">ABOUT</a>
                <a href="#project" className="hover:underline">PROJECT</a>
                <a href="#footer" className="hover:underline">CONTACT</a>
            </div>
        </nav>
    );
}

export default Navbar;
