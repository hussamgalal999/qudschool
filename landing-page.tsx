import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Image 
            src="/qudschool-logo.png" 
            alt="QudSchool Logo" 
            width={150} 
            height={60}
          />
          <div className="space-x-4">
            <Link href="/courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-800">Welcome to QudSchool</h1>
        <p className="text-xl mb-8 text-gray-700">
          Empowering young minds with coding, AI, and cybersecurity skills!
        </p>
        <Button asChild>
          <Link href="/signup">Get Started</Link>
        </Button>
      </main>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Coding Basics', 'AI Adventures', 'Cybersecurity for Kids'].map((course) => (
            <div key={course} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{course}</h3>
              <p className="text-gray-600 mb-4">Learn exciting skills in our interactive {course.toLowerCase()} course!</p>
              <Button variant="outline" asChild>
                <Link href={`/courses/${course.toLowerCase().replace(' ', '-')}`}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} QudSchool. All rights reserved.</p>
          <p className="mt-2 text-sm">
            A proud product of{' '}
            <a
              href="https://qud-system.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              QudSystem Company
            </a>
          </p>
          <p className="mt-2 text-sm">Made in Egypt 🇪🇬</p>
        </div>
      </footer>
    </div>
  )
}