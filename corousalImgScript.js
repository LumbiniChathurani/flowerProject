let imgelement = document.getElementById('corousalImgContainer');
let counter = 0;
let imges = ['newimg1.webp','my.jpg','newimg3.webp','newimg4.webp','newimg5.jpg'];

setInterval(()=>{
    counter = (++counter)%imges.length
    imgelement.classList.toggle('hide');
    setTimeout(()=>{
        imgelement.src=imges[counter];
        imgelement.classList.toggle('hide');
    },600)

},5000);