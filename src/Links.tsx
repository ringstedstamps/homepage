import millImage from './Mill.jpg'; // Adjust the path as needed

function Links() {
  return (
    <div style={styles.container}>
      {/* Left Side - Image */}
      <div style={styles.imageContainer}>
        <img src={millImage} alt="Logo" style={styles.image} />
      </div>

      {/* Right Side - Text */}
      <div style={styles.textContainer}>
        <h2>Links</h2>
        <p>        
          <br />
          <br />
          🔹 <a href="https://www.danfil.dk" target="_blank" rel="noopener noreferrer">Danmarks Filatelist Forbund</a>
          <br />
          🔹 <a href="https://www.sfk92.dk" target="_blank" rel="noopener noreferrer">SFK Samarbejdende Frimærke Klubber</a>
          <br />
          🔹 <a href="https://stamp.porsgaard-larsen.com" target="_blank" rel="noopener noreferrer">Porsgaard-Larsen</a>
          <br />
          🔹 <a href="https://www.stampworld.com/da/" target="_blank" rel="noopener noreferrer">Stamp World</a>
          <br />
          🔹 <a href="https://perfiner.dk" target="_blank" rel="noopener noreferrer">Perfiner</a>
          <br />
          🔹 <a href="https://frimaerker.ptt-museum.dk" target="_blank" rel="noopener noreferrer">Post & telemuseum's katalog</a>
          <br />
          🔹 <a href="https://www.postcrossing.com" target="_blank" rel="noopener noreferrer">Postcrossing</a>
          <br />
          🔹 <a href="https://www.bruun-rasmussen.dk" target="_blank" rel="noopener noreferrer">Bruun Rasmussen</a>
          <br />
          🔹 <a href="https://www.skanfil.no" target="_blank" rel="noopener noreferrer">Scanfil</a>
          <br />
          🔹 <a href="https://www.vf-auktion.dk" target="_blank" rel="noopener noreferrer">VF Auktion</a>
          <br />
          🔹 <a href="https://www.az-stamps.dk" target="_blank" rel="noopener noreferrer">A-Z Stamps</a>
          <br />
          🔹 <a href="https://www.delcampe.net/en_GB/collectables/stamps/" target="_blank" rel="noopener noreferrer">delcampe</a>
          <br />
          🔹 <a href="https://www.engers-frimerker.no" target="_blank" rel="noopener noreferrer">Engers Frimerker</a>




        </p>
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
};


export default Links;