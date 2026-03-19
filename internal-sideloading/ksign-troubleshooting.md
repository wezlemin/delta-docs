# KSign Notes/Troubleshooting
If NONE of the KSigns or ESigns work (because they are all *REVOKED*), SCROLL TO THAT SECTION!

## General Information:
- DO NOT DELETE THE DNS OR USE A VPN. IT IS ALSO RECOMMENDED TO NOT DELETE THE KSIGN AS YOU WILL NEED IT WHEN DELTA UPDATES.
- If you open Roblox and it gives an update pop-up, join the Delta Discord server (https://discord.com/invite/deltax) and wait until the devs ping about an update for Delta. Once they ping, delete Delta (from App Library), download the new IPA, then import it in KSign and sign and install it.
- If you click on Delta/KSign and get an integrity error, or if you click on it and it immediately closes/crashes, you will need to delete Delta and/or the KSign/ESign. Afterwards, install another KSign/ESign. MAKE SURE YOU TRY THEM ALL, DON’T GIVE UP!
- If you can’t delete the ESigns/KSigns in VPN and Device Management, go to Settings > Screen Time > Content & Privacy Restrictions > Turn off the toggle.
- Note for KSign: You can import Delta into Library immediately (this is not used because some users find it difficult to find the IPA).
- If you get an extraction error when using KSign, please ensure the IPA downloaded correctly (it should not be 0 bytes, it should be 100MB+). If you did download it correctly, go to KSign Settings > Archive & Extraction > Switch the extraction library. Afterwards, close the app and reopen it, then try to reimport.

## What to do if you cannot access khoindvn
> Use this website: https://khoindvn.pages.dev/ (or read on...) <br>
> List of api.khoindvn.io.vn: https://pastebin.com/raw/4dMmJBs3

- If you cannot access https://khoindvn.io.vn, try these:
> Use mobile/cellular data <br>
> Disconnect and reconnect to Wi-Fi <br>
> Use a hotspot created on another phone <br>
> Go to https://techybuff.com/ksign and see if you can download the KSigns there.

- If it is just the KSign/ESign downloads that do not work (https://api.khoindvn.io.vn), right-click one (on khoindvn.io.vn or techybuff.com/ksign) and copy the link. Afterwards, go to https://www.view-page-source.com/, paste the link and look at its output. Here are some examples:
> Failed to fetch URL: failed to fetch URL: Get "itms-services:?action=download-manifest&url=https://download.khoindvn.io.vn/Plist/48bhl.plist": unsupported protocol scheme "itms-services" <br>
> Failed to fetch URL: failed to fetch URL: Get "itms-services:?action=download-manifest&url=https://download.khoindvn.io.vn/Plist/3z8yi.plist": unsupported protocol scheme "itms-services"
- Take the part between the two quotation marks (that is, itms-services:?action=download...plist”).
- Next, add :// before the ?
- Finally, copy the link into your browser. Examples:
> itms-services://?action=download-manifest&url=https://download.khoindvn.io.vn/Plist/48bhl.plist <br>
> itms-services://?action=download-manifest&url=https://download.khoindvn.io.vn/Plist/3z8yi.plist

- If you cannot access Khoindvn as a whole, you could try using another signer.

## What to do if NONE of the KSigns or ESigns work (because they are all *REVOKED*/*BLACKLISTED*)
- You can use Direct Install if it is not down/broken.
- You can sideload with a computer (https://sidestore.io, https://sideloadly.io).
- If you have a computer, and your phone is running iOS 17.0 - iOS iOS 18.0.1, BlacklistBeGone (https://github.com/jailbreakdotparty/BlacklistBeGone) might work for you.
- You can buy a certificate here (https://muacert.com).
> Other websites include https://arcticsign.app/, https://ko-fi.com/rustsign and https://wsfteam.xyz/ (NOTE: MIGHT BE OUT OF STOCK). <br>
> This website also provides certificates: https://flarestore.app/
- You can factory reset to potentially unblacklist yourself. However, this does not always work and it is tedious (you need to backup your data). 
> To factory reset: https://support.apple.com/en-gb/108931

**IF YOU CANNOT DO ANY OF THE ABOVE, YOU CANNOT EXPLOIT. WAIT FOR DIRECT INSTALL TO GET FIXED OR WAIT FOR NEW FREE CERTIFICATES TO GET RELEASED.**
