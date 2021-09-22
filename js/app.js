const URLa = "http://www.omdbapi.com/?i=";
const URLb = "&apikey=ced17615";
const glide = document.getElementById("glide")
const IDs = ["tt5052448", "tt9347730", "tt6857112", "tt0404032", "tt3567288", "tt1591095"; "tt1457767","tt3065204", "tt7069210" ,"tt6566576" ,"tt9701940", "tt9701942", "tt1396484", "tt7349950", "tt0053891"]
function img(img){
    return `<li class="glide__slide" style="width: 310px; background-image: url(${img});background-size: cover; background-repeat: no-repeat; background-position: center;" ></li>`
}
IDs.forEach((id, i)=>{
    console.log(`ID[${i}] = ${id}`);
    $.ajax({
        url: `${URLa}${id}${URLb}`,
        success: function(data){
            console.log(data);
            const imgURL = data.Poster;
            console.log(imgURL);
            glide.innerHTML += img(imgURL);
        },
        error: function(error){
            console.log(error)
        }
    })
})


// let slider=new Glider(document.querySelector('.glide'), {
//     slidesToShow: 6,
//     draggable: true,
//     arrows: {
//       prev: '.glider-prev',
//       next: '.glider-next'
//     }
//   });
