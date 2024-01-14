
// Hei!
// I denne oppgaven vil vi at dere skal sette opp noe generisk HTML og CSS som kan gjenbrukes i andre filer og prosjekter dere måtte ha i fremtiden. De fleste nettsider har de samme byggesteinene, så å ha noe template ferdig og klar til bruk kan hjelpe oss på vei til å bli gode utviklere. Det vil også minimere tid vi bruker på å skrive kode, om vi har noe som er ferdiglaget som kan limes inn i fremtidige prosjekter.

// CSS biblioteker:
// Vi har flere bibliotek som kan gjøre dette for oss, som tailwind og bootstrap, som enkelt kan gi oss styling til nettsidene våres med å skrive inn klasse navn som allerede har styling på seg. Det som vi gjør nå er at vi lager våre egne bibliotek, med at vi setter opp globale CSS klasser som kan taes på bruk på flere elementer for å sette styling på elementer. 

// Globale CSS klasser:
// Grunnen til at vi lager globale CSS klasser er for å minimere mengde kode vi skriver i filene våres, som for eksempel å lage spesifikke klasser til flex row og flex column, for det er en plasserings metode som vi bruker gjennom hele koden og fort kan bli noe som repeteres. Da er det mye enklere å bare ha en klasse selekter som er for flex column for eksempel og gjenbruke den, enn å skrive to linjer med kode på hvert element du ønsker skal ha denne plasseringen.

// Oppgave krav:
// Sett opp CSS variabler til farger
// Sett opp CSS variabler til font-familier
// Sett opp CSS variabler til CSS properties du bruker mye (for eksempel: flex, padding, font-size, osv)
// Sett opp CSS klasser til generelle elementer (header, main, footer, section, etc), som gjerne igjen tar i bruk CSS variabler du har satt opp.
// Lag en nettside med hjelp av ditt nye bibliotek
// Oppgave innlevering:
// Github repository link
// Publisert netlify nettside link




//! ====================== VERSION 2 ===========================

// var imgg = document.getElementsByClassName("cimg");
let imgg = document.getElementById("top-bar");

let blocks = document.getElementsByClassName("header");

for (var i = 0; i < imgg.length; i++) {
    setColor(i);
}
var rgb = averageColor(imgg)
console.log(rgb);

// function setColor(i) {
//   var $img = imgg[i];
//   // once the lazy-loaded image loads:
//   $img.addEventListener("load", e => {
//     // get average color and set
//     var rgb = averageColor($img);
//     blocks[i].style.backgroundColor =
//           'rgb(' + rgb.r + ','
//           + rgb.g + ','
//           + rgb.b + ')';
//   });
// }

function averageColor(imageElement) {
    // Create the canavs element
    var canvas = document.createElement('canvas'),

    // Get the 2D context of the canvas
    context
        = canvas.getContext &&
        canvas.getContext('2d'),
        imgData, width, height,
        length,
 
        // Define variables for storing
        // the individual red, blue and
        // green colors
        rgb = { r: 0, g: 0, b: 0 },

        // Define variable for the 
        // total number of colors
        count = 0;
 
    // Set the height and width equal
    // to that of the canvas and the image
    height = canvas.height =
        imageElement.naturalHeight ||
        imageElement.offsetHeight ||
        imageElement.height;
    width = canvas.width =
        imageElement.naturalWidth ||
        imageElement.offsetWidth ||
        imageElement.width;
 
    // Draw the image to the canvas
    context.drawImage(imageElement, 0, 0);
 
    // Get the data of the image
    imgData = context.getImageData(
            0, 0, width, height);

    // Get the length of image data object
    length = imgData.data.length;

    for (var i = 0; i < length; i += 4) {
        // Sum all values of red colour
        rgb.r += imgData.data[i];

        // Sum all values of green colour
        rgb.g += imgData.data[i + 1];

        // Sum all values of blue colour
        rgb.b += imgData.data[i + 2];

        // Increment the total number of
        // values of rgb colours
        count++;
    }

    // Find the average of red
    rgb.r = Math.floor(rgb.r / count);

    // Find the average of green
    rgb.g = Math.floor(rgb.g / count);

    // Find the average of blue
    rgb.b = Math.floor(rgb.b / count);

    return rgb;
}



//! ====================== VERSION 1 ===========================


// GETTING IMAGE FILE
// console.log("____ rgb _____")
let image_ = document.getElementById("top-bar")
console.log("image:", image_);
// console.log("")



// GETTING AVERAGE COLORS 
// console.log("____ getAvergareRgb _____")
let rgb = getAverageRGB(image_)
console.log("rgb:",rgb)
console.log("rgb splitted:",rgb.r, rgb.g, rgb.b);
// console.log("")



MAKING CHANGE TO BACKGROUND GRADIENT 
console.log("____ foo _____")
let foo = document.getElementById("header").style.setProperty('background', 'linear-gradient(70deg, ' + '#7f766f'+ ',' + 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')'+ ')', 'important');
console.log("foo", foo)

function getAverageRGB(imgEl) {
    
    let blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

        // console.log("___ states for getAverageRGB ___ ")
    
        // console.log(blockSize,defaultRGB,canvas,context,data,width,height,i,length,rgb,count,)
        
        
    if (!context) {
        return defaultRGB;
    }
    
    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
    context.drawImage(imgEl, 0, 0);
    
    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */alert('x');
        // console.log("alter:",alert('x'))
        return defaultRGB;
    }
    
    length = data.data.length;
    // console.log(length)
    
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }
    
    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    
    return rgb;
    
}
