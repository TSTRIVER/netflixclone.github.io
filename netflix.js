/*console.log('I am going to maske a netlix website');
let centerdiv = document.getElementById('centerdiv');
fetch("https://jsonplaceholder.typicode.com/photos").then((apidata)=>{
      return apidata.json();
}).then((jsondata)=>{
      jsondata.map((val,index)=>{
            if(index<10)
            {
             let key = val.id;
            let img = document.createElement('img');
            img.src = `https://picsum.photos/200/300?random=${key}`;
            centerdiv.appendChild(img);
            }
      })
})
//4a471eac1b36f69b4619233a71b452c3

//https://api.themoviedb.org/3/movie/550?api_key=4a471eac1b36f69b4619233a71b452c3

//https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png*/
let container = document.querySelectorAll(".container");
let counter = 0;

container.forEach((element, index) => {
  element.style.left = `${index * 100}%`;
});
const slidecont = () => {
  container.forEach((element) => {
    element.style.transform = `translateX(-${counter * 100}%)`;
  });
};
let nextbtn = document.getElementById("btn1");
let prevbtn = document.getElementById("btn2");

nextbtn.addEventListener("click", () => {
  if (counter <= 3) {
    counter++;
    slidecont();
  }
});
prevbtn.addEventListener("click", () => {
  counter--;
  slidecont();
});
//-------------------------------------------------------IMAGE SLIDERS---------------------------------------------------------------//
let imgarr = [
  "https://m.media-amazon.com/images/I/81XAxyGRt9L._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjYyZjNiODgtNTQxNC00MWQyLTljMTAtYzI2NzZkNWNlYmU1XkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg",
  "https://flixpatrol.com/runtime/cache/files/posters/r/w350/rjbnprmovvqhmhmksbokcycr7wn.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg",
  "https://m.media-amazon.com/images/I/71tqf702KNL._SL1500_.jpg",
  "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
  "https://i.pinimg.com/originals/d4/80/e2/d480e25470cfd9ec06e323e6330105ae.jpg",
  "https://neplych.com/wp-content/uploads/2022/04/The-Man-From-Toronto-Movie-Poster.jpg",
  "https://i.pinimg.com/originals/93/d3/30/93d330382e963458edb433ed100910d8.jpg",
  "https://static2.showtimes.com/poster/660x980/the-prom-netflix-149579.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTM4OGY1NDctM2ZiMy00NWZhLThjODktODY1YTczOTdhYzgzXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1000_.jpg",
  "https://www.joblo.com/wp-content/uploads/2022/07/Day-Shift-Netflix-691x1024.jpeg",
  "https://neplych.com/wp-content/uploads/2022/06/Jaadugar-Movie-2022-1.jpg",
];
let img2arr = [
  "https://wallpapercave.com/wp/wp2354003.jpg",
  "https://m.media-amazon.com/images/M/MV5BMWQ3N2EzNjYtMzgwYS00YjdmLThmOTUtMzc4NDUxZjZkY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  "https://static1.tribute.ca/poster/660x980/riverdale-netflix-131772.jpg",
  "https://meridiandaily.net/wp-content/uploads/2020/03/i-am-not-okay-with-this-netflix-poster-606x900.jpg",
  "https://static1.showtimes.com/poster/660x980/project-power-netflix-146610.jpg",
  "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/06/FUhDVfpXsAUMdMd.jpg",
  "https://i.pinimg.com/736x/13/0d/82/130d82c527c0bd99ee5b4904049f8d59.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/invitation-1624570928.jpg",
  "https://miro.medium.com/max/800/1*7Ow2H3aL1xXeYLAxgl6qkA.jpeg",
  "https://flixpatrol.com/runtime/cache/files/posters/r/w350/rihfky4swtlqnnd0anknjhb6brx.jpg",
  "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/03/font-psychology-6.png",
];
let centerdiv = document.getElementById("centerdiv");
let centerdiv2 = document.getElementById("centerdiv2");
let html1='';
let html2='';
imgarr.forEach((element) => {
  html1 += `<img src="${element}" class="netimages">`;
  //console.log(img);
  //console.log(html);
});
img2arr.forEach((element) => {
  html2 += `<img src="${element}" class="netimages">`;
  //console.log(img);
  //console.log(html);
});
centerdiv.innerHTML = html1;
centerdiv2.innerHTML = html2;
