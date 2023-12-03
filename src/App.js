import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <footer className="page-footer  stylish-color-dark pt-3 bg-danger">

      <div className="container text-white contentText">

        {/* Social Media Bar */}
        <div className="row pt-1  text-md-center justify-content-md-center">
          <div className="col-md-4 col-lg-4">
            <a className="btn my-1 header1 footerLink mx-2 my-1 bgFB" target="_blank"
              rel="noopener noreferrer" href="https://www.facebook.com/tumiperuvianbakery/">
              <i className="fab fa-facebook py-1"></i></a>@tumiperuvianbakery
          </div>

          <div className="col-md-4 col-lg-auto">
            <a href="mailto:tumibakery@gmail.com" className="btn header1 footerLink mx-2 my-1 bgMail">
              <i className="far fa-paper-plane py-1"></i></a>tumibakery@gmail.com
          </div>

          <div className="col-md-4 col-lg-3">
            <a className="btn header1 footerLink mx-2 my-1 bgIG" target="_blank"
              rel="noopener noreferrer" href="https://www.instagram.com/tumibakery/">
              <i className="fab fa-instagram py-1"></i></a><br className="lineBreak" />@tumibakery
          </div>

        </div>

        <div className="row pt-3 pb-4 text-md-center justify-content-md-center">

          <div className="col-md-4 col-lg-4">
            <a className="btn header1 footerLink mx-2 my-1 bgMap" target="_blank"
              rel="noopener noreferrer" href="https://www.google.com/maps/place/Oakland,+CA/@37.7586346,-122.3753929,11z/data=!3m1!4b1!4m5!3m4!1s0x80857d8b28aaed03:0x71b415d535759367!8m2!3d37.8043514!4d-122.2711639">
              <i className="fas fa-map-marked-alt py-1"></i></a><br className="lineBreak" />Serving the Bay Area, CA
          </div>

          <div className="col-md-4 col-lg-auto">
            <a href="tel:+14156903958" className="btn header1 footerLink mx-2 my-1 bgPhone">
              <i className="fas fa-phone py-1"></i></a><br className="lineBreak" />(415) 690-3958
          </div>

          <div className="col-md-4 col-lg-3">
            <a className="btn header1 footerLink mx-2 my-1 bgMess" target="_blank"
              rel="noopener noreferrer" href="http://m.me/tumiperuvianbakery">
              <i className="fab fa-facebook-messenger py-1"></i></a><br className="lineBreak" />Messenger
          </div>

        </div>

        <hr className="py-0 my-0" />

        <div className="footer-copyright text-center pb-2">© 2023 Copyright: Carlos T.</div>


      </div>

    </footer>
  );
}

export default App;
