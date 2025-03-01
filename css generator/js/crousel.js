let sliderPosition =0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;
const btnPrev=document.querySelector('#btn-prev');
const btnNext=document.querySelector('#btn-next');

btnPrev.addEventListener('click',function(){
prevslide();
});

btnNext.addEventListener('click',function(){
nextslide();
});

function updateslide(){
    sliders.forEach(slide =>{
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });
    sliders[sliderPosition].classList.add('active');

    dots.forEach(dot =>{
        dot.classList.remove('dot-active');
    });
    dots[sliderPosition].classList.add('dot-active');
}

function prevslide(){
    if(sliderPosition==0){
        sliderPosition=totalSlider-1;
    }
    else{
        sliderPosition --;
    }
updateslide();
}

function nextslide(){
    if(sliderPosition==totalSlider-1){
       sliderPosition=0;
    }
    else{
        sliderPosition ++;
    }
updateslide();
}
setInterval(function(){
  if (sliderPosition==totalSlider-1){
     sliderPosition=0;
  }
  else{
    sliderPosition++;
  }
  updateslide();

},100000)

const dotContainer=document.querySelector('.dots');
sliders.forEach(slide=>{
    const dot=document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
});

const dots=document.querySelectorAll('.dot');
dots[sliderPosition].classList.add('dot-active');