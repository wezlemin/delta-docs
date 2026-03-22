# Installing Delta via WSFTeam
1. Delete your current version of Delta Roblox. Turn your VPN off if you have one on.
2. Download the Delta IPA by going to https://deltaexploits.gg. Use Safari.
3. Go to https://osign.ipasign.cc/
4. Click on Certificates and click Download.
5. Go to the Files app on your device and compress the Certificates ZIP. Afterwards, go to https://wsfteam.xyz/#configprofiles.
6. Click on a profile then click Allow for the configuration profile.
> For a comparison of the profiles, go to https://wsfteam.xyz/#guide and scroll down to "Which Config Profile do I choose?" <br>

> You can also use Osign's or khoindvn's anti-revoke DNS.
7. Go to System Settings → General → VPN and Device Management. Click Install on the DNS profile, enter your password when prompted, click Next and click Install to confirm.
8. Go to https://wsfteam.xyz/#signer and click .ipa. Select the Delta IPA you downloaded.
9. Click .mobileprovision. Click Choose File and find the Certificates folder. Afterwards, click on of the folders inside and select the mobileprovision file.
10. Click .p12. Click Choose File and find the Certificates folder. Afterwards, click on the folder you used for .mobileprovision and select the .p12 file.
11. Enter the Password (the password is osign).
12. Click "Sign".
13. Wait for the IPA to Sign. Click Open when prompted, and then click Install. If you install Delta but it gives an integrity error upon clicking it, delete it and repeat the steps above using another certificate (the Truck cert worked for me).
15. Go to System Settings → General → VPN and Device Management. Trust the enterprise app and restart your device.
16. Click Delta; you’re done!
> When Delta updates, delete Delta. Afterwards, download the latest IPA, import it into the WSFTeam website, then sign and install it with a certificate.

## WSF Portal Method
Instead of signing the Delta IPA, you can just sign the WSF Portal IPA instead. After you sign it and trust it, do this:
1. Open Portal.
2. Click on Settings, then click on Certificates.
3. Click on the plus (+) symbol at the top right.
4. Click on "Import Certificate File" and add the .p12 you used to install Portal.
5. Click on "Import Provisioning File" and add the .mobileprovision you used to install Portal.
6. Enter "osign" as the password, then click Save. If nothing shows, try again.
7. Click on Library, then click the plus (+) symbol at the top right and click Import from Files.
8. Select the Delta IPA you downloaded and click Open.
9. Wait for it to import, then click Sign on the Delta that appears.
10. Click Start Signing and wait. Click Install when prompted.
11. Once it says it's completed, just click Open and check your home screen. You can now click Delta and use it!
> When Delta updates, delete Delta. Afterwards, download the latest IPA, import it into Portal, then sign and install it.
