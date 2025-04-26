import { Metadata } from "next";
import React from 'react';
import { PolicySection } from '@/components/policy/policy-section';
import { PolicyParagraph } from '@/components/policy/policy-paragraph';

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Zoltáni Hunor's applications and services.",
};

export default function Terms() {
  const lastUpdated = 'April 26, 2025';
  const developerName = 'Zoltáni Hunor';

  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gruvbox-fg mb-6">Terms of Use</h1>
      <p className="text-gruvbox-fg/60 mb-8">Last Updated: {lastUpdated}</p>

      <section className="space-y-6">
        <PolicySection title="1. Acceptance of Terms">
          <PolicyParagraph>
            By accessing, downloading, installing, or using any applications (collectively, the &quot;Apps&quot;) provided by {developerName}, you explicitly agree to comply with and be bound by these Terms of Use and all applicable laws and regulations. You acknowledge that you are solely responsible for adhering to any local laws applicable to your use of the Apps. If you do not agree fully and unconditionally to these terms, you must immediately discontinue your use of the Apps. All content, software, and materials provided through the Apps are protected by applicable copyright and trademark laws.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="2. Use License">
          <PolicyParagraph>
            You are granted a limited, revocable, non-exclusive, non-transferable license to use the Apps solely for personal, non-commercial purposes. Under this license, you must not:
          </PolicyParagraph>
          <ul className="list-disc list-inside text-gruvbox-fg/80 space-y-2 ml-4">
            <li>Modify, duplicate, or distribute the content or software provided by the Apps;</li>
            <li>Use the Apps for any commercial purpose or any public display;</li>
            <li>Attempt to decompile, reverse engineer, or extract source code from the Apps;</li>
            <li>Remove, alter, or obscure any copyright or proprietary notices;</li>
            <li>Transfer, sublicense, lease, lend, rent, sell, or mirror the Apps or any related materials.</li>
          </ul>
          <PolicyParagraph>
            Violation of any restrictions terminates your license immediately and permanently. {developerName} reserves the exclusive right to revoke your license at any time, without prior notice or liability. Upon termination, you must immediately delete all copies of downloaded materials in any form.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="3. Disclaimer of Liability">
          <PolicyParagraph>
            {developerName} is not responsible for any misuse, infringement, or violations related to materials or content created, uploaded, or used by you within or through the Apps. You expressly represent and warrant that you hold all necessary rights, licenses, permissions, and consents for any material or content you utilize in connection with the Apps.
          </PolicyParagraph>
          <PolicyParagraph>
            The Apps, materials, and services provided by {developerName} are offered strictly &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, non-infringement, or error-free operation.
          </PolicyParagraph>
          <PolicyParagraph>
            {developerName} expressly disclaims any responsibility or liability related to the accuracy, completeness, reliability, or availability of the Apps, their content, or any linked third-party services or sites.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="4. Limitation of Liability">
          <PolicyParagraph>
            Under no circumstances, to the fullest extent permitted by applicable law, will {developerName} or any associated parties (including affiliates, licensors, suppliers, or representatives) be liable for any direct, indirect, incidental, consequential, special, punitive, exemplary damages, or any other losses (including, without limitation, loss of data, revenue, profits, or business opportunities) arising from or in connection with your use, inability to use, or reliance upon the Apps or their content, even if advised of the possibility of such damages.
          </PolicyParagraph>
          <PolicyParagraph>
            You explicitly acknowledge and agree that your use of the Apps is at your sole and exclusive risk and discretion.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="5. Accuracy and Modification of Materials">
          <PolicyParagraph>
            Materials provided through the Apps may include inaccuracies, errors, or omissions, including typographical, photographic, technical, or factual inaccuracies. {developerName} does not guarantee that any materials or content provided through the Apps are accurate, complete, or current. {developerName} may, at its sole discretion and without prior notice, modify, update, or remove content at any time. However, {developerName} is under no obligation to update or correct any material or content.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="6. Indemnification">
          <PolicyParagraph>
            You agree to indemnify, defend, and hold harmless {developerName}, its affiliates, officers, directors, employees, contractors, agents, licensors, and suppliers from any claims, damages, liabilities, losses, expenses, or fees (including reasonable attorney fees) arising out of or relating to your use or misuse of the Apps, violation of these Terms, or infringement of any intellectual property or other rights by you or any third-party using your account.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="7. Governing Law">
          <PolicyParagraph>
            These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction where {developerName} is based, without regard to its conflict of law provisions.
          </PolicyParagraph>
          <PolicyParagraph>
            By using the Apps, you explicitly consent to jurisdiction and venue in the applicable jurisdiction for any dispute arising from or relating to these Terms or your use of the Apps.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="8. Amendments">
          <PolicyParagraph>
            {developerName} reserves the right to amend, modify, or update these Terms of Use at any time, without prior notice. Continued use of the Apps following any such amendments constitutes your acceptance of the revised Terms.
          </PolicyParagraph>
        </PolicySection>
      </section>
    </main>
  );
}
