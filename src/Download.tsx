import millImage from './Mill.jpg'; // Adjust the path as needed




function Download() {
  return (
    <div style={styles.container}>
      {/* Left Side - Image */}
      <div style={styles.imageContainer}>
        <img src={millImage} alt="Logo" style={styles.image} />
      </div>

      {/* Right Side - Text */}
      <div style={styles.textContainer}>
        <h2>Download</h2>
        <p>        
        <a href="pdffiles/ROFs miniauktioner - omslag 2016.pdf" download style={styles.link}>
          📄 Omslag for ROF's miniauktion
        </a>        
        </p>
        <p>        
        <a href="pdffiles/ROF GF 2024 Dagsorden.pdf" download style={styles.link }>
          📄 Dagsorden GF 2024
        </a>        
        </p> 
        <p>        
        <a href="pdffiles/Efterårsprogram ROF 2024, Folder.pdf" download style={styles.link }>
          📄 Efterårsprogram 2024
        </a>        
        </p>
         <p>        
        <a href="pdffiles/Ringsted 2025.pdf" download style={styles.link }>
          📄 Efterårsprogram 2024
        </a>        
        </p>
         <p>        
        <a href="pdffiles/Omslag folder rettet 23 juli 25.docx" download style={styles.link }>
          📄 Efterårsprogram 2024
        </a>        
        </p>
          <p>        
        <a href="pdffiles/Rof Program efterår 25.docx" download style={styles.link }>
          📄 Efterårsprogram 2024
        </a>        
        </p>
            <p>        
        <a href="pdffiles/Rof program forår 26.docx" download style={styles.link }>
          📄 Efterårsprogram 2024
        </a>        
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
  link: {
    fontSize: "18px",
    textDecoration: "none",
    color: "#007BFF",
    fontWeight: "bold",
  }
};


export default Download;