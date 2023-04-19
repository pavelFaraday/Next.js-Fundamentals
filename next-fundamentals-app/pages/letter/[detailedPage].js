import { useRouter } from "next/router";

const DetailedPage = () => {
	const router = useRouter();
	// console.log(router.query.detailedPage); // What you will type in URL you will get the same value as router

	const letterId = router.query.detailedPage;
	// send a request to the backend API
	// to fetch the letter item with letterId

	return <h1>Detailed Page</h1>;
};

export default DetailedPage;
