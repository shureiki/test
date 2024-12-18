const Box = ({ children }) => {
    return (
        <div className='p-2 relative box w-full'>
            <div className='bg-black border-2 border-white/10'>
                {children}
            </div>
        </div>
    );
}

export default Box;