# Installing Delta via KSign/ESign

### NOTES/TROUBLESHOOTING: https://rentry.co/delta-troubles-ksign

### Video Tutorials for KSign:
https://www.youtube.com/watch?v=IpbxAlBTEjY
https://www.youtube.com/watch?v=3-gPgycpzZo 

### Written Tutorials for KSign:
https://docs.google.com/document/d/1H59uu1YVm0sVFCxIE5l1_JUZ3ZbxtfEGHi3P23sE8Rc/edit?tab=t.0
https://docs.deltaexploits.gg/installation/ios

## Preparation
>If you don't want to use khoindvn (just use it, it's safe), read the "KSign Method without khoindvn" section.
1. Delete your current version of Delta Roblox. Turn your VPN off if you have one on (if you're stupid and don't know how to, delete it instead).
2. Go to https://khoindvn.io.vn on Safari.
>⚠️ Ignore all pop-ups/redirects! If you get redirected, just swipe back (or go to the khoindvn tab) to return to khoindvn.
3. Scroll down, click on Download DNS Profile and press Allow. If the button does not work, click here (https://github.com/Nyasami/getUDID-JS/releases/download/1.0.0/signed_khoindvn_fullchain.mobileconfig).
4. Go to Settings and click on Profile Downloaded (or General → VPN and Device Management). Install the DNS Profile. Enter your password if prompted.
5. On your Home Screen, a bookmark will appear. You do not need to install KSigns/ESigns from it!
6. Go back to khoindvn.io.vn. Scroll to KSign/ESign and download one of them (such as China National Heavy Duty Truck Group Co., Ltd). DO NOT FORGET THE NAME OF THE ESIGN/KSIGN YOU DOWNLOADED!
>💡 It is recommended to try the KSigns first. Start with the one at the top and work your way down the list if it is revoked.
>💡 To save time, you could install multiple KSigns at a time.
7. Go to your phone's Home Screen and wait for the ESign/KSign app to appear. Click on it and make sure you don't get an integrity error (if you do, delete it and download another ESign/KSign). If you get an "Untrusted Developer" error, continue reading this guide.
> If it does not appear, read Troubleshooting.
8. Go to Settings → General → VPN and Device Management. Trust the enterprise app and restart.
9. Download the Delta IPA by going to https://deltaexploits.gg. Use Safari.
10. Use one of the methods below:

## KSign Method
1. Open KSign, and in the Files section, click the plus (+) button.
> If KSign crashes upon opening, you will need to get a different one!
2. Click Import Files and add your IPA file.
3. Click the Delta IPA that appears in KSign Files and click Import to Library.
4. Wait until Delta shows in Downloaded Apps in Library.
> ⚠️ KSigns have their certificate bundled, so you do not need to import it. The old KSigns were updated to be like this as well. If you read the "KSign Method without khoindvn" section, do the following:
>> If you haven't already, download the Certificates ZIP by going to https://osign.ipasign.cc/, clicking "Certificates" and then clicking "Download".
>> In KSign, click on Certificates and click Import. Import the Certificate File (the .p12 file you used on the IPASignerX website) and the Provisioning File (the .mobileprovision file). Set the password to "osign" and click Save. If nothing shows, try again.
>>> If you forgot the name of the KSign you installed, check in Settings → General → VPN and Device Management.

5. Click Delta and click Sign and Install. Press Start Signing and wait. Click Install when prompted. You might need to Sign and Install separately if it does not work.
> Make sure Not Secure Connection Warning (Settings > Safari) is DISABLED!
>⚠️ If Delta gets stuck on the Ready screen, do the following:
>> Go to the "Settings" Section of KSign.
>> Tap "Server & SSL".
>> Change "Installation Type" to "Semi-Local".
>> Click “Suspend” to close KSign. Afterwards, reopen it.
>> Try resigning + reinstalling again.
6. Go to your device's home screen and wait until the new KSign app installs, which will turn into a Delta. You can now click it and play Roblox.

## ESign Method
1. Open ESign and click the ... button.
2. Click Import and add your Delta IPA file.
3. Go back to https://khoindvn.io.vn (the website, because the bookmark will not work) and click Download Certificate. If the button does not work, click here (https://github.com/S-PScripts/certs-download/raw/refs/heads/main/ESignCert.zip). You can also download the certificates from https://techybuff.com/ksign.
4. Go to ESign again and import the Certificates zip.
5. Click on the Certificates zip and click Unzip.
6. Click ESign Cert → Find your ESign cert and click it. After that, click Import Certificate Management.
> If you forgot the name of the ESign you installed, check in Settings → General → VPN and Device Management.
7. Click the Delta IPA and click Import App Library.
8. Wait until Delta shows in Apps.
9. Click it and click Signature. If it shows a revoked message, you might not be able to install Delta with the ESign you are using. Click Install when prompted.
10. Go to your device's home screen and wait until the new ESign app installs, which will turn into a Delta. You can now click it and play Roblox.

### KSign Method without khoindvn
> Why would you do this? I have no idea.
1. Read this: https://rentry.co/delta-ipasignx until you finish Step 16. Instead of using the Delta IPA, use KSign's: https://github.com/Nyasami/KSign/releases/latest/download/KSign.ipa. You can use the Osign DNS or khoindvn DNS (or any other anti-revoke DNS), it does not matter much. Make sure to download the Certificates ZIP.
2. You can now read the KSign Method section. You will need to import the .p12 and .mobileprovision files.

**THIS TUTORIAL IS BY @quappingreal ON DISCORD; YOU ARE FREE TO SHARE IT.**
