# How to get old rigth click menu on Windows 

## What you need

<p class="tip">You need Administator privileges on your Windows PC to edit registry keys.</p>

## Old and New

![Old](https://cdn.neiki.dev/docs-cdn/guides/windows_old_menu.png)

![New](https://cdn.neiki.dev/docs-cdn/guides/windows_new_menu.png)

## Setup with CMD (Command Prompt)

* Open the `CMD` (Command Prompt) with Administator privileges <br> (Right click on the `CMD` and click on `Run as Administrator`)
* Type in the following command:

```bash
reg.exe add "HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f
```

* Then press `Enter` on your keyboard
* Now you should see the following message:

```bash
The operation completed successfully.
```

* Now you can close the `CMD` (Command Prompt)
* **Restart your PC**

## Command structure

* `reg.exe` - The command to edit the registry keys
* `add` - The command to add a new registry key
* `"HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32"` - The path to the registry key
* `/f` - The command to force the command to run


## Setup with Regedit

* Open the `Regedit` with Administator privileges <br> (Right click on the `Regedit` and click on `Run as Administrator`)
* Go to the following path: `HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID\`
* Right click on the `CLSID` folder and click on `New` > `Key`
* Name the new key: `{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}`
* Right click on the new key and click on `New` > `Key`
* Name the new key: `InprocServer32`
* Open task manager and **restart** the `explorer.exe` process (Windows Explorer)

## HELP & VIDEO

<p class="warn"> If you still need help or want to watch a video, please check out the following links: </p>

### [Youtube Video](https://www.youtube.com/watch?v=klVbfbTOVP8)

## Support and Contact
If you have any questions or run into any issues while using our Docs or Guides,  <br>
please don't hesitate to contact us. <br>
You can find our contact information in the Support and Contact section.

<p class="warn"> Last updated: 18.03.2023 - Guide written by NeikiDev </p>