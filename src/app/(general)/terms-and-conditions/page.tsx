// Components.
import Container from '@/components/Container';
import { H2 } from '@/components/ui/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Types.
import { Metadata } from 'next';
type DataT = {
  id: number;
  title: string;
  description: string;
}[];

// Metadata.
export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Please review our Terms and Conditions to understand the rules and regulations governing your use of our services.',
  keywords: ['Urban Dish', 'terms and conditions', 'terms of service', 'legal', 'user agreement'],
};

// Data.
const data: DataT = [
  {
    id: 1,
    title: 'Acceptance of Terms',
    description:
      'By accessing or using our website, you agree to be bound by these Terms and Conditions.',
  },
  {
    id: 2,
    title: 'Use of Our Website',
    description: 'You agree to use our website only for lawful purposes.',
  },
  {
    id: 3,
    title: 'Intellectual Property',
    description:
      'All content on our website, including text, images, and logos, is protected by copyright laws.',
  },
  {
    id: 4,
    title: 'User Content',
    description: 'You are responsible for any content you submit to our website.',
  },
  {
    id: 5,
    title: 'Disclaimer of Warranties',
    description:
      'We make no warranties, express or implied, about the accuracy or completeness of the content on our website.',
  },
  {
    id: 6,
    title: 'Limitation of Liability',
    description:
      'We shall not be liable for any direct, indirect, or consequential damages arising from the use of our website.',
  },
  {
    id: 7,
    title: 'Changes to Terms and Conditions',
    description:
      'We may modify these Terms and Conditions at any time. Please review these Terms and Conditions periodically for updates.',
  },
  {
    id: 8,
    title: 'Governing Law',
    description:
      'These Terms and Conditions shall be governed by and construed in accordance with the laws of no@one.world.',
  },
  {
    id: 9,
    title: 'Contact Us',
    description: 'zain.khoso.dev@gmail.com',
  },
];

// Terms and Conditions Page.
export default async function Page() {
  return (
    <>
      <Container>
        <main className="w-full space-y-8">
          <H2 className="!my-12">Terms and Conditions</H2>

          <Accordion type="single" collapsible className="!mb-8">
            {data.map(({ id, title, description }) => (
              <AccordionItem key={id} value={`FAQ-${id}`}>
                <AccordionTrigger className="text-lg">{title}</AccordionTrigger>
                <AccordionContent className="text-lg">{description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </main>
      </Container>
    </>
  );
}
