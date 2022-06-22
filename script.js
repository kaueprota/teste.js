//API filmes
{
  fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e714d90fe4e0556b7281291391122117&language=en-US&page=1')
  .then(response => response.json())
  .then(function(json){
    var filme = document.querySelector('#filmes');

    console.log(json)
    console.log(json.results)

    json.results.map(function(val){
    filme.innerHTML += `<div id="titulo">${val.title} <span id="span">Saiba mais</span></div>
                        <div id="overview" >${val.overview}</div>
                        <div id="popularity" >Popularidade: ${val.popularity}</div>
                        
                        
                        `

    })
    
  })
}


