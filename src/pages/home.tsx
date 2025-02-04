import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Personal Mental Health Companion
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience compassionate support through AI-powered conversations.
                  Available 24/7 to help you navigate life's challenges.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/signup">
                  <Button className="px-8">Get Started</Button>
                </Link>
                <Link to="/chat">
                  <Button variant="outline" className="px-8">
                    Try Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 mb-2" />
                  <CardTitle>AI-Powered Support</CardTitle>
                  <CardDescription>
                    Advanced natural language processing for meaningful conversations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Available 24/7 to provide emotional support and practical guidance
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2" />
                  <CardTitle>Private & Secure</CardTitle>
                  <CardDescription>
                    Your conversations are encrypted and completely confidential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  We prioritize your privacy and maintain strict security standards
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 mb-2" />
                  <CardTitle>Personalized Care</CardTitle>
                  <CardDescription>
                    Tailored support based on your unique needs and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Adaptive responses that learn from your interactions
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}