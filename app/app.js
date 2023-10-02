import { changePage } from "./model.js";

function route (){
  let hashTag = window.location.hash;
  let pageID = hashTag.replace('#', "");
  let subPage = pageID.split("/");
  console.log("hash", hashTag);
  console.log("page name" + pageID);
  console.log(" sub page name" + subPage);
  changePage (pageID);
}

function initlisteners(){
    $("#home").on("click", (e) =>{
        $("#modal").toggle();
    });
    $(".close").on("click", (e) => { 
        $("#modal").toggle();
    });
}

function initSite(){
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initlisteners();
  initSite();
})