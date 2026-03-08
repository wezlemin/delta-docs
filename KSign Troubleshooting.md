# KSign Notes/Troubleshooting
If NONE of the KSigns or ESigns work (because they are all *REVOKED*), SCROLL TO THAT SECTION!

## General Information:
DO NOT DELETE THE DNS OR USE A VPN. IT IS ALSO RECOMMENDED TO NOT DELETE THE KSIGN AS YOU WILL NEED IT WHEN DELTA UPDATES.

If you open Roblox and it gives an update pop-up, join the Delta Discord server (https://discord.com/invite/deltax) and wait until the devs ping about an update for Delta. Once they ping, delete Delta, download the new IPA, then import it in KSign and sign it.

If you click on Delta/KSign and get an integrity error, or if you click on it and it immediately closes/crashes, you will need to delete Delta and/or the KSign/ESign. Afterwards, try another KSign/ESign. MAKE SURE YOU TRY THEM ALL, DON’T GIVE UP!

If you can’t delete the ESigns/KSigns in VPN and Device Management, go to Settings > Screen Time > Content & Privacy Restrictions > Turn off the toggle.

Note for KSign: You can import Delta into Library immediately (this is not used because some users find it difficult to find the IPA).

## If you cannot access Khoindvn:
> Use this website: https://wezlemin.github.io/ksignz/ (or read on...)

- If you cannot access https://khoindvn.io.vn, try these:
> Use mobile/cellular data
> Use hotspot
> Go to https://techybuff.com/ksign and see if you can download the KSigns there.

- If it is just the KSign/ESign downloads that do not work (https://api.khoindvn.io.vn), right-click one (on khoindvn.io.vn or techybuff.com/ksign) and copy the link. Afterwards, go to https://www.view-page-source.com/, paste the link and look at its output. Here are some examples:
> Failed to fetch URL: failed to fetch URL: Get "itms-services:?action=download-manifest&url=https://download.khoindvn.io.vn/Plist/48bhl.plist": unsupported protocol scheme "itms-services"
> Failed to fetch URL: failed to fetch URL: Get "itms-services:?action=download-manifest&url=https://download.khoindvn.io.vn/Plist/3z8yi.plist": unsupported protocol scheme "itms-services"
- Take the part between the two quotation marks (that is, itms-services:?action=download...plist”).
- Next, add :// before the ?
- Finally, copy the link into your browser. Examples:
> itms-services://?action=download-manifest&url=https://download.khoindvn.io.vn/Plist/48bhl.plist
> itms-services://?action=download-manifest&url=https://download.khoindvn.io.vn/Plist/3z8yi.plist

- If you cannot access Khoindvn as a whole, you can try Osign (https://rentry.co/delta-osign) or the AppleJr signer (https://rentry.co/delta-applejr). 

## If NONE of the KSigns or ESigns work (because they are all *REVOKED*/*BLACKLISTED*), you can do one of the following: 
- You can use Direct Install if it is not down/broken.
- You can sideload with a computer (https://sidestore.io, https://sideloadly.io).
> My SideStore tutorial: https://rentry.co/delta-sidestore (long-term, harder to setup)
> My AltStore tutorial: https://rentry.co/delta-altstore (please just use SideStore)
> My Sideloadly tutorial: https://rentry.co/delta-sideloadly (short-term, easier to setup)
- If you have a computer, and your phone is running iOS 17.0 - iOS iOS 18.0.1, BlacklistBeGone (https://github.com/jailbreakdotparty/BlacklistBeGone) might work for you.
- You can buy a certificate here (https://muacert.com).
> Other websites include https://arcticsign.app/, https://ko-fi.com/rustsign and https://wsfteam.xyz/ (NOTE: MIGHT BE OUT OF STOCK).
> This website also provides certificates: https://flarestore.app/
- You can factory reset to potentially unblacklist yourself. However, this does not always work and it is tedious (you need to backup your data). 
> To factory reset: https://support.apple.com/en-gb/108931

**IF YOU CANNOT DO ANY OF THE ABOVE, YOU CANNOT EXPLOIT. WAIT FOR DIRECT INSTALL TO GET FIXED OR WAIT FOR NEW FREE CERTIFICATES TO GET RELEASED.**

**THIS TUTORIAL IS BY @quappingreal ON DISCORD**
