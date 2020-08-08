//functions in this page are used by many pages

function navBarToggle() {
    var icon = document.querySelector('.buttonDiv');
    var menu = document.querySelector('.collaps');

    icon.classList.toggle('toggle');
    menu.classList.toggle('toggle');
}


function getContent (data) {
    // body... 

    var content = document.createElement('div');
    content.innerHTML = data.content.rendered;
    content = content.innerHTML;
    return content;

}


function getId (url) {
    // body... 
    var usp = new URLSearchParams(url.search);

    return usp.get('id').toString();
}