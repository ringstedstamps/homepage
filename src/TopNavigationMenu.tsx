import { Link } from 'react-router-dom';

import logo from './ROFlogo.png'; // Adjust the path as needed

function TopNavigationMenu() {
  return (
    <nav style={styles.navbar}>
      {/* Left Side: Logo + Text */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.text}>
          ROF
          <br />
          Ringsted og Omegns Frimærkeklub
        </h2>
      </div>

      {/* Right Side: Navigation Links */}
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/home" style={styles.navLink}>Forside</Link></li>
        <li style={styles.navItem}><Link to="/history" style={styles.navLink}>Klubbens historie</Link></li>
        <li style={styles.navItem}><Link to="/calendar" style={styles.navLink}>Kalender</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Kontakt</Link></li>
        <li style={styles.navItem}><Link to="/links" style={styles.navLink}>Links</Link></li>
        <li style={styles.navItem}><Link to="/download" style={styles.navLink}>Download</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",        // Enables Flexbox
    alignItems: "center",   // Align items vertically
    justifyContent: "space-between", // Pushes navList to the right
    backgroundColor: "#dadada",
    padding: "10px 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "70px",
    width: "auto",
  },
  text: {
    color: "black",
    fontSize: "18px",
    fontWeight: "bold",
    marginLeft: "10px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    padding: 0,
    marginLeft: "auto", // Moves nav links to the right
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "18px",
  },
};
export default TopNavigationMenu;