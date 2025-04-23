import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function TheTune() {
  return (
    <main className="min-h-screen bg-neutral-50 text-gray-800 px-4 py-8 font-serif">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">The Tune</h1>
        <p className="text-xl italic">Where words find rhythm.</p>
      </header>

      <section className="max-w-3xl mx-auto mb-16">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-3xl font-semibold mb-2">About the Author</h2>
            <p className="text-base leading-relaxed">
              Welcome to The Tune. I'm a writer passionate about turning thoughts into powerful stories and honest essays. Here you'll find my works, updates on upcoming books, and reflections on the art of writing.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto mb-16 grid gap-6">
        <h2 className="text-3xl font-semibold mb-4">Latest Writings</h2>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold">The Silence Between Sentences</h3>
            <p className="text-base text-gray-600 mt-2">
              A reflection on the beauty of stillness in storytelling.
            </p>
            <Button className="mt-4">Read More</Button>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold">Real Words for Real People</h3>
            <p className="text-base text-gray-600 mt-2">
              An essay about writing what matters in a world of noise.
            </p>
            <Button className="mt-4">Read More</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        © 2025 The Tune. All rights reserved.
      </footer>
    </main>
  );
}
