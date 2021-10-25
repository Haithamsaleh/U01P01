shows  = [
  {
      name: "Breaking Bad",
      img: 'src="breaking-bad.jpg" alt="Breaking Bad"',
      rating: "9.5/10",
      seasons: "5",
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."
  },
  {
      name: "Game of Thrones",
      img: 'src="" alt="Game of Thrones"',  
      rating: "9.5/10",
      seasons: "8",
      description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
  },
  {
    name: "Chernobyl",
    img: 'src="Chernobyl.jpg" alt="Chernobyl"',
    rating: "9.5/10",
    seasons: "1",
    description: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes."
},
{
  name: "Band of Brothers",
  img: 'src="Band of Brothers.jpg" alt="Band of Brothers"',
  rating: "9.5/10",
  seasons: "1",
  description: "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day."
},
{
  name: "The Wire",
  img: 'src="The Wire.jpg" alt="The Wire"',
  rating: "9.3/10",
  seasons: "5",
  description: "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement."
},{
  name: "The Sopranos",
  img: 'src="The Sopranos.jpg" alt="The Sopranos"',
  rating: "9.2/10",
  seasons: "6",
  description: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling."
},{
  name: "Rick and Morty",
  img: 'src="Rick and Morty.jpg" alt="Rick and Morty"',
  rating: "9.1/10",
  seasons: "5+",
  description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson."
},{
  name: "Sherlock",
  img: 'src="Sherlock.jpg" alt="Sherlock"',
  rating: "9/10",
  seasons: "4",
  description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London."
},{
  name: "True Detective",
  img: 'src="True Detective.jpg" alt="True Detective"',
  rating: "8.9/10",
  seasons: "3",
  description: "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law."
},{
  name: "The Night Manager",
  img: 'src="The Night Manager.jpg" alt="The Night Manager"',
  rating: "8/10",
  seasons: "1",
  description: "The night manager of a Cairo hotel is recruited to infiltrate an arms dealer's inner circle."
},
]
$(document).ready(function(){

  $("input[type='radio']").click(function(){
  var sim = $("input[type='radio']:checked").val();
  //alert(sim);
  if (sim<3) { $($rating).css('color','red'); $(".myratings").text(sim); }else{ $('.myratings').css('color','green'); $(".myratings").text(sim); } }); });
shows.forEach(shows => {
	const div = document.querySelector('div')
  
	div.innerHTML = div.innerHTML + `
          <div class="show-card">
              <div class="badge">Hot</div>
              <div class="shwo-tumb">
                  <img src=${shows.img}>
              </div>
              <div class="show-details">
                  <h2><a href="">${shows.name}</a></h2>
                  <p>
                      ${shows.description}
                  </p>
                  <div class="show-bottom-details">
                      <div class="show-rating">
                          ${shows.rating}
                      </div>
                          <button type="button" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                  </svg></button>
                      </div>
                  </div>
              </div>
          </div>

          <br />
          <br />
  `
})