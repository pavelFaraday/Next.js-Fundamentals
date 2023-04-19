import Link from "next/link";

const LetterIndex = () => {
	return (
		<>
			<h1>index file in Letter folder</h1>
			<ul>
				<li>
					<Link href="/letter/letter">Letter Page</Link>
				</li>
				<li>
					<Link href="/news">News Page</Link>
				</li>
				<li>
					<Link href="/">Home Page</Link>
				</li>
			</ul>
		</>
	);
};

export default LetterIndex;
