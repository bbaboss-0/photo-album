"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react"

import image1 from "../assets/images/img5.png";
import image2 from "../assets/images/img7.png";
import image3 from "../assets/images/img14.png";
import image4 from "../assets/images/img13.png";
import image5 from "../assets/images/img10.png";
import image6 from "../assets/images/img4.png";
import image7 from "../assets/images/img1.png";
import image8 from "../assets/images/img9.png";
import image9 from "../assets/images/img12.png";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4949/api/users/create", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((raw) => raw.json())
      .then((response) => {
        if (response.user) {
          alert("Success");
          console.log("Navigating to /app...");
          navigate("/app"); 
        } else {
          alert("Registration failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  }

  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="flex w-full items-center justify-center bg-primary md:w-1/2">
        <Card className="mx-4 w-full max-w-md border-none bg-white shadow-xl rounded-lg sm:mx-8">
          <CardHeader className="pb-2 pt-6">
            <CardTitle className="text-center text-2xl font-bold text-primary md:text-3xl">Create an Account</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-3 pt-4">
            <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    className="border-2 border-primary pr-10 pl-4 rounded-md focus:ring-2 focus:ring-primary/50"
                  />
                  <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                </div>
                <div className="relative">
                  <Input
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    className="border-2 border-primary pr-10 pl-4 rounded-md focus:ring-2 focus:ring-primary/50"
                  />
                  <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-primary pr-10 pl-4 rounded-md focus:ring-2 focus:ring-primary/50"
                  />
                  <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="border-2 border-primary pr-10 pl-4 rounded-md focus:ring-2 focus:ring-primary/50"
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="mt-2 w-full rounded-md bg-primary py-2 text-base font-semibold uppercase text-white transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
              >
                Register
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center pb-6 pt-2">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/" className="font-bold text-primary hover:underline">
                Log In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="hidden w-1/2 bg-gray-50 md:block">
        <div className="grid h-full grid-cols-3 gap-3 p-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
              <img
                src={image || "/placeholder.svg"}
                alt={`Image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
