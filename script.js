document.getElementById("weatherSubmit").addEventListener("click", function (event) {
    const value = Math.floor(Math.random() * 556);;
    event.preventDefault();
    console.log(value);
    const url = "http://api.alquran.cloud/v1/ayah/"+value+"/en.asad";
    console.log(url);
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json.data.text);
            let results = "";
            results += "<h2>Bot1 says:</h2>";
            results += "<p>"+json.data.text+"</p>";
            document.getElementById("bot1res").innerHTML = results;
        });
    
    const url2 = "https://poetrydb.org/random";
    console.log(url2);
    fetch(url2)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json[0].lines[0]);
            let results = "";
            results += "<h2>Bot2 says:</h2>";
            results +="<p>";
            for(let i =0; i <20; i++){
                if(i < json[0].lines.length){
                    results += json[0].lines[i];
                }
            }
            results += "</p>";
            document.getElementById("bot2res").innerHTML = results;
        });
});