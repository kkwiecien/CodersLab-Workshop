document.addEventListener('DOMContentLoaded', function(){

  //drop-down menu
  var dropDownButton = document.querySelector('.dropDownButton');

  for (var i=0; i<dropDownButton.children.length; i++) {
    dropDownButton.children[i].style.visibility = 'hidden';
  }

  dropDownButton.addEventListener('mouseover', function(event){
    for (var i=0; i<dropDownButton.children.length; i++) {
      this.children[i].style.visibility = 'visible';
      this.style.height = '115px';
      this.children[i].style.bottom = '0';
    }
  });
  dropDownButton.addEventListener('mouseout', function(event){
    for (var i=0; i<dropDownButton.children.length; i++) {
      this.children[i].style.visibility = 'hidden';
      this.style.height = '15px';
      this.children[i].style.bottom = '-100px';
    }
  });

  //disappearing text boxes
  var textBox1 = document.querySelector('.previewOne');
  var textBox2 = document.querySelector('.previewTwo');

  textBox1.addEventListener('mouseover', function(event){
    this.children[1].style.visibility = 'hidden';
  });
  textBox1.addEventListener('mouseout', function(event){
    this.children[1].style.visibility = 'visible';
  });
  textBox2.addEventListener('mouseover', function(event){
    this.children[1].style.visibility = 'hidden';
  });
  textBox2.addEventListener('mouseout', function(event){
    this.children[1].style.visibility = 'visible';
  });

  //image slider
  var leftButton = document.querySelector('.leftButton');
  var rightButton = document.querySelector('.rightButton');
  var sliderImages = document.querySelector('.chairSlider').firstElementChild.children;
  var sliderIndex = 0;

  sliderImages[sliderIndex].style.display = 'inline-block';

  leftButton.addEventListener('click', function(event){
    sliderImages[sliderIndex].style.display = 'none';
    sliderIndex--;
    if (sliderIndex < 0) {
      sliderIndex = sliderImages.length-1;
    }
    sliderImages[sliderIndex].style.display = 'inline-block';
  });
  rightButton.addEventListener('click', function(event){
    sliderImages[sliderIndex].style.display = 'none';
    sliderIndex++;
    if (sliderIndex > sliderImages.length-1) {
      sliderIndex = 0;
    }
    sliderImages[sliderIndex].style.display = 'inline-block';
  });

});
