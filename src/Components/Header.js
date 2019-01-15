import React, { Component } from 'react';
import '../Styles/Header.css';
import Word from "../js/wordFx.js";

var anime = window.anime;

class Header extends Component {
  render() {
    return(
      <div class="header">
      <div class="text">
      <h2 class="word word--6">Maik Rantetasik</h2>
      <span class="title">Full Stack Developer</span>
      </div>
      </div>
    )
  }

  componentDidMount() {

    function randomBetween(minValue,maxValue,precision) {
      if( typeof(precision) == 'undefined' ) {
        precision = 2;
      }
      return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
    }

    var element = document.querySelector('.word'),
    element2 = document.querySelector('.title'),
    options = {
      shapeColors: ['#fff','#6b7a8f', '#f7882f', '#f7c331', '#dcc7aa'],
      totalShapes: 7
    }

    var word = new Word(element, options);
    var word2 = new Word(element2, {});

    word2.show({
      lettersAnimationOpts: {
        duration: 500,
        delay: (t,i) => 1200,
        easing: 'easeOutExpo',
        opacity: [0,1],
        translateX: ['-600%','0%']
      }
    })
    word.show({
      lettersAnimationOpts: {
        duration: 500,
        delay: (t,i) => i*60,
        easing: 'easeOutExpo',
        opacity: {
          value: [0,1],
          duration: 50,
          delay: (t,i) => i*60,
          easing: 'linear'
        },
        translateY: (t,i) => i%2 ? [anime.random(-350,-300),0] : [anime.random(300,350),0]
      },
      shapesAnimationOpts: {
        duration: () => anime.random(1000,4000),
        delay: (t,i) => i*20,
        easing: [0.2,1,0.3,1],
        translateX: t => {
          const tx = anime.random(-200, 200);
          t.dataset.tx = tx;
          return [0,tx];
        },
        translateY: t => {
          const ty = anime.random(-350, 400);
          t.dataset.ty = ty;
          return [0,ty];
        },
        scale: t => {
          const s = randomBetween(0.2,0.6);
          t.dataset.s = s;
          return [s,s];
        },
        rotate: () => anime.random(-90,90),
        opacity: {
          value: 0.6,
          duration: 1000,
          easing: 'linear'
        }
      }
    })
  }
}


export default Header;
