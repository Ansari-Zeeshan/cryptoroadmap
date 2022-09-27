let content =
  [
    {
      h2: 'Q2 2019',
      p: 'Content 1, dolor sit amet consectetur adipisicing elit. Natus quasi, totam soluta, nobis, iste quod debitis doloremque temporibus mollitia magni voluptatum ut deserunt dolorum',
    },
    {
      h2: 'Q2 2020',
      p: 'Content 2, dolor sit amet consectetur adipisicing elit. Natus quasi, totam soluta, nobis, iste quod debitis doloremque temporibus mollitia magni voluptatum ut deserunt dolorum',
    },
    {
      h2: 'Q3 2020',
      p: 'Content 3, dolor sit amet consectetur adipisicing elit. Natus quasi, totam soluta, nobis, iste quod debitis doloremque temporibus mollitia magni voluptatum ut deserunt dolorum',
    },
    {
      h2: 'Q4 2020',
      p: 'Content 4, dolor sit amet consectetur adipisicing elit. Natus quasi, totam soluta, nobis, iste quod debitis doloremque temporibus mollitia magni voluptatum ut deserunt dolorum',
    },
    {
      h2: 'Q1 2021',
      p: 'Content 5, dolor sit amet consectetur adipisicing elit. Natus quasi, totam soluta, nobis, iste quod debitis doloremque temporibus mollitia magni voluptatum ut deserunt dolorum',
    },
    {
      h2: 'Q1 2021',
      p: 'Content 6, dolor sit amet consectetur adipisicing elit. Natus quasi, totam soluta, nobis, iste quod debitis doloremque temporibus mollitia magni voluptatum ut deserunt dolorum',
    },
    {
      h2: 'Q1 2021',
      p: 'Content 7, dolor sit amet consectetur adipisicing elit. Natus quasi, totam soluta, nobis, iste quod debitis doloremque temporibus mollitia magni voluptatum ut deserunt dolorum',
    },
    {
      h2: 'Q1 2021',
      p: 'Content 8, dolor sit amet consectetur adipisicing elit. Natus quasi, totam soluta, nobis, iste quod debitis doloremque temporibus mollitia magni voluptatum ut deserunt dolorum',
    }
  ]


// variable declaration
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const img_contain = document.querySelector('.div-flex .img_container');
const imgcontain1 = document.querySelector('.div-flex .img_container .img-contain1');
const imgcontain2 = document.querySelector('.div-flex .img_container .img-contain2');
const imgcontain3 = document.querySelector('.div-flex .img_container .img-contain3');
const imgcontain4 = document.querySelector('.div-flex .img_container .img-contain4');
const imgcontain5 = document.querySelector('.div-flex .img_container .img-contain5');
const imgcontain6 = document.querySelector('.div-flex .img_container .img-contain6');
const imgcontain7 = document.querySelector('.div-flex .img_container .img-contain7');
const marker = document.querySelector('.div-inner .header .marker');
const img = document.querySelector('.div-inner .header .marker img');
const h2 = document.querySelector('.div-inner .body h2');
const p = document.querySelector('.div-inner .body p');
let img_src = img.getAttribute('src');
let slideNext = 0, clientX, imgsrc1, imgsrc2, imgsrc3, imgsrc4, imgsrc5, imgsrc6, imgsrc7;

// setting the first roadmap element on load
window.addEventListener('load', () => {
  console.log('htest elo');
  console.log('htest elo');
  console.log('htest elo');
  console.log('htest elo');
  console.log('htest elo');
  console.log('htest elo');
  console.log('htest elo');
  console.log('htest elo');
  let imgsrc1 = window.getComputedStyle(imgcontain1, ':after').getPropertyValue('content');
  img.style.cssText = `background-image: ${imgsrc1};  width:100px; height:80px; margin-left:-16px`;
  change(slideNext);
})

next.addEventListener('click', (event) => {
  clientX = event.clientX;
  let bodyactive = document.querySelector('section .div-inner .body.active'); // getting the active class on body 
  prev.style.cursor = 'pointer';
  if (slideNext < 7) {
    slideNext += 1;
  }
  else {
    return;
  }
  // getting the content value from pseudo element
  imgsrc1 = window.getComputedStyle(imgcontain1, ':after').getPropertyValue('content');
  imgsrc2 = window.getComputedStyle(imgcontain2, ':after').getPropertyValue('content');
  imgsrc3 = window.getComputedStyle(imgcontain3, ':after').getPropertyValue('content');
  imgsrc4 = window.getComputedStyle(imgcontain4, ':after').getPropertyValue('content');
  imgsrc5 = window.getComputedStyle(imgcontain5, ':after').getPropertyValue('content');
  imgsrc6 = window.getComputedStyle(imgcontain6, ':after').getPropertyValue('content');
  imgsrc7 = window.getComputedStyle(imgcontain7, ':after').getPropertyValue('content');
  const root = document.querySelector(":root");
  root.style.setProperty("--topposition1", '370px');  // changing the topposition1 in root element
  root.style.setProperty("--topposition2", '200px');  // changing the topposition2 in root element

  if (clientX <= 600) {
    root.style.setProperty("--topposition1", '255px');
    root.style.setProperty("--topposition2", '84px');
  }

  switch (slideNext) {
    case 1:
      imgchange1(imgsrc2);
      img_contain.style.transform = "translate(-" + slideNext * 31.5 + "%, " + slideNext * 30 + "%)";
      change(slideNext);
      if (clientX <= 600)  // for medium devices
      {
        img_contain.style.transform = "translate(-" + slideNext * 53.5 + "%, " + slideNext * 35 + "%)";
      }
      break;

    case 2:
      imgchange2(imgsrc3);
      img_contain.style.transform = "translate(-" + slideNext * 36.5 + "%, " + slideNext * 31 + "%)";
      change(slideNext);
      if (clientX <= 600) {
        img_contain.style.transform = "translate(-" + slideNext * 53.5 + "%, " + slideNext * 38 + "%)";
      }
      break;

    case 3:
      imgchange3(imgsrc4);
      img_contain.style.transform = "translate(-" + slideNext * 38 + "%, " + slideNext * 32 + "%)";
      change(slideNext);
      if (clientX <= 600) {
        img_contain.style.transform = "translate(-" + slideNext * 51.5 + "%, " + slideNext * 40 + "%)";
      }
      break;

    case 4:
      imgchange4(imgsrc5);
      img_contain.style.transform = "translate(-" + slideNext * 38.5 + "%, " + slideNext * 33 + "%)";
      change(slideNext);
      if (clientX <= 600) {
        img_contain.style.transform = "translate(-" + slideNext * 51.5 + "%, " + slideNext * 38 + "%)";
      }
      break;

    case 5:
      imgchange5(imgsrc6);
      img_contain.style.transform = "translate(-" + slideNext * 39 + "%, " + slideNext * 34 + "%)";
      change(slideNext);
      if (clientX <= 600) {
        img_contain.style.transform = "translate(-" + slideNext * 51.5 + "%, " + slideNext * 38 + "%)";
      }
      break;

    case 6:
      imgchange6(imgsrc7);
      img_contain.style.transform = "translate(-" + slideNext * 39.5 + "%, " + slideNext * 35 + "%)";
      change(slideNext);
      if (clientX <= 600) {
        img_contain.style.transform = "translate(-" + slideNext * 51.5 + "%, " + slideNext * 38 + "%)";
      }
      break;

    case 7:
      img_contain.style.transform = "translate(-" + slideNext * 40 + "%, " + slideNext * 36 + "%)";
      if (clientX <= 600) {
        img_contain.style.transform = "translate(-" + slideNext * 51.5 + "%, " + slideNext * 38 + "%)";
      }
      marker.style.backgroundImage = 'linear-gradient(135deg, rgb(0, 255, 170), rgb(0, 187, 255) 53%, rgb(69, 121, 245))';
      next.style.cursor = 'not-allowed';
      change(slideNext);
      return;
      break;
  }
})

prev.addEventListener('click', () => {
  let bodyactive = document.querySelector('section .div-inner .body.active');
  switch (slideNext) {
    case 0:
      prev.style.cursor = 'not-allowed';
      return;
      break;

    case 1:
      slideNext--;
      prev.style.cursor = 'not-allowed';
      next.style.cursor = 'cursor';
      img_contain.style.transform = "translate(" + slideNext * 30 + "%, -" + slideNext * 30 + "%)";
      if (clientX <= 600)  // for medium devices
      {
        img_contain.style.transform = "translate(" + slideNext * 10 + "%, -" + slideNext * 25 + "%)";
      }
      imgchange(imgsrc1);
      change(slideNext);
      break;

    case 2:
      slideNext -= 1;
      img_contain.style.transform = "translate(" + slideNext * -35 + "%, " + slideNext * 20 + "%)";
      if (clientX <= 600)  // for medium devices
      {
        img_contain.style.transform = "translate(" + slideNext * -53 + "%, " + slideNext * 40 + "%)";
      }
      imgchange1(imgsrc2);
      change(slideNext);
      break;

    case 3:
      slideNext -= 1;
      img_contain.style.transform = "translate(" + slideNext * -38 + "%, " + slideNext * 30 + "%)";
      if (clientX <= 600)  // for medium devices
      {
        img_contain.style.transform = "translate(" + slideNext * -53 + "%, " + slideNext * 40 + "%)";
      }
      imgchange2(imgsrc3);
      change(slideNext);
      break;

    case 4:
      slideNext -= 1;
      img_contain.style.transform = "translate(" + slideNext * -40 + "%, " + slideNext * 35 + "%)";
      if (clientX <= 600)  // for medium devices
      {
        img_contain.style.transform = "translate(" + slideNext * -53 + "%, " + slideNext * 40 + "%)";
      }
      imgchange3(imgsrc4);
      change(slideNext);
      break;

    case 5:
      slideNext -= 1;
      img_contain.style.transform = "translate(" + slideNext * -40 + "%, " + slideNext * 35 + "%)";
      if (clientX <= 600)  // for medium devices
      {
        img_contain.style.transform = "translate(" + slideNext * -53 + "%, " + slideNext * 40 + "%)";
      }
      imgchange4(imgsrc5);
      change(slideNext);
      break;

    case 6:
      slideNext -= 1;
      img_contain.style.transform = "translate(" + slideNext * -40 + "%, " + slideNext * 36 + "%)";
      if (clientX <= 600)  // for medium devices
      {
        img_contain.style.transform = "translate(" + slideNext * -52 + "%, " + slideNext * 40 + "%)";
      }
      imgchange5(imgsrc6);
      change(slideNext);
      break;

    case 7:
      slideNext -= 1;
      img_contain.style.transform = "translate(" + slideNext * -40 + "%, " + slideNext * 37 + "%)";
      if (clientX <= 600)  // for medium devices
      {
        img_contain.style.transform = "translate(" + slideNext * -52 + "%, " + slideNext * 40 + "%)";
      }
      imgchange6(imgsrc7);
      change(slideNext);
      next.style.cursor = "pointer";
      break;
  }  // switch case end
})

function change(slideNext) {
  h2.innerText = content[`${slideNext}`].h2;
  p.innerText = content[`${slideNext}`].p;
}
function imgchange(imgsrc1) {
  img.style.cssText = `background-image: ${imgsrc1}; margin-left:-16px;`;
  marker.style.backgroundImage = 'linear-gradient(135deg, rgb(0, 255, 170), rgb(0, 187, 255) 53%, rgb(69, 121, 245))';
}
function imgchange1(imgsrc2) {
  img.style.cssText = `background-image: ${imgsrc2};  width:40px; height:40px;  margin-left:2px;margin-top:-1px`;
  marker.style.backgroundImage = 'linear-gradient(135deg, rgb(0, 255, 170), rgb(69, 121, 245) 53%, rgb(156, 66, 245) 100%)';
}
function imgchange2(imgsrc3) {
  img.style.cssText = `background-image: ${imgsrc3};  width:70px; height:37px;margin-left:-2px;`;
  marker.style.backgroundImage = 'linear-gradient(135deg, rgb(0, 187, 255), rgb(69, 121, 245) 51%, rgb(93, 45, 225))';
}
function imgchange3(imgsrc4) {
  img.style.cssText = `background-image: ${imgsrc4};  width:40px; height:40px;margin:-6px 0 0px -6px`;
  marker.style.backgroundImage = 'linear-gradient(135deg, rgb(0, 187, 255), rgb(156, 66, 245) 53%, rgb(93, 45, 225))';
}
function imgchange4(imgsrc5) {
  img.style.cssText = `background-image: ${imgsrc5};  width:60px; height:60px; margin-top:-22%;margin-left:-13%`;
}
function imgchange5(imgsrc6) {
  img.style.cssText = `background-image: ${imgsrc6};  width:50px; height:50px; margin: -2px 0 0 -5px`;
  marker.style.backgroundImage = 'linear-gradient(135deg, rgb(255, 94, 0), rgb(245, 69, 98) 54%, rgb(195, 45, 225)';
}
function imgchange6(imgsrc7) {
  img.style.cssText = `background-image: ${imgsrc7}; background-repeat:no-repeat; margin: 30px 0 0 7px`;
  marker.style.backgroundImage = 'linear-gradient(135deg, rgb(0, 255, 170), rgb(0, 187, 255) 53%, rgb(69, 121, 245))';
}
