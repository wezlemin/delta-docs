# Android Package Fix

## Errors

* 1: "App not installed as package appears to be invalid"
* 2: "App not installed as package conflicts with an existing package"
* 3: "App not installed as app is not compatible with your phone"
* 4: "There was a problem parsing the package"

## Before you continue...

* 2/1: Do you already have Roblox or Delta installed? Try deleting them first, then reinstall.
* 1/4/3: Are you using the latest version of Android? If not, update it and then reinstall. You should have Android 11 or higher at a minimum.
* 1/4/3: Are you downloading it from [https://deltaexploits.gg](https://deltaexploits.gg)? If not, download and install it from there.
* 1/4: Did the APK download correctly? Try downloading it using another browser or a VPN.
* 1/3: Have you enabled “Allow from unknown sources” for your browser? If not, enable it and try reinstalling.
> Settings > Apps > Special App Access > Install Unknown Apps, select your browser (e.g., Chrome), and toggle Allow from this source.
* 1/3: Is Play Protect enabled in the Play Store? Try disabling it, then reinstall.
> Open the Google Play Store app, tap your profile icon, select Play Protect, then Settings (gear icon), and toggle off Scan apps with Play Protect.
* 1/2: Do you have multiple profiles or a Secure Folder on your device? Check if Roblox or Delta was installed there.
* 3/1/4: What is your phone’s CPU architecture? (You can use CPU-Z to find out.) If it is ARM32, that might be the issue, since Delta sometimes doesn’t support ARM32.
> As of now, Delta only supports "arm64-v8a" and "armeabi-v7a".
* 3/1/4: Have you checked if the Roblox folder exists? If not, delete it.
> Install ZArchiver, go to 0/storage/emulated/Android/data then delete the com.roblox.client folder (if it is there).
* 1/4: Have you tried clearing the cache for the package installer?
* 1/4: Have you tried using a different package installer?

If none of the solutions worked, you may still have Roblox installed, even if it seems uninstalled. Here is the solution:

## Instructions (NO PC)

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
   *   Update packages:

       ```
       pkg upgrade
       ```
   *   Install ADB tools:

       ```
       pkg install android-tools
       ```
5. **Enable Wireless Debugging**
   * Developer Options → **Wireless Debugging → ON + Allow the connection**
   * Tap **Pair device with pairing code**
   * You need to make sure Termux or Settings is in split view or in a floating window for the next step.
6. **Pair Termux/ADB with Your Device**
   *   In Termux, run:

       ```
       adb pair IP:PAIRING_PORT
       ```

       * Enter the pairing code shown on the phone
   *   Connect to the main port:

       ```
       adb connect IP:MAIN_PORT
       ```
7.  **Uninstall the Conflicting App**

    ```
    adb uninstall com.roblox.client
    ```


> Try running `adb shell pm uninstall --user 0 com.roblox.client` instead if the error still appears.

> Run `adb shell pm list users` to see all the profiles on your phone, in case you have others you do not know about. Change 0 to the profile number, and the command for each profile.

> Other commands: <br />
> `adb shell cmd package uninstall --user 0 com.roblox.client` AND `adb shell cmd package clear com.roblox.client` <br />
> `adb shell pm install-existing com.roblox.client` AND `adb uninstall com.roblox.client` <br />

## Instructions (With PC)

If you do not want to use Termux, you can run the `adb` commands on a computer instead.

1. **Download ADB (Platform Tools)**

   * Go to [https://developer.android.com/tools/releases/platform-tools](https://developer.android.com/tools/releases/platform-tools)
   * Download and extract it

2. **Enable Developer Mode**

   * Settings → About Phone → tap **Build Number** 7 times

3. **Enable USB Debugging**

   * Developer Options → **USB Debugging → ON**

4. **Connect Your Phone**

   * Plug your phone into your computer using a USB cable
   * Allow the **USB debugging prompt**

5. **Open a Terminal in Platform Tools**

   * Open Command Prompt / PowerShell / Terminal inside the extracted folder
> For the following commands on MacOS/Linux, you will need to add ./ before adb.

6. **Check Connection**

   ```
   adb devices
   ```

   * Accept the prompt on your phone if it appears

7. **Uninstall the Conflicting App**

   ```
   adb uninstall com.roblox.client
   ```

   If that does not work:

   ```
   adb shell pm uninstall --user 0 com.roblox.client
   ```

8. **(Optional) Check Other Users**

   ```
   adb shell pm list users
   ```

   * Replace `0` with the correct user ID if needed

> Other commands: <br />
> `adb shell cmd package uninstall --user 0 com.roblox.client` AND `adb shell cmd package clear com.roblox.client` <br />
> `adb shell pm install-existing com.roblox.client` AND `adb uninstall com.roblox.client` <br />
