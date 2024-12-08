import Link from 'next/link';

const LinkButton = ({ label, href }) => {
    return (
        <Link
            className='text-xl px-4 py-2 text-primary border-2 font-bold font-bigShouldersDisplay border-primary w-fit hover:bg-primary hover:text-black'
            href={href}
        >{label}</Link>
    )
};

export default LinkButton;