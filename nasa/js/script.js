let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=JmkDt07SLn80Tw2cILiLFxq0F7SNqzJNJQJOF391'

let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JmkDt07SLn80Tw2cILiLFxq0F7SNqzJNJQJOF391";


function changeBackground(imageURL) {
    document.body.style.backgroundImage = `url('${imageURL}')`;
}

function getPictures() {
    fetch(dataURL)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data.hdurl);
        changeBackground(data.hdurl)
        
        });
}


getPictures()

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data.photos[0].img_src);
        let pictureList = data.photos;
        createGallery(pictureList);
        
        });
}

  getMarsPicture()

let gallery = document.getElementById('content');

function createGallery(dataList) {
    for(let i = 0; i < 9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i].img_src;
        img.src = imgPath;
        gallery.appendChild(img);
        console.log(dataList[i].img_src);

    }
}



