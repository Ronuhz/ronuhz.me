import { PolicySection } from '@/components/policy/policy-section'
import { PolicyParagraph } from '@/components/policy/policy-paragraph'
import { PolicyLink } from '@/components/policy/policy-link'

export const metadata = { title: 'Orar FMI — Politică de confidențialitate' }

export default function OrarFMIPrivacyPolicy() {
  return (
    <main lang="ro" className="max-w-3xl mx-auto py-8 px-4 reveal-item is-visible">
      <h1 className="text-2xl font-bold uppercase mb-2">Politică de confidențialitate</h1>
      <p className="opacity-70 mb-4">Ultima actualizare: 30 septembrie 2026</p>
      <p className="mb-8"><PolicyLink href="/privacy-policies/ubb-orar/en">English</PolicyLink></p>
      <section className="space-y-6">
        <PolicySection title="1. Introducere">
          <PolicyParagraph>
            Prezenta Politică de confidențialitate descrie modul în care Zoltáni Hunor („Dezvoltatorul”), dezvoltatorul Orar FMI („Aplicația”), prelucrează informații atunci când utilizați Aplicația. Dezvoltatorul are calitatea de operator al datelor cu caracter personal prelucrate în scopurile Aplicației. Contact: contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="2. Profilul academic și stocarea locală">
          <PolicyParagraph>
            Aplicația stochează pe dispozitivul dumneavoastră anul universitar, programul de studiu, anul de studiu, grupa și subgrupa selectate, orarul și preferințele, pentru a vă furniza orarul și funcționalitățile aferente. Utilizarea Aplicației nu necesită un cont, numele dumneavoastră, o adresă de e-mail sau un număr matricol.
          </PolicyParagraph>
          <PolicyParagraph>
            Pentru a prelua orarul, Aplicația solicită fișiere publice găzduite pe GitHub Pages. Adresa solicitată include anul universitar, programul de studiu, anul de studiu și grupa necesare pentru selectarea orarului corespunzător. Solicitările de rețea transmit furnizorului de găzduire și informații tehnice, precum adresa dumneavoastră IP.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="3. Analiza utilizării">
          <PolicyParagraph>
            Aplicația utilizează PostHog pentru a înțelege utilizarea funcționalităților și a îmbunătăți serviciul. Informațiile transmise către PostHog includ un identificator persistent al instalării, generat aleatoriu; vizualizările ecranelor și interacțiunile cu funcționalitățile; programul de studiu, anul de studiu și grupa selectate; existența unei subgrupe selectate; denumirile disciplinelor și tipurile activităților atunci când sunt deschise detaliile acestora; modificările preferințelor; precum și informații tehnice, cum ar fi modelul dispozitivului, sistemul de operare, versiunea Aplicației și data și ora evenimentelor.
          </PolicyParagraph>
          <PolicyParagraph>
            Aceste evenimente pot fi asociate aceleiași instalări. Datele sunt pseudonimizate, fără a fi garantat caracterul lor anonim. Aplicația nu transmite în mod deliberat către PostHog numele, adresa de e-mail sau numărul dumneavoastră matricol. Înregistrarea sesiunilor și captarea automată a interacțiunilor sunt dezactivate; Aplicația transmite evenimente de analiză definite explicit. Solicitările sunt transmise către punctul european de colectare al PostHog. În funcție de configurarea proiectului pe server, adresele IP pot fi prelucrate și pentru determinarea unei locații aproximative.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="4. Scopuri și temeiuri juridice">
          <PolicyParagraph>
            Informațiile sunt prelucrate pentru furnizarea orarului și a funcționalităților solicitate, întreținerea și securizarea serviciului, înțelegerea utilizării și îmbunătățirea Aplicației. Temeiurile juridice aplicabile depind de operațiunea de prelucrare: furnizarea serviciului solicitat, interesele legitime privind menținerea unui serviciu sigur și fiabil, în măsura permisă de lege, și consimțământul, atunci când acesta este impus de lege. Prezenta Politică nu constituie, prin ea însăși, obținerea consimțământului pentru analiza utilizării.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="5. Servicii terțe și divulgarea informațiilor">
          <PolicyParagraph>
            PostHog prelucrează informațiile de analiză. GitHub Pages găzduiește fișierele publice ale orarelor. Apple prelucrează informații privind distribuția prin App Store, iar Apple Maps poate prelucra informații atunci când alegeți să deschideți în Hărți locația unei activități. Aceste servicii pot prelucra informații tehnice în conformitate cu propriile politici:
          </PolicyParagraph>
          <ul className="list-disc list-inside opacity-80 space-y-2 ml-4">
            <li><PolicyLink href="https://posthog.com/privacy">Politica de confidențialitate PostHog</PolicyLink></li>
            <li><PolicyLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">Declarația de confidențialitate GitHub</PolicyLink></li>
            <li><PolicyLink href="https://www.apple.com/legal/privacy/">Politica de confidențialitate Apple</PolicyLink></li>
          </ul>
          <PolicyParagraph>
            Informațiile pot fi divulgate și atunci când legea impune acest lucru sau când divulgarea este necesară în mod rezonabil pentru protejarea drepturilor și a securității serviciului. Aplicația nu utilizează informațiile colectate pentru publicitate personalizată, măsurarea publicității prin corelarea datelor provenite de la companii diferite sau vânzarea către brokeri de date. Site-urile și aplicațiile externe funcționează potrivit propriilor politici. Serviciile administrate independent de acești terți se află în afara controlului Dezvoltatorului; acest fapt nu înlătură obligațiile impuse Dezvoltatorului de legislația aplicabilă.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="6. Păstrarea și ștergerea datelor">
          <PolicyParagraph>
            Informațiile locale sunt păstrate atât timp cât sunt necesare pentru profilul și orarul salvate. Ștergerea Aplicației elimină datele locale ale acesteia, însă copiile de siguranță ale sistemului de operare pot păstra copii în conformitate cu setările dumneavoastră de backup. Dezinstalarea nu șterge informațiile de analiză deja transmise către PostHog sau înregistrările furnizorului de găzduire.
          </PolicyParagraph>
          <PolicyParagraph>
            Puteți solicita ștergerea datelor contactând contact@ronuhz.me. Întrucât analiza utilizează un identificator al instalării, nu numele sau adresa dumneavoastră de e-mail, pot fi necesare informații suplimentare pentru identificarea înregistrărilor relevante. Dezvoltatorul nu va colecta informații de identificare nenecesare exclusiv în scopul identificării înregistrărilor de analiză.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="7. Drepturile dumneavoastră și securitatea">
          <PolicyParagraph>
            În condițiile legislației aplicabile, puteți solicita accesul la datele dumneavoastră cu caracter personal, rectificarea, ștergerea, restricționarea prelucrării sau portabilitatea acestora, vă puteți opune prelucrării întemeiate pe interese legitime și vă puteți retrage consimțământul, fără a afecta legalitatea prelucrării efectuate anterior retragerii. De asemenea, puteți depune o plângere la autoritatea competentă de supraveghere a protecției datelor. Pentru exercitarea acestor drepturi, contactați contact@ronuhz.me.
          </PolicyParagraph>
          <PolicyParagraph>
            Sunt utilizate măsuri rezonabile de protecție a informațiilor, însă nicio metodă de transmitere sau stocare nu este complet sigură. În cazul transferurilor internaționale de date, trebuie utilizate garanțiile de protecție a datelor impuse de legislația aplicabilă. Prezenta Politică nu limitează drepturile conferite de lege în materia confidențialității și protecției datelor.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="8. Serviciu independent, excluderea garanțiilor și limitarea răspunderii">
          <PolicyParagraph>
            Orar FMI este o aplicație independentă și nu reprezintă un serviciu oficial al Universității Babeș-Bolyai, nu este aprobată de aceasta și nu este afiliată acesteia. Orarele, anunțurile, informațiile despre săli și conținutul aferent pot fi incomplete, neactualizate sau indisponibile. Verificați informațiile importante prin intermediul surselor oficiale ale universității.
          </PolicyParagraph>
          <PolicyParagraph>
            În limita maximă permisă de legislația aplicabilă, Aplicația și conținutul acesteia sunt furnizate „ca atare” și „în funcție de disponibilitate”, fără garanții privind exactitatea, disponibilitatea, adecvarea pentru un anumit scop sau funcționarea neîntreruptă. Dezvoltatorul nu își asumă răspunderea pentru absențe de la activități didactice, erori ale orarului, oportunități pierdute, pierderi de date, întreruperi ale serviciului sau prejudicii indirecte ori consecvente rezultate din utilizarea Aplicației sau din încrederea acordată conținutului acesteia. Nicio prevedere a prezentei clauze nu exclude și nu limitează răspunderea care nu poate fi exclusă sau limitată în mod legal și nici drepturile imperative în materia protecției consumatorilor sau a protecției datelor.
          </PolicyParagraph>
        </PolicySection>
        <PolicySection title="9. Modificări și contact">
          <PolicyParagraph>
            Prezenta Politică poate fi actualizată în funcție de modificările Aplicației sau ale practicilor de prelucrare. Data actualizării va fi afișată pe această pagină, iar modificările semnificative vor fi comunicate atunci când legea impune acest lucru. Întrebările și solicitările privind confidențialitatea pot fi transmise la contact@ronuhz.me.
          </PolicyParagraph>
        </PolicySection>
      </section>
    </main>
  )
}
