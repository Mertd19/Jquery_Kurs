$(document).ready(function(){

    $("div").addClass("addClassDiv").addClass("removeClassDiv");    //classları ekliyor. (Css)
    $("div").removeClass("removeClassDiv");                         //Girilen classı çıkarıyor. (Css)
    $("div").toggleClass("removeClassDiv");                         //Burda ekleme yapıyor (Css)
    $("div").toggleClass("removeClassDiv");                         //Burda çıkarma yapıyor (Css)
});