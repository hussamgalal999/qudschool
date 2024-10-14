import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: 'Coding Basics',
    description: 'Learn the fundamentals of programming with fun, interactive lessons.',
    image: '/placeholder.svg?height=200&width=300',
    level: 'Beginner',
    ageRange: '8-12',
  },
  {
    id: 2,
    title: 'AI Adventures',
    description: 'Explore the exciting world of artificial intelligence and machine learning.',
    image: '/placeholder.svg?height=200&width=300',
    level: 'Intermediate',
    ageRange: '10-14',
  },
  {
    id: 3,
    title: 'Cybersecurity for Kids',
    description: 'Discover how to stay safe online and protect digital information.',
    image: '/placeholder.svg?height=200&width=300',
    level: 'Beginner',
    ageRange: '8-16',
  },
  // Add more courses as needed
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/qudschool-logo.png" 
              alt="QudSchool Logo" 
              width={150} 
              height={60}
            />
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src={course.image} 
                alt={course.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Level: {course.level}</span>
                  <span className="text-sm text-gray-500">Age: {course.ageRange}</span>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/courses/${course.id}`}>Enroll Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

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