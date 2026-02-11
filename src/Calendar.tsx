
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
        <p style={{ fontSize: 30 }}>v
          Vinter/Forår 2026
        </p>
        <p style={{ fontSize: 20 }}>
          Mødetid: kl. 19.00-22.00 - hvis ikke andet er nævnt
          <br />
          <span style={{ fontSize: 20 }}>
            Selve dagens aktiviteter startes kl. 19.30
          </span>
        </p>


        <p style={{ fontSize: 18, fontWeight: "bold"  }}>
          05.01.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          Opstart, nyt over julen samt miniauktion.
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>

          </span>
        </p>


        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        19.01.20
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          Filateliaften, evt. Frankostempler og miniauktion.
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        02.02.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          Generalforsamling og Miniauktion.

          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          
          </span>
        </p>


        <p style={{ fontSize: 18, fontWeight: "bold" }}>
       16.02.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          Filateliaften, evt med Perfiner og Miniauktion.
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          02.03.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
           Filateliaften, evt foredrag og Miniauktion
          </span>
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          16.03.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            Filateliaften, Ringstedsamlingen og Miniauktion.
          </span>
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          30.03.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            Storauktion.
          </span>
          <br />
        </p>


        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          13.04.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            Afslutning med spisning og evt. bankospil.
          </span>
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
           
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
