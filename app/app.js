function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    // console.log(hashTag + " " + pageID);

    if (pageID != "") {
       $.get(`pages/${pageID}/${pageID}.html`, function(data){
        console.log("data " + data);
        $("#app").html(data);
        });
    } else {
        $.get(`pages/music/music.html`, function(data){
            console.log("data " + data);
            $("#app").html(data);
            });
    }
    
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function() {
    initURLListener();
})