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