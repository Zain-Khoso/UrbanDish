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
  question: string;
  answer: string;
}[];

// Metadata.
export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Frequently Asked Questions about Urban Dish. Find answers to common questions about our services, menu, and more.',
  keywords: [
    'Urban Dish',
    'FAQ',
    'frequently asked questions',
    'restaurant',
    'online ordering',
    'table reservations',
    'menu',
  ],
};

// Data.
const data: DataT = [
  {
    id: 1,
    question: 'How can I place an order online?',
    answer:
      'Simply visit our website. Select your desired items, add them to your cart, and checkout.',
  },
  {
    id: 2,
    question: 'What are your delivery hours?',
    answer:
      'Our delivery hours are 7:00 AM to 11:00 PM, Monday - Saturday, and 12:00 PM to 9:00 PM Sundays.',
  },
  {
    id: 3,
    question: 'Do you deliver to my area?',
    answer: 'You can check our delivery area by entering your address on our website or app.',
  },
  {
    id: 4,
    question: 'What are your payment options?',
    answer: 'We accept credit card, debit card, and digital wallets.',
  },
  {
    id: 5,
    question: 'How can I make a reservation?',
    answer:
      'You can make a reservation online through our website or by calling our restaurant directly.',
  },
  {
    id: 6,
    question: 'What are your reservation policies?',
    answer: 'We require a deposit to secure your reservation. Please contact us for more details.',
  },
  {
    id: 7,
    question: 'What are your dietary options?',
    answer: 'We offer a variety of dietary options, including vegetarian, vegan, and gluten-free.',
  },
  {
    id: 8,
    question: 'Can you customize a dish to accommodate my dietary restrictions?',
    answer:
      'Yes, our chefs can accommodate most dietary restrictions. Please let us know your specific needs when placing your order.',
  },
  {
    id: 9,
    question: 'What are your business hours?',
    answer:
      'Our business hours are 7:00 AM to 11:00 PM, Monday - Saturday, and 12:00 PM to 9:00 PM Sundays.',
  },
  {
    id: 10,
    question: 'How can I contact you?',
    answer:
      "You can contact us by phone at +92 321 0123456, email at contact@urbandish.com, or through our website's contact form.",
  },
];

// FAQs Page.
export default async function Page() {
  return (
    <>
      <Container>
        <main className="w-full space-y-8">
          <H2 className="!my-12">Frequestly Asked Questions</H2>

          <Accordion type="single" collapsible className="!mb-8">
            {data.map(({ id, question, answer }) => (
              <AccordionItem key={id} value={`FAQ-${id}`}>
                <AccordionTrigger className="text-lg">{question}</AccordionTrigger>
                <AccordionContent className="text-lg">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </main>
      </Container>
    </>
  );
}
