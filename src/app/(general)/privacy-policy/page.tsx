// Components.
import Container from '@/components/Container';
import { H2, H4, List, P } from '@/components/ui/typography';

// Types.
import { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Urban Dish collects, uses, and protects your personal information.',
  keywords: [
    'Urban Dish',
    'privacy policy',
    'data privacy',
    'personal information',
    'data protection',
    'customer privacy',
  ],
};

// Privacy Policy Page.
export default async function Page() {
  return (
    <>
      <Container>
        <main className="w-full space-y-8">
          <H2 className="!mt-12">Urban Dish Privacy Policy</H2>

          <P className="!mt-2">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and
            protect your personal information when you use our website and services.
          </P>

          <section className="space-y-8">
            <div>
              <H4>We may collect the following personal information:</H4>

              <List>
                <li>Name</li>
                <li>Phone number</li>
                <li>Payment information</li>
                <li>Email address</li>
                <li>Billing and shipping address</li>
                <li>Order history</li>
                <li>Device information</li>
                <li>Usage data</li>
              </List>
            </div>

            <div>
              <H4>We use your personal information to:</H4>

              <List>
                <li>Process your orders</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications</li>
                <li>Improve our services</li>
                <li>Protect against fraud and security threats</li>
              </List>
            </div>

            <div>
              <H4>We may share your personal information with:</H4>

              <List>
                <li>Third-party service providers who help us operate our business</li>
                <li>Third-party service providers who help us operate our business</li>
              </List>
            </div>

            <div>
              <H4>Protecting Your Information</H4>

              <List>
                <li>
                  We take reasonable measures to protect your personal information from unauthorized
                  access, use, and disclosure.
                </li>
              </List>
            </div>
            <div>
              <H4>You have the right to:</H4>

              <List>
                <li>Access your personal information</li>
                <li>Correct any inaccuracies in your personal information</li>
                <li>Request the deletion of your personal information</li>
                <li>Object to the processing of your personal information</li>
                <li>Restrict the processing of your personal information</li>
              </List>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
