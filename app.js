let name = [
    "Alexis",
    "Erwin",
    "Eren",
    "Livai",
    "Mikasa",
    "Armin"
];

let object = [
    " une eppé",
    " un Equipement Tridimentionelle",
    " un balais",
    " une hache"
];

let temperature = [
    " 10°",
    " 20°",
    " 15°",
    " 5°",
    " 0°"
];

let places = [
    " à la Zone d'entrainement ",
    " aux District de Trost ",
    " aux District de Shiganshina ",
    " à l'Exterieur des murs ",
    " aux District de Stohese "
];

let verbs = [
    "me casse les couilles",
    " se bat contre les Titans",
    " s'entraine",
    " se bat contre le Cuirasse",
    " se bat contre le Colosal",
    " se bat contre le Bestial"
];

let pStory = document.getElementById("story");

let userName = document.getElementById("input");


document.getElementById("button").addEventListener('click', function () {
    pStory.innerHTML += name[Math.floor(Math.random() * name.length)] + " avec" + object[Math.floor(Math.random() * object.length)]
    +" à température de" + temperature[Math.floor(Math.random() * temperature.length)] + places[Math.floor(Math.random() * places.length)] +
        verbs[Math.floor(Math.random() * verbs.length)] + " cette histoire à été générer par" + " " + userName.value +"<br>" + "<br>";

})
