// For Loops

for (
    let i = 0; // Deklererer en variable som begynner på 0 (utgangspunkt)
    i < 5; // sjekker om variabelen er mindr en 5 (antal ganger koden blir repetert)
    i++ // Adds the index + index to count a iteration
    ) {
        console.log(" Again and again");
        console.log(i);
};
console.log("---------- Ny sone ----------")

for (
    let index = 0; index < 5; index++)
    {
        //console.log("Repetert")
        //console.log(index);
    };

console.log("---------- Ny sone ----------")
// Oppgave: Lag en variabel som lagrer en basic array/flat array

const cars = ["ford", "volvo", "volkswagen", "mitsubishi"];
//console.log(cars);

for (let index = 0; index < cars.length; index++) {
    //console.log(index);
    //console.log(cars[index]);
}

//  oppgave: Lag en variabel som lagrer en basic array/flat array
//lag en "for lope" som  går gjennom alle array elementene

const wapons = ["sword", "dagger", "wand", "staf" ];
//console.log(wapons);

for (let index = 0; index < wapons.length; index++) {
//console.log(index);
//console.log(wapons[index]);
}

//
console.log("---------- Ny sone ----------")
//

for (let index = 5; index > 0; index = index - index) {
    console.log(index);
    
}



