function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span className="footer-title">Shepherd Brombley Partnership Ltd</span>
        <span>Mechanical, electrical and public health building services engineering.</span>
      </div>
      <span>Company no. 8251351<br />© {new Date().getFullYear()} SBP</span>
    </footer>
  );
}

export default Footer;
