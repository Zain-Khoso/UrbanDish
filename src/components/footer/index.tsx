// Lib Imports.
import Link from 'next/link';

// Icons.
import { MdLocationOn, MdPhone, MdMail } from 'react-icons/md';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Components.
import Container from '../Container';
import SectionHeading from '../SectionHeading';
import Separator from '../ui/separator';
import { Large, P, Small } from '../ui/typography';
import { NewsLetterForm } from './NewsLetterForm';

// Component.
export default function Footer() {
  return (
    <section className="w-full bg-white">
      <Container>
        <footer className="flex flex-col items-start gap-8 py-8">
          <section className="flex w-full flex-row items-start justify-between">
            <div className="flex flex-col gap-2">
              <SectionHeading title="Brand" />

              <Link href="/menu" className="text-neutral-600 underline-offset-2 hover:underline">
                Menu
              </Link>

              <Link href="/about" className="text-neutral-600 underline-offset-2 hover:underline">
                About Us
              </Link>

              <Link href="/faqs" className="text-neutral-600 underline-offset-2 hover:underline">
                FAQs
              </Link>

              <Link
                href="/privacy-policy"
                className="text-neutral-600 underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-neutral-600 underline-offset-2 hover:underline"
              >
                Terms and Conditions
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <SectionHeading title="Contacts" />

              <div className="flex flex-row items-center gap-2 text-neutral-600">
                <MdLocationOn />

                <span>123 Street, Sukkur, Pakistan</span>
              </div>

              <div className="flex flex-row items-center gap-2 text-neutral-600">
                <MdPhone />

                <span>+92 321 0123456</span>
              </div>

              <div className="flex flex-row items-center gap-2 text-neutral-600">
                <MdMail />

                <span>contact@urbandish.com</span>
              </div>

              <div className="mt-4 flex flex-row items-center gap-6 text-neutral-600 opacity-75">
                <Link href="https://www.facebook.com/urbandish">
                  <FaFacebook fill="#1877F2" size={24} />
                </Link>

                <Link href="https://www.youtube.com/urbandish">
                  <FaYoutube fill="#FF0000" size={24} />
                </Link>

                <Link href="https://twitter.com/urbandish">
                  <FaTwitter fill="#1DA1F2" size={24} />
                </Link>

                <Link href="https://www.linkedin.com/in/urbandish">
                  <FaLinkedin fill="#0077B5" size={24} />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <SectionHeading title="Opening Hours" />

              <div>
                <Large className="text-neutral-600">Monday - Saturday</Large>
                <Small className="text-neutral-600">7 am - 11 pm</Small>
              </div>

              <div>
                <Large className="text-neutral-600">Sunday</Large>
                <Small className="text-neutral-600">12 am - 9 pm</Small>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <SectionHeading title="News Letter" />

              <P className="!m-0 text-neutral-600">
                You want every update from our part? <br /> Signup for our news letter.
              </P>

              <NewsLetterForm />
            </div>
          </section>

          <Separator />

          <section className="flex w-full flex-row items-center justify-between">
            <P className="text-neutral-600">
              &copy; Urban Dish, All Rights Reserved. Created By{' '}
              <Link
                href="https://github.com/Zain-Khoso"
                className="font-semibold underline-offset-2 hover:underline"
              >
                Zain Khoso
              </Link>
            </P>

            <div className="flex flex-row gap-4">
              <Link
                href="https://github.com/Zain-Khoso"
                className="text-nowrap font-semibold text-neutral-600 underline-offset-2 hover:underline"
              >
                Home
              </Link>

              <Separator orientation="vertical" />

              <Link
                href="https://github.com/Zain-Khoso"
                className="text-nowrap font-semibold text-neutral-600 underline-offset-2 hover:underline"
              >
                About Us
              </Link>

              <Separator orientation="vertical" />

              <Link
                href="https://github.com/Zain-Khoso"
                className="text-nowrap font-semibold text-neutral-600 underline-offset-2 hover:underline"
              >
                Blog
              </Link>

              <Separator orientation="vertical" />

              <Link
                href="https://github.com/Zain-Khoso"
                className="text-nowrap font-semibold text-neutral-600 underline-offset-2 hover:underline"
              >
                Contact
              </Link>
            </div>
          </section>
        </footer>
      </Container>
    </section>
  );
}
