
import millImage from './Mill.jpg'; // Adjust the path as needed

function Calendar() {
  return (
    <div style={{ width: "40%", backgroundColor: "white", alignItems:'center',marginLeft: 200}}>
      <div style={styles.imageContainer}>
        <img src={millImage} alt="Logo" style={styles.image} />
        <div style={styles.textContainer}>
          <span style={styles.text}>
            <p style={{ fontSize: 35 }}>
              Forår 2025
            </p>
            <p style={{ fontSize: 25 }}>
              Mødetid: kl. 19.00-22.00 - hvis ikke andet er nævnt
            </p>
            <p style={{ fontSize: 25 }}>
              Selve dagens aktiviteter startes kl. 19.00
            </p>

            <p style={{ fontSize: 18 }}>
              06.01.2025
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
              - Sæsonstart, Nyt over Julen
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
              - Bytte og miniauktion
            </p>

            <br />      
            <p style={{ fontSize: 18 }}>
            20.01.2025
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
            - Vi ser på vores Ringsted-samling
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
              - Bytte og miniauktion
            </p>

            <br />
            <p style={{ fontSize: 18 }}>
            03.02.2025
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
            - Filateliaften
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
              - Bytte og miniauktion
            </p>
            
            <br />
            <p style={{ fontSize: 18 }}>
            17.02.2025
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
            - Bankospil
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
              - Bytte og miniauktion
            </p>

            <br />
            <p style={{ fontSize: 18 }}>
            03.03.2025
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
            - Generalforsamling
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
              - Bytte og miniauktion
            </p>

            <br />
            <p style={{ fontSize: 18 }}>
            17.03.2025
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
            - Filateliaften
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
              - Bytte og miniauktion
            </p>

            <br />
            <p style={{ fontSize: 18 }}>
            31.03.2025
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
            - Storauktion
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
              - Bytte og miniauktion
            </p>

            <br />
            <p style={{ fontSize: 18 }}>
            14.04.2025
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
            - Sæsonafslutning
            </p>
            <p style={{ fontSize: 15, color: "Red" }}>
            - Stor-bytteaften
            </p>

            <br />
            <p style={{ fontSize: 18 }}>
            Ang. foredrag og emner vi behandler på filateliaftener, følg med her på hjemmesiden.
            </p>           
          </span>
        </div>
      </div>
    </div>
  );

}


const styles = {


  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: '100%', // Adjust image size here
    width: 'auto',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'top',  // Vertically align text with logo
    marginLeft: '50px',    // Space between the logo and text
  },
  text: {
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};


export default Calendar;