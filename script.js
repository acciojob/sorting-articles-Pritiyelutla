//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function sortArticles(arr) {
            return arr.sort((a, b) => {
                const stripArticle = str => str.replace(/^(a |an |the )/i, '').trim();
                const titleA = stripArticle(a.toLowerCase());
                const titleB = stripArticle(b.toLowerCase());
                return titleA.localeCompare(titleB);
            });
        }

        // Get the sorted articles
        const sortedArticles = sortArticles(articles);

        // Get the ul element by its ID
        const ul = document.getElementById('band');

        // Add sorted articles to the ul element
        sortedArticles.forEach(article => {
            const li = document.createElement('li');
            li.textContent = article;
            ul.appendChild(li);