import Link from 'next/link';

const LinkButton = ({ label, href }) => {
    return (
        <Link
            className='text-xl px-4 py-2 text-accent border-2 font-bold font-bigShouldersDisplay border-accent w-fit hover:bg-accent hover:text-black'
            href={href}
        >{label}</Link>
    )
};

export default LinkButton;