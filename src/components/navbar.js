import React from "react"
import {
  Link,
} from "react-router-dom";

export default function Navbar({ onCountryChange }) {
  const handleCountryChange = (countryCode) => {
    console.log("Changing country to:", countryCode);
    onCountryChange(countryCode);
    
  };
    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">NewsHub</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/general">Home </Link>
      </li>
      <Link className="nav-link" to="/business">Business</Link>
      <Link className="nav-link" to="/entertainment">Entertainment</Link>
      <Link className="nav-link" to="/health">Health</Link>
      <Link className="nav-link" to="/science">Science</Link>
      <Link className="nav-link" to="/sports">Sports</Link>
      <Link className="nav-link" to="/technology">Technology</Link>

      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:"750px"}}>
      Country
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("in")}>India</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("ae")}>UAE</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("at")}>Austria</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("au")}>Australia</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("ca")}>Canada</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("ch")}>Switzerland</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("cn")}>China</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("de")}>Germany</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("fr")}>France</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("gb")}>United Kingdom</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("ru")}>Russia</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("ua")}>Ukraine</Link></li>
      <li><Link className="dropdown-item" to="#" onClick={() => handleCountryChange("us")}>United States</Link></li>
      
  </ul>
</div>
      
    </ul>
    
  </div>
</nav>
</>
    )
}
