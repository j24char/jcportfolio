import React from "react";

// function article_1() {
// 	return {
// 		date: "7 May 2025",
// 		title: "The Benefits of Project Portfolios",
// 		description:
// 			"Creating a project portfolio helps increase visibility for those trying to build their professional network. Find out why project portfolios are now more important than resumes.",
// 		keywords: [
// 			"The Benefits of Project Portfolios",
// 			"J24Char",
// 			"JC",
// 		],
// 		style: `
// 			.article-content {
// 				display: flex;
// 				flex-direction: column;
// 				align-items: center;
// 				padding: 20px;
// 				line-height: 1.6;
// 			}
// 			.randImage {
// 				align-self: center;
// 				outline: 2px solid red;
// 				margin-top: 20px;
// 			}
// 		`,
// 		body: (
// 			<React.Fragment>
// 				<div className="article-content">
// 					<div className="paragraph">
// 						In today’s digital-first world, the traditional resume is losing ground to a more dynamic, authentic tool: the project portfolio. A well-maintained portfolio gives potential collaborators, employers, or clients direct insight into your capabilities—what you’ve built, how you solve problems, and how your thinking has evolved over time.
// 					</div>
// 					<div className="paragraph">
// 						Unlike resumes, which compress accomplishments into one-page summaries, portfolios allow for context. They let you demonstrate ownership over a problem, the steps you took to address it, and the outcome—whether successful or not. This transparency fosters trust and provides depth that static documents simply cannot offer.
// 					</div>
// 					<div className="paragraph">
// 						For engineers, designers, and product thinkers, showcasing real work is the best proof of skill. Portfolios make visible the otherwise intangible qualities: adaptability, learning agility, and execution under constraints. They also allow your voice to shine through via documentation, commit messages, design notes, and even retrospectives.
// 					</div>
// 					<div className="paragraph">
// 						More than just a gallery, a portfolio becomes a living artifact of your professional journey. It reflects your evolving curiosity and values. And perhaps most importantly—it invites others to see your growth and imagine what it would be like to work alongside you.
// 					</div>
					
// 				</div>
// 			</React.Fragment>
// 		),
// 	};
// }

// function article_2() {
// 	return {
// 		date: "27 May 2025",
// 		title: "Artificial Intelligence in Coding",
// 		description:
// 			"AI is transforming software development, from improving test outcomes to streamlining development. Discover the latest capabilities enabled by this game-changing technology.",
// 		style: `
// 			.article-content {
// 				padding: 20px;
// 				line-height: 1.6;
// 			}
// 		`,
// 		keywords: [
// 			"Artificial Intelligence in Coding",
// 			"J24Char",
// 			"JC",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<div className="article-content">
// 					<p>
// 						Artificial Intelligence has rapidly progressed from a theoretical field of study to a hands-on tool used daily by developers around the globe. Tools like GitHub Copilot, ChatGPT, and Amazon CodeWhisperer have made AI pair programming not just possible—but highly effective.
// 					</p>
// 					<p>
// 						AI can now assist with boilerplate code generation, writing tests, identifying bugs, and even designing efficient architectures. It acts as a tireless co-pilot, catching errors in logic or suggesting optimizations, helping developers maintain focus on the bigger picture.
// 					</p>
// 					<p>
// 						But AI’s impact goes beyond the editor. It’s reshaping how we think about software development. Junior developers can accelerate their learning curve by asking natural language questions. Mid-level developers can automate tedious tasks, and senior engineers can prototype features faster while offloading repetitive chores.
// 					</p>
// 					<p>
// 						Of course, AI isn't a replacement for deep understanding. It lacks context, business insight, and creativity—things only humans can bring. But used wisely, it's an amplifier. The future of coding isn't man vs machine—it's man with machine.
// 					</p>
// 					<p>
// 						As AI models continue to evolve, we’ll likely see even greater integration into version control systems, CI/CD pipelines, and design tools. What remains critical is for developers to stay curious, skeptical, and strategic—harnessing AI not as a crutch, but as a springboard for better, faster, more thoughtful development.
// 					</p>
// 				</div>
// 			</React.Fragment>
// 		),
// 	};
// }

//const myArticles = [article_1, article_2, article_3];

//export default myArticles;

function article_1() {
    return {
        date: "20 June 2025", 
        title: "Unlock Your Inner Developer", 
        imageSrc: "./UnlockYourInnerDeveloper.jpg", 
        link: "https://thedailyreframe.substack.com/p/unlock-your-inner-developer?r=55l0om", 
    };
}

function article_2() {
    return {
        date: "1 July 2025", 
        title: "The Unexpected Gift of Saying 'No'",
        imageSrc: "./UnexpectedGiftOfNo.jpg",
        link: "https://thedailyreframe.substack.com/p/the-unexpected-gift-of-saying-no?r=55l0om",
    };
}

function article_3() {
    return {
        date: "2 July 2025",
        title: "From Code to AI",
        imageSrc: "./FromCodeToAI.jpg",
        link: "https://thedailyreframe.substack.com/p/from-code-to-ai?r=55l0om",
    };
}

// Assuming you'll update article_1 and article_2 similarly
const myArticles = [
    // Update these functions to return the new structure as well
    article_1,
    article_2,
    article_3
];

export default myArticles;