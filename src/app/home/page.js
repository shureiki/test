import LinkButton from "@/components/common/LinkButton";
import UserAvatar from "@/components/UserAvatar";

const Hgroup = ({ label, text }) => {
	return (
		<hgroup className='flex flex-col *:uppercase'>
			<h4 className='text-lg font-iceland'>{label}</h4>
			<p className='text-accent text-xl font-bold font-bigShouldersDisplay'>{text}</p>
		</hgroup>
	)
}

const Home = () => {
	return (
		<main className='flex flex-col gap-2 p-4'>
			<UserAvatar />
			<div className='flex flex-wrap gap-5'>
				<Hgroup label='name' text='shurei' />
				<Hgroup label='occupation' text='web developer' />	
			</div>
		</main>
	);
}

export default Home;