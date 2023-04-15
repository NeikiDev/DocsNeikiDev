# Analyze Report Summary / API

<p class="tip">THE API IS CURRENTLY PRIVATE</p>

## Config

  > The reports summary are located in that path: `https://analyze.neiki.dev/reports/{hash}` <br>
  > The script is located in that path: `https://analyze.neiki.dev/assets/report.js` <br>
  > API route is located here: `https://api.neiki.dev/analyze/@type?hash={hash}`

## How does it work

The Hash is fetched on 5 know online analysis websites (per API) and on one known malware website (per API). The Hash is then analyzed and the result is returned to the user. The result is then stored in the database and the user can view the result on the website.

## Online Analysis Websites

* [VirusTotal](https://www.virustotal.com/gui/home/upload) | **(Needed)**
* [Hybrid Analysis](https://www.hybrid-analysis.com/) | **(Needed)**
* [OpenTip Kaspersky](https://opentip.kaspersky.com/) | **(Optional)**
* [MetaDefender OPswat](https://metadefender.opswat.com/) | **(Optional)**
* [Tria.ge Sandbox](https://tria.ge/) | **(Optional)**

## Malware Websites

* [MalwareBazaar](https://bazaar.abuse.ch/browse/) | **(Optional)**

## Score

#### Success Status (200)

The score relies mostly on OpenTip Kaspersky results.
Triage Sandbox and VirusTotal are the second most important results.
All others are optional and are not included in the score calculation.
Optional results are handeld threw `+` or `-` points not as result based calculation.
The "scripts" below are just examples to show how the score is calculated, the real calculation is done on the server.
The score is based on all the results from the online analysis websites. The score is calculated by the following formula:

#### VirusTotal report

```js
// Dummy code to show how the score is calculated!
const malicious = VirusTotalReport.data.attributes.last_analysis_stats.malicious

if (malicious < 10) {
    report_score += malicious
} else if (Math.round(malicious) >= 10) {
    report_score += malicious * 2
} else if (Math.round(malicious) >= 20) {
    report_score += malicious * 3
}
```

<p class="warn"> All other calculations are private and not shown! DM Neiki#4405 on discord for more information. </p>

## VirusTotal comment

* Comments are made on VirusTotal reports
* Comments are published by [this](https://www.virustotal.com/gui/user/NeikiAnalytics) account (NeikiAnalytics)
* This is the only account that comments on VirusTotal reports!
* confirmed malware is also added to the virustotal collection [Malware](https://www.virustotal.com/gui/collection/e8b07232ca57df01f81a2b5d485ad0016ffaff9bf834aaf7d1a565f93b616e0a)
* Currently one other virustotal account is using my **PRIVATE** live api feed! [GetOnMyVirus](https://www.virustotal.com/gui/user/GetOnMyVirus/comments) | I am not responsible for any damage caused by this account! (Not the Owner of the account!)

#### Example comment (JSON and MD format)

```js
{
    "Verdict": "{VERDICT}",
    "Score": "{REPORT_SCORE}/100",
    "Threat Label / Signature": "#{THREAT_LABEL}",
    "Tags": "#{TAGS}",
    "Report": "https://analyze.neiki.dev/reports/{HASH}?r=vt",
    "Found reports on": "{FOUND_REPORTS}",
    "File Name": "{FILE_NAME}",
    "SHA256": "{HASH}"
}
```

### How long does it store the data?
  <p class="warn"> NO PERSONAL DATA IS STORED! </p>

* The data is stored for 30 days
* After 30 days the data is deleted automatically
* All data is stored in a database encrypted

### Is the script open source? 
  <p class="warn"> NO, currently the script is obfuscated for privacy! </p>

### Is the API open source and can I use it for my own project? 
  <p class="warn"> NO, currently the API is private! </p>

## Support and Contact
You can find the contact details in the "Support and Contact" section.

<p class="warn"> Last updated: 15.04.2023 </p>