
import millImage from './Mill.jpg'; // Adjust the path as needed

function Calendar() {
  return (
    <div style={styles.container}>
      {/* Left Side - Image */}
      <div style={styles.imageContainer}>
        <img src={millImage} alt="Logo" style={styles.image} />
      </div>

      {/* Right Side - Text */}
      <div style={styles.textContainer}>
        {/* <span style={styles.text}> */}
        <p style={{ fontSize: 30 }}>
          Forår 2025
        </p>
        <p style={{ fontSize: 20 }}>
          Mødetid: kl. 19.00-22.00 - hvis ikke andet er nævnt
          <br />
          <span style={{ fontSize: 20 }}>
          Selve dagens aktiviteter startes kl. 19.00
          </span>    
        </p>
       

        <p style={{ fontSize: 18, fontWeight: "bold"  }}>
          06.01.2025
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Sæsonstart, Nyt over Julen
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            - Bytte og miniauktion
          </span>
        </p>
        
        
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        20.01.2025
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Vi ser på vores Ringsted-samling
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            - Bytte og miniauktion
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        03.02.2025
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Filateliaften
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            - Bytte og miniauktion
          </span>
        </p>
        

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        17.02.2025
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Bankospil
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            - Bytte og miniauktion
          </span>
        </p>
       
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        03.03.2025
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Generalforsamling
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            - Bytte og miniauktion
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        17.03.2025
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Filateliaften
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            - Bytte og miniauktion
          </span>
        </p>
        
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        31.03.2025
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Storauktion
          </span>          
          <br />         
        </p>
       

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        14.04.2025
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Sæsonafslutning
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          - Stor-bytteaften
          </span>
        </p>
        

        

        <br />
        <p style={{ fontSize: 18 }}>
          Ang. foredrag og emner vi behandler på filateliaftener, følg med her på hjemmesiden.
        </p>
        {/* </span> */}

      </div>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start", // Aligns text to the TOP of the image
    justifyContent: "center", // Centers the layout
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    gap: "40px", // Adds space between image & text
  },
  imageContainer: {
    flex: 1,
    maxWidth: "600px", // Limits image width
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  textContainer: {
    flex: 1,
    maxWidth: "400px", // Limits text width
    // textAlign: "left", // Keeps text aligned left
  },
  /*  text: {
     color: 'black',
     fontSize: '18px',
     fontWeight: 'bold',
   }, */
};


export default Calendar;