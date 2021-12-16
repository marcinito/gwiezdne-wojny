import React,{useState} from 'react'
import {Offcanvas,Button} from 'react-bootstrap'
function Instrukcja() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
            <Button variant="success" onClick={handleShow}>
        Zobacz instrukcje gry
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Instrukcja</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Jesteś na tajnej misji kosmicznej , twoim celem jest przejść wszystkie poziomy
          i na koniec pokonać wielką ośmiornice.
          1.Staraj sie łapać tylko gwiazdki , daja Ci one niezbedne punkty by przejść dalej.
          2.Unikaj bomb i innych nie zidentyfikowanych obiektów każde uderzenie czegoś takiego
          zabiera Ci szybkośc , jest szansa ze mozesz stracic całkowitą mozliwośc poruszania,
          odzyskasz ją stopniowo po pewnym czasie lub *bd mial szczescie i uderzy w Cb fluid który Cie leczy
          i daje punkty szybkosci*.
          Poruszasz sie <strong style={{color:"red"}}>strzałka w lewo to lewy kierunek </strong>
           i <strong style={{color:"red"}}>strzałka w prawo to prawy kierunek</strong>
        </Offcanvas.Body>
      </Offcanvas>
    
        </div>
    )
}

export default Instrukcja
