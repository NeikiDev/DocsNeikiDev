# Analytic Script / API

<p class="tip">THE API IS CURRENTLY PRIVATE</p>

## Config

  > The script is located in that path: `https://neiki.dev/analytics/script.js` <br>
  > API route is located here: `https://api.neiki.dev/analytics/analyze`

## How does it work

The script send analytics information to the backend api of neiki.dev, also what page the visitor viewed at what time <br>
If the page is loaded (and the script is included in the header section) the script sends automatically a request to the api <br>
You can view what information and data is send to the api the information section at the bottom of this page.

## Versions and Changelog

<!-- tabs:start -->

#### **Beta-1.5.4 <span class="tab-badge">Latest!</span>**

* Added new action `pagevisit` 
* Added new action `anynom` 
* Added new action `click` 
* Added action query parameter to the api
* Performance improvements and bug fixes in the script
* Stronger encryption for the data in the database
* Obfuscation of the script for privacy 

#### **Beta-0.9.1**

* Added new action `pageview` 
* Added new action `view` 
* Added new action `visited` 
* Added page load tracking 
* Added automated Bug report

#### **Beta-0.3.1**

* Added new action `pageview`
* Anymized the data send to the api
* Added new action `view`
* Removed ip / Geo tracking
* Removed data saving
* API improvements
### **Beta-0.0.1**

* Initial release
* Added new action `pageview`
* Added Tracking cookies
* Added ip / Geo tracking
* Added data saving (temporarily)

<!-- tabs:end -->

## Request

> Example full request: `https://api.neiki.dev/analytics/analyze?version={version}&trId={traceId}&action={action}`

* Requests query parameter
  * `version`: The current version the analyze network is using!
  * `trId`: The random generated visitor trace line id
  * `action`: The action the visitor used on the webpage

## Response

#### Success Status (200)

```js
{
  "success": true,
  "data": {
    "name": "Allow.Byte.Success",
    "AnalyticsLoader": true,
    "analyticsVersion": "{currentVersion}",
    "privacyPolicy": "https://neiki.dev/imprint-privacy",
  }
}
```

#### Failed Status (200)

```js
  {
    "success": false,
    "data": {
      "name": "Disallow.Bit.{FailedBit}",
      "analyticsVersion": "{currentVersion}",
      "privacyPolicy":" https://neiki.dev/imprint-privacy"
    }
  }
```

## Information

### What data does it collect?
* The current version of the script
* The current version of the api
* The current page the visitor is on
* The current time the visitor is on the page
* The current action the visitor did on the page
* The current trace line id of the visitor
* Standard information about the visitor (browser, os, device, etc.)

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

<p class="warn"> Last updated: 12.03.2023 </p>