shows = JSON.parse(localStorage.getItem("arr")) || [
  {

    titel: "Breaking Bad",
      img: "./img/breakingBad.jpg",
      rating: "./img/9-10.png",
      rat:"10/10",
      seasons: "5",
      page:`bb.html`,
      inFav:false,
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."
  },
  {
    titel: "Game of Thrones",
      img: "./img/GameofThrones.jpg",  
      rating: "./img/9-10.png",
      rat:"10/10",
      seasons: "8",
      page:`got.html`,
      description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
  },
  {
    titel: "Chernobyl",
    img: "./img/Chernobyl.jpg",
    rating: "./img/9-10.png",
    rat:"9/10",
    seasons: "1",
     page:`ch.html`,
     inFav:false,
    description: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes."
},
{
  titel: "Band of Brothers",
  img: "./img/BandofBrothers.jpg",
  rating: "./img/8.5-10.png",
    rat:"9/10",
  seasons: "1",
  page:`bob.html`,
  inFav:false,

  description: "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day."
},
{
  titel: "The Wire",
  img: "./img/TheWire.jpg",
  rating: "./img/9-10.png",
    rat:"9/10",
  seasons: "5",
  page:`tw.html`,
  inFav:false,
  description: "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement."

},{
  titel: "The Sopranos",
  img: "./img/TheSopranos.jpg",
  rating: "./img/9-10.png",
    rat:"9/10",
  seasons: "6",
  page:`ts.html`,
  inFav:false,

  description: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling."
},{
  titel: "Rick and Morty",
  img: "./img/RickandMorty.jpg",
  rating: "./img/7-10.png",
    rat:"9/10",
  seasons: "5+",
  page:`ram.html`,
  inFav:false,

  description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson."
},{
  titel: "Sherlock",
  img: "./img/Sherlock.jpg",
  rating: "./img/8-10.png",
    rat:"9/10",
  seasons: "4",
  page:`sh.html`,
  inFav:false,

  description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London."
},{
  titel: "True Detective",
  img: "./img/TrueDetective.jpg",
  rating: "./img/8.5-10.png",
    rat:"8/10",
  seasons: "3",
  page:`td.html`,
  inFav:false,

  description: "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law."
},{
  titel: "The Night Manager",
  img: "./img/TheNightManager.jpg",
  rating: "./img/7-10.png",
    rat:"8/10",
  seasons: "1",
  page:`tnm.html`,
  inFav:false,

  description: "The night manager of a Cairo hotel is recruited to infiltrate an arms dealer's inner circle."
},
{
  titel: "The Witcher",
  img: "./img/TheWitcher.jpg",
  rating: "./img/8-10.png",
  rat:"8/10",
  seasons: "1+",
  page:`Witcher.html`,
  inFav:false,

  description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
},
{
  titel: "Loki",
  img: "./img/Loki.jpg",
  rating: "./img/8-10.png",
    rat:"8/10",
  seasons: "1+",
  page:`loki.html`,
  inFav:false,

  description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”"
}
/*{
  titel: "",
  img: "",
  rating: "",
  rat:"/10"
  seasons: "",
  page:``,
  description: ""
}*/
]


const render = ()=>{

  const div = document.querySelector('.cards')
  div.innerHTML =""
  shows.forEach((show,i) => {
    
    div.innerHTML = div.innerHTML + `
            <div class="show">
               
                <div class="show-tumb">
                 <a href="${show.page}"><img src=${show.img} width="100%"; height="500px" 'img for ${show.titel}'></a>
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
 <img src=${show.rating} width="30%" height="30%" 'img for ${show.rat}'>
                           
                         
 <button onclick='fav(${i})' id='fbutt-${i}' type="button" class="btn btn-danger" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button>
                         
 </div>
             </div>
    `

    if (show.inFav){
      $("#fbutt-"+i).text("remove")
    }
    // $("#fbutt-"+i).click(() => {
    //  console.log("click");
    
    
    // });
  })
  
}
render()



function fav (i){
  shows[i].inFav = !shows[i].inFav
  localStorage.setItem("arr",JSON.stringify(shows))
  render()
}