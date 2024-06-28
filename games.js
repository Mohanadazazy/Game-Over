import { UI } from "./UI.js";
import { Details } from "./details.js";
export class Games {
    constructor() {
        this.getGames("mmorpg");
        this.links = document.querySelectorAll(".navs ul a");
        for (let i = 0; i < this.links.length; i++) {
            this.links[i].addEventListener("click", (e) => {
                let active = document.querySelector(".navs ul .act");
                active.classList.remove("act");
                e.target.classList.add("act");
                console.log(e.target.dataset.category);
                this.getGames(e.target.dataset.category);
            });
        }
    }

    sayhello() {
        console.log("hello");
    }

    async getGames(Category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1ed3c1db42mshd4f224daba4a894p154a85jsn28371c3d0b00',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const display = new UI();
        display.displayGames(result);
        this.startEvents()
    }
    startEvents(){
        let cards = document.querySelectorAll(".allCard");
        console.log(cards);
        for(let i =0 ; i < cards.length; i++){
            cards[i].addEventListener("click" , (e) => {
                document.querySelector(".modal").classList.remove("d-none");
                document.querySelector("main").classList.add("d-none");
               let id = cards[i].dataset.id;
               console.log(id);
                this.showDetails(id)
            })
        }
}

    showDetails(id){
        let details = new Details(id)
    }

}

