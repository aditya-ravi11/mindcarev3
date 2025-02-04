import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <Brain className="h-6 w-6" />
          <span className="text-lg font-semibold">MindCare Assistant</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link to="/chat">
            <Button variant="ghost">Chat</Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost">Profile</Button>
          </Link>
          <Link to="/signin">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="default">Sign Up</Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}