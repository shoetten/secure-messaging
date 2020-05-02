<i class="fas fa-comments fa-2x"></i>

<div class="lang-area" data-lang="de">

  ## Sichere Kommunikation über Messenger

</div>
<div class="lang-area" data-lang="en">

  ## Secure communication via messenger

</div>

----

<div class="lang-area" data-lang="de">

## von <i class="fas fa-user"></i> Nu und <i class="fas fa-user"></i> Simon
### und euch allen

</div>
<div class="lang-area" data-lang="en">

## by <i class="fas fa-user"></i> Nu and <i class="fas fa-user"></i> Simon
### and you all

</div>

----

## Fünf Schutzziele von Kommunikation

--

### 1. Vertraulichkeit
- nur legitimierte Empfänger dürfen Zugang zu Daten haben
- "Alice weiß, nur Bob kann ihre Nachricht lesen." (Verschlüsselung)

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

--

### 2. Anonymität
- Vertraulichkeit der Identität
- "Alice kann bestimmen, wem sie ihre Identität preisgibt."

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

--

### 3. Integrität
- Veränderungen Dritter müssen erkannt werden
- "Bob merkt, wenn Eve etwas verändert hat." (Signatur)

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

--

### 4. Authentizität
- Identitätsnachweis: Echtheit des Senders und der Daten. Widerspricht Anonymität
- "Bob weiß, dass die Nachricht von Alice kommt." (Signatur)

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

--

### 5. Verfügbarkeit
- Schutzziele werden in annehmbarer Zeit realisiert
- "Alice bekommt Bobs (verschlüsselte) Antwort rechtzeitig. Und kann leicht die Authentizität prüfen."

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

----

### Grundlegende Begriffe

--

#### Verschlüsselung

- Nachricht im <abbr>Klartet</abbr>
- wird mit <abbr>Schlüssel</abbr> verrechnet (verschlüsselt) → damit zu <abbr>Geheimtext</abbr>
- vom Geheimtext kann nicht auf Klartext geschlossen werden
- nur mit richtigem Schlüssel kann Verschlüsselung rückgängig gemacht werden
- Sicherheit des Verfahrens beruht nur auf <abbr>Geheimnis des Schlüssels</abbr>

<small class="chapter-title">Grundlegende Begriffe</small>

--

#### Ende-zu-Ende-Verschlüsselung (e2e)

- e2e bedeutet, dass Nachrichten schon vor dem Versenden verschlüsselt werden
- Transportverschlüsselung auf niedriger Ebene kommt unabhängig davon dazu
- e2e-Nachricht wird erst nach dem Empfangen wieder entschlüsselt

<small class="chapter-title">Grundlegende Begriffe</small>

--

#### Problem: Schlüsselaustausch

- Beginn der e2e-Kommunikation: Schlüssel von A und B müssen ausgetauscht werden
- es muss sichergestellt werden, dass der Schlüssel richtig übermittelt wurde (**Integrität**)
- bei Riot funktioniert dies und der **Schlüsselaustausch** automatisch
- doch es muss **Authentizität** der anderen Person bzw. des Gerätes, von dem Nachrichten gesendet werden, überprüft werden

<small class="chapter-title">Grundlegende Begriffe</small>

----

> Endpunkte sind die schwächsten Punkte

<small class="chapter-title">worum es heute nicht geht</small>

--

<abbr title="Android bzw iOS">Betriebssystem</abbr> und App Updates machen!

<p class="fragment">
  <i class="fas fa-sign-out-alt"></i>
  Workshop zu Gerätesicherheit
</p>

<small class="chapter-title">worum es heute nicht geht: gerätesicherheit</small>

--

Passwörter möglichst nur einmal verwenden.

<p class="fragment">
  <i class="fas fa-sign-out-alt"></i>
  Workshop zu Passwörtern
</p>

<small class="chapter-title">worum es heute nicht geht: gute passwörter</small>

----

### Unsere Kriterien

- Open source
- Dezentral
- Unterstützte Plattformen
- Identitätskopplung
- Wer dahinter steht
- Verschlüsselung
- Finanzierung
- Features

--

### Was macht einen guten Messenger aus?

Vergleich gängiger kostenloser Messenger, die auf (fast) allen Plattformen unterstützt werden

|     | Facebook<br>Messenger | WhatsApp | Telegram | Signal | Wire | Riot |
| --- |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |
| open source | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
| dezentral | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> |
| Identität | facebook | Tel. | Tel. | Tel. | Mail o. Tel. | Mail |
| Firma | facebook | facebook | VK-Gründer<br>(Russland/ Dubai) | USA | USA | Vector (UK) |
| Verschlüsselung<br>von Gruppen | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
| Finanzierung | Werbung | Werbung | VC-funded | VC-funded | business plan<br>für Firmen | VC-funded/ paid<br>private hosting |
| Videocalls<br>für Gruppen | <i class="fas fa-question"></i> | bis 4 P. | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |

----

## Riot



----

#### Praxisteil
## Let's riot!

<a href="https://about.riot.im/" title="Riot.im Webseite" target="_blank">
<img src="images/riot-logo.svg" width="250" alt="Riot" class="plain">
</a>

