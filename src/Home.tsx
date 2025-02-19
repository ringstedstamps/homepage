
import millImage from './Mill.jpg'; // Adjust the path as needed

function Home() {
   
    return (
      <div style={styles.main}>
        <div style={styles.box}>
          <img src={millImage} alt="Logo" style={styles.image} />
        </div>
        <div  style={{...styles.box, minHeight: "800px" }}>
            <div>
                <h3>
                Velkommen til
                <br />
                 Ringsted og Omegns Frimærkeklub
            </h3>          
       
            <div style={{ textAlign: "center", color: "rgb(102, 102, 102)" }}>
                <span style={{ color: "rgb(0, 0, 0)", fontSize: "15pt" }}>
                        Ringsted og Omegns Frimærkeklub er en hyggelig og aktiv klub for
                        medlemmer, der alle har en interesse i frimærker og tilsvarende. De fleste
                        af medlemmerne bor naturligvis i Ringsted og tilstødende opland, men der
                    er medlemmer fra det meste af Sjælland.
                </span>
            </div>
            <div style={{ textAlign: "center", color: "rgb(102, 102, 102)" }}>
    <span style={{ color: "rgb(0, 0, 0)", fontSize: "15pt" }}>
      Klubben lægger stor vægt på, at der er plads til alle, der samler på
      frimærker, uanset niveau. Der stilles ingen krav til dig og din samling,
      bare du har en interesse, der har med en form for filateli at gøre. Derved
      kan alle være med, samle ny viden og dele ud af egen viden eller bare være
      en del af det hyggelige fællesskab i klubben.
    </span>
    ​
  </div>
            </div>
        </div>
        <div style={styles.box}>
        <img src={millImage} alt="Logo" style={styles.image} />
        </div>
      </div>
    );
  }
  
  const styles: { [key: string]: React.CSSProperties } = {
    main: {
      display: "flex",
      justifyContent: "space-between",
      height: "100%",
      padding: "30px",
    },
    box: {
      flex: 1,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      fontSize: "30px",
      backgroundColor: "#ffffff",
      margin: "0px",
      minHeight: "800px", // Increased height for bigger images
      border: "0px solid black", // Optional for visualization
    },
    image: {
      width: "100%", // Makes image fill the div width
      height: "90%", // Makes image fill the div height
      maxHeight: "700px", // Sets max height for the image
      objectFit: "contain", // Ensures the image fills the div without distortion
    },
  };
  
  export default Home;
  