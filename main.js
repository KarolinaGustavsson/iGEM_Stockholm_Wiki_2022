const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");


// /change this to our image resource in frames!!!/ 
// const frameCount = 27+145;
// const currentFrame = index => (
//   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
// )

const frameCount = 27;
const currentFrame = index => (
  `./${index.toString().padStart(4, '0')}.png`
)   
// sauber? 

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i+145);
  }
};

const img = new Image()
img.src = currentFrame(145);
canvas.width=1920;
canvas.height=1080;
img.onload=function(){
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 145))
});

preloadImages()