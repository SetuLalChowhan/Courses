const root = document.querySelector('.root')
const button = document.querySelector('.btn');


function card(item){
    const Card=document.createElement('div');
    
    const photo=document.createElement('img')
    photo.src= item.thumbnailUrl;

    const title=document.createElement('title')
    title.innerHTML=item.title;
    
    Card.appendChild(photo);
    Card.appendChild(title);
    root.appendChild(Card);
}

function displayImages(items) {
    items.forEach(item => {
        card(item);      
    });
    
}

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => res.json())
        .then(items => {
            displayImages(items);
        })

})