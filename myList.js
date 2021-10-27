const shows = JSON.parse(localStorage.getItem("arr"))


let favshows =shows.filter((item)=>{
    return item.inFav === true;
    
})
console.log(favshows);



const renderfav = ()=>{
    const div = document.getElementById('Result')
    div.innerHTML =""
    favshows.forEach((show,i) => {
      
      div.innerHTML = div.innerHTML + `
              <div class="show">
                 
                  <div class="show-tumb">
                  <a href="${show.page}"><img src=${show.img} width="100%" 	border-radius:"50px"; height="500px" 'img for ${show.titel}'></a>
                      
                  </div>
                  <div class="show-titel">
                  <h2><a href="${show.page}"> ${show.titel} </a></h2>
                  </div>
                  <div class="show-details">
                     
    
                      <p>
                          ${show.description} 
                      </p>
                      <div class="show-bottom-details">
                          <div class="show-rating">
                          <img src=${show.rating} width="30%" height="50px" 'img for ${show.rat}'>
                             
                           <div>
                            <a href="MY list.html">
                             <button onclick='fav(${i})' id='fbutt-${i}' type="button" class="btn btn-danger" > remove <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                             </svg></button></a>
                           </div>
                          </div>
                      </div>
                  </div>
              </div>
    
      `
      if (favshows.inFav){
        $("#fbutt-"+i).text("remove")
        

      }
    })
}

function fav (i){
    favshows[i].inFav = !favshows[i].inFav
    localStorage.setItem("arr",JSON.stringify(shows))
  }
  renderfav()

