import LinkButton from "@/components/common/LinkButton";

export default function Home() {
	return (
		<main className='flex sm:items-center sm:justify-center'>
			<div className='flex flex-col sm:flex-row sm:items-center sm:justify-start p-4 sm:p-8 gap-2 sm:gap-8 lg:p-20 lg:gap-12 select-none *:select-none max-w-screen-lg'>
				<h1 className='text-primary text-9xl sm:text-[19rem] tracking-tighter font-extrabold font-bigShouldersDisplay'>Hi!</h1>
				<div className='flex flex-col gap-5'>
					<h3 className='-tracking-tighter sm:text-lg'>Welcome to by personal website.</h3>
					<p className='-tracking-tight sm:text-lg'>I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this. You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.</p>
					<LinkButton
						label='ENTER THE SYSTEM'
						href='/projects'
					/>
				</div>
			</div>
		</main>
	);
}