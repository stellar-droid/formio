import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile'
const generateRandomString = (length) => {
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const CaptchaComponent = () => {
  const [captchaChallenge, setCaptchaChallenge] = useState(generateRandomString(6));

  const refreshCaptcha = () => {
    setCaptchaChallenge(generateRandomString(6));
  };



  const [isVerified, setIsVerified] = useState(false);

  // Function to handle verification status change
  const handleVerificationChange = (verified) => {
      setIsVerified(verified);
      console.log("Captcha VAlue",isVerified)
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
      event.preventDefault();
      // Check if the captcha is verified before submitting the form
      if (isVerified) {
          // Handle form submission logic here
          console.log('Form submitted successfully!');
      } else {
          alert('Please complete the captcha verification.');
      }
  };
  return (
    <>
    
    {/* <div>
      <div>{captchaChallenge}</div>
      <button onClick={refreshCaptcha}>Refresh</button>
    </div>
<br /> */}
    
    {/* <form action="?" method="POST">
      <div class="g-recaptcha" data-sitekey="6LcHEqApAAAAACwdXZjYyEcK3ChD2CYytUbBhRuW"></div>
      <br/>
      <input type="submit" value="Submit"/>
    </form> */}
    {/* < div className="g-recaptcha" data-sitekey="6LcHEqApAAAAACwdXZjYyEcK3ChD2CYytUbBhRuW"/> */}


    <form action="https://google.com">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"/><br/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"/><br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"/><br/>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone"/><br/>


    <Turnstile siteKey='0x4AAAAAAAVpe0VoFwxydQWQ'  onChange={handleVerificationChange} />

        <input type="submit" value="Submit" onSubmit={handleSubmit}/>
    </form>



    {/* <Turnstile siteKey='0x4AAAAAAAVpe0VoFwxydQWQ' /> */}
      </>

  );
};

export default CaptchaComponent;


// import React, { useState, useEffect } from 'react';

// const CaptchaComponent = () => {
//   const [captchaCode, setCaptchaCode] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [isCaptchaValid, setIsCaptchaValid] = useState(true);

//   useEffect(() => {
//     createCaptcha();
//   }, []);

//   const createCaptcha = () => {
//     const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lengthOtp = 6;
//     let captcha = '';

//     for (let i = 0; i < lengthOtp; i++) {
//       const index = Math.floor(Math.random() * charsArray.length);
//       captcha += charsArray[index];
//     }

//     setCaptchaCode(captcha);
//   };

//   const validateCaptcha = () => {
//     if (userInput === captchaCode) {
//       setIsCaptchaValid(true);
//       alert("Valid Captcha");
//     } else {
//       setIsCaptchaValid(false);
//       alert("Invalid Captcha. Try Again");
//       createCaptcha();
//     }
//   };

//   return (
//     <div className="captchaBox">
//       <div style={{ display: 'flex', gap: '5px', fontSize: '25px' }}>
//         {captchaCode.split('').map((char, index) => (
//           <span key={index}>{char}</span>
//         ))}
//         <button className="reloadBtn" onClick={createCaptcha}>Reload</button>
//       </div>
//       <input 
//         type="text" 
//         className="inputBox" 
//         placeholder="Enter the image Text" 
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//       />
//       <br />
//       <button className="submitBtn" onClick={validateCaptcha}>Submit</button>
//       {!isCaptchaValid && <p style={{ color: 'red' }}>Invalid Captcha. Try Again</p>}
//     </div>
//   );
// };

// export default CaptchaComponent;
