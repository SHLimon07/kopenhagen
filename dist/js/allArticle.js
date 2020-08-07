
allArtMain();

async function allArtMain(){
	var articleData = await fetchPost('article');

	articleInit(articleData);
}

function articleInit (data) {
	// body... 

	var mainDiv = document.querySelector('.contentSection .previewBoxes');

	var max = data.length

	for(var i=0;i<max;i++)
	{
		createArticleBox(data[i],mainDiv);
	}
}

function createArticleBox(data,mainDiv){


	var previewBox = document.createElement('div');
	previewBox.classList.add('previewBox');
	
	var boxLink = document.createElement('a');
	boxLink.href = "article.html?id=" + data.id;
	boxLink.classList.add('link');

	var imageDiv = document.createElement('div');
	imageDiv.classList.add('featureImage');

	var image =  document.createElement('img');
	image.src = data.acf.image;

	var title = document.createElement('span');
	title.classList.add('title');
	title.innerHTML = data.title.rendered;

	var timeDiv = document.createElement('div');
	timeDiv.classList.add('time');

	var time = document.createElement('span');
	time.classList.add('posted');
	time.innerHTML = data.acf.date;

	var shortDes = document.createElement('span');
	shortDes.classList.add('shortDes');
	shortDes.innerHTML = data.content.rendered;


	mainDiv.appendChild(previewBox);
	previewBox.appendChild(boxLink);
	boxLink.appendChild(imageDiv);
	boxLink.appendChild(title);
	boxLink.appendChild(timeDiv);
	boxLink.appendChild(shortDes);
	imageDiv.appendChild(image);
	timeDiv.appendChild(time);


}