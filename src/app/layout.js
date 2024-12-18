import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
    title: 'Test',
    description: 'Test',
};

const buttons = [
    {
        label: 'navigation',
        href: '/navigation'
    },
    {
        label: 'about',
        href: '/about'
    }
];

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='h-full bg-black'>
            <body className='relative bg-black h-full'>
                <div className='*:h-full'>{children}</div>
                <Navbar buttons={buttons} />
            </body>
        </html>
    );
}
