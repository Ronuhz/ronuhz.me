import React from 'react';
import { PolicySection } from '@/components/policy/policy-section';
import { PolicyParagraph } from '@/components/policy/policy-paragraph';
import { PolicyLink } from '@/components/policy/policy-link';

export default function SpookyPrivacyPolicy() {
  const lastUpdated = 'April 05, 2025';
  const appName = 'Cartoon Yourself: Toon';
  const developerName = 'Zoltáni Hunor';

  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gruvbox-fg mb-6">Privacy Policy</h1>
      <p className="text-gruvbox-fg/60 mb-8">Last Updated: {lastUpdated}</p>

      <section className="space-y-6">
        <PolicySection title="1. Introduction and Consent">
          <PolicyParagraph>
            This Privacy Policy (&quot;Policy&quot;) outlines the manner in which your personal information is collected, utilized, stored, and disclosed by {developerName} (&quot;the Developer&quot;), the developer of {appName} (&quot;the Application&quot;). By accessing or using the Application, you acknowledge that you have read, understood, and agreed to be bound by the terms and conditions set forth in this Policy.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="2. Data Collection and Storage">
          <PolicyParagraph>
            All data generated by the Application is stored locally on the user&apos;s device.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="3. Data Deletion">
          <PolicyParagraph>
            If the user wishes to delete all data associated with the Application, they may do so by uninstalling the Application from all devices on which it has been installed. This action will result in the removal of all data stored by the Application.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="4. App Store Distribution and In-App Purchases">
          <PolicyParagraph>
            When the Application is downloaded from the Apple App Store, or when in-app purchases are made, Apple Inc. (&quot;Apple&quot;) processes personal information related to such transactions and associates this information with your Apple ID. The Operator does not have access to any information pertaining to your financial accounts, including bank account details, credit or debit card information, or other personal financial data.
          </PolicyParagraph>
          <PolicyParagraph>
            To facilitate in-app purchases, the Application utilizes the services of RevenueCat, which may collect and process data including, but not limited to, the last access time of the Application, the category of product purchased, and the frequency of application usage. This information is associated with randomly generated anonymous identifiers and is not traceable to any specific individual. Users are encouraged to consult{' '}
            <PolicyLink href="https://www.apple.com/legal/privacy/">Apple&apos;s Privacy Policy</PolicyLink>{' '}and{' '}
            <PolicyLink href="https://www.revenuecat.com/privacy/">RevenueCat&apos;s Privacy Policy</PolicyLink>{' '}for additional details.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="5. Third-Party Services">
          <PolicyParagraph>
            The Application may employ third-party services to provide functionality, which may necessitate access to certain personal information. The list of such third-party services is subject to change; users are advised to review this Policy regularly. As of the most recent update, the third-party services include:
          </PolicyParagraph>
          <ul className="list-disc list-inside text-gruvbox-fg/80 space-y-2 ml-4">
            <li>
              <PolicyLink href="https://www.revenuecat.com/privacy/">RevenueCat</PolicyLink>
            </li>
            <li>
              <PolicyLink href="https://www.aiproxy.pro/privacy.html">AIProxy</PolicyLink>
            </li>
            <li>
              <PolicyLink href="https://ai.google.dev/gemini-api/terms">GeminiAPI</PolicyLink>
            </li>
          </ul>
          <PolicyParagraph>
            The Operator is not responsible for the data handling practices of these third-party services. The Application may also contain links to external websites or applications operated by third parties. The Operator does not exercise control over such external sites or applications and is not responsible for their content or privacy practices. Users are advised to review the privacy policies of any third-party websites or applications they interact with. Access to and use of such third-party services is at the user&apos;s own risk.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="6. Use of AIProxy and GeminiAPI Services">
          <PolicyParagraph>
            The Application allows users to transform their photos using AI-powered cartoon filters. When a user selects an image to transform, the following process occurs:
          </PolicyParagraph>
          <ul className="list-disc list-inside text-gruvbox-fg/80 space-y-2 ml-4">
            <li>The selected image is first transmitted to AIProxy, a service that acts as an intermediary between the Application and GeminiAPI. AIProxy masks the API key to protect it during the communication process.</li>
            <li>The image along with style information is then forwarded to GeminiAPI, where using AI models the image is transformed into the selected cartoon style.</li>
            <li>The transformed image is sent back to AIProxy, which in turn relays the results to the user within the Application.</li>
          </ul>
          <PolicyParagraph>
            It is important to note that while the image is processed by GeminiAPI, the Operator does not have direct access to the user images or transformed results. The image processing is conducted solely for the purpose of providing the user with the requested service, and any data transmitted is handled according to GeminiAPI&apos;s and AIProxy&apos;s privacy policies. Users are encouraged to review the{' '}
            <PolicyLink href="https://ai.google.dev/gemini-api/terms">GeminiAPI Terms</PolicyLink>{' '}and the{' '}
            <PolicyLink href="https://www.aiproxy.pro/privacy.html">AIProxy Privacy Policy</PolicyLink>.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="7. Amendments to the Privacy Policy">
          <PolicyParagraph>
            The terms of this Privacy Policy are subject to modification at the sole discretion of the Operator. Users are encouraged to review this Policy periodically to remain informed of any changes. Continued use of the Application following the posting of any amendments constitutes acceptance of the revised terms.
          </PolicyParagraph>
        </PolicySection>
      </section>
    </main>
  );
}
