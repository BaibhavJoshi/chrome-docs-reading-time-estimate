/*
    > Content scripts can use the standard DOM to read and change the content of a page.

    > The extension will first check if the page contains the <article> element.

    > Then, it will count all the words within this element and create a paragraph that displays the total reading time. 

*/


const article = document.querySelector("article");

// document.querySelector() may return null if the selector doesn't match anything

if (article) {

    const text = article.textContent;


    // Regular expression to match words

    const wordMatchRegExp = /[^\s]+/g;

    const words = text.matchAll(wordMatchRegExp);


    // matchAll returns an iterator object, which we convert to an array to get the word count

    const wordCount = [...words].length;

    const readingTime = Math.round(wordCount / 200);

    const badge = document.createElement("p");


    // Use the same styling as the published information in an article's header

    badge.classList.add("color-secondary-text", "type--caption");

    badge.textContent = `⏱️ ${readingTime} minute read`;


    // Support for API reference docs

    const heading = article.querySelector("h1");


    // Support for article docs with date

    const date = article.querySelector("time")?.parentNode;


    (date ?? heading).insertAdjacentElement("afterend", badge);


}