
function stripArticle(title) {
    return title.replace(/^(a |an |the )/i, '').trim();
}

function sortArticles(articles) {
    return articles.sort((a, b) => {
        let titleA = stripArticle(a.toLowerCase());
        let titleB = stripArticle(b.toLowerCase());
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    });
}
//const articles =  ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const sortedArticles = sortArticles(band);
let ul = document.getElementById("band");

for(let i=0; i<sortedArticles.length; i++)
{
    let li = document.createElement("li");
    li.innerText = sortedArticles[i];
    ul.append(li);
}


