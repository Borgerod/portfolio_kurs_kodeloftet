window.onload = () =>{

    getGradient = () => {
        // Get the header element and the background image
       
        const header = document.getElementById('header');
        const backgroundImage = new Image();
        backgroundImage.src = getComputedStyle(header).backgroundImage.slice(4, -1).replace(/"/g, ""); // Get the URL of the background image
    
        // Create a ColorThief instance
        const colorThief = new ColorThief();
    
        // Use the ColorThief instance to get the dominant color
        const dominantColor = colorThief.getColor(backgroundImage);
        
        // get brightest color 
        const brightestColor = getBrightestPaletteColor(colorThief.getPalette(backgroundImage));
    
        // get element you want to change background color 
        let outputSection = document.querySelector("body");
        
        // set the new gradient background 
        outputSection.style.setProperty('background', 'linear-gradient(70deg, ' + 'rgb(' + brightestColor + ')'+ ',' + 'rgb(' + dominantColor + ')'+ ')', 'important');
    }
    
    getGradient();
    }
    
    function getBrightestPaletteColor(arrays) {
        // due to how rgb works; the higher the values the brighter the color, 
        // so the color with the highest sum is the brightest.
    
    
        // Calculate the sum for each nested array
        const sums = arrays.map(innerArray => innerArray.reduce((acc, value) => acc + value, 0));
    
        // Create an array of indices [0, 1, 2, ...] to preserve the original order
        const indices = Array.from({ length: arrays.length }, (_, i) => i);
    
        // Sort the indices based on the corresponding sums
        indices.sort((a, b) => sums[b] - sums[a]);
    
        // Use the index of the highest sum to get the corresponding array
        return arrays[indices[0]];
    }