# Publish and submit Northstar Sessions

Job ID `6yu9lANrLyYmpVibYhtc`. Use the accounts authorized for this assignment. The local package contains the code, documentation and evidence.

1. Extract the final ZIP. Sign in to GitHub and create an empty private repository named `northstar-sessions`. Leave the initial README, license and .gitignore options blank. Copy the HTTPS clone URL. In PowerShell, open the extracted `Northstar-Sessions` folder and run:

   ```powershell
   git init -b main
   git add .
   git commit -m "Build Northstar Sessions registration landing page"
   $repoUrl = Read-Host "Paste the new GitHub repository HTTPS clone URL"
   git remote add origin $repoUrl
   git push -u origin main
   ```

   If Git asks for an identity, set it with `git config user.name` and `git config user.email` in this repository and retry the commit. In the repository's Settings, invite the person specified by SkillNexa to read the repository and confirm access. [GitHub import instructions](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

2. In the authorized Netlify account, choose **Add new project** > **Import an existing project** > **GitHub**. Authorize access to the new repository and select it. Use branch `main`, repository root as the base, build command `npm run build`, and publish directory `dist`. The included configuration selects Node 22. Confirm the deploy log uses Node 22.12 or later. Apply any access restrictions required by the assignment so the reviewer can open the preview. Deploy and copy the resulting production HTTPS URL. [Netlify Vite setup](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/)

3. Open the resulting HTTPS URL in a fresh browser session. Verify both navigation targets, the logo and hero image, invalid email and missing consent, and save/reload/update/remove with `alex@northstar.example`. Check the browser console for errors. Confirm that the reviewer can open the HTTPS URL.

4. Fill in the actual repository and HTTPS URLs in `COMPLETION_NOTE.txt`, then create the Drive folder `6yu9lANrLyYmpVibYhtc_Completed`. Upload the updated completion note, README, responsive audit, registration results, and entire evidence folder. Upload the final ZIP if the assignment asks for a source-code attachment. Share the Drive folder with the reviewer identified in the assignment as **Viewer** and copy its link. Update the completion note with the actual Drive folder link and replace the copy in Drive. If attaching the ZIP, refresh it with the updated note. [Google Drive sharing steps](https://support.google.com/drive/answer/7166529)

5. In the assigned SkillNexaHub dashboard, open **My Work** > **Assigned Projects**, then open job `6yu9lANrLyYmpVibYhtc`. Use its submission control and paste the Drive folder, GitHub repository and live HTTPS URLs. Attach the ZIP if requested by the assignment panel. Verify access for the reviewer, submit, and check the dashboard for the recorded submission.
