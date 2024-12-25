import Navbar from '@components/navbar';
import UserAvatar from '@components/user-avatar';

const HGroup = ({ title, value }) => (
    <hgroup className='flex flex-col uppercase'>
        <h4 className='text-lg font-iceland'>{title}</h4>
        <p className='text-accent text-xl font-bold font-bigShouldersDisplay'>{value}</p>
    </hgroup>
);

export default function Layout({ children }) {
    const level = Math.floor((new Date() - new Date('10-27-2005')) / (1000 * 60 * 60 * 24 * 365));

    return (
        <>
            <div className='flex flex-col gap-3 p-4'>
                <div className='max-w-80 flex-1 self-center mt-2'>
                    <UserAvatar />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-end gap-1 font-bigShouldersDisplay tracking-widest'>
                        <p className='text-xl'>Niveau</p>
                        <p className='text-brand-green font-bold text-2xl'>{level}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <HGroup title='pseudo' value='Shurei' />
                        <HGroup title='prénom' value='Lenny' />
                        <HGroup title='occupation' value='Développeur web' />
                    </div>
                </div>
            </div>
            <main className='px-2 py-4 pt-0 flex-1'>
                <div className='box backdrop-blur-sm mb-10'>
                    <div className='p-2 border-2 border-white/10'>{children}</div>
                </div>
            </main>
            <Navbar />
        </>
    )
}