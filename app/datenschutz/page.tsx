import Link from "next/link";
import { operator } from "@/data/operator";
import { OperatorAddress, OperatorContact } from "@/components/operator-contact";

export const metadata = { title: "Datenschutzerklärung | Softwarebrief", description: "Welche Daten Softwarebrief verarbeitet, wofür und welche Rechte Sie haben.", alternates: { canonical: "/datenschutz" } };

export default function PrivacyPage() {
  return <main>
    <section className="page-hero shell"><p className="eyebrow">RECHTLICHES</p><h1>Datenschutzerklärung</h1><p>Hier lesen Sie, welche personenbezogenen Daten Softwarebrief verarbeitet, wofür wir sie brauchen und welche Rechte Sie haben. Stand: 13. Oktober 2026.</p></section>
    <div className="shell editorial-page legal">
      <section aria-labelledby="verantwortlich"><h2 id="verantwortlich">Verantwortlicher</h2>
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz Grundverordnung (DSGVO) ist:</p>
        <OperatorAddress />
        <OperatorContact />
        <p>Weitere Angaben finden Sie im <Link href="/impressum">Impressum</Link>.</p>
      </section>

      <section aria-labelledby="kurz"><h2 id="kurz">Das Wichtigste in Kürze</h2>
        <ul className="legal-list">
          <li>Wir verwenden Vercel Web Analytics für zusammengefasste Besuchsstatistiken. Der Dienst arbeitet ohne Cookies. URL-Parameter und Newsletter-Bestätigungsseiten nehmen wir von der Messung aus.</li>
          <li>Beim Aufruf der Seiten verarbeitet unser Hoster technische Verbindungsdaten, zum Beispiel Ihre IP Adresse.</li>
          <li>Die eingebundenen Bilder laden Sie von unserem Hoster. Eine Ausnahme sind die Werbebanner von Sage: Sie lädt Ihr Browser vom Partnernetzwerk Impact (Abschnitt „Werbebanner von Sage“). Externe Herstellerseiten und Videos öffnen sich erst, wenn Sie den jeweiligen Link anklicken.</li>
          <li>Suche, Filter, Vergleich und Empfehlungsweg arbeiten in Ihrem Browser. Ihre Eingaben dort senden wir nicht an uns.</li>
          <li>Personenbezogene Daten geben Sie nur an, wenn Sie uns kontaktieren, sich für den Newsletter anmelden oder eine Erfahrung einreichen.</li>
        </ul>
      </section>

      <section aria-labelledby="hosting"><h2 id="hosting">Hosting und Server Protokolle</h2>
        <p>Diese Website wird bei {operator.hosting.name} ({operator.hosting.country}) betrieben. Beim Aufruf einer Seite verarbeitet der Hoster technische Daten, die Ihr Browser übermittelt: die IP Adresse, Datum und Uhrzeit, die aufgerufene Adresse, den Statuscode der Antwort sowie Angaben zu Browser und Betriebssystem.</p>
        <p><strong>Zweck:</strong> Auslieferung der Seiten, Sicherheit und Fehlersuche. <strong>Rechtsgrundlage:</strong> Artikel 6 Absatz 1 Buchstabe f DSGVO. Unser berechtigtes Interesse ist der sichere und stabile Betrieb der Website. <strong>Speicherdauer:</strong> Der Hoster speichert die Protokolle nur so lange, wie es für diese Zwecke nötig ist.</p>
        <p>Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung nach Artikel 28 DSGVO. Verarbeitet der Hoster Daten in den USA, stützt er sich nach eigenen Angaben auf seine Zertifizierung unter dem EU-US Data Privacy Framework und ersatzweise auf die Standardvertragsklauseln der Europäischen Kommission. Mehr dazu in der <a href={operator.hosting.privacyUrl} target="_blank" rel="noopener noreferrer">Datenschutzerklärung des Hosters<span className="visually-hidden"> (öffnet in neuem Tab)</span></a>.</p>
      </section>

      <section aria-labelledby="medien"><h2 id="medien">Bilder und externe Herstellermedien</h2>
        <p>Die auf Softwarebrief eingebundenen Bilder liegen bei unserem Hoster, mit Ausnahme der Werbebanner von Sage (Abschnitt „Werbebanner von Sage“). Für Sage Produktansichten, Demos und Unterlagen verlinken wir auf die offiziellen Herstellerseiten. Andere Produktvideos öffnen sich über einen Link, zum Beispiel bei YouTube. Diese externen Medien werden auf Softwarebrief nicht eingebettet oder automatisch geladen.</p>
        <p>Erst wenn Sie einen solchen Link öffnen, stellt Ihr Browser eine Verbindung zum jeweiligen Anbieter her. Dieser erhält dabei technische Verbindungsdaten, etwa Ihre IP Adresse. Für die weitere Verarbeitung gelten die Datenschutzinformationen der geöffneten Website.</p>
      </section>

      <section aria-labelledby="schriften"><h2 id="schriften">Schriftarten</h2>
        <p>Die Schriftarten dieser Website liegen auf unserem eigenen Server. Ihr Browser lädt sie nicht von Google oder anderen Schriftdiensten.</p>
      </section>

      <section aria-labelledby="cookies"><h2 id="cookies">Cookies und Eingaben im Browser</h2>
        <p>Wir setzen keine Cookies zur Wiedererkennung, Reichweitenmessung oder Werbung. Suche, Filter, Produktvergleich und Empfehlungsweg werten Ihre Eingaben im Browser aus. Sie werden nicht an uns übertragen und nicht gespeichert. Die Adresse eines Vergleichs enthält nur die Namen der gewählten Produkte. Klicken Sie auf einen Werbelink oder ein Werbebanner, können der Anbieter und das Partnernetzwerk Cookies setzen (Abschnitt „Werbebanner von Sage“).</p>
      </section>

      <section aria-labelledby="analytics"><h2 id="analytics">Besuchsstatistiken mit Vercel Web Analytics</h2>
        <p>Wir nutzen Vercel Web Analytics von Vercel Inc. (USA), um zu sehen, welche Seiten gelesen werden und wie die Website genutzt wird. Die Auswertung umfasst Seitenaufrufe, Verweisquellen sowie Angaben zu Browser, Betriebssystem, Gerät und ungefährer Region. Wir sehen zusammengefasste Statistiken. Der Dienst verwendet keine Cookies; nach Angaben von Vercel wird eine aus dem eingehenden Aufruf erzeugte Besucherkennung nach 24 Stunden verworfen.</p>
        <p>Vor der Übermittlung entfernen wir URL-Parameter und Sprungmarken aus der erfassten Seitenadresse. Die Seite zur Newsletter-Bestätigung wird nicht erfasst. E-Mail-Adressen, Bestätigungstoken, Suchbegriffe und Antworten im Empfehlungsweg senden wir nicht als Analyseereignisse. Weitere Angaben stehen in den <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">Datenschutzhinweisen zu Vercel Web Analytics<span className="visually-hidden"> (öffnet in neuem Tab)</span></a>.</p>
      </section>

      <section aria-labelledby="werbebanner"><h2 id="werbebanner">Werbebanner von Sage</h2>
        <p>Auf der Startseite, auf Kategorieseiten und auf einigen Produktprofilen zeigen wir Werbebanner von Sage. Sage stellt die Banner im Affiliate Programm über das Partnernetzwerk Impact bereit. Sie sind als „Werbung“ gekennzeichnet und werden von uns unverändert eingebunden.</p>
        <p><strong>Was beim Laden geschieht:</strong> Sobald ein Banner in den sichtbaren Bereich kommt, lädt Ihr Browser die Bilddatei direkt von den Servern von Impact (Adresse a.impactradius-go.com). Impact erhält dabei technische Verbindungsdaten, insbesondere Ihre IP Adresse, Datum und Uhrzeit, die angeforderte Bilddatei und Angaben zu Ihrem Browser. Wir senden keine Herkunftsseite mit. Nach unserer Prüfung am 13. Oktober 2026 setzt die Auslieferung der Bilddatei keine Cookies. Einen Zählpixel für Anzeigenaufrufe binden wir nicht ein.</p>
        <p><strong>Zweck und Rechtsgrundlage:</strong> Anzeige der Werbebanner zur Finanzierung von Softwarebrief. <strong>Rechtsgrundlage:</strong> Artikel 6 Absatz 1 Buchstabe f DSGVO. Unser berechtigtes Interesse ist die Finanzierung unseres redaktionellen Angebots durch Werbung. Sie können dieser Verarbeitung nach Artikel 21 DSGVO widersprechen (Kontakt siehe oben). Sie können die Verbindung auch vermeiden, indem Sie Werbeinhalte in Ihrem Browser blockieren. Die Website bleibt dann vollständig nutzbar.</p>
        <p><strong>Wenn Sie auf ein Banner oder einen Werbelink klicken:</strong> Ihr Browser wird über die Adresse sagegmbh.sjv.io von Impact zu Sage weitergeleitet. Impact kann dabei Cookies oder ähnliche Kennungen setzen und verarbeitet Ihre IP Adresse, um den Besuch Softwarebrief zuzuordnen und eine Provision abzurechnen. Wir hängen an den Link eine Kennung der Stelle an, an der Sie geklickt haben, zum Beispiel den Kopfbereich eines Profils. Diese Angabe enthält nichts über Ihre Person. Als Herkunft übermittelt Ihr Browser nur die Adresse unserer Website (www.softwarebrief.de), nicht die einzelne Seite, Suchbegriffe oder andere Angaben aus der Seitenadresse. Daran erkennt Impact, dass der Klick von Softwarebrief kommt. Dasselbe gilt für die als „Werbung“ gekennzeichneten Links zu unseren anderen Affiliate Partnern. Nach der Weiterleitung gilt die Datenschutzerklärung von Sage.</p>
        <p><strong>Empfänger:</strong> Impact Tech, Inc., Santa Barbara, USA. Nach eigenen Angaben stützt Impact Übermittlungen aus dem Europäischen Wirtschaftsraum auf Standardvertragsklauseln. Mehr dazu in der <a href="https://impact.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Impact<span className="visually-hidden"> (öffnet in neuem Tab)</span></a>.</p>
      </section>

      <section aria-labelledby="kontakt"><h2 id="kontakt">Kontakt aufnehmen</h2>
        <p>Wenn Sie uns anrufen, schreiben oder per E-Mail an {operator.email} kontaktieren, verarbeiten wir Ihre Angaben (zum Beispiel Name, Kontaktdaten und den Inhalt Ihrer Nachricht), um Ihr Anliegen zu bearbeiten. <strong>Rechtsgrundlage:</strong> Artikel 6 Absatz 1 Buchstabe f DSGVO, unser Interesse an der Bearbeitung von Hinweisen und Anfragen. Betrifft Ihre Anfrage einen Vertrag, ist es Artikel 6 Absatz 1 Buchstabe b. <strong>Speicherdauer:</strong> bis Ihr Anliegen erledigt ist. Danach löschen wir die Angaben, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
      </section>

      <section aria-labelledby="newsletter"><h2 id="newsletter">Newsletter (Softwarebrief)</h2>
        <p>Wenn Sie sich für den Softwarebrief anmelden, verarbeiten wir Ihre E-Mail-Adresse. Wir verwenden das Double Opt-in Verfahren: Nach der Anmeldung erhalten Sie eine E-Mail mit einem Bestätigungslink. Erst nach dem Klick sind Sie angemeldet. Nach Ihrer Bestätigung speichern wir Ihre Adresse, den Zeitpunkt der Anmeldung und der Bestätigung sowie die Version der Einwilligung in der Kontaktverwaltung von Resend. Vor der Bestätigung wird Ihre Adresse nur für die Bestätigungsmail verarbeitet.</p>
        <p><strong>Zweck:</strong> Versand des Softwarebriefs, der einmal im Monat erscheint. <strong>Rechtsgrundlage:</strong> Ihre Einwilligung nach Artikel 6 Absatz 1 Buchstabe a DSGVO. Den Nachweis speichern wir auf Grundlage von Artikel 6 Absatz 1 Buchstabe f, weil wir die Einwilligung belegen müssen. <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, zum Beispiel über den Abmeldelink in jeder Ausgabe oder per E-Mail an {operator.email}. <strong>Speicherdauer:</strong> bis zum Widerruf. Danach löschen wir Ihre Adresse, soweit keine gesetzlichen Aufbewahrungs- oder Nachweispflichten entgegenstehen.</p>
        <p><strong>Versanddienstleister:</strong> Für Versand und Verwaltung der Adressen nutzen wir Resend (Resend, Inc., USA). Weitere Hinweise finden Sie in der <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Resend</a>. Wir geben Ihre Adresse nicht an Softwareanbieter weiter. Mehr zum Verfahren steht auf der Seite <Link href="/newsletter">Newsletter</Link>.</p>
      </section>

      <section aria-labelledby="erfahrungen"><h2 id="erfahrungen">Erfahrungsberichte einreichen</h2>
        <p>Auf Produktprofilen können Sie, sobald diese Funktion freigeschaltet ist, eine Erfahrung einreichen. Dafür verarbeiten wir Ihre Bewertung, Ihren Anzeigenamen, die Überschrift, Ihren Text und freiwillig die Angaben zu Nutzungsdauer und Unternehmensgröße. Eine E-Mail-Adresse verlangen wir nicht.</p>
        <p><strong>Zweck:</strong> Prüfung und Veröffentlichung Ihres Beitrags als Nutzermeinung. <strong>Rechtsgrundlage:</strong> Ihre Einwilligung nach Artikel 6 Absatz 1 Buchstabe a DSGVO, die Sie durch das Absenden erteilen. Veröffentlicht werden nur geprüfte Beiträge mit Ihrem Anzeigenamen. <strong>Speicherung:</strong> Die Beiträge liegen in einer Datenbank des Dienstleisters Supabase, mit dem ein Vertrag zur Auftragsverarbeitung besteht. <strong>Widerruf:</strong> Sie können die Veröffentlichung jederzeit widerrufen. Wir entfernen den Beitrag dann. Bitte nennen Sie in Ihrem Text keine personenbezogenen Daten Dritter.</p>
      </section>

      <section aria-labelledby="links"><h2 id="links">Links zu anderen Websites</h2>
        <p>Einige Anbieterlinks sind Affiliate Links und als Werbung gekennzeichnet. Sie enthalten Angaben zur Herkunft des Besuchs, damit der Anbieter einen Besuch Softwarebrief zuordnen kann. Softwarebrief setzt dafür keine eigenen Tracking Cookies. Nach dem Klick verarbeitet der Anbieter den Besuch nach seinen eigenen Datenschutzbestimmungen. Bei Sage läuft der Klick über das Partnernetzwerk Impact (Abschnitt „Werbebanner von Sage“).</p>
        <p>Softwarebrief verlinkt auf Herstellerseiten und andere Quellen. Solange Sie einen solchen Link nicht anklicken, werden keine Daten an diese Anbieter übertragen. Ausgenommen sind die Werbebanner von Sage, deren Bilddateien Impact ausliefert. Nach dem Klick gilt die Datenschutzerklärung des jeweiligen Anbieters. Auf Seiten, die zu einem Herstellerlink führen, weisen wir darauf hin, dass Sie die Website verlassen.</p>
      </section>

      <section aria-labelledby="empfaenger"><h2 id="empfaenger">Empfänger Ihrer Daten im Überblick</h2>
        <div className="legal-table-wrap" role="region" aria-label="Empfänger und Zweck" tabIndex={0}>
          <table className="legal-table">
            <thead><tr><th scope="col">Dienstleister</th><th scope="col">Wofür</th><th scope="col">Verarbeitung</th></tr></thead>
            <tbody>
              <tr><th scope="row">{operator.hosting.name}</th><td>Betrieb der Website, Server Protokolle und zusammengefasste Besuchsstatistiken mit Vercel Web Analytics</td><td>{operator.hosting.country}, Absicherung über EU-US Data Privacy Framework und Standardvertragsklauseln</td></tr>
              <tr><th scope="row">Resend</th><td>Bestätigungsmail und Kontaktverwaltung, Newsletter nach Ihrer Bestätigung</td><td>USA</td></tr>
              <tr><th scope="row">Impact (Impact Tech, Inc.)</th><td>Auslieferung der Sage Werbebanner. Nach einem Klick auf Banner oder Werbelinks: Zuordnung des Besuchs zu Softwarebrief und Provisionsabrechnung</td><td>USA, Standardvertragsklauseln nach Angaben von Impact</td></tr>
              <tr><th scope="row">Supabase</th><td>Speicherung eingereichter Erfahrungsberichte, nur wenn Sie einen Beitrag senden</td><td>Auftragsverarbeitung</td></tr>
            </tbody>
          </table>
        </div>
        <p>Eine Übermittlung Ihrer Daten an weitere Dritte findet nur statt, wenn wir dazu gesetzlich verpflichtet sind.</p>
      </section>

      <section aria-labelledby="rechte"><h2 id="rechte">Ihre Rechte</h2>
        <p>Sie haben gegenüber uns folgende Rechte in Bezug auf Ihre personenbezogenen Daten:</p>
        <ul className="legal-list">
          <li>Auskunft über die gespeicherten Daten (Artikel 15 DSGVO),</li>
          <li>Berichtigung unrichtiger Daten (Artikel 16),</li>
          <li>Löschung (Artikel 17),</li>
          <li>Einschränkung der Verarbeitung (Artikel 18),</li>
          <li>Übertragung Ihrer Daten in einem gängigen Format (Artikel 20),</li>
          <li>Widerspruch gegen Verarbeitungen, die auf berechtigten Interessen beruhen (Artikel 21),</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Artikel 7 Absatz 3).</li>
        </ul>
        <p>Zur Ausübung wenden Sie sich an die Kontaktdaten oben. Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Artikel 77 DSGVO). Zuständig für uns ist:</p>
        <address className="legal-address">{operator.supervisor.name}<br />{operator.supervisor.street}<br />{operator.supervisor.city}<br /><a href={operator.supervisor.url} target="_blank" rel="noopener noreferrer">{operator.supervisor.url.replace("https://", "")}<span className="visually-hidden"> (öffnet in neuem Tab)</span></a></address>
      </section>

      <section aria-labelledby="pflicht"><h2 id="pflicht">Bereitstellung der Daten und automatisierte Entscheidungen</h2>
        <p>Sie sind nicht verpflichtet, uns personenbezogene Daten zu geben. Ohne Ihre E-Mail-Adresse können wir Ihnen allerdings keinen Newsletter senden. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt. Der Empfehlungsweg arbeitet mit festen Regeln und wertet Ihre Antworten nur in Ihrem Browser aus.</p>
      </section>

      <section aria-labelledby="sicherheit"><h2 id="sicherheit">Sicherheit und Änderungen</h2>
        <p>Die Übertragung zwischen Ihrem Browser und dieser Website ist verschlüsselt (HTTPS). Ändern sich unsere Angebote oder die Rechtslage, passen wir diese Erklärung an. Das Datum oben nennt den aktuellen Stand.</p>
      </section>
    </div>
  </main>;
}
