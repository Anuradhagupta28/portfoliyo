import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://trivago-clone0.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Trivago</h3>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c3aEnp38kakJUuf5WzoSUacS2-PhMsoOoQ&usqp=CAU" alt="Visit site" />
              <p>
              Trivago is a online hotel serach platform.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://meek-banoffee-d8d741.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Netmeds</h3>
              <img style={{width:"340px" ,height:"160px"}} src="https://www.netmeds.com/images/cms/magefan_blog/IVR_Cover_Image_App.jpg" alt="Visit site" />
              <p>
                Netmeds is the Indian online pharmacy company, who sell the medicines.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://ni-ke-clone-react.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Nike</h3>
              <img style={{width:"340px" ,height:"160px"}} src="data:image/jpeg;base64,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" alt="Visit site" />
              <p>
              Nike, is an American corporation that sales of footwear, and cloths.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>  */}

        

      </div>
    </Container>
  );
}