import Contact from "@/components/Contact";
import Head from "next/head";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <Contact />
    </>
  );
}

export default ContactPage;