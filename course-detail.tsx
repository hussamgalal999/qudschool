import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Lock, PlayCircle } from 'lucide-react'

export default function CourseDetail() {
  const [courseProgress, setCourseProgress] = useState(30)

  const course = {
    id: 1,
    title: 'Coding Basics',
    description: 'Learn the fundamentals of programming with fun, interactive lessons.',
    image: '/placeholder.svg?height=300&width=600',
    modules: [
      {
        id: 1,
        title: 'Introduction to Programming',
        lessons: [
          { id: 1, title: 'What is Programming?', completed: true },
          { id: 2, title: 'Your First Program', completed: true },
          { id: 3, title: 'Variables and Data Types', completed: false },
        ],
      },
      {
        id: 2,
        title: 'Control Structures',
        lessons: [
          { id: 4, title: 'If Statements', completed: false },
          { id: 5, title: 'Loops', completed: false },
          { id: 6, title: 'Functions', completed: false },
        ],
      },
      // Add more modules as needed
    ],
  }

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
            <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link>
            <Link href="/courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
            <Button variant="outline">Logout</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-800">{course.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{course.description}</p>
          <Image 
            src={course.image} 
            alt={course.title} 
            width={600} 
            height={300} 
            className="rounded-lg shadow-md mb-4"
          />
          <div className="flex items-center space-x-4">
            <Progress value={courseProgress} className="w-full" />
            <span className="text-sm font-medium">{courseProgress}% Complete</span>
          </div>
        </div>

        <Tabs defaultValue="modules" className="space-y-4">
          <TabsList>
            <TabsTrigger value="modules">Course Modules</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="modules" className="space-y-4">
            {course.modules.map((module) => (
              <Card key={module.id}>
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <PlayCircle className="h-5 w-5 text-blue-500" />
                          )}
                          <span>{lesson.title}</span>
                        </div>
                        <Button 
                          variant={lesson.completed ? "outline" : "default"}
                          size="sm"
                          asChild
                        >
                          <Link href={`/courses/${course.id}/lessons/${lesson.id}`}>
                            {lesson.completed ? 'Review' : 'Start'}
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-gray-400" />
                    <span>Coding Basics Cheat Sheet</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-gray-400" />
                    <span>Practice Exercises</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-gray-400" />
                    <span>Video Tutorials</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Resources will be unlocked as you progress through the course.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-blue-800 text-white py-8 mt-16">
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