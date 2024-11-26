import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../style/Login.css";
import image1 from "../assets/images/img5.png";
import image2 from "../assets/images/img14.png" 
import image3 from "../assets/images/img9.png" 
import image4 from "../assets/images/img13.png" 
import image5 from "../assets/images/img10.png" 
import image6 from "../assets/images/img12.png" 
import image7 from "../assets/images/img12.png" 
import image8 from "../assets/images/img1.png"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="row">
        <div className="col-md-6 login">
          <Card className="login-card w-80 max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="login-title text-2xl font-bold text-center">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="form-group space-y-4">
                <div className="form-group space-y-2">  
                  <div className="input-box">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="login-input"  
                  /> 
                  <span className="icon">
                  <i className="fas fa-user"></i> {/* Font Awesome icon */}
                 </span>
                  </div>
                </div>
                <div className="space-y-2"> 
                  <div className="input-box">
                    <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="login-input"
                  /> 
                  <span className="icon">
                  <i className="fas fa-lock"></i> 
                </span>
               </div>
                </div>
                <button
                  onClick={() => navigate("/app")}
                  type="submit"
                  className="login-button"
                >
                  Register
                </button>
              </form>
            </CardContent>
            <CardFooter className="login-footer flex flex-col items-center space-y-2">
              <Link
                to="/forgot-password" 
                // style={{ color: 'white'}}
                className="login-link text-sm text-primary hover:underline"
              >
                Forgot your password?
              </Link>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  to="/Register"
                  className="login-link text-primary hover:underline"
                >
                  Register
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
         <div className="col-md-6 login-image-div">
  <div className="grid-container">
    <img src={image1} alt="Image 1" style={{ height: '150%' }} className="grid-item" />
    <img src={image2} alt="Image 2" style={{ height: '100%' }} className="grid-item" />
    <img src={image3} alt="Image 3" style={{ height: '150%' }} className="grid-item" />
    <img src={image4} alt="Image 4" style={{ height: '150%' }} className="grid-item" />
    <img src={image5} alt="Image 5" style={{ height: '150%' }} className="grid-item" />
    <img src={image6} alt="Image 6" style={{ height: '150%' }} className="grid-item" />
    <img src={image6} alt="Image 6" style={{ height: '100%' }} className="grid-item" />
    <img src={image6} alt="Image 6" style={{ height: '100%' }} className="grid-item" />
    <img src={image8} alt="Image 8" style={{ height: '100%' }} className="grid-item" />
  </div>
</div>
      </div>
    </div>
  );
}
