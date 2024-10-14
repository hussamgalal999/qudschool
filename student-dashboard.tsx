import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../path/to/correct/button" // Update this path as necessary
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Ensure this path is correct
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Award, BarChart2 } from 'lucide-react'

export default function StudentDashboard() {
  const [progress, setProgress] = useState(65)

  const enrolledCourses = [
    { id: 1, title: 'Coding Basics', progress: 75 },
    { id: 2, title: 'AI Adventures', progress: 30 },
    { id: 3, title: 'Cybersecurity for Kids', progress: 50 },
  ]

  const achievements = [
    { id: 1, title: 'Code Ninja', description: 'Completed 10 coding challenges' },
    { id: 2, title: 'AI Explorer', description: 'Finished first AI project' },
    { id: 3, title: 'Cyber Guardian', description: 'Passed cybersecurity quiz' },
  ]

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
            <Link href="/courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
            <Link href="/profile" className="text-blue-600 hover:text-blue-800">Profile</Link>
            <Button variant="outline">Logout</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-blue-800">Welcome back, Student!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progress}%</div>
              <Progress value={progress} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{achievements.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-4">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="courses" className="space-y-4">
            {enrolledCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{course.title}</CardTitle>
                  <Button asChild>
                    <Link href={`/courses/${course.id}`}>Continue</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <Progress value={course.progress} className="mt-2" />
                  <p className="text-sm text-muted-foreground mt-2">{course.progress}% complete</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="achievements" className="space-y-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{achievement.title}</CardTitle>
                  <Award className="h-6 w-6 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
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
