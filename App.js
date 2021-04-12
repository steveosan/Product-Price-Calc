$(document).ready(function (){
    $("input#box1").on("change", boxChanged);
    $("input#box2").on("change", boxChanged);
});



function boxChanged(event)
{
    //INPUT//
    let x = $("#box1").val();
    let y = $("#box2").val();

    //MATH//
    let productCost = $("input[name=box1]").data("price");
    let productTotal = productCost * x;

    let productCost2 = $("input[name=box2]").data("price");
    let productTotal2 = productCost2 * y;

    let grandTotal = productTotal + productTotal2


    //OUTPUT//
    $("p#change-output").text("$" +productTotal.toFixed(2));
    $("p#change-output2").text("$" +productTotal2.toFixed(2));
    $("p#change-output3").text("$" + grandTotal.toFixed(2));

}


