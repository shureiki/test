import './globals.css';

export const metadata = {
    title: 'Test',
    description: 'Test',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='h-full bg-black'>
            <body className='bg-black h-full *:h-full'>{children}</body>
        </html>
    );
}
