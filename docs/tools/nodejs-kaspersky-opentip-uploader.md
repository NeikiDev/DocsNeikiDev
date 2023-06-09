# Kaspersky OpenTip Uploader (Node.js)

<p class="tip">SCRIPTS ARE EXPERIMENTAL AND MAY CHANGE AT ANY TIME</p>

## Source Code

  > You can find the latest source code here: `https://analyze.neiki.dev/sources/Opentip-Uploader.js` <br>
  [Download here](https://analyze.neiki.dev/sources/Opentip-Uploader.js?download=true)

## Contributors / Authors

  * [NeikiDev](https://neiki.dev/me.html?r=docs)
  * [JaffaCakes118](https://discord.com/users/256916902939590656)

## How does it work

The script uploads the given file to the Kaspersky OpenTip API and returns the response.
There are 2 upload methods, one that generates an full report based on the response and one that only returns the response.

## Statistics

### [View the Statistics by JaffaCakes118 and Neiki here](https://analyze.neiki.dev/opentip-upload-stats)

<p class="tip"> All upcomming added features will be PRIVATE access only. </p>

All features added to the script above version `1.0.7` will be private access only. <br>
if you want to get access to the private features, you can contact me on Discord: <br>
`Neiki#4405` or you can contact me here [Contact - Info](https://neiki.dev/contact.html?r=pdocs)

#### Bug fixes will be release in the public version as well.

## Versions and Changelog

<!-- select:start -->
<!-- select-menu-labels:Select Version -->

#### --LATEST (1.0.8)--

* Added Public version (without private functions)
* Removed private functions from public version
* Splitted version to public and private

#### --LATEST (1.0.7)--

* Added file size in MegaBytes to console log
#### --1.0.6--

* Bug fixes

#### --1.0.5--

* Added skip check for files above `256mb`
* Added skip check for files with `0` bytes size

#### --1.0.4--

* Added TeraByte (TB) to stats.

#### --1.0.3--

* Fixed ESlint formatting issues
* Fixed bugs & formatting issues

#### --1.0.2--

* Added the function `generateAllTimeStats` to generate Stats of uploads
* Added the function `convertMSToHumanReadable` to generate Human readable time
* Fixed bugs

#### --1.0.1--

* Updated Information at the top of the page.
* Added `DeleteOnComplete` to Settings (Code lines: 14 - 14)
* Added `MoveOnComplete` to Settings (Code lines: 15 - 15)
* Added `GenerateSimpleReport` to Settings (Code lines: 16 - 16)

#### --1.0.0--

* Initial release

<!-- select:end -->

## Settings

<p class="warn"> Settings are located from line 11 to 16 </p>

* `API_KEY` (STRING) - The API key for the OpenTip API
* `path` (STRING) - The path to the file(s) to upload (default: `P:\\Downloads\\`)
* `JustUploadWithoutReport` (BOOLEAN) - Upload the file(s) without generating a report (default: `false`)
* `DeleteOnComplete` (BOOLEAN) - Delete the file(s) after upload (default: `false`)
* `MoveOnComplete` (BOOLEAN) - Move the file(s) after upload (default: `true`)
* `GenerateSimpleReport` (BOOLEAN) - Generate a simple report (default: `true`)

## Packages and Dependencies

* `node:fs` - "Node.js File System Module (fs)"
* `axios` - version: *1.3.4*
```bash
npm install axios --save
```

* `cli-progress` - version: *3.12.0*
```bash
npm install cli-progress --save
```

## Installation Guide

> Download Node.js from [here](https://nodejs.org/en/download/) (LTS recommended)

1. Download the script from the [source code](#source-code) section
2. Open the script in your favorite editor
3. Change the settings to your needs (see settings section)
5. Open a terminal in the folder where the script is located
6. Install the dependencies
```bash
npm install axios --save
``` 
```bash
npm install cli-progress --save
```
7. Run the script
```bash
node Opentip-Uploader.js
```


## Information

### Step by step
* Loads settings
* Creates `/uploaded/` folder if setting `MoveOnComplete` is true (recursive) 
* Creates `/opentip/` folder for the reports (recursive)
* Get all files and subfolders in the given path 
* Uses the Upload method based on the `JustUploadWithoutReport` setting.
* Uploads all files to the Kaspersky OpenTip API
* Generates a report based on the response and based on the settings
* Starts an interval to check if the report is ready (every 5 seconds)


### How long does it take to upload 10 samples?
  <p class="tip"> THIS TIME ARE GIVEN BASED ON OWN USAGE - DEPENDS ON INTERNET CONNECTION</p>

* 10 Samples (1.5 MB) - 1 Minute
* 10 Samples (10 MB) - 2 Minutes

### What is the "getFiles()" function?

The function gets all files and subfolders in the given path and returns an array with all files.

```js
function getFiles(dirPath, fileList = []) {
	const files = fs.readdirSync(dirPath);

	files.forEach(file => {
		const filePath = PATH.join(dirPath, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			getFiles(filePath, fileList);
		}
		else if (stat.isFile()) {
			fileList.push(filePath);
		}
	});

	return fileList;
}
```

## Support and Contact
You can find the contact details in the "Support and Contact" section.

<p class="warn"> Last updated: 16.03.2023 </p>