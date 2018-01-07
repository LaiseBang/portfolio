$(window).on("load", sidenVises);

//Bi
function sidenVises() {
    console.log("Siden vises");

    $("#bi").hover(function () {
        $("#bi").addClass("bi");
        $(".bi").on("animationend", UdenBi);
    })
}

function UdenBi() {
    console.log("Bien er fløjet")
    $(".bi").off("animationend", UdenBi);
    $("#bi").removeClass("bi");
    $(".bi").on("animationend", sidenVises)
}
