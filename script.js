const textBar = document.getElementById('textbar');
const button = document.getElementById('searchmovie');
const showMovie = document.querySelector('.movie-card');



button.addEventListener('click',async() =>{
    const movieName = textBar.value;
    const res = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=3598138c`);
    const data = await res.json();
    //console.log(data.Search);
    MovieList(data);
    
});

function MovieList(data){
    let movieDiv = document.getElementsByClassName('card_repo');
    if(movieDiv.length){
        showMovie.innerHTML = "";
    }else{
        
        for(let i = 0; i < data.Search.length;i++){
        showMovie.innerHTML += `<div class="card_repo">
        <div class="card-body-repo">
                <div class="card-Img">
            <img src="${data.Search[i].Poster}" alt="${data.name}" id="Imgpic">
                </div>
                <div class="card-title">${data.Search[i].Title}</div>
                <div class="year">Year: ${data.Search[i].Year}</div>
            </div>
    </div>`
        }
}
}
