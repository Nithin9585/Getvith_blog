import React from 'react';
import { Button } from '@/components/ui/button';
export default function ContactUs() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center ">
      <section className="container px-4 py-10 lg:h-full lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:ml-20 lg:-mt-8">
          <h1 className="text-3xl leading-snug   md:text-4xl">
            Get in <span className="font-semibold underline decoration">Touch</span> with Us
          </h1>
          <p className="mt-4 text-lg ">
            We would love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>
     <section className="w-full max-w-4xl mx-auto border-2 p-8 rounded-lg shadow-lg dark:bg-black-800 dark:border-gray-700">
  <h2 className="text-2xl font-bold text-center mb-4 ">Contact Us</h2>
  <form className="space-y-6">
    <div className="flex flex-col">
      <label htmlFor="name" >Name</label>
      <input type="text" id="name" className="mt-2 p-3  border rounded-lg focus:ring-opacity-50 dark:text-white" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" >Email</label>
      <input type="email" id="email" className="mt-2 p-3 border rounded-lg  focus:ring-opacity-50 dark:text-white" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="message" >Message</label>
      <textarea id="message" rows="5" className="mt-2 p-3   border rounded-lg  focus:ring-opacity-50 dark:text-white"></textarea>
    </div>
    <Button variant="outline" className="w-full py-3  ">Send Message</Button>
  </form>
</section>
      <section className="w-full max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-4">Our Location</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 p-6 rounded-lg border-2   shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Head Office</h3>
            <p className="text-gray-700">1234 Street Name, City, State, 12345</p>
            <p className="text-gray-700">Phone: (123) 456-7890</p>
            <p className="text-gray-700">Email: info@company.com</p>
          </div>
          <div className="flex-1 p-6 rounded-lg border-2 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Branch Office</h3>
            <p className="text-gray-700">5678 Another St, City, State, 67890</p>
            <p className="text-gray-700">Phone: (987) 654-3210</p>
            <p className="text-gray-700">Email: support@company.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
