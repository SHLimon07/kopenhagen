articleMain();

async function articleMain () {
	// body... 
	var articleId = getId(window.location);

	var data = await idToData('article',articleId);

	articleInit(data);

	console.log(data);

}



function articleInit (data) {
	// body... 

	document.querySelector('.title span').innerHTML = data.title.rendered;
	document.querySelector('.featureImage img').src = data.acf.image;
	document.querySelector('.details .author').innerHTML = data.acf.author_name;
	document.querySelector('.details .date').innerHTML = data.acf.date;
	document.querySelector('.description').innerHTML = data.content.rendered;
}