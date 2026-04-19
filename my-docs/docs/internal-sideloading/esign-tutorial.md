## ESign Method (non-"Ysign" version)
> ⚠️ This version of ESign is DEPRECATED! You are probably looking for the ESign "Ysign" Method.

### Preparation
Due to a Delta update, you will need to sign the Delta IPA with any certificate before continuing. You can use IPASignX to do this (read my tutorial about it).
However, instead of clicking "Install Now", click "Download IPA". Afterwards, do the following: <br />
1. Go to Files and find the signed IPA (Browse > Downloads). Hold it, then tap Rename.
2. Add ".zip" after .ipa (e.g. NAME.ipa > NAME.ipa.zip). Tap "done", then tap "Use .zip".
3. Tap the file again, and hold the Payload folder once it is created.
4. Tap Compress, then hold Payload.zip once it gets created.
5. Tap Rename, then rename the file to Payload.ipa. Tap "done", then tap "Use .ipa". <br />

### Installation
1. Open ESign and click Ok. Afterwards, click Agree.
2. Click the ... button, then import and add your Delta IPA file. Do not import the IPA to App Library yet.
3. Go to [https://osign.ipasign.cc/](https://osign.ipasign.cc/) to download the certificates.
4. Go to ESign again and import the Certificates zip.
5. Click on the Certificates zip and click Unzip.
6. Click the Certifcates folder, then find the .p12 that corresponds with the certificate name of the ESign you are using. Afterwards, click it, click Import Certificate Management, enter the password (osign) and click OK.
> If you forgot the name of the ESign you installed, check in Settings → General → VPN and Device Management.
7. Click and import the .mobileprovision that corresponds with the certificate name of the ESign you are using.
8. Click the Delta IPA and click Import App Library.
9. Wait until Delta shows in Apps.
10. Click it, then click Signature. If it shows a revoked message, you might not be able to install Delta with the ESign you are using. Click Install when prompted.
11. Go to your device's home screen and wait until the new ESign app installs, which will turn into a Delta. You can now click it and play Roblox.
