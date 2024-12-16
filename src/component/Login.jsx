import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../style/Login.css";
import image1 from "../assets/images/img5.png";
import image2 from "../assets/images/img7.png" 
import image3 from "../assets/images/img14.png" 
import image4 from "../assets/images/img13.png" 
import image5 from "../assets/images/img10.png" 
import image6 from "../assets/images/img4.png" 
import image7 from "../assets/images/img1.png" 
import image8 from "../assets/images/img9.png" 
import image9 from "../assets/images/img12.png" 
import Login from '../components/login-form'
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
  <div className="login-card rounded-xl border bg-card text-card-foreground shadow w-auto">
    <h2 className="login-title mt-5 mb-5">LogIn</h2>
    <form onSubmit={handleSubmit} className="login-form">
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
      <button
        onClick={() => navigate('/app/dashboard')}
        type="submit"
        className="login-button mb-4 mt-3"
      >
        Log In
      </button>
    </form>
    <p className="login-footer">
      Don't have an account?{' '}
      <Link to="/register" className="login-link">
        Sign Up
      </Link>
    </p>
  </div>
</div>

         <div className="col-md-6 login-image-div">
  <div className="grid-container">
    <img src={image1} alt="Image 1" style={{ height: '150%' }} className="grid-item" />
    <img src={image2} alt="Image 2" style={{ height: '150%' }} className="grid-item" />
    <img src={image3} alt="Image 3" style={{ height: '150%' }} className="grid-item" />
    <img src={image4} alt="Image 4" style={{ height: '150%' }} className="grid-item" />
    <img src={image5} alt="Image 5" style={{ height: '150%' }} className="grid-item" />
    <img src={image6} alt="Image 6" style={{ height: '150%' }} className="grid-item" />
    <img src={image7} alt="Image 7" style={{ height: '100%' }} className="grid-item" />
    <img src={image8} alt="Image 8" style={{ height: '100%' }} className="grid-item" /> 
    <img src={image9} alt="Image 9" style={{ height: '100%' }} className="grid-item" />
  </div>
</div>
      </div>
    </div>
  );
}
