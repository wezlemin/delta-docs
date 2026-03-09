# Recommended: Installing Delta via SideStore
**Refer to https://docs.sidestore.io/docs/troubleshooting/error-codes#apple-developer-errors for any problems or additional information.**
**If you want to see a different version of this guide, look at the Windows/MacOS/Linux sections here: https://docs.deltaexploits.gg/installation/ios**

## Requirements
To install SideStore, you will need:
- An iPhone, iPad, or iPod touch with a passcode running iOS/iPadOS 15.0 or higher (the iDevice)
- A computer running Windows 8 or higher, macOS High Sierra or higher, or an up-to-date Linux distribution; only for initial install
- An Apple Account (also called an Apple ID)
- A Wi-Fi connection
- Developer Mode (iOS/iPadOS 16+)
> To enable Developer mode, go to Privacy & Security and scroll down to Developer Mode. Enable it; your phone will restart.

## Preparation
1. On your iDevice, go to the App Store and search "LocalDevVPN".
2. Install the app and open it.
> If you cannot use the AppStore as you are in the EU, use https://api.altstore.io/source/adp.se2crid.me?app=com.jkcoxson.LocalDevVPN instead.
3. Click Skip and click Connect.
4. Click Allow and enter your password.

### Mac
5. Go to this link: https://github.com/nab138/iloader/releases/latest/download/iloader-darwin-universal.dmg and download the file.
6. Open the DMG and drag iloader into Applications.

### Windows
> Note: This will only work for 64-bit versions of Windows. Windows 10 on ARM is not supported either.

> To check if your computer is unsupported, open the Run dialog (Win+R) and enter:
> control /name microsoft.system 

> The Control Panel will open. Under the "System" tab, locate "System Type". If you have a "32-bit" operating system, or if you have an "ARM64" processor AND you are using Windows 10, your version of Windows is not supported.
5. Download and install iTunes from the Microsoft Store (https://apps.microsoft.com/store/detail/9PB2MZ1ZMB1S) or directly from Apple (https://www.apple.com/itunes/download/win64).
6. Download the iloader installer as an MSI (https://github.com/nab138/iloader/releases/latest/download/iloader-windows-x64.msi; recommended) or as an EXE (https://github.com/nab138/iloader/releases/latest/download/iloader-windows-x64.exe).
7. Run the installer.

### Linux
> https://docs.sidestore.io/docs/installation/prerequisites
## Installation
1. Connect your iDevice to your computer using a USB cable (or a wireless pad... in my case). 
2. Go to Applications on your computer and open iloader. Click Open when prompted. You may need to trust your computer and enter your password.
3. Enter your Apple ID Email and password; it is case-sensitive! It does not need to be the account associated with the iDevice. Afterwards, click Login and wait until it gives a 2FA popup.
4. On your iDevice, click Allow. Afterwards, enter the code it displays into the box in iloader and click Submit.
5. Select your iDevice in iloader.
6. Click "SideStore (Stable)" and wait until it finishes installing.
> The lazy way of installing (just use Sideloadly if you want to do this): Instead of choosing "SideStore (Stable)" in iloader, choose "Import IPA" instead. Select the Delta IPA from https://deltaexploits.gg. Afterwards, wait for it to Sign and Install. 
7. On your iDevice, go to Settings > General > VPN & Device Management. Click the Developer App that shows with your Apple ID email.
8. Trust it and click Allow. For later iOS/iPadOS, it will show as Allow & Restart. Enter your password if you are prompted.
9. Go to your home screen and open SideStore. Click Allow for the local network popup.
10. Click Settings and click "Sign in with Apple ID". Enter your Apple ID email and password; the same one you used for iloader! Afterwards, click Sign in and wait.
11. Click "Got It", then go to My Apps.
12. Click the "7 DAYS" counter next to SideStore. If you receive a prompt asking to revoke or create a new signing certificate, tap 'Yes' or 'Refresh Now'.
> 7 represents the number of days until an app's expiry. It will update dynamically to show the number of days left. Tapping it refreshes the app.
13. Go to https://deltaexploits.gg and download the IPA.
> Due to a Delta update, you will need to sign the IPA with a certificate before continuing: https://rentry.co/delta-ipasignx
> Instead of clicking "Install Now", click "Download IPA".
14. In the My Apps section of SideStore, click the plus (+) button at the top left. Find the Delta IPA you signed with the certificate and click it.
15. Wait until Delta appears. Click Keep App Extensions.
16. Check your Home Screen; you now have Delta!
> DO NOT TURN OFF LOCALDEVVPN OR BACKGROUND REFRESHING WILL NOT WORK (SO YOU WILL HAVE TO SIGN SIDESTORE AGAIN). LocalDevVPN is required to be turned on any time you wish to install, update, or refresh apps in SideStore.
