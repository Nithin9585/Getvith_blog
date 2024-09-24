import React from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <section className="container px-4 py-10 lg:h-full lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:ml-20 lg:-mt-8">
          <h1 className="text-3xl leading-snug md:text-4xl">
            A <span className="font-semibold">rollercoaster ride</span> through coding <br className="hidden lg:block" /> components and <span className="font-semibold underline decoration-primary">breaking bugs (and news) faster than you can refresh!</span>
          </h1>
          <p className="mt-4 text-lg">
            Fresh coding tips and daily news updates to <br className="hidden lg:block" /> keep your brain sharp and your coffee strong—no debugging required!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:ml-3 lg:w-1/2">
          <img src="https://res.cloudinary.com/dvmmuj2r0/image/upload/v1727181095/Designer_4_iutvxb.png" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>
      <section className="py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Pricing Plans</h2>
            <p className="mt-4 text-lg">Choose the plan that suits you best.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg text-center lg:m-5 shadow-lg transform transition duration-500 border-2 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">Basic</h3>
              <p className="mt-4">$10/month</p>
              <ul className="mt-6 space-y-4 text-center">
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Access to all articles</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Weekly newsletter</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Basic support</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Ad-free experience</span>
                </li>
              </ul>
              <Button className="mt-8 w-full py-2 rounded-lg" variant="outline">Choose Plan</Button>
            </div>
            <div className="p-12 rounded-lg text-center border shadow-lg hover:shadow-2xl border-purple-500 dark:bg-gray-600 bg-gray-300 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold">Premium</h3>
              <p className="mt-4">$30/month</p>
              <ul className="mt-6 space-y-4 text-center">
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Access to all articles</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Weekly newsletter</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Priority support</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Ad-free experience</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Exclusive content</span>
                </li>
              </ul>
              <Button className="mt-8 w-full py-2 rounded-lg" variant="outline">Choose Plan</Button>
            </div>
            <div className="p-6 rounded-lg text-center border-2 lg:m-5 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">Standard</h3>
              <p className="mt-4 text-center">$20/month</p>
              <ul className="mt-6 space-y-4 text-center">
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Access to all articles</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Weekly newsletter</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Standard support</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-3">Ad-free experience</span>
                </li>
              </ul>
              <Button className="mt-8 w-full py-2 rounded-lg" variant="outline">Choose Plan</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-4">What Our Clients Say</h2>
        <div className="space-y-6 mt-5 flex flex-col md:flex-row">
          <div className="mx-10 p-6 rounded-lg border border-purple-200 shadow-md flex-1">
            <p className="italic">This service is fantastic! Highly recommend to everyone.</p>
            <p className="text-right mt-4">- Happy Client</p>
          </div>
          <div className="p-6 mx-10 rounded-lg border border-purple-200 shadow-md flex-1">
            <p className="italic">A wonderful experience from start to finish.</p>
            <p className="text-right mt-4">- Satisfied Customer</p>
          </div>
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Blogs</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className="blog-connection flex-1 mx-2.5 dark:bg-gray-600 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="Blog 1" className="w-full h-56 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">Blog 1</h2>
            <p>Blog 1 Description</p>
          </div>
          <div className="blog-connection flex-1 mx-2.5 dark:bg-gray-600 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="Blog 2" className="w-full h-56 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">Blog 2</h2>
            <p>Blog 2 Description</p>
          </div>
          <div className="blog-connection flex-1 mx-2.5 dark:bg-gray-600 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="Blog 3" className="w-full h-56 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">Blog 3</h2>
            <p>Blog 3 Description</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-around items-center h-52">
          <div className="w-8 mx-1 h-8 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-8 h-8 bg-red-500 animate-bounce"></div>
        </div>
      </section>
    </main>
  );
}