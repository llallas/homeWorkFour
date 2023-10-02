export function changePage(pageName){
    if(pageName == ""){
      $.get(`pages/home.html`, (data) =>{
        $("#app").html(data);
      }).fail(() =>{
        console.log("fail")
      });
    }else{
        
      $.get(`pages/${pageName}.html`, (data) =>{
        if(data){
            $("#app").html(data);
        }else{
            alert("404")
        }
    }).fail(() =>{
        console.log("Page not Found")
      });
    }
}

