import React from "react";

function article_1() {
	return {
		date: "7 May 2025",
		title: "The Benefits of Project Portfolios",
		description:
			"Creating a project portfolio helps increase visibility for those trying to build their professional network. Find out why project portfolios are now more important than resumes.",
		keywords: [
			"The Benefits of Project Portfolios",
			"J24Char",
			"JC",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "27 May 2025",
		title: "Artificial Intelligence in Coding",
		description:
			"AI is transforming software development, from improving test outcomes to streamlining development. Discover the latest capabilities enabled by this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Coding",
			"J24Char",
			"JC",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
