'use client';

const NavbarButton = ({ label, onClick }) => {
    return (
        <button
            className='border-2 py-1 border-white/10 text-accent uppercase text-center bg-black font-bold w-full h-fit'
            onClick={onClick}
        >{label}</button>
    );
}

const Navbar = () => {
    const handleOpenNavigation = () => {
        console.log('open')
    };

    return (
        <div className='absolute bottom-0 left-0 w-full p-2'>
            <div className='flex gap-3'>
                <NavbarButton label='navigation' onClick={() => handleOpenNavigation()} />
                <NavbarButton label='about' />
            </div>
        </div>
    )
}

export default Navbar;