# Setup Trap files with Kaspersky IPS

## What you need

<p class="tip">You need a Paid Version of Kaspersky Anti-Virus</p>

<p class="tip">You need the Intrusion Prevention settings on your Kaspersky Application </p>

## Setup the file

* Generate an file with a name you want to use (for example: `BitcoinWallet.txt`) 
* It should be located in a folder like `Documents` or `Desktop` 
* Open the file with a text editor and write any text in it (for example: `This is a Bitcoin Wallet`)
* Copy and save the path of the file / folder in the clipboard (`D:\Documents\BitcoinWallet.txt`)

## Setup the IPS

* Go to your Security Settings

![Security Settings](https://cdn.discordapp.com/attachments/1072425032745222314/1084855405785645137/avpui_kvFYRxCREr.png)

* Make sure that the `Intrusion Prevention` is enabled
* Then click on `Manage resources`

![Manage resources](https://cdn.discordapp.com/attachments/1072425032745222314/1084855306028335104/avpui_wqFS4It07n.png)

* Now click on a folder (for example: `Personal Data`)
* Then click the **Add** button at the top

![Add](https://cdn.discordapp.com/attachments/1072423497634164787/1084849842079137934/avpui_zvmHwBQGFH.png)

* Now paste the path of the file / folder in the `Path` section
* Or open the file explorer with the `Select...` button and select the file / folder
* Give the it a name you like (for example: `Bitcoin Wallet`)

<p class="warn"> If you are adding an folder, you can restrict also all subfolders and files in it </p> 

* If you selected the file / folder, click on the `Add` button

![Path](https://cdn.discordapp.com/attachments/1072423497634164787/1084850120819998883/avpui_9nnDweCkNL.png)

* If you added the file / folder, click on the `Add` button you can now select the `Action`.
* Click on the new added file / folder and now you can select the `Rules` on the right side.
* If you want to add rules for all groups you can **collapse** the `Groups` section and add the rules to all at once.
* There are 4 sections for the rules: `Trusted`, `Low Restricted`, `High Restricted`, `Untrusted`

![Action](https://cdn.discordapp.com/attachments/1072423497634164787/1084852090179960862/avpui_vmJtIOnVWm.png)

<p class="tip"> Make sure you are saving your Settings to Kaspersky </p>

## Notifications

<p class="warn"> Make sure you selected "Log Events" at all groups </p>

<p class="tip"> Sometimes the Notifcations wont work first time because of the Notifcation Settings of Kaspersky </p>

You will get one of these Notifications if someone or something tries to access the file / folder:
![Access](https://cdn.discordapp.com/attachments/1073592385327607942/1084853515542868059/Code_3b6M8vYxUH.png)

## Guide Video
![Video](https://cdn.neiki.dev/attachments/41e0d36d02501434a9b9a3c5d42a7f312267b937cd9192ed2bdb9a5631df85f3.mp4 ':include :type=mp4 width=100% controls')

## My settings

As in the images shown i restricted all groups to deny all actions of the file / folder. <br>
Only "Trusted" applications can access the file / folder, but will also notifiy you about it.

I added 3 files and folders to IPS:
* Fake Bitcoin Wallet
* Fake Images folder
* Fake Password list

I also use the Intrusion Prevention for normal files and folders to make sure that no one can access them.

## Support and Contact
If you have any questions or run into any issues while using our Docs or Guides,  <br>
please don't hesitate to contact us. <br>
You can find our contact information in the Support and Contact section.

<p class="warn"> Last updated: 12.03.2023 - Guide written by NeikiDev </p>