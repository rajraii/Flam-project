import { useEffect, useState } from 'react'
import './app.css'
import DragComponent from './components/DragComponent'


function App() {
  const [headerTime, setHeaderTime] = useState(``)
  useEffect(() => {
    setInterval(() => {
      var time = new Date();
      setHeaderTime(
        ("0" + time.getHours()).slice(-2) + ":" +
        ("0" + time.getMinutes()).slice(-2) + ":" +
        ("0" + time.getSeconds()).slice(-2)
      )
    })
  }, [])

  return (
    <div className="App">
      <header className="header">
        <div className="header--raio-btn">
          <div>
            <input type="radio" name="position" id="top-right" value={'top-right'} />
            <label className='radio-label' htmlFor='top-right'>Top-Right</label>
          </div>
          <div>
            <input type="radio" name="position" id="top-left" value={'top-left'} />
            <label htmlFor='top-left' className='radio-label'>Top-Left</label>
          </div>
          <div>
            <input type="radio" name="position" id="bottom-right" value={'bottom-right'} />
            <label htmlFor='bottom-right' className='radio-label'>Bottom-Right</label>
          </div>
          <div>
            <input type="radio" name="position" id="bottom-left" value={'bottom-left'} />
            <label htmlFor='bottom-left' className='radio-label'>Bottom-left</label>
          </div>
        </div>

        <div className='header--timer'>
          <h3>{headerTime}</h3>
        </div>
      </header>

      <div className='content-container'>
        <DragComponent/>
      </div>

      <footer className='footer'>
        <div className='footer--container'> Footer</div>
      </footer>
    </div>
  );
}

export default App;
