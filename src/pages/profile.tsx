import { useState } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export function ProfilePage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
  };

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-4">
              <User className="h-8 w-8" />
            </div>
            <div>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Manage your account settings and preferences
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <Separator />
            <div className="flex justify-end">
              <Button type="submit">Save changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}