console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', () => {
    fetchDogBreeds();
    fetchDogPics();
    const breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', (event) => {
    const selectedLetter = event.target.value;
    filterBreeds(selectedLetter);
  });
});



function fetchDogPics(){    
    fetch(imgUrl)
    .then((res)=> res.json())
    .then(json => renderImages(json.message))
};
function renderImages(images){
    const dogImage = document.querySelector('#dog-image-container');
    images.map(image =>{
        const img = document.createElement('img');
        img.src = `${image}`;
        dogImage.appendChild(img);
    });
};

function fetchDogBreeds(){
    fetch(breedUrl)
    .then((res) => res.json())
    .then(json => renderDogBreeds(Object.keys(json.message)))
};
function renderDogBreeds(breeds){
    const dogBreeds = document.querySelector('#dog-breeds');
    breeds.map(breed => {
        const p = document.createElement('p');
        p.setAttribute("id", "this-dog-breed");
        p.innerHTML = `${breed}`;
        dogBreeds.appendChild(p);
    });
};

function filterBreeds(selectedLetter) {
    const dogBreeds = document.querySelector('#dog-breeds');
    const breedItems = dogBreeds.querySelectorAll('p');
      
    breedItems.forEach((breedItem) => {
        if (breedItem.innerHTML.startsWith(selectedLetter)) {
           breedItem.style.display = 'block';
        } else {
              breedItem.style.display = 'none';
        }
    });
}