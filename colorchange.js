$(function(){
    let $button = $("button#btn-random")
    console.log($button)

    $button.click(function(){
        const max = 255;
        let red = Math.round(Math.random() * max);
        let green = Math.round(Math.random() * max);
        let blue = Math.round(Math.random() * max);
        console.log(red);
        console.log(green);
        console.log(blue);
        $button.css("background", "rgb(" + red + "," + green + "," + blue + ")");
    
        let asd = (red + green + blue) / 3;
        if (asd < Math.round(255/2)) {
            console.log("ahaha", asd);
            $button.css("color", "white");
        }
        else{
            $button.css("color", "black");
        }
    
    })
})