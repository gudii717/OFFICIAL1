let dynamo = document.querySelector('body');

let colors = ['linear-gradient(240deg, red, pink)', 'linear-gradient(240deg, teal, aqua)', 'linear-gradient(240deg, blue, violet)'];

let count = 0;

function gradient() {
    
    if (count >= colors.length) {
        count = 0;
    }
    
    dynamo.style.background = colors[count];
    
    count++;
}

setInterval(gradient, 3000);