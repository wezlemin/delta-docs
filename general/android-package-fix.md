# Fix "App Not Installed (– Package Conflicts)" on Android (No PC)
## Before you continue...
- Do you have Roblox/Delta already installed? Delete it (then try reinstalling).
- Are you using the latest version of Android? Update if not (then reinstall). You should have Android 11+ at a minimum.
- Are you downloading from https://deltaexploits.gg? If not, download from there and install.
- Did the APK download correctly? Try using another browser or a VPN!
- Have you enabled "Allow from unknown sources" for Chrome? If not, enable it (then reinstall).
- Do you have Play Protect on (Play Store)? Disable it (then reinstall).
- Do you have multiple profiles / a secure folder? Check if Roblox/Delta is in there.
- What CPU architecture is your phone (use CPU-Z to find out)? If it is ARM32, that might be the reason (Delta sometimes isn't on ARM32).
- Have you tried clearing the cache for the package installer?
- Have you tried using another package installer?

## Instructions
1. **Enable Developer Mode**

   * Settings → About Phone → tap **Build Number** 7 times

2. **Enable USB Debugging**

   * Developer Options → **USB Debugging → ON**

3. **Install Termux**

   * Go to [F-Droid](https://f-droid.org) and click Download F-Droid. Install the APK.
   * Go back to F-Droid and scroll down to Find Apps.
   * Search for **Termux**, scroll down until you see that exact result, and install it.

4. **Prepare Termux**

   * Open Termux
   * Update packages:

     ```
     pkg upgrade
     ```
   * Install ADB tools:

     ```
     pkg install android-tools
     ```

5. **Enable Wireless Debugging**

   * Developer Options → **Wireless Debugging → ON + Allow the connection**
   * Tap **Pair device with pairing code**

6. **Pair Termux/ADB with Your Device**

   * In Termux, run:

     ```
     adb pair IP:PAIRING_PORT
     ```

     * Enter the pairing code shown on the phone
   * Connect to the main port:

     ```
     adb connect IP:MAIN_PORT
     ```

7. **Uninstall the Conflicting App**
     ```
     adb uninstall com.roblox.client
     ```

**Afterwards, try to reinstall. If you have any issues, please contact me.**
