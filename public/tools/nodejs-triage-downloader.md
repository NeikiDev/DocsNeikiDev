# Analytic Script / API

<p class="tip">SCRIPTS ARE EXPERIMENTAL AND MAY CHANGE AT ANY TIME</p>

## Source Code

  > You can find the latest source code here: `https://analyze.neiki.dev/sources/Triage-Downloader.js` <br>
  [Download here](https://analyze.neiki.dev/sources/Triage-Downloader.js?download=true)

## Contributors / Authors

  * [NeikiDev](https://neiki.dev/me.html?r=docs)
  * [JaffaCakes118](https://discord.com/users/256916902939590656)

## How does it work

The script downloads the newest sample based on the given query parameters and saves it to the given path.
It uses the [Tria.ge](https://tria.ge/) API to download the samples.
You need an API key to use the script.

## Versions and Changelog

<!-- select:start -->
<!-- select-menu-labels:Select Version -->

#### --LATEST (1.0.1)--

* Updated Information at the top of the page.
* Excluded `.dmp` files. (Code lines: 108 - 112)

#### --1.0.0--

* Initial release

<!-- select:end -->

## Settings

<p class="tip"> USE_CHUNK_DOWNLOAD is an experimental feature and may not work properly! </p>

* `TRIAGE_API_KEY` (STRING) - The API key for the triage API
* `SEARCH_QUERY` (STRING) - The query to search for based on the triage API [documentation](https://tria.ge/s?q=)
* `PAGES_TO_DOWNLOAD` (NUMBER) - The amount of pages to download (default: 1) - 200 samples per page
* `SKIP_ZIP_ARCHIVES` (BOOLEAN) - Skip zip archives (default: true)
* `KEEP_ORIGINAL_EXTENSION` (BOOLEAN) - Keep the original extension (default: true)
* `USE_CHUNK_DOWNLOAD` (BOOLEAN) - Use chunk download (default: false) 
* `CHUNK_SIZE` (NUMBER) - The chunk size, (default: 20) - files per chunk

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

## Installation

> Download Node.js from [here](https://nodejs.org/en/download/) (LTS recommended)

1. Download the script from the source code section´
2. Open the script in your favorite editor
3. Change the settings to your needs (see settings section)
4. Install the dependencies
```bash
npm install axios --save
``` 
```bash
npm install cli-progress --save
```
5. Run the script
```bash
node Triage-Downloader.js
```


## Information

### Step by step
* Loads settings
* Creates `/downloads/` folder (recursive)
* Creates the search query based on the settings
* Creates an loop for the amount of pages to download 
* Queries the triage API for the search query are stored.
* Collected querys gets filtered and downloaded
* Downloads the files and saves them to the given path


### How long does it take to download 200 samples?
  <p class="tip"> THIS TIME ARE GIVEN BASED ON OWN USAGE - DEPENDS ON INTERNET CONNECTION</p>

* 200 samples with `USE_CHUNK_DOWNLOAD` set to `false` - 40 seconds
* 200 samples with `USE_CHUNK_DOWNLOAD` set to `true` - 10 seconds

### How does the Chunk Download work?
<p class="tip"> THIS FEATURE IS EXPERIMENTAL AND MAY NOT WORK PROPERLY</p>

* The script querys the samples into chunks.
* After the chunks are collected, the script downloads the files in the chunks
* 20 (default) files per chunk in the same time
* That can create an heavy load on the triage API and may result in rate limit errors
* We not recommend to use this feature with over 3 pages (600 samples)

## Support and Contact
You can find the contact details in the "Support and Contact" section.

<p class="warn"> Last updated: 12.03.2023 </p>