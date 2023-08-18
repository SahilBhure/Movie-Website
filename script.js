const textBar = document.getElementById('textbar');
const button = document.getElementById('searchmovie');
const showMovie = document.querySelector('.movie');


button.addEventListener('click',async() =>{
    const movieName = textBar.value;
    const res = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=3598138c`);
    const data = await res.json();
    //console.log(data.Search);
    MovieList(data);
});

function MovieList(data){
    let movieDiv = document.getElementsByClassName('movieDiv');
    if(movieDiv.length){
        showMovie.innerHTML = "";
    }else{
        for(let i = 0; i < data.Search.length;i++){
    //showMovie.innerHTML = `<div class = "Title">${data.Search[i].Title}</div>` 
    showMovie.innerHTML += `
    <div class ="movieDiv">
     <div class = "movie-Name">
      <h4>${data.Search[i].Title}</h4>
     </div>
    </div>`}
}
}
