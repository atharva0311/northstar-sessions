# Northstar Sessions

A responsive registration landing page for Robert Jenkins. The page follows the supplied desktop and mobile designs and saves a single registration in the visitor's browser with their consent.

**[Open the live site](https://keen-begonia-aab2b4.netlify.app/)** Â· [Setup and source guide](Northstar-Sessions/README.md) Â· [Desktop screenshot](Northstar-Sessions/evidence/desktop_1440.png) Â· [Mobile screenshot](Northstar-Sessions/evidence/mobile_390.png)

## Try the registration

Select **Start your registration**. Use a sample name, `demo@northstar.example`, and any role. Check the storage consent box and select **Save my registration**. Refresh the page to see the saved state, then try **Update details** or **Remove registration**. Registration details stay in the current browser.

## Verification

The production build and lint checks passed. The live site also passed all [10 registration cases](Northstar-Sessions/Registration_Results.csv) and [eight responsive viewport checks](Northstar-Sessions/Responsive_Audit.csv) in headless Chrome. The linked CSVs contain the original local QA results. [Design measurements](Northstar-Sessions/evidence/DESIGN_COMPARISON.txt) show how the implemented desktop and mobile layouts compare with the supplied references.

## Run locally

Use Node.js 22.12 or later.

```sh
cd Northstar-Sessions
npm ci
npm run dev
```
