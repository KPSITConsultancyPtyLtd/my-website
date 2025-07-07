import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - KPS IT CONSULTANCY</title>
      </Head>
      <main className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-700">Contact Us</h1>
        <p className="mt-4">We'd love to hear from you. Fill out the form below or reach us directly.</p>
        <ul className="mt-4 text-gray-700">
          <li>📞 <strong>Phone:</strong> <a href="tel:0478793420" className="text-blue-600">0478 793 420</a></li>
          <li>✉️ <strong>Email:</strong> <a href="mailto:hemanthkps@outlook.com" className="text-blue-600">hemanthkps@outlook.com</a></li>
        </ul>
        <form action="https://formspree.io/f/mexample" method="POST" className="mt-6 grid gap-4">
          <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded"/>
          <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded"/>
          <textarea name="message" placeholder="Your Message" rows="5" required className="border p-2 rounded"></textarea>
          <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Send</button>
        </form>
      </main>
    </>
  )
}
