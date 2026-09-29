import { PolicySection } from '@/components/policy/policy-section'
import { PolicyParagraph } from '@/components/policy/policy-paragraph'
import { PolicyLink } from '@/components/policy/policy-link'

export const metadata = { title: 'UBB Orar — Privacy Policy' }

export default function UBBOrarPrivacyPolicy() {
  return (
    <main lang="en" className="max-w-3xl mx-auto py-8 px-4 reveal-item is-visible">
      <h1 className="text-2xl font-bold uppercase mb-2">Privacy Policy</h1>
      <p className="opacity-70 mb-4">Last Updated: September 29, 2026</p>
      <p className="mb-8"><PolicyLink href="/privacy-policies/ubb-orar/ro">Română</PolicyLink></p>
      <section className="space-y-6">
        <PolicySection title="1. Introduction">
          <PolicyParagraph>
            This Privacy Policy explains how Zoltáni Hunor (the “Developer”), the developer of UBB Orar (the “Application”), processes information when you use the Application. The Developer is the controller of personal data processed for the Application. Contact: contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="2. Academic Profile and Local Storage">
          <PolicyParagraph>
            The Application stores your selected academic year, study program, study year, group, subgroup, timetable, and preferences on your device to provide your schedule and related features. An account, name, email address, or student identification number is not required to use the Application.
          </PolicyParagraph>
          <PolicyParagraph>
            To retrieve your timetable, the Application requests public schedule files hosted on GitHub Pages. The requested address contains the academic year, program, study year, and group needed to select the appropriate schedule. Network requests also expose technical information, such as your IP address, to the hosting provider.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="3. Usage Analytics">
          <PolicyParagraph>
            The Application uses PostHog to understand feature usage and improve the service. Information sent to PostHog includes a persistent, randomly generated installation identifier; screen views and feature interactions; selected program, study year, and group; whether a subgroup is selected; course names and class types when class details are opened; preference changes; and technical context such as device model, operating system, app version, and event timestamps.
          </PolicyParagraph>
          <PolicyParagraph>
            These events can be associated with the same installation. They are pseudonymous rather than guaranteed anonymous. The Application does not deliberately send your name, email address, or student identification number to PostHog. Session replay and automatic interaction capture are disabled; the Application sends explicitly defined analytics events. Requests are sent to PostHog’s European ingestion endpoint. Depending on the project’s server settings, IP addresses may also be processed to derive approximate location.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="4. Purposes and Legal Basis">
          <PolicyParagraph>
            Information is processed to deliver the timetable and requested features, maintain and secure the service, understand usage, and improve the Application. Applicable legal bases depend on the processing: providing a requested service, legitimate interests in maintaining a secure and reliable service where permitted, and consent where required by law. This Policy does not itself obtain consent for analytics.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="5. Third-Party Services and Disclosure">
          <PolicyParagraph>
            PostHog processes analytics information. GitHub Pages hosts the public timetable files. Apple processes App Store distribution information, and Apple Maps may process information when you choose to open a class location in Maps. These services may process technical information under their respective policies:
          </PolicyParagraph>
          <ul className="list-disc list-inside opacity-80 space-y-2 ml-4">
            <li><PolicyLink href="https://posthog.com/privacy">PostHog Privacy Policy</PolicyLink></li>
            <li><PolicyLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub Privacy Statement</PolicyLink></li>
            <li><PolicyLink href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</PolicyLink></li>
          </ul>
          <PolicyParagraph>
            Information may also be disclosed when legally required or reasonably necessary to protect rights and service security. The Application does not use collected information for targeted advertising, cross-company advertising measurement, or sale to data brokers. External websites and applications operate under their own policies. Their independently operated services are outside the Developer’s control; this does not remove responsibilities imposed on the Developer by applicable law.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="6. Retention and Deletion">
          <PolicyParagraph>
            Local information is retained while needed for your saved profile and timetable. Deleting the Application removes its local application data, although operating-system backups may retain copies under your backup settings. Uninstalling does not delete analytics information already sent to PostHog or hosting-provider records.
          </PolicyParagraph>
          <PolicyParagraph>
            You can request deletion by contacting contact@ronuhz.me. Because analytics uses an installation identifier rather than your name or email, additional information may be needed to locate relevant records. The Developer will not collect unnecessary identifying information solely to identify analytics records.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="7. Your Rights and Security">
          <PolicyParagraph>
            Where applicable, you may request access, correction, deletion, restriction, or portability of your personal data, object to processing based on legitimate interests, and withdraw consent without affecting prior lawful processing. You may also lodge a complaint with your competent data protection authority. Contact contact@ronuhz.me to exercise these rights.
          </PolicyParagraph>
          <PolicyParagraph>
            Reasonable safeguards are used to protect information, but no method of transmission or storage is completely secure. Where international transfers occur, applicable data protection safeguards must be used. This Policy does not limit statutory privacy rights.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="8. Independent Service, Disclaimer, and Limitation of Liability">
          <PolicyParagraph>
            UBB Orar is an independent application and is not an official service of, endorsed by, or affiliated with Babeș-Bolyai University. Timetables, announcements, room information, and related content may be incomplete, outdated, or unavailable. Verify important information with official university sources.
          </PolicyParagraph>
          <PolicyParagraph>
            To the maximum extent permitted by applicable law, the Application and its content are provided “as is” and “as available,” without warranties of accuracy, availability, fitness for a particular purpose, or uninterrupted operation. The Developer accepts no liability for missed classes, timetable errors, lost opportunities, loss of data, service interruptions, or indirect or consequential losses arising from use of the Application or reliance on its content. Nothing in this clause excludes or limits liability that cannot lawfully be excluded or limited, or any mandatory consumer or data protection rights.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="9. Changes and Contact">
          <PolicyParagraph>
            This Policy may be updated as the Application or its processing practices change. The updated date will appear on this page, and material changes will be communicated where required by law. Questions and privacy requests can be sent to contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
      </section>
    </main>
  )
}
