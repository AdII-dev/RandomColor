//$(function(){});
//jQuery(function(){});
/**
 * fontos, hogy a html dokumentumban, a jQuery link után álljon
 * a saját scriptünkre való hivatkozás!!!
 * Szelektálás:
 * $("div"); ->html tag kiválasztása
 * $("#idneve") -> id alapon való szelektálás
 * $(".classneve") -> osztály név alapon való szelektálás
 * $("#main.service ul li") -> a main id-n belüli, service classon belüli
 * rendezetlen lista elemei
 */

//Függvény hívás: (invocation)
$(document).ready(function(){
    //alert("A DOM elemei betöltődtek!")
});

$(window).on("Load", function(){
    //nemcsak a DOM, hanem a képek és iframe-k is betöltődnek
});

$(document).ready(function(){
    //változó létre hozása
    let $szoveg = $("h1").text();
    //javascriptben:
    let szoveg = document.getElementById("welcome").innerHTML;
    console.log(szoveg);
    console.log("Eltárolt szöveg:", $szoveg);
    console.log("Ha nincs el tárolva:", $("h1").text())

    //cserebogarat kicseréljük más szövegre
    $("h2").text("ezt a js-ből változtattuk meg");
    document.getElementById("welcome").innerHTML = "valami mással, javascriptből";

    //Szeretném megtudni, hogy a sárga osztályú elemnek, 
    //milyen háttérszíne van
    console.log($(".sarga").css("background"));
//háttér szín cseréje jQuery-vel
//1.) a html elem kiszelektálása
//2.) mit szeretnék -> css vagyis a stílus változtatás
// a css() függvény, 2 paramétert vár
// első a tulajdonság amit változtatni szeretnék
// második az érték, amire változtatni szeretném
    $(".sarga").css("background-color", "yellow");
});