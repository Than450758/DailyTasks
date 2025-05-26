import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';

const MenuBar = () => {
  const history = useHistory();

  const handleSignInClick = () => {
    history.push('/signin');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.tabs}>
        <Link to="/" style={styles.tab}>Home</Link>
        <Link to="/about" style={styles.tab}>About</Link>
        <Link to="/services" style={styles.tab}>Services</Link>
        <Link to="/products" style={styles.tab}>Products</Link>
        <Link to="/contact" style={styles.tab}>Contact</Link>
      </div>
      <button onClick={handleSignInClick} style={styles.signInButton}>Sign In</button>
    </nav>
  );
};

const SignInPage = () => {
  return (
    <div style={styles.signInPage}>
      <h1>Sign In Page</h1>
      {/* Sign-in form could go here */}
      <p>Here you can implement your sign-in form.</p>
      <Link to="/" style={styles.backLink}>Back to Home</Link>
    </div>
  );
};

const HomePage = () => (
  <div style={styles.homePage}>
    <h1>Welcome to the Home Page</h1>
    <p>Select any tab or click Sign In to proceed.</p>
  </div>
);

const AboutPage = () => (
  <div style={styles.page}>
    <h1>About Us</h1>
    <p>This is the About page.</p>
  </div>
);

const ServicesPage = () => (
  <div style={styles.page}>
    <h1>Services</h1>
    <p>This is the Services page.</p>
  </div>
);

const ProductsPage = () => (
  <div style={styles.page}>
    <h1>Products</h1>
    <p>This is the Products page.</p>
  </div>
);

const ContactPage = () => (
  <div style={styles.page}>
    <h1>Contact</h1>
    <p>This is the Contact page.</p>
  </div>
);

const MenuBarApp = () => {
  return (
    <Router>
      <MenuBar />
      <div style={styles.content}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#252525',
    color: '#fff',
    padding: '10px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  tabs: {
    display: 'flex',
    gap: '20px',
  },
  tab: {
    color: '#ddd',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  signInButton: {
    backgroundColor: '#4A90E2',
    border: 'none',
    padding: '8px 16px',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  signInPage: {
    padding: '40px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
  },
  backLink: {
    marginTop: '20px',
    display: 'inline-block',
    color: '#4A90E2',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
  },
  content: {
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  homePage: {
    padding: '40px',
    textAlign: 'center',
  },
  page: {
    padding: '40px',
  }
};

export default MenuBarApp;

