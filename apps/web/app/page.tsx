"use client";

import { Button } from '@repo/ui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui';
import { Input } from '@repo/ui';
import { Label } from '@repo/ui';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Next.js + Turbopack + Monorepo
          </h1>
          <p className="text-xl text-gray-600">
            Modern development setup with lightning-fast builds
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚡ Turbopack
              </CardTitle>
              <CardDescription>
                Next.js's new bundler for 10x faster development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Experience instant hot module replacement and blazing-fast builds with Rust-powered bundling.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📦 Monorepo
              </CardTitle>
              <CardDescription>
                Turborepo for efficient workspace management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Shared packages, optimized caching, and parallel execution across your entire codebase.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 Shared UI
              </CardTitle>
              <CardDescription>
                Reusable component library
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Consistent design system with TypeScript support across all applications.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>
              Test the shared UI components from @repo/ui
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="demo-input">Demo Input</Label>
              <Input
                id="demo-input"
                placeholder="Type something..."
                className="w-full"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setCount(count - 1)}
                variant="outline"
                size="sm"
              >
                -
              </Button>
              <span className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">
                {count}
              </span>
              <Button 
                onClick={() => setCount(count + 1)}
                size="sm"
              >
                +
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button onClick={() => setCount(0)} variant="secondary" size="sm">
                Reset
              </Button>
              <Button variant="outline" size="sm">
                Secondary Action
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Ready for production deployment with optimized builds
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-400">
            <span>✓ TypeScript</span>
            <span>✓ Tailwind CSS</span>
            <span>✓ ESLint</span>
            <span>✓ Prettier</span>
          </div>
        </div>
      </div>
    </div>
  );
}