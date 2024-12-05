import { Link } from "react-router-dom";
import '../style/Login.css';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <div className="login-container">
      <div className="login">
        <Card className="login-card">
          <CardHeader>
            <CardTitle className="login-title">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="login-input"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  className="login-input"
                  id="password"
                  type="password"
                  required
                />
              </div>
              <Button type="submit" className="login-button">
                Login
              </Button>
              <Button variant="outline" className="login-button">
                Login with Google
              </Button>
            </div>
            <div className="login-footer">
              Don&apos;t have an account?{" "}
              <Link href="#" className="login-link">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
