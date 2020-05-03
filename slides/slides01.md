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

<div class="lang-area" data-lang="de">

1. Einführung
1. Ein bisschen Theorie
1. Praxisteil mit dem Riot Messenger

<small class="chapter-title">worüber wir heute reden..</small>

</div>
<div class="lang-area" data-lang="en">

1. Introduction
1. A little bit of theory
1. Practical workshop with the Riot messenger

<small class="chapter-title">what we will talk about today..</small>

</div>

----

<div class="lang-area" data-lang="de">

## Eure Erwartungen

</div>
<div class="lang-area" data-lang="en">

## Your expectations

</div>

----

<i class="fas fa-question fa-2x"></i>

<div class="lang-area" data-lang="de">

## Was macht einen guten Messenger aus?

<a href="https://jitsi.technischerpunkt.org/20200503workshopsicheremessenger-1" target="_blank">Kleingruppe 1</a>

<a href="https://jitsi.technischerpunkt.org/20200503workshopsicheremessenger-2" target="_blank">Kleingruppe 2</a>

danach zurück in den <a href="https://jitsi.technischerpunkt.org/20200503workshopsicheremessenger" target="_blank">Hauptraum</a>

</div>
<div class="lang-area" data-lang="en">

## What makes up a good messenger?

<a href="https://jitsi.technischerpunkt.org/20200503workshopsicheremessenger-1" target="_blank">small group no. 1</a>

<a href="https://jitsi.technischerpunkt.org/20200503workshopsicheremessenger-2" target="_blank">small group no. 2</a>

afterwards back to <a href="https://jitsi.technischerpunkt.org/20200503workshopsicheremessenger" target="_blank">main room</a>

</div>

----

<i class="fas fa-lock fa-2x"></i>

<div class="lang-area" data-lang="de">

## Fünf Schutzziele von Kommunikation

</div>
<div class="lang-area" data-lang="en">

## Five security goals of communication

</div>

--

<div class="lang-area" data-lang="de">

### 1. Vertraulichkeit
- nur legitimierte Empfänger dürfen Zugang zu Daten haben
- "Alice weiß, nur Bob kann ihre Nachricht lesen." (Verschlüsselung)

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

</div>
<div class="lang-area" data-lang="en">

### 1. Confidentiality
- nur legitimierte Empfänger dürfen Zugang zu Daten haben
- "Alice knows, that only Bob can read her message." (encryption)

<small class="chapter-title">Five security goals of communication</small>

</div>

--

<div class="lang-area" data-lang="de">

### 2. Anonymität
- Vertraulichkeit der Identität
- "Alice kann bestimmen, wem sie ihre Identität preisgibt."

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

</div>
<div class="lang-area" data-lang="en">

### 2. Anonymity
- Confidentiality of your identity
- "Alice can decide, who can see her (real) identity."

<small class="chapter-title">Five security goals of communication</small>

</div>

--

<div class="lang-area" data-lang="de">

### 3. Integrität
- Veränderungen Dritter müssen erkannt werden
- "Bob merkt, wenn Eve etwas verändert hat." (Signatur)

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

</div>
<div class="lang-area" data-lang="en">

### 3. Integrity
- Changes from third parties have to be noticed
- "Bob realizes, when Eve has changed something." (signature)

<small class="chapter-title">Five security goals of communication</small>

</div>

--

<div class="lang-area" data-lang="de">

### 4. Authentizität
- Identitätsnachweis: Echtheit des Senders und der Daten. Widerspricht Anonymität
- "Bob weiß, dass die Nachricht von Alice kommt." (Signatur)

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

</div>
<div class="lang-area" data-lang="en">

### 4. Authenticity
- Identity check: Authenticity of the sender and the data. Contradicts anonymity
- "Bob knows, that the message is from Alice." (signature)

<small class="chapter-title">Five security goals of communication</small>

</div>

--

<div class="lang-area" data-lang="de">

### 5. Verfügbarkeit
- Schutzziele werden in annehmbarer Zeit realisiert
- "Alice bekommt Bobs (verschlüsselte) Antwort rechtzeitig. Und kann leicht die Authentizität prüfen."

<small class="chapter-title">Fünf Schutzziele von Kommunikation</small>

</div>
<div class="lang-area" data-lang="en">

### 5. Availability
- All goals are realized in an acceptable amount of time
- "Alice receives Bobs (encrypted) answer in time. And can easily check the authenticity of the message."

<small class="chapter-title">Five security goals of communication</small>

</div>

----

<i class="fas fa-language fa-2x"></i>

<div class="lang-area" data-lang="de">

## Grundlegende Begriffe

</div>
<div class="lang-area" data-lang="en">

## Some vocabulary

</div>

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

<div class="lang-area" data-lang="de">

> Endpunkte sind die schwächsten Punkte

<small class="chapter-title">worum es heute nicht geht</small>

</div>
<div class="lang-area" data-lang="en">

> Endpoints are the weakest points

<small class="chapter-title">what it's not about today</small>

</div>

--

<div class="lang-area" data-lang="de">

<abbr title="Android bzw iOS">Betriebssystem</abbr> und App Updates machen!

<p class="fragment">
  <i class="fas fa-sign-out-alt"></i>
  Workshop zu Gerätesicherheit
</p>

<small class="chapter-title">worum es heute nicht geht: gerätesicherheit</small>

</div>
<div class="lang-area" data-lang="en">

Do your <abbr title="Android / iOS">operating system</abbr> and app updates!

<p class="fragment">
  <i class="fas fa-sign-out-alt"></i>
  Workshop about device security
</p>

<small class="chapter-title">what it's not about today: device security</small>

</div>

--

<div class="lang-area" data-lang="de">

Passwörter möglichst nur einmal verwenden.

<p class="fragment">
  <i class="fas fa-sign-out-alt"></i>
  Workshop zu Passwörtern
</p>

<small class="chapter-title">worum es heute nicht geht: gute passwörter</small>

</div>
<div class="lang-area" data-lang="en">

Ideally you use every password only once.

<p class="fragment">
  <i class="fas fa-sign-out-alt"></i>
  Workshop about passwords
</p>

<small class="chapter-title">what it's not about today: good passwords</small>

</div>

----

<div class="lang-area" data-lang="de">

### Unsere Kriterien

- Open source
- Dezentral
- Unterstützte Plattformen
- Identitätskopplung
- Wer dahinter steht
- Verschlüsselung
- Finanzierung
- Features

</div>
<div class="lang-area" data-lang="en">

### Our criteria

- Open source
- Decentralized
- Supported platforms
- Coupled with your identity?
- Who's behind it
- Encryption
- Finances
- Features

</div>
