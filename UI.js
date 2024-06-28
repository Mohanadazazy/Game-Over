export class UI {
    constructor(){

    }
    displayGames(Data){
        let catrona ="";
        for(let i =0 ; i < Data.length ; i++){
            catrona+=`
            <div data-id="${Data[i].id}" class="col-md-3 allCard" >
                <div class="card cart shadow " style="width: 100%;">
                    <div class="photo p-3">
                        <img src="${Data[i].thumbnail}" class="card-img-top w-100" alt="...">
                    </div>
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <h3 class="h6 ">${Data[i].title}</h3>
                        <span class="bg-primary rounded-3 p-1">
                            Free
                        </span>
                    </div>
                    <p class="text-center p-1 small opacity-50">
                    ${Data[i].short_description.split(" ", 8)}
                    </p>
                   <hr class="m-0">
                    <div class="card-body p-0 d-flex justify-content-between align-items-center px-2 py-3">
                      <p class="bg-secondary rounded-2 m-0 px-1">${Data[i].genre}</p>
                      <p class="bg-secondary rounded-2 m-0 px-1">${Data[i].platform}</p>
                    </div>
                </div>
            </div>
            `
        }
        document.querySelector(".collection").innerHTML = catrona ;
    }
    displayDetails(Data){
        let container="";
        container = `
    <div class="container text-white">
      <div class="header d-flex justify-content-between align-items-center py-4">
        <h2>Details Game</h2>
        <i class="closebtn fa-solid fa-xmark fa-xl"></i>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="img">
            <img src="${Data.thumbnail}" alt="" class="w-100">
          </div>
        </div>
        <div class="col-md-8">
          <h3> Title: ${Data.title}</h3>
          <p>Category: <span class="bg-primary rounded-3 px-2">${Data.genre}</span></p>
          <p>Platform: <span class="bg-primary rounded-3 px-2">${Data.platform}</span></p>
          <p>Status: <span class="bg-primary rounded-3 px-2">${Data.status}</span></p>
          <p>${Data.description}</p>
          <a href="${Data.game_url}"><button class="btn btn-outline-warning">Show game</button></a>
        </div>
      </div>
    </div>
        `
        document.querySelector(".modal").innerHTML = container ;
        document.querySelector(".closebtn").addEventListener("click", ()=>{
            document.querySelector(".modal").classList.add("d-none")
            document.querySelector("main").classList.remove("d-none")
        })
    }
}
