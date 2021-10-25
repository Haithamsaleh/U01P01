shows = [
  {

    titel: "Breaking Bad",
      img: "./img/breakingBad.jpg",
      rating: "./img/10-10.png",
      rat:"10/10",
      seasons: "5",
      page:``,
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."
  },
  {
    titel: "Game of Thrones",
      img: "./img/GameofThrones.jpg",  
      rating: "./img/10-10.png",
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
     page:``,
    description: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes."
},
{
  titel: "Band of Brothers",
  img: "./img/BandofBrothers.jpg",
  rating: "./img/9-10.png",
    rat:"9/10",
  seasons: "1",
  page:``,
  description: "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day."
},
{
  titel: "The Wire",
  img: "./img/TheWire.jpg",
  rating: "./img/9-10.png",
    rat:"9/10",
  seasons: "5",
  page:``,
  description: "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement."
},{
  titel: "The Sopranos",
  img: "./img/TheSopranos.jpg",
  rating: "./img/9-10.png",
    rat:"9/10",
  seasons: "6",
  page:``,
  description: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling."
},{
  titel: "Rick and Morty",
  img: "./img/RickandMorty.jpg",
  rating: "./img/9-10.png",
    rat:"9/10",
  seasons: "5+",
  page:``,
  description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson."
},{
  titel: "Sherlock",
  img: "./img/Sherlock.jpg",
  rating: "./img/9-10.png",
    rat:"9/10",
  seasons: "4",
  page:``,
  description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London."
},{
  titel: "True Detective",
  img: "./img/TrueDetective.jpg",
  rating: "./img/8.5-10.png",
    rat:"8/10",
  seasons: "3",
  page:``,
  description: "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law."
},{
  titel: "The Night Manager",
  img: "./img/TheNightManager.jpg",
  rating: "./img/8-10.png",
    rat:"8/10",
  seasons: "1",
  page:``,
  description: "The night manager of a Cairo hotel is recruited to infiltrate an arms dealer's inner circle."
},
{
  titel: "The Witcher",
  img: "./img/TheWitcher.jpg",
  rating: "./img/8-10.png",
  rat:"8/10",
  seasons: "1+",
  page:``,
  description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
},
{
  titel: "Loki",
  img: "./img/Loki.jpg",
  rating: "./img/8-10.png",
    rat:"8/10",
  seasons: "1+",
  page:``,
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

shows.forEach(shows => {
	const div = document.querySelector('div')
  
	div.innerHTML = div.innerHTML + `
          <div class="show">
             
              <div class="show-tumb">
              <a href="${shows.page}"><img src=${shows.img} width="100%" height="500px" 'img for ${shows.titel}'></a>
                  
              </div>
              <div class="show-titel">
              <h2><a href="${shows.page}"> ${shows.titel} </a></h2>
              </div>
              <div class="show-details">
                 

                  <p>
                      ${shows.description} 
                  </p>
                  <div class="show-bottom-details">
                      <div class="show-rating">
                      <img src=${shows.rating} width="50%" height="90px" 'img for ${shows.rat}'>
                         
                      </div>
                      <div id=fbutt > 
                       
                      <button type="button" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg></button></div>
                      </div>
                  </div>
              </div>
          </div>

  `
})