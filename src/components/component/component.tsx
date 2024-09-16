/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0uXI4ZiNGQv
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Gabarito } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-24 bg-gradient-to-r from-[#0077b6] to-[#00b894] text-white">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Welcome to My Portfolio</h1>
          <p className="max-w-[600px] text-lg md:text-xl">
            I'm a software developer with a passion for building innovative and user-friendly applications.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-white text-[#0077b6] px-6 py-3 text-lg font-medium shadow-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            prefetch={false}
          >
            View My Work
          </Link>
        </div>
      </section>
      <section id="projects" className="w-full py-24 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Projects</h2>
            <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
              Check out some of the projects I've worked on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 animate-fade-in">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Project 1"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-muted-foreground mt-2">
                  A web application that helps users manage their tasks and projects.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in-delay-100">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Project 2"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project 2</h3>
                <p className="text-muted-foreground mt-2">
                  A mobile app that helps users track their fitness goals and progress.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in-delay-200">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Project 3"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project 3</h3>
                <p className="text-muted-foreground mt-2">
                  A web-based data visualization tool that helps users analyze complex datasets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-white">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/placeholder.svg"
              width="400"
              height="400"
              alt="Developer"
              className="rounded-full shadow-lg animate-float"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              I'm a passionate software developer with over 5 years of experience in building web and mobile
              applications. I love creating innovative solutions that solve real-world problems and improve people's
              lives.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl">
              In my free time, I enjoy exploring new technologies, contributing to open-source projects, and mentoring
              aspiring developers. I'm always eager to learn and grow, and I'm excited to collaborate with like-minded
              individuals to create amazing products.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-gray-100">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
          <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
            Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon
            as possible.
          </p>
          <form className="w-full max-w-md space-y-4 animate-fade-in">
            <Input
              type="text"
              placeholder="Name"
              className="w-full rounded-md px-4 py-3 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full rounded-md px-4 py-3 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
            <Textarea
              placeholder="Message"
              className="w-full rounded-md px-4 py-3 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
            <Button
              type="submit"
              className="w-full rounded-md bg-[#0077b6] text-white px-6 py-3 font-medium shadow-md hover:bg-[#00b894] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <footer className="w-full bg-[#0077b6] text-white py-6">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm">&copy; 2024 My Portfolio. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-white hover:text-gray-200 transition-colors" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200 transition-colors" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200 transition-colors" prefetch={false}>
              <GitlabIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
