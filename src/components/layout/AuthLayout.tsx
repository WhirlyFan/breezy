import { Outlet } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthLayout() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background p-4 sm:p-6 md:p-8'>
      <div className='flex flex-col md:flex-row w-full max-w-4xl gap-6 md:gap-10'>
        {/* Branding & Welcome */}
        <div className='flex-1 flex flex-col justify-center space-y-6'>
          <div>
            <h1 className='text-3xl font-bold'>Breezy Social</h1>
            <p className='text-muted-foreground'>
              Connect with friends and the world around you.
            </p>
          </div>

          <div className='hidden md:block space-y-4'>
            <p className='text-lg'>
              Join our community of millions to share moments, follow interests,
              and stay connected with friends and family.
            </p>

            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary' />
                <span>Post updates, photos and videos</span>
              </li>
              <li className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary' />
                <span>Follow people and topics that interest you</span>
              </li>
              <li className='flex items-center gap-2'>
                <div className='h-1.5 w-1.5 rounded-full bg-primary' />
                <span>Discover events and communities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Auth Form Card */}
        <div className='flex-1'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Welcome</CardTitle>
              <CardDescription className='text-center'>
                Sign in to access your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Outlet />
            </CardContent>

            <CardFooter className='flex flex-col space-y-4 border-t pt-4'>
              <p className='text-sm text-muted-foreground text-center'>
                By continuing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
