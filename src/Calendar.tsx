
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
          Efertår 2026
        </p>
        <p style={{ fontSize: 20 }}>
          Mødetid: kl. 19.00-22.00 - hvis ikke andet er nævnt
          <br />
          <span style={{ fontSize: 20 }}>
            Selve dagens aktiviteter startes kl. 19.30
          </span>
        </p>


        <p style={{ fontSize: 18, fontWeight: "bold"  }}>
          14.09.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          Opstart, nyt over sommeren samt miniauktion.
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>

          </span>
        </p>


        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        28.09.20
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          Filateliaften, evt. foredrag og miniauktion.
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
        12.10.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          Filateliaften, evt. foredrag og Miniauktion.

          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          
          </span>
        </p>


        <p style={{ fontSize: 18, fontWeight: "bold" }}>
       25.10.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          Fælles byttedag i Sorø.
          </span>          
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          26.10.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
           Bankospil og Miniauktion
          </span>
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          09.11.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            Foredrag "Titanic", Skibsfører Bjørn Stampe kommer og fortæller om skibets historie.
          </span>
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
          </span>
        </p>

        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          23.11.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            Vi ser på Ringsted samlingen mm samt miniauktion.
          </span>
          <br />
        </p>


        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          07.12.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            Storauktion.
          </span>
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
           
          </span>
        </p>

<p style={{ fontSize: 18, fontWeight: "bold" }}>
          21.12.2026
          <br />
          <span style={{ fontSize: 15, color: "Red" }}>
            Juleafslutning med spisning og bankospil
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
