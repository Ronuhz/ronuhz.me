import { PolicySection } from '@/components/policy/policy-section'
import { PolicyParagraph } from '@/components/policy/policy-paragraph'
import { PolicyLink } from '@/components/policy/policy-link'

export const metadata = { title: 'Orar FMI — Politică de confidențialitate' }

export default function OrarFMIPrivacyPolicy() {
  return (
    <main lang="ro" className="max-w-3xl mx-auto py-8 px-4 reveal-item is-visible">
      <h1 className="text-2xl font-bold uppercase mb-2">Politică de confidențialitate</h1>
      <p className="opacity-70 mb-4">Ultima actualizare: 3 octombrie 2026</p>
      <p className="mb-8"><PolicyLink href="/privacy-policies/ubb-orar/en">English</PolicyLink></p>
      <section className="space-y-6">
        <PolicySection title="1. Introducere">
          <PolicyParagraph>
            Prezenta Politică de confidențialitate descrie modul în care Zoltáni Hunor („Dezvoltatorul”), dezvoltatorul Orar FMI („Aplicația”), gestionează informațiile atunci când utilizați Aplicația. Orar FMI nu colectează, nu stochează și nu transmite către Dezvoltator date cu caracter personal sau date de analiză. Contact: contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="2. Stocarea locală">
          <PolicyParagraph>
            Aplicația stochează exclusiv local, pe dispozitivul dumneavoastră, anul universitar, programul de studiu, anul de studiu, grupa și subgrupa selectate, orarul și preferințele, pentru a vă furniza orarul și funcționalitățile aferente. Aceste informații nu sunt transmise Dezvoltatorului. Utilizarea Aplicației nu necesită un cont, numele dumneavoastră, o adresă de e-mail sau un număr matricol.
          </PolicyParagraph>
          <PolicyParagraph>
            Ștergerea Aplicației elimină datele locale ale acesteia, însă copiile de siguranță ale sistemului de operare pot păstra copii în conformitate cu setările de backup ale dispozitivului dumneavoastră.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="3. Fără analiză sau urmărire">
          <PolicyParagraph>
            Aplicația nu utilizează PostHog și niciun alt serviciu de analiză, urmărire, publicitate, telemetrie sau profilare. Nu sunt colectate de către Dezvoltator și nu sunt transmise către acesta evenimente de utilizare, identificatori ai dispozitivului, vizualizări de ecrane, interacțiuni cu funcționalitățile, informații despre discipline sau alte date de analiză.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="4. Datele orarului și servicii terțe">
          <PolicyParagraph>
            Pentru a prelua informațiile despre orar, Aplicația solicită fișiere publice găzduite pe GitHub Pages. Adresa solicitată conține doar informațiile necesare pentru selectarea orarului public corespunzător, precum anul universitar, programul de studiu, anul de studiu și grupa. Ca în cazul oricărei solicitări obișnuite pe internet, furnizorul de găzduire poate primi informații tehnice, precum adresa IP, în conformitate cu propria politică de confidențialitate.
          </PolicyParagraph>
          <PolicyParagraph>
            Apple prelucrează informații legate de distribuirea prin App Store, iar Apple Maps poate prelucra informații atunci când alegeți să deschideți în Hărți locația unei activități. Aceste servicii independente sunt guvernate de propriile politici de confidențialitate:
          </PolicyParagraph>
          <ul className="list-disc list-inside opacity-80 space-y-2 ml-4">
            <li><PolicyLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">Declarația de confidențialitate GitHub</PolicyLink></li>
            <li><PolicyLink href="https://www.apple.com/legal/privacy/">Politica de confidențialitate Apple</PolicyLink></li>
          </ul>
        </PolicySection>
        <PolicySection title="5. Partajarea și vânzarea datelor">
          <PolicyParagraph>
            Deoarece Dezvoltatorul nu colectează date cu caracter personal sau date de analiză din Aplicație, acesta nu vinde, nu închiriază, nu partajează și nu divulgă astfel de date către agenți de publicitate, brokeri de date sau alți terți.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="6. Confidențialitatea dumneavoastră">
          <PolicyParagraph>
            Aplicația este concepută astfel încât preferințele și informațiile despre orar specifice Aplicației să rămână pe dispozitivul dumneavoastră. Dacă aveți întrebări despre această Politică de confidențialitate sau despre practicile de confidențialitate ale Aplicației, puteți contacta contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="7. Serviciu independent, excluderea garanțiilor și limitarea răspunderii">
          <PolicyParagraph>
            Orar FMI este o aplicație independentă și nu reprezintă un serviciu oficial al Universității Babeș-Bolyai, nu este aprobată de aceasta și nu este afiliată acesteia. Orarele, anunțurile, informațiile despre săli și conținutul aferent pot fi incomplete, neactualizate sau indisponibile. Verificați informațiile importante prin intermediul surselor oficiale ale universității.
          </PolicyParagraph>
          <PolicyParagraph>
            În limita maximă permisă de legislația aplicabilă, Aplicația și conținutul acesteia sunt furnizate „ca atare” și „în funcție de disponibilitate”, fără garanții privind exactitatea, disponibilitatea, adecvarea pentru un anumit scop sau funcționarea neîntreruptă. Dezvoltatorul nu își asumă răspunderea pentru absențe de la activități didactice, erori ale orarului, oportunități pierdute, pierderi de date, întreruperi ale serviciului sau prejudicii indirecte ori consecvente rezultate din utilizarea Aplicației sau din încrederea acordată conținutului acesteia. Nicio prevedere a prezentei clauze nu exclude și nu limitează răspunderea care nu poate fi exclusă sau limitată în mod legal și nici drepturile imperative în materia protecției consumatorilor sau a protecției datelor.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="8. Modificări și contact">
          <PolicyParagraph>
            Prezenta Politică poate fi actualizată dacă Aplicația sau practicile sale de confidențialitate se modifică. Data actualizării va fi afișată pe această pagină. Întrebările privind confidențialitatea pot fi transmise la contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
      </section>
    </main>
  )
}
