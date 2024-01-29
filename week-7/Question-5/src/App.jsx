import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [OTP, setOTP] = useState(Array(4).fill(''));
  const [showMobileInput, setShowMobileInput] = useState(true);
  const inputRef = useRef([]);

  const handleOTPAndFocus = (event) => {
      const index = parseInt(event.target.id);
      const newOTP = [...OTP];
      if (event.key === 'Backspace') {
        newOTP[index] = '';
        setOTP(newOTP);
        if (index > 0) {
          const previousElement = inputRef.current[index - 1];
          previousElement.focus();
        }
      } else {
        newOTP[index] = inputRef.current[index].value;
        setOTP(newOTP);
        if (index + 1 < newOTP.length) {
          const nextElement = inputRef.current[index + 1];
          nextElement.focus();
        }
      }
  }

  return (
    <div className='container'>
      <span className='heading'>Login via OTP</span>
      {showMobileInput &&
        <input
          id='phoneNumber'
          className='mt-1'
          type='text'
          placeholder='Enter your mobile number' />}
      {!showMobileInput &&
        <div className='OTP-container mt-1'>
          {OTP.map((digit, index) => {
            return (
              <input
                key={index}
                id={index}
                className='OTP-field'
                ref={ele => inputRef.current[index] = ele}
                onKeyUp={handleOTPAndFocus}
              />
            )
          })}
        </div>
      }
      {showMobileInput &&
        <button onClick={() => setShowMobileInput(false)} className='mt-1'>Send OTP</button>}
      {!showMobileInput &&
        <button onClick={() => setShowMobileInput(true)} className='mt-1'>Login</button>}
    </div>

  )
}

export default App
