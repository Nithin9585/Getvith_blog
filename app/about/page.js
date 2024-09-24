import { Button } from '@/components/ui/button';
import Head from 'next/head';

export default function About() {
  return (
    <div className="min-h-screen">
  <Head>
    <title>About Us</title>
  </Head>
  <header className="py-8 flex justify-between items-center">
    <div className="logo">
      <img src="your-logo.png" alt="Your Company Logo" />
    </div>
    <nav className="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main className="container mx-auto px-4 py-8">
    <section className="rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      <p className="mb-4">
        We are dedicated to providing exceptional services and solutions to our clients, exceeding their expectations in every aspect. Our mission is driven by a commitment to quality, innovation, and customer satisfaction.
      </p>
      <div className="flex justify-center">
        <img src="mission-image.jpg" alt="Our Mission" />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <img src="team-member1.jpg" alt="Team Member 1" className="rounded-full w-32 h-32" />
          <h3 className="text-lg font-semibold mt-2">John Doe</h3>
          <p>Team Leader</p>
        </div>
        <div className="flex flex-col  items-center">
          <img src="team-member2.jpg" alt="Team Member 2" className="rounded-full w-32 h-32" />
          <h3 className="text-lg font-semibold mt-2">Jane Smith</h3>
          <p>Project Manager</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border  rounded-lg">
          <p>"Working with [Your Company] was a fantastic experience. Their team was professional, knowledgeable, and always went above and beyond to meet our needs."</p>
          <p >
            - Sarah Johnson
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <p>"The quality of their services is exceptional. They consistently deliver on time and within budget, and their attention to detail is impeccable."</p>
          <p >
            - David Lee
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button >
          Contact Us
        </Button>
      </div>
    </section>
  </main>
  <footer className="py-4 flex justify-between items-center">
    <div className="contact-info">
      <p>Your Company</p>
      <p>Address: 123 Main Street, City, State, ZIP</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@yourcompany.com</p>
    </div>
    <div className="social-media">
      <a href="https://www.facebook.com/yourcompany" target="_blank">
        <img src="facebook-logo.png" alt="Facebook" />
      </a>
      <a href="https://www.twitter.com/yourcompany" target="_blank">
        <img src="twitter-logo.png" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/yourcompany" target="_blank">
        <img src="instagram-logo.png" alt="Instagram" />
      </a>
    </div>
  </footer>
</div>
  );
}