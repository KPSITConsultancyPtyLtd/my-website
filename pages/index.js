import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>KPS IT CONSULTANCY PTY LTD</title>
        <meta name="description" content="Delivering Excellence and Quality - KPS IT Consultancy" />
      </Head>
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-700">KPS IT CONSULTANCY PTY LTD</h1>
        <p className="text-xl mt-4 text-gray-600">Delivering Excellence and Quality</p>
        <p className="mt-6">We partner with organisations to drive digital success. Our services include:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Technical Delivery</li>
          <li>Digital Transformation</li>
          <li>Cloud Consultancy</li>
          <li>Vendor Management</li>
        </ul>
        <p className="mt-6">Serving Government, Telco, Small Businesses, and Large Companies.</p>
        <Link href="/contact" className="inline-block mt-8 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
          Get in Touch
        </Link>
      </main>
    </>
  )
}
