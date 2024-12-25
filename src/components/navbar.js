import { useState } from "react";

const NavbarButton = ({ label, onClick, isActive }) => {
    return (
        <button
            className={`border-2 py-1 border-white/10 uppercase text-center font-bold w-full h-fit ${isActive ? 'text-black bg-accent ' : 'bg-black text-accent'}`}
            onClick={onClick}
        >{label}</button>
    )
}

const Menu = ({ onClose }) => {
    return (
        <div className='w-full h-full bg-black border-2 border-white/10'>
            <div className='flex justify-between items-center border-b-2 border-white/10 px-4 py-2'>
                <h2 className='text-2xl'>NAVIGATION</h2>
                <span className='text-3xl' onClick={() => onClose()}>X</span>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpenState = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className='absolute flex flex-col bottom-0 left-0 w-full h-full p-2 flex-1 justify-end gap-2'>
            {isOpen && <Menu onClose={() => toggleOpenState()} />}
            <div className='flex gap-3 justify-self-end'>
                <NavbarButton label='navigation' isActive={isOpen} onClick={() => toggleOpenState()} />
                <NavbarButton label='about' />
            </div>
        </div>
    )
}