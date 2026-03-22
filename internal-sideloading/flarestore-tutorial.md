# Installing Delta using FlareStore
## Preparation
1. Go to https://flarestore.app/dns. Use Safari, and make sure you have no VPN enabled.
2. Click on Install Pre-Install Profile.
3. Click Allow then Close. Go to Settings > General > VPN & Device Management > FlareStore PreInstall.
4. Install the DNS. You may need to enter your password.
5. Turn your Mobile (Cellular) Data/Wi-Fi off and on.
6. Follow one of the tutorials below:

## Direct Signing
6. Go to https://gloopup.net/Delta/ios/. Copy the "https://cdn.gloopup.net/file/" link.
> Do not download the IPA! In Step 12, it never went to "Install App" when using it.
7. Go to https://flarestore.app/signer.
8. Click "URL" then paste in the cdn.gloopup.net link.
9. Click .mobileprovision and add a .mobileprovision.
> To get mobileprovision and p12:
>>Go to https://osign.ipasign.cc/
>> Click on Certificates and click Download.
>> Go to the Files app on your device and compress the Certificates ZIP.
> You can also download certificates from https://techybuff.com/ksign.
10. Click P12 Certificate and add a .p12. It must be the same certificate as the one you used for .mobileprovision.
11. Enter the P12 Password.
> Put "AppleP12.com" as the password if you used the TechyBuff ZIP. If you used the Osign ZIP, use "osign".
12. Click Sign Application. Afterwards, wait.
13. Click Install App. Click Install when prompted by flarestore.app, then go to your homescreen.
14. Once Delta installs, click it. If it shows an integrity error or crashes, delete it then sign with another certificate.
15. Go back to https://flarestore.app/dns.
16. Click on Install Post-Install Profile.
17. Click Allow then Close. Go to Settings > General > VPN & Device Management > FlareStore PostInstall.
18. Install the DNS. You may need to enter your password.
19. You are done!
> When Delta updates, delete the app. Afterwards, switch the DNS Profile back to Pre-Install, then sign and install Delta again. Then, you can just set the DNS Profile to Post-Install.

## Using the FlareStore App
1. Go to https://gloopup.net/Delta/ios/. Download the IPA.
> Alternatively, you can copy the "https://cdn.gloopup.net/file/" link.
2. Go to https://flarestore.app/app.
3. Click on iPhone & iPad.
4. Click .mobileprovision and add a .mobileprovision.
> To get mobileprovision and p12:
>>Go to https://osign.ipasign.cc/
>> Click on Certificates and click Download.
>> Go to the Files app on your device and compress the Certificates ZIP.
> You can also download certificates from https://techybuff.com/ksign.
5. Click P12 Certificate and add a .p12. It must be the same certificate as the one you used for .mobileprovision.
6. Enter the P12 Password.
> Put "AppleP12.com" as the password if you used the TechyBuff ZIP. If you used the Osign ZIP, use "osign".
7. Click on Sign & Install. Afterwards, wait.
8. Click "FlareStore v1.0 - Install".
9. Click Install App. Click Install when prompted by flarestore.app, then go to your homescreen.
10. Once FlareStore installs, click it. If it shows an integrity error or crashes, delete it then sign with another certificate.
11. Click Allow, then click Continue.
12. Click Continue, then click Get Started.
13. Click "Import IPA", then import the IPA.
> Alternatively, paste the "https://cdn.gloopup.net/file/" link where "https://example.com/app.ipa" is.
14. Wait for the IPA to import.
15. Click Library.
16. Click on the red button next to Delta (Sign).
17. Once packaged, click the red button again. Click Install.
18. When prompted by "localhost.flarestore.vip", click Install.
19. Go to your homescreen. Delta should install.
20. Go back to https://flarestore.app/dns.
21. Click on Install Post-Install Profile.
22. Click Allow then Close. Go to Settings > General > VPN & Device Management > FlareStore PostInstall.
23. Install the DNS. You may need to enter your password.
24. You are done!
> When Delta updates, delete the app. Afterwards, download the latest IPA and import it into FlareStore. Switch the DNS Profile back to Pre-Install, then sign and install Delta. Then, you can just set the DNS Profile to Post-Install again.
