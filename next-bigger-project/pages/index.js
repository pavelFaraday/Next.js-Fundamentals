import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 5, 12345 Some City",
		description: "This is a first meetup!",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 10, 12345 Some City",
		description: "This is a second meetup!",
	},
];

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Meta tag info for page title</title>
				<meta
					name="description"
					content="This is website for learning Next.js"
				/>
			</Head>
			<MeetupList meetups={DUMMY_MEETUPS} />;
		</>
	);
};

// This function will not run during the build process, but instead always on the server after deployment !!!
// Every code you will write here, will run only on server, not on the client side !!!
/* export async function getServerSideProps(context) {
	const req = context.req;
	const res = context.res;

	// fetch data from an API
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
	};
} */

/* export async function getStaticProps() {
	// fetch data from an API
	return {
	  props: {
		meetups: DUMMY_MEETUPS
	  },
	  revalidate: 1
	}; 
} */

export default HomePage;
