# Nuxt Sanity Presentation Issue

## Issue Description

I am having an issue integrating Sanity's Visual Editing/Presentation Tool to my Nuxt.js Front-end app.
The log in the presentation tool of sanity studio is:
```
createConnect.js:53 WebSocket connection to 'wss://[project-id].api.sanity.io/v2022-06-30/socket/production?tag=sanity.studio' failed: WebSocket is closed before the connection is established.
```
and
```
Unable to connect to visual editing. Make sure you've setup '@sanity/visual-editing' correctly
```

This issue is consistently replicateable in my work project or a fresh sanity studio project and a fresh new nuxt project like this repo.

## How to Reproduce 

1. Clone this repo
2. Make a new sanity project, get a new sanity project
3. Create a read token, as a prequisite to use `Presentation` tool
4. Update `projectId` and `token` in `sanity.config.ts` and `app/fe-test-presentation/nuxt.config.ts` with yours.
5. In sanity studio, there is a placeholder `Event` document, please add one.
6. Add `presentationTool` and uncomment the `visualEditing` field inside `app/fe-test-presentation/`
7. Open presentation panel and the console, you should see those two error log mentioned at the Issue Description

## Additional Informations

This bug is encountered in these versions:
```
Nuxt version; 3.13 and ^3.14
Sanity version: 3.48 and ^3.64
Nuxt/sanity version: 1.12.2
```



