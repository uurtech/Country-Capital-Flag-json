const fs = require("fs")
var getJSON = require('get-json')

let yeniListe = [];
getJSON('https://raw.githubusercontent.com/linssen/country-flag-icons/master/countries.json').then((response) => {
    let ulkeler = JSON.parse(fs.readFileSync("./country-list.json","utf8"))
    response.forEach(function(val,index){
        let ulke = val.name

        ulkeler.forEach(function(ul,i){

            if(ul.country == ulke){
             yeniListe.push({
                 country: ulke,
                 capital: ul.city,
                 flag: val.file_url,
             })
            }
        })
    })

    fs.writeFileSync("./output.json",JSON.stringify(yeniListe));
});
