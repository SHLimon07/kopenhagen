var baseURL = 'http://sajjad.jprkopat.com/semester2/copenhagenbackend/wp-json/wp/v2/';

async function fetchPost (postType) {
	// body... 
	var url = baseURL + postType;

	var res = await fetch(url);
	var data = await res.json();

	return data;

}

async function idToData (post,id) {
	// body... 
	var send = post + '/' + id;
	var data = await fetchPost(send);

	return data;
}
