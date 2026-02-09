"use client";
import dataCourse from "../data/music_courses.json";

import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourses = dataCourse.courses.filter(
    (course: Course) => course.isFeatured,
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold uppercase tracking-wide">
            Featured Courses
          </h2>
          <p
            className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl 
          leading-8"
          >
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient
                className="flex flex-col bg-white h-full rounded-[22px] overflow-hidden
              max-w-sm dark:bg-zinc-900"
              >
                <div
                  className="p-4 flex flex-col sm:p-6 items-center text-center 
              flex-grow:"
                >
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn more</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 border rounded border-neutral-600
           text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
