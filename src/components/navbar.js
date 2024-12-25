import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarButton = ({ label, onClick, isActive }) => {
    return (
        <button
            className={`border-2 py-1 border-white/10 uppercase text-center font-bold w-full h-fit ${isActive ? 'text-black bg-accent ' : 'bg-black text-accent'}`}
            onClick={onClick}
        >{label}</button>
    )
}

const MenuButton = ({ label, href, onChangePage }) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <Link
            href={href}
            className={`border-l-2 ${isActive ? 'border-accent' : 'border-[#242425]'}`}
            onClick={() => onChangePage()}
        >
            <div className={`${isActive ? 'bg-accent/70' : 'bg-[#242425]/70'} px-2 py-1`}>
                <span className='text-lg tracking-wider font-bigShouldersDisplay uppercase'>{label}</span>
            </div>
        </Link>
    )
}

const Menu = ({ onClose }) => {
    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => document.body.classList.remove('no-scroll');
    }, []);

    return (
        <div className='z-50 fixed top-0 left-0 w-full h-full bg-black border-2 border-white/10'>
            <div className='flex justify-between items-center border-b-2 border-white/10 px-4 py-2'>
                <h2 className='text-2xl'>NAVIGATION</h2>
                <span className='text-3xl cursor-pointer' onClick={() => onClose()}>X</span>
            </div>
            <div className='flex flex-col gap-4 p-4'>
                <MenuButton label='à propos' href='/' onChangePage={() => onClose()} />
                <MenuButton label='logs' href='/logs' onChangePage={() => onClose()} />
                <MenuButton label='projets' href='/projects' onChangePage={() => onClose()} />
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
            <div className='sticky bottom-2 flex gap-3'>
                <NavbarButton label='navigation' isActive={isOpen} onClick={() => toggleOpenState()} />
            </div>
        </div>
    )
}