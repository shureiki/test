import Navbar from '@components/navbar';

export default function Layout({ children }) {
    return (
        <>
            <main className='p-4'>{children}</main>
            <Navbar />
        </>
    )
}