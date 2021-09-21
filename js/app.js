const URLa = "http://www.omdbapi.com/?i=";
const URLb = "&apikey=ced17615";

const IDs = ["tt5052448", "tt9347730", "tt6857112", "tt1457767","tt3065204", "tt7069210" ,"tt6566576" ,"tt9701940", "tt9701942", "tt1396484", "tt7349950", "tt0053891"]

IDs.forEach((id, i)=>{
    console.log(`ID[${i}] = ${id}`);
})

$.ajax({
    url: `${URLa}${IDs[0]}${URLb}`,
    success: function(data){
        console.log(data)
        return console.log(data);
    },
    error: function(error){
        console.log(error)

    }
})