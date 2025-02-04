import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { HomePage } from '@/pages/home';
import { ChatPage } from '@/pages/chat';
import { SignInPage } from '@/pages/auth/sign-in';
import { SignUpPage } from '@/pages/auth/sign-up';
import { ProfilePage } from '@/pages/profile';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="mindcare-theme">
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Navbar />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App