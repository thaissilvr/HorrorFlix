// REQUISIÇÃO PARA O SEARCH

$('#icon').on('click', function () {
    let searching = $('#inputSearch').val();
    let urlMovie = "http://www.omdbapi.com/?t=" + searching + '&apikey=333f7a1b'
    
    $.ajax({
        'url': urlMovie,
        'success': function (getMovie)  { 
            $(`
                
                <div class="result">

                    <div class="img">
                        <img src="${getMovie.Poster}"
                    </div>

                    <div class="title">
                        <h2>${getMovie.Title}</h2>
                    </div>
                    
                    <div class="movieinfo">
                        <ul>
                        <li>${getMovie.Year}</li>
                        <li>${getMovie.Runtime}</li>
                        <li>${getMovie.Rated}</li>
                        <li>${getMovie.Genre}</li>
                        </ul>
                    </div>


                    <div class="movieinfo2">
                        <ul>
                        <li>Director: ${getMovie.Director}</li>
                        <li>Actors: ${getMovie.Actors}</li>
                        <li>Country: ${getMovie.Country}</li>
                        <li>Rating: ${getMovie.Ratings[0].Value}</li>
                        </ul>
                    </div>


                    <p>
                        ${getMovie.Plot}
                    </p>
                </div>
                </div>

        `).appendTo($("#result"));

    
        }
    })
    
})

