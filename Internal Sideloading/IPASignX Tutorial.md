# Installing Delta with IPASignX
**This is an online signer unlike KSign which is an app. This is my Feather/Osign tutorial (https://rentry.co/delta-osign) without Feather/Osign.**
1. Delete your current version of Delta Roblox. Turn your VPN off if you have one on.
2. Download the Delta IPA by going to https://deltaexploits.gg. Use Safari.
3. Go to https://osign.ipasign.cc/
4. Click on Certificates and click Download.
5. Go to the Files app on your device and compress the Certificates ZIP. Afterwards, go back to the Osign website.
6. Click on DNS Config and click Allow for the configuration profile.
> This is for Osign. You should still have an anti-revoke DNS though for IPASignX (it can be khoindvn's, for example).
7. Go to System Settings → General → VPN and Device Management. Click Install on the DNS profile, enter your password when prompted, click Next and click Install to confirm.
8. Go to https://sign.ipasign.cc and click Browse on IPA File. Click Choose File and select the Delta IPA you downloaded.
9. Click Browse on P12 Certificate File. Click Choose File and find the Certificates folder. Afterwards, click on of the folders inside and select the p12 file.
10. Enter the P12 Certificate Password (the password is osign).
11. Click Browse on Provisioning Profile. Click Choose File and find the Certificates folder. Afterwards, click on the folder you used for P12 Certificate File and select the mobileprovision file.
12. Click “Sign it now!”
13. Wait for the files to upload and process.
14. Click the link it generates.  Scroll down and click “Install Now”. If you see that the Certificate Status is “revoked”, ignore this (because in my case, it actually worked). If you install Delta but it gives an integrity error upon clicking it, delete it and repeat the steps above using another certificate (the Truck cert worked for me).
15. Go to System Settings → General → VPN and Device Management. Trust the enterprise app and restart your device.
16. Click Delta; you’re done!

**This tutorial was created by @quappingreal on Discord**
