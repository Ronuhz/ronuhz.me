import { PolicySection } from '@/components/policy/policy-section'
import { PolicyParagraph } from '@/components/policy/policy-paragraph'
import { PolicyLink } from '@/components/policy/policy-link'

export const metadata = { title: 'Orar FMI — Privacy Policy' }

export default function OrarFMIPrivacyPolicy() {
  return (
    <main lang="en" className="max-w-3xl mx-auto py-8 px-4 reveal-item is-visible">
      <h1 className="text-2xl font-bold uppercase mb-2">Privacy Policy</h1>
      <p className="opacity-70 mb-4">Last Updated: October 3, 2026</p>
      <p className="mb-8"><PolicyLink href="/privacy-policies/ubb-orar/ro">Română</PolicyLink></p>
      <section className="space-y-6">
        <PolicySection title="1. Introduction">
          <PolicyParagraph>
            This Privacy Policy explains how Zoltáni Hunor (the “Developer”), the developer of Orar FMI (the “Application”), handles information when you use the Application. Orar FMI does not collect, store, or transmit personal data or analytics to the Developer. Contact: contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="2. Local Storage">
          <PolicyParagraph>
            The Application stores your selected academic year, study program, study year, group, subgroup, timetable, and preferences locally on your device only, so it can provide your schedule and related features. This information is not sent to the Developer. An account, name, email address, or student identification number is not required to use the Application.
          </PolicyParagraph>
          <PolicyParagraph>
            Deleting the Application removes its locally stored application data, although operating-system backups may retain copies according to your device backup settings.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="3. No Analytics or Tracking">
          <PolicyParagraph>
            The Application does not use any analytics, tracking, advertising, telemetry, or profiling service. No usage events, device identifiers, screen views, feature interactions, course information, or other analytics data are collected by or sent to the Developer.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="4. Timetable Data and Third-Party Services">
          <PolicyParagraph>
            To retrieve timetable information, the Application requests public schedule files hosted on GitHub Pages. The requested address contains only the information needed to select the appropriate public timetable, such as the academic year, program, study year, and group. As with ordinary internet requests, the hosting provider may receive technical information such as your IP address under its own privacy policy.
          </PolicyParagraph>
          <PolicyParagraph>
            Apple processes information related to App Store distribution, and Apple Maps may process information when you choose to open a class location in Maps. These independently operated services are governed by their own privacy policies:
          </PolicyParagraph>
          <ul className="list-disc list-inside opacity-80 space-y-2 ml-4">
            <li><PolicyLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub Privacy Statement</PolicyLink></li>
            <li><PolicyLink href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</PolicyLink></li>
          </ul>
        </PolicySection>
        <PolicySection title="5. Data Sharing and Sale">
          <PolicyParagraph>
            Because the Developer does not collect personal data or analytics from the Application, the Developer does not sell, rent, share, or disclose such data to advertisers, data brokers, or other third parties.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="6. Your Privacy">
          <PolicyParagraph>
            The Application is designed to keep your app-specific preferences and timetable information on your device. If you have questions about this Privacy Policy or the Application’s privacy practices, you can contact contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="7. Independent Service, Disclaimer, and Limitation of Liability">
          <PolicyParagraph>
            Orar FMI is an independent application and is not an official service of, endorsed by, or affiliated with Babeș-Bolyai University. Timetables, announcements, room information, and related content may be incomplete, outdated, or unavailable. Verify important information with official university sources.
          </PolicyParagraph>
          <PolicyParagraph>
            To the maximum extent permitted by applicable law, the Application and its content are provided “as is” and “as available,” without warranties of accuracy, availability, fitness for a particular purpose, or uninterrupted operation. The Developer accepts no liability for missed classes, timetable errors, lost opportunities, loss of data, service interruptions, or indirect or consequential losses arising from use of the Application or reliance on its content. Nothing in this clause excludes or limits liability that cannot lawfully be excluded or limited, or any mandatory consumer or data protection rights.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="8. Changes and Contact">
          <PolicyParagraph>
            This Policy may be updated if the Application or its privacy practices change. The updated date will appear on this page. Questions about privacy can be sent to contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
      </section>
    </main>
  )
}
