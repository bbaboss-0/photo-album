"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

// Dummy image imports or declarations to resolve the errors
import image1 from "../assets/images/img5.png";
import image2 from "../assets/images/img7.png";
import image3 from "../assets/images/img14.png";
import image4 from "../assets/images/img13.png";
import image5 from "../assets/images/img10.png";
import image6 from "../assets/images/img4.png";
import image7 from "../assets/images/img1.png";
import image8 from "../assets/images/img9.png";
import image9 from "../assets/images/img12.png";
// import { json } from "stream/consumers"

export default function LoginForm() {
  const [formData, setFormData] = useState({
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
    console.log("Login submitted:", formData)

    // API call
    fetch("http://localhost:4949/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email, password: formData.password }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data)
        if(data.success){
          navigate("/app/dashboard")
        }else{
          alert("email or password not correct")
        }
      })
      .catch((error) => console.error("Error:", error))
  }

  // Replace with your actual image imports
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

  return ( 
    
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Login form */} 
    
      <div className="flex w-full items-center justify-center bg-primary md:w-1/2">
        <Card className="mx-4 w-full max-w-md border-none bg-white shadow-lg sm:mx-8">
          <CardHeader className="pb-2 pt-6">
            <CardTitle className="text-center text-2xl font-bold text-primary md:text-3xl">Log In</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-3 pt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground">
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="mt-2 w-full rounded-md bg-primary py-2 text-base font-semibold uppercase text-white transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
              >
                Log In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center pb-6 pt-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Right side - Image grid */}
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
