
import { useEffect, useState } from 'react';
import './App.css'
import getNumber from './utils/hex2num';
import getHex from './utils/num2hex';

function App() {

  const [color, setColor] = useState(
    {
      hexCode: '#ff1100',
      R: '255',
      G: '17',
      B: '0'
    }
  )

  useEffect(() => {

    console.log('alo')

    document.getElementById('hexadecimalColor').value = color.hexCode
    document.getElementById('rColor').value = color.R
    document.getElementById('gColor').value = color.G
    document.getElementById('bColor').value = color.B

  }, [color])

  function changeHex(e) {

    setColor(
      {
        hexCode: e.target.value,
        R: getNumber(e.target.value[1], e.target.value[2]),
        G: getNumber(e.target.value[3], e.target.value[4]),
        B: getNumber(e.target.value[5], e.target.value[6])
      }
    )

  }

  function changeR(e) {

    if(e.target.value>255){
      e.target.value = 255
    }

    if(e.target.value<0){
      e.target.value = 0
    }

    setColor(
      {
        hexCode: '#' + getHex(e.target.value) + getHex(color.G) + getHex(color.B),
        R: e.target.value,
        G: color.G,
        B: color.B
      }
    )

  }

  function changeG(e) {

    if(e.target.value>255){
      e.target.value = 255
    }

    if(e.target.value<0){
      e.target.value = 0
    }

    setColor(
      {
        hexCode: '#' + getHex(color.R) + getHex(e.target.value) + getHex(color.B),
        R: color.R,
        G: e.target.value,
        B: color.B
      }
    )

  }

  function changeB(e) {

    if(e.target.value>255){
      e.target.value = 255
    }

    if(e.target.value<0){
      e.target.value = 0
    }

    setColor(
      {
        hexCode: '#' + getHex(color.R) + getHex(color.G) + getHex(e.target.value),
        R: color.R,
        G: color.G,
        B: e.target.value
      }
    )

  }

  return (

    <>

      <div className='container'>

        <br />

        <div style={{ fontSize: '32px', textAlign: 'center' }}>
          Hex ⇌ RGB
        </div>

        <br />

        <div style={{ border: '2px solid black', borderRadius: '100%', backgroundColor: color.hexCode, width: '215px', height: '215px', margin: '0 auto' }} />

        <br />

        <div class="form-floating mb-3">
          <input type="email" class="form-control" maxlength="7" id="hexadecimalColor" placeholder="name@example.com" defaultValue={color.hexCode} onChange={changeHex} />
          <label for="floatingInput">HEX</label>
        </div>

        <div style={{ display: 'inline-flex', width: '100%' }}>

          <div class="form-floating mb-3" style={{ marginRight: '5px' }}>
            <input type="email" class="form-control" maxlength="3" id="rColor" defaultValue={color.R} onChange={changeR} />
            <label for="floatingInput">R</label>
          </div>

          <div class="form-floating mb-3" style={{ marginRight: '5px' }}>
            <input type="email" class="form-control" maxlength="3" id="gColor" defaultValue={color.G} onChange={changeG} />
            <label for="floatingInput">G</label>
          </div>

          <div class="form-floating mb-3">
            <input type="email" class="form-control" maxlength="3" id="bColor" defaultValue={color.B} onChange={changeB} />
            <label for="floatingInput">B</label>
          </div>

        </div>


      </div>

    </>

  );
}

export default App;
