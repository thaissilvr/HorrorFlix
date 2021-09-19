const URLr = "http://www.omdbapi.com/?i=tt3896198&apikey=ced17615";

$.ajax({
    url: URLr,
    success: function(data){
        console.log(data)
    },
    error: function(error){
        console.log(error)
        
    }
})