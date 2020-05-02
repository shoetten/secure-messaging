<i class="fas fa-comments fa-2x"></i>

## Sichere Kommunikation über Messenger

----

## von <i class="fas fa-user"></i> Nu und <i class="fas fa-user"></i> Simon
### und euch allen

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

### Fünf Schutzziele von Kommunikation

#### 1. Vertraulichkeit
- nur legitimierte Empfänger dürfen Zugang zu Daten haben
- "Alice weiß, nur Bob kann ihre Nachricht lesen." (Verschlüsselung)

--

#### 2. Anonymität
- Vertraulichkeit der Identität
- "Alice kann bestimmen, wem sie ihre Identität preisgibt."

--

#### 3. Integrität
- Veränderungen Dritter müssen erkannt werden
- "Bob merkt, wenn Eve etwas verändert hat." (Signatur)

--

#### 4. Authentizität
- Identitätsnachweis: Echtheit des Senders und der Daten. Widerspricht Anonymität
- "Bob weiß, dass die Nachricht von Alice kommt." (Signatur)

--

#### 5. Verfügbarkeit
- Schutzziele werden in annehmbarer Zeit realisiert
- "Alice bekommt Bobs (verschlüsselte) Antwort rechtzeitig. Und kann leicht die Authentizität prüfen."

----

### Grundlegende Begriffe

#### Verschlüsselung

- Nachricht liegt im **Klartet** vor
- wird mit einem **Schlüssel** verrechnet (verschlüsselt) und damit zu einem **Geheimtext**
- vom Geheimtext kann nicht auf den Klartext geschlossen werden
- nur mit dem richtigen Schlüssel kann die Verschlüsselung rückgängig gemacht werden
- Sicherheit des Verfahrens beruht allein auf Geheimnis des Schlüssels

#### Ebenen der Kommunikation

- Elektronische Kommunikation findet auf verschiedenen Schichten statt
- auf verschiedenen Schichten kann Informationsstrom verschlüsselt werden
- üblich: **Transportverschlüsselung** (bspw. httpS mit SSL)
- d.h. Angriff von außen auf den Kommunikationskanal ist nicht möglich


#### Ende-zu-Ende-Verschlüsselung (e2e)

- Verschlüssung auf einer höheren Ebene
- e2e bedeutet, dass Nachrichten schon vor dem Versenden verschlüsselt werden
- Transportverschlüsselung kommt unabhängig davon dazu
- e2e-Nachricht wird erst nach dem Empfangen wieder entschlüsselt

#### Problem: Schlüsselaustausch

- zu Beginn einer e2e-Kommunikation müssen Schlüssel der Kommunikationspartner erst gegenseitig getauscht werden
- es muss sichergestellt werden, dass der Schlüssel richtig übermittelt wurde (**Integrität**)
- bei Riot funktioniert dies und der **Schlüsselaustausch** automatisch
- doch es muss **Authentizität** der anderen Person bzw. des Gerätes, von dem Nachrichten gesendet werden, überprüft werden

----

### Was macht einen guten Messenger aus?

Vergleich gängiger kostenloser Messenger, die auf (fast) allen Plattformen unterstützt werden

|     | Facebook<br>Messenger | WhatsApp | Telegram | Signal | Wire | Riot |
| --- |  ---  |  ---  |  ---  |  ---  |  ---  |  ---  |
| open source | nein | nein | nein | ja | ja | ja |
| dezentral | nein | nein | nein | nein | nein | ja |
| Identität | facebook | Tel. | Tel. | Tel. | Mail o. Tel. | Mail |
| Firma | facebook | facebook | VK-Gründer<br>(Russland/ Dubai) | USA | USA | Vector (UK) |
| Verschlüsselung<br>von Gruppen | nein | ja | nein | ja | ja | ja |
| Finanzierung | Werbung | Werbung | VC-funded | VC-funded | business plan<br>für Firmen | VC-funded/ paid<br>private hosting |
| Videocalls<br>für Gruppen | ? | bis 4 P. | nein | nein | ja | ja |

----

#### Praxisteil
## Let's riot!

<a href="https://about.riot.im/" title="Riot.im Webseite" target="_blank">
<img src="images/riot-logo.svg" width="250" alt="Riot" class="plain">
</a>

