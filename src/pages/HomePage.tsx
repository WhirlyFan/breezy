import { Link } from "react-router-dom";
import ModeToggle from "../components/ModeToggle/ModeToggle";

export default function HomePage() {
  return (
    <div>
      <div>Home Page</div>
	  <Link to='/login'>Login</Link>
	  <Link to='/forgot-password'>Forgot Password</Link>
      <Link to='/not-found'>Go to Not Found</Link>
      <ModeToggle />
    </div>
  );
}
