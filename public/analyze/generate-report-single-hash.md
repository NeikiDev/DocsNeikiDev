# Generate an Full report of one single Hash

:link: You can use that Short link to share this guide: [link.neiki.dev/GenerateReport](https://link.neiki.dev/GenerateReport) :link: 

## How does it work

Analyze.neiki.dev is a powerful analysis tool that allows you to generate detailed reports on  <br>
any file based on its SHA256 hash. With Analyze.neiki.dev, you can quickly and easily get <br>
detailed information about any file, including its behavior, potential security risks, and more. <br>

To get started with Analyze.neiki.dev, simply enter the SHA256 hash of the  <br>
file you want to analyze into the search bar on the homepage. <br>
Our tool will then scan the file and generate a detailed report summarizing its findings.

[Generate Report Here](https://analyze.neiki.dev/search.html) <br>
`https://analyze.neiki.dev/search.html`

## Engines and Tools

<p class="warn"> The following engines and tools are used to generate the report. </p> 

* [VirusTotal](https://www.virustotal.com/gui/home/upload)
* [Hybrid Analysis](https://www.hybrid-analysis.com/)
* [Kaspersky Opentip](https://opentip.kaspersky.com/)
* [Hatching Triage](https://tria.ge/)
* [MetaDefender OPswat](https://metadefender.opswat.com/)
* [MalwareBazaar](https://bazaar.abuse.ch/)

<p class="tip">SOME FILES ARE MANUALLY CHECKED BY AN HUMAN AND SANDBOX ANALYSIS (THE ARE LABELD)</p>

You can submit a file to be reanalyzed by an human and sandbox analysis at every report. <br>

## Example full report (API RESPONSE)
<p class="tip">THE API IS CURRENTLY PRIVATE</p>

[Full Report](https://analyze.neiki.dev/reports/d30483304aab6b42545f818c1d9bf0c101d24db6294ab7d764f6eb6f2c9cf429?r=docs) <br>
```js
{
  "status": 1,
  "report": {
    "analyzing": false,
    "views": 10,
    "viewers": [ ... ],
    "type": "File",
    "created": "So., 05.03.2023, 22:19 UTC",
    "sha256": "d30483304aab6b42545f818c1d9bf0c101d24db6294ab7d764f6eb6f2c9cf429",
    "md5": "ee098acd09bb6f8410398539eeb01531",
    "file_type": "Win32 EXE",
    "color": "Red",
    "file_size": "0.295936 MB (0.295936 Bytes)",
    "file_signed": "File Not Signed",
    "result": "Malware - TROJAN.RANSOMX",
    "behavior": "Matching Behavior:  No Category! - TROJAN.RANSOMX",
    "score": 100,
    "name": "ee098acd09bb6f8410398539eeb01531.virus",
    "engines": [
      {
        "name": "VirusTotal Detection Report",
        "result": "26 / 70 - 37%",
        "color": "Red",
        "link": "https://www.virustotal.com/gui/file/d30483304aab6b42545f818c1d9bf0c101d24db6294ab7d764f6eb6f2c9cf429/detection",
        "scanned": true
      },
      {
        "name": "OpenTip-Kaspersky (Dynamic & Static) Report",
        "result": "Malware - 1 Detections",
        "color": "Yellow",
        "link": "https://opentip.kaspersky.com/d30483304aab6b42545f818c1d9bf0c101d24db6294ab7d764f6eb6f2c9cf429/results",
        "scanned": true
      },
      {
        "name": "Triage Sandbox Analysis",
        "result": "10/10 Detection Score",
        "color": "Red",
        "link": "https://tria.ge/230305-zkrdzshd64/",
        "scanned": true
      },
      {
        "name": "MetaDefender Cloud Analysis",
        "result": "Infected - 1/1 - 100%",
        "color": "Red",
        "link": "https://metadefender.opswat.com/results/file/d30483304aab6b42545f818c1d9bf0c101d24db6294ab7d764f6eb6f2c9cf429/hash/overview",
        "scanned": true
      }
    ],
    "activities": [
      { "id": "redline", "status": "High", "description": "RedLine" },
      { "id": "65-A70", "status": "High", "description": "RedLine payload" },
      {
        "id": "browser_user_data_harvesting",
        "status": "High",
        "description": "Reads user/profile data of web browsers"
      },
      {
        "id": "sig_crypto_wallet",
        "status": "High",
        "description": "Accesses cryptocurrency files/wallets, possible credential harvesting"
      },
      {
        "id": "checks_uninstall_regkeys",
        "status": "High",
        "description": "Checks installed software on the system"
      },
      {
        "id": "46-A14",
        "status": "Low",
        "description": "Suspicious behavior: EnumeratesProcesses"
      },
      {
        "id": "77-A88",
        "status": "Low",
        "description": "Suspicious use of AdjustPrivilegeToken"
      }
    ],
    "networks": [
      {
        "status": "Good",
        "color": "none",
        "type": "Unknown",
        "method": "tcp",
        "response": "91.215.85.15:25916"
      },
      {
        "status": "Good",
        "color": "none",
        "type": "dns",
        "method": "udp",
        "response": "15.85.215.91.in-addr.arpa"
      },
      { ... }
    ],
    "dropped": [
      {
        "name": "memory/3232-118-0x0000000002680000-0x00000000026DA000-memory.dmp",
        "md5": "Not Calculated",
        "type": "dotnet32",
        "path": "Unknown"
      },
      {
        "name": "memory/3232-119-0x0000000004F10000-0x000000000540E000-memory.dmp",
        "md5": "Not Calculated",
        "type": "dotnet32",
        "path": "Unknown"
      },
      {
        "name": "memory/3232-120-0x0000000002740000-0x0000000002798000-memory.dmp",
        "md5": "Not Calculated",
        "type": "dotnet32",
        "path": "Unknown"
      },
      { ... }
    ],
    "yara": [ ... ],
  }
}
```

## Threat detection score calculation
<p class="warn">The threat detection score is calculated based on the following factors: </p>

* VirusTotal detection rate 
* OpenTip-Kaspersky detection rate 
* Triage Sandbox detection rate 
* MetaDefender Cloud detection rate 
* RedLine detection rate 
* Found on MalwareBazaar
* Found on HybridAnalysis
* Suspicious behavior and activities
* High risk network activity and Rules

## Report Chain
1. `https://analyze.neiki.dev` <br>
2. `https://analyze.neiki.dev/search.html` <br>
3. `https://analyze.neiki.dev/generate?hash={sha256}` <br>
4. `https://analyze.neiki.dev/reports/{sha256}` <br>

## Information

The analyze report generator is a tool that allows you to generate detailed reports on any file based on its SHA256 hash. <br>
With the analyze report generator, you can quickly and easily get detailed information about any file, including its behavior, potential security risks, and more. <br>

To get started with the analyze report generator, simply enter the SHA256 hash of the file you want to analyze into the search bar on the homepage. <br>


## Support and Contact
You can find the contact details in the "Support and Contact" section.


<p class="warn"> Last updated: 12.03.2023 </p>