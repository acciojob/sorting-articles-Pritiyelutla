//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function sortingArticles(articles) {
            return articles.sort((a, b) =>{
				let titleA = stripArticle(a.toLowerCase());
				let titleB = sortArticles(b.toLowerCase());

				if(titleA < titleB) return -1;
				if(titleA > titleB) return 1;
				return 0;
			});
        }

function stripArticle(title){
	return title.replace(/^(a | an | the)/i, " ").trim();
}	


let arr = sortingArticles(bands);
let ol = document.getElementById("band");
for(let i=0; i<arr.length; i++)
	{
		li = document.createElement("li");
		li.innerText = sortedArticles[i];
		ol.append(li);
	}

