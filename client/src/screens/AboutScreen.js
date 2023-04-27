import styled from 'styled-components';
import BannerImage from "../constants/aboutimg.jpg"

const AboutWrapper = styled.div`
  background-color: white;
  z-index: 1;
  padding: 0 2em 3em 2em;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    .header {
      font-size: 1.25rem;
      h1 {
        padding: 0.1em 0;
        font-size: 2.5rem;
        font-weight: 900;
        letter-spacing: -1.25px;
        height: 500px;
        
        
        
        background-clip: unset;
        background-color: white;
        -webkit-background-clip: text;
        
      }
    }
  }
`;

const AboutScreen = () => {
  return (
    
    <AboutWrapper>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="content">
          <div className="header">
            <h1 >EDIWEB - Harini, Hasika and Kaashika<br></br>
            EdiWeb is a website available to those looking for a unique creative outlet to express their culinary interests. It provides a communal approach to culinary connoisseurs looking for a safe space to present their original recipes, interests or even just explore others’ food related posts. 
In addition to this, EdiWeb aims to spread awareness about various dietary restrictions.It also provides user recommendations based on their search activity.

            </h1>
          </div>
        </div>
    </div>
    
    </AboutWrapper>
  );
};

export default AboutScreen;
