import { Link } from 'react-router-dom';  

function TopNavigationMenu () 
{
return (
    <nav style={styles.navbar}> {/* You can style the navbar directly or use a separate CSS file */}
     <div style={styles.logoContainer}>
        <img src="ROFlogo.png" alt="Logo" style={styles.logo} />
        <div style={styles.textContainer}>
        <span style={styles.text}><h2>
  ROF
  <br />
  Ringsted og Omegns Frimærkeklub
  <br />
</h2></span>
      </div>
      </div>
     
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/home" style={styles.navLink}>Forside</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/history" style={styles.navLink}>Klubbens historie</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/calendar" style={styles.navLink}>Kalender</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Kontakt</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/links" style={styles.navLink}>Links</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/download" style={styles.navLink}>Download</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
    navbar:  {
      backgroundColor: '#ffffff',
      padding: '10px',
      textAlign: 'center' as 'center',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    navItem: {
      margin: '0 20px',
    },
    navLink: {
      color: 'black',
      textDecoration: 'none',
      fontSize: '18px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      height: '70px', // Adjust logo size here
      width: 'auto',
    },
    textContainer: {
      display: 'flex',
      alignItems: 'center',  // Vertically align text with logo
      marginLeft: '10px',    // Space between the logo and text
    },
    text: {
      color: 'black',
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };
export default TopNavigationMenu;