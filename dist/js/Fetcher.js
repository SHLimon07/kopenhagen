//this is the base url of the wordpress backend rest api
var baseURL = 'http://sajjad.jprkopat.com/semester2/copenhagenbackend/wp-json/wp/v2/';

async function fetchPost (postType) {
	// body... 
	//recieves the postype , adds it to the base url and returns the fetched data in json format
	var url = baseURL + postType;

	var res = await fetch(url);
	var data = await res.json();

	return data;

}

async function idToData (post,id) {
	// body... 

	//fetches data of a post type with exact post id
	var send = post + '/' + id;
	var data = await fetchPost(send);

	return data;
}
