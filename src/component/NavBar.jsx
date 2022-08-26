import { Button } from "./buttons/Button";
import { BrandLogo } from "./util/BrandLogo";


export default function NavBar() {
  return (
 
      
      <nav className="navbar navbar-light bg-light">
      <div className="container">
    
         <BrandLogo linkClass="navbar-brand"/>
         <div className="nav-buttons ">
         <Button className="btn btn-primary" title="Upload"/>
         <Button className="btn btn-outline-primary" title="Sign in" />
        
     </div>
      </div>
      </nav>
    
  );
}
