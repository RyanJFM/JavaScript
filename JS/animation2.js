document.addEventListener('DOMContentLoaded', function() {
    //Find heading
    const h1 = document.querySelector("h1");

    //Pause Animation by default
    h1.style.animationPlayState = 'paused';

    //Wait for the button to be clicked
    document.querySelector('button').onclick = () => {

        //If animation is currently paused resume
        if (h1.style.animationPlayState === "paused") {
            h1.style.animationPlayState = "running";
        }

        else {
            h1.style.animationPlayState = 'paused';
        }
        
    }
    
});