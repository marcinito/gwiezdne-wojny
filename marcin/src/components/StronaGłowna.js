import React,{useState} from 'react'
import {Carousel,Item,Caption,Offcanvas,Header,Body,Button,Title,handleShow} from 'react-bootstrap'

import img1 from '../img/kosmos1.png'
import img2 from '../img/kosmos2.png'
import img3 from '../img/kosmos3.png'


function StronaGłowna() {
   
    return (
        <div className="glowny__stronaglowna">
            <br/>
            <br/>
            <br/>
        <h1 class="glowny__stronaglowna__h1 text-center  display-2 lead">Gwiezdne Wojny!</h1>
        <br/>
        <br/>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Exploruj kosmos"
    />
    <Carousel.Caption>
      <h3>Kosmici sa wszedzie!</h3>
      <p>Musisz miec sie na bacznosci!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Walcz z kosmitami"
    />

    <Carousel.Caption>
      <h3>Pokonaj wielka ośmiornice</h3>
      <p>i zrob z niej sobie obiad</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Pokonaj złe moce"
    />

    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="mb-2 glowny__stronaglowna__btn1">
    <Button variant="primary" size="lg">
      Zagraj teraz
    </Button>
    </div>
        </div>
    )
}

export default StronaGłowna
