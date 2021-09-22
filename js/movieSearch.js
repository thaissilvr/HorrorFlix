let div = document.getElementById('resultado')

$('#icon').on('click', function () {
    let searchingTitle = $('#inputSearch').val() ;
    let urlMovie = "https://www.omdbapi.com/?t=" + searchingTitle + '&apikey=333f7a1b'
    
    $.ajax({
        url: urlMovie,
        success: function (getMovie) { 
            console.log(getMovie)   
            if (getMovie.Response == 'True') {    
            $('#resultado').html(`
                <div class="result">

                    <div class="poster">
                        <img src="${getMovie.Poster}"
                    </div>
                </div>

                    <div class="infostxt">
                        <div class="title">
                            <h2>${getMovie.Title}</h2>
                        </div>
                        
                        <div class="infosdofilme">
                            <ul>
                            <li>${getMovie.Year}</li>
                            <li>${getMovie.Runtime}</li>
                            <li>${getMovie.Rated}</li>
                            <li>${getMovie.Genre}</li>
                            </ul>
                        </div>


                        <div class="infostecnicas">
                            <ul>
                            <li>Director: ${getMovie.Director}</li>
                            <li>Actors: ${getMovie.Actors}</li>
                            <li>Country: ${getMovie.Country}</li>
                            <li>Rating: ${getMovie.Ratings[0].Value}</li>
                            </ul>
                        </div>

                        <p class="textinho">
                            ${getMovie.Plot}
                        </p> 
                    </div>
             
        `)  
    } else {
        console.log('else')
        $('#resultado').html ('Not found. Try again!')
    }        
        },
            error: function (showError) {
                console.log(showError)
              div.innerHTML = 'Offline server'  
             }
    
    })
    })

