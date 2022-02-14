//Gestione asincrona gestita con l'oggetto XMLHttpRequest senza Promise.

let daily = document.getElementById("daily");

daily.addEventListener("click",function(){

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4)
        if(xhr.status == 200){

            const success = JSON.parse(xhr.responseText);

            document.querySelector("#work .hobby p").innerHTML = success[0].title;
            document.querySelector("#work  #data1").innerHTML = success[0].timeframes.daily.current + "<p> hrs </p>";
            document.querySelector("#work  #data2").innerHTML = "<p> Last Week - </p> " + success[0].timeframes.daily.previous + "<p> hrs </p>";
            document.querySelector("#work .hobby .select").innerHTML =  `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;

            document.querySelector("#play .hobby p").innerHTML = success[1].title;
            document.querySelector("#play  #data1").innerHTML = success[1].timeframes.daily.current + "<p> hrs </p>";
            document.querySelector("#play  #data2").innerHTML = "<p> Last Week - </p> " + success[1].timeframes.daily.previous + "<p> hrs </p>";
            document.querySelector("#play .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;



            document.querySelector("#study .hobby p").innerHTML = success[2].title;
            document.querySelector("#study #data1").innerHTML = success[2].timeframes.daily.current + "<p> hrs </p>";
            document.querySelector("#study  #data2").innerHTML = "<p> Last Week - </p> " + success[2].timeframes.daily.previous + "<p> hrs </p>";
            document.querySelector("#study .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;


            document.querySelector("#exercise .hobby p").innerHTML = success[3].title;
            document.querySelector("#exercise #data1").innerHTML = success[3].timeframes.daily.current + "<p> hrs </p>";
            document.querySelector("#exercise  #data2").innerHTML = "<p> Last Week - </p> " + success[3].timeframes.daily.previous + "<p> hrs </p>";
            document.querySelector("#exercise .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;


            document.querySelector("#social .hobby p").innerHTML = success[4].title;
            document.querySelector("#social #data1").innerHTML = success[4].timeframes.daily.current + "<p> hrs </p>";
            document.querySelector("#social  #data2").innerHTML = "<p> Last Week - </p> " + success[4].timeframes.daily.previous + "<p> hrs </p>";
            document.querySelector("#social .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;


            document.querySelector("#selfCare .hobby p").innerHTML = success[5].title;
            document.querySelector("#selfCare #data1").innerHTML = success[5].timeframes.daily.current + "<p> hrs </p>";
            document.querySelector("#selfCare  #data2").innerHTML = "<p> Last Week - </p> " + success[5].timeframes.daily.previous + "<p> hrs </p>";
            document.querySelector("#selfCare .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;

        } else{
            const error = JSON.parse(xhr.responseText);
            console.log(error)
        }

        
    }

        xhr.open('GET', '/data.json');
        xhr.send();

        

});

//Gestione asincrona gestita con l'oggetto XMLHttpRequest con Promise.

let weekly = document.getElementById("weekly");

weekly.addEventListener("click", function(){

    uploadDate().then( (success) => {
        document.querySelector("#work .hobby p").innerHTML = success[0].title;
        document.querySelector("#work  #data1").innerHTML = success[0].timeframes.weekly.current + "<p> hrs </p>";
        document.querySelector("#work  #data2").innerHTML = "<p> Last Week - </p> " + success[0].timeframes.weekly.previous + "<p> hrs </p>";
        document.querySelector("#work .hobby .select").innerHTML =  `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;

        
        document.querySelector("#play .hobby p").innerHTML = success[1].title;
        document.querySelector("#play  #data1").innerHTML = success[1].timeframes.weekly.current + "<p> hrs </p>";
        document.querySelector("#play  #data2").innerHTML = "<p> Last Week - </p> " + success[1].timeframes.weekly.previous + "<p> hrs </p>";
        document.querySelector("#play .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;

        document.querySelector("#study .hobby p").innerHTML = success[2].title;
        document.querySelector("#study #data1").innerHTML = success[2].timeframes.weekly.current + "<p> hrs </p>";
        document.querySelector("#study  #data2").innerHTML = "<p> Last Week - </p> " + success[2].timeframes.weekly.previous + "<p> hrs </p>";
        document.querySelector("#study .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;

        document.querySelector("#exercise .hobby p").innerHTML = success[3].title;
        document.querySelector("#exercise #data1").innerHTML = success[3].timeframes.weekly.current + "<p> hrs </p>";
        document.querySelector("#exercise  #data2").innerHTML = "<p> Last Week - </p> " + success[3].timeframes.weekly.previous + "<p> hrs </p>";
        document.querySelector("#exercise .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;

        document.querySelector("#social .hobby p").innerHTML = success[4].title;
        document.querySelector("#social #data1").innerHTML = success[4].timeframes.weekly.current + "<p> hrs </p>";
        document.querySelector("#social  #data2").innerHTML = "<p> Last Week - </p> " + success[4].timeframes.weekly.previous + "<p> hrs </p>";
        document.querySelector("#social .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;

        document.querySelector("#selfCare .hobby p").innerHTML = success[5].title;
        document.querySelector("#selfCare #data1").innerHTML = success[5].timeframes.weekly.current + "<p> hrs </p>";
        document.querySelector("#selfCare  #data2").innerHTML = "<p> Last Week - </p> " + success[5].timeframes.weekly.previous + "<p> hrs </p>";
        document.querySelector("#selfCare .hobby .select").innerHTML = `<div id="bar1"> </div> <div id="bar2"> </div> <div id="bar3"> </div> `;



    }, (failed) => {
        console.log(failed)

    })//fine then

    

});

function uploadDate(){

    return new Promise( (resolve,reject) => {

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            
            if(xhr.readyState == 4)
            if(xhr.status == 200){

                resolve(JSON.parse(xhr.responseText))
              
            } else {

                reject(JSON.parse(xhr.responseText))
            }
        }

        xhr.open('GET','/data.json')
        xhr.send()

    })
}






