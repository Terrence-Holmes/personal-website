import { useState } from "react";


function Footer() {


    const itchLight = "./images/itch-light.png"
    const itchDark = "./images/itch-dark.png"
    const [itchImageSource, set_ItchImageSource] = useState(itchLight)

  return (
    <footer className="background">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span> Terrence Joel Holmes
            </p>
          </div>
          <div className="col-sm-5 social">
            <ul>
              <li>
                <a href="https://github.com/Terrence-Holmes" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/terrence-holmes-929b92202/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@joelholmes6825" target="_blank">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://terrence-holmes.itch.io/" target="_blank">
                <img
                    className="img-icon"
                    src={itchImageSource}
                    onMouseEnter={() => set_ItchImageSource(itchDark)}
                    onMouseLeave={() => set_ItchImageSource(itchLight)}
                    />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;