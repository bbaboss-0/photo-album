import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Register.css';
import image1 from "../assets/images/img5.png";
import image2 from "../assets/images/img7.png";
import image3 from "../assets/images/img14.png";
import image4 from "../assets/images/img13.png";
import image5 from "../assets/images/img10.png";
import image6 from "../assets/images/img4.png";
import image7 from "../assets/images/img1.png";
import image8 from "../assets/images/img9.png";
import image9 from "../assets/images/img12.png";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    console.log('Form submitted:', formData);
  };

  const navigate = useNavigate();
  return (
    <div className="register-container">
      <div className="row">
        <div className="col-md-6 register ">
          <div className="register-card rounded-xl  bg-card text-card-foreground shadow w-auto">
            <h2 className="register-title ">Create an Account</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="register-input"
                />
                <input
                  id="lastName"
                  name="lastName"
                  placeholder="last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="register-input"
                /> 

                <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="register-input"
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="register-input"
              /> 
              
              <button
                onClick={() => navigate('/app')}
                type="submit"
                className="register-button mb-4 mt-3"
              >
                Register
              </button>
            </form>
            <p className="register-footer">
              Already have an account?{' '}
              <Link to="/" className="register-link">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 register-image-div">
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
