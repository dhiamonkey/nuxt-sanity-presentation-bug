### Version
```
Nuxt version; 3.13 and ^3.14
Nuxt/sanity version: 1.12.2
Sanity version: 3.48 and ^3.64
```

## Reproduction

**Link:** 
[My Public Repository of minimal reproduction ](https://github.com/dhiamonkey/nuxt-sanity-presentation-bug) 

#### What is expected?

I can change the title of the placeholder `event` document inside presentation-panel/visual-editing

#### What is actually happening?

Unable to connect frontend app with sanity studio presentation panel.

```
createConnect.js:53 WebSocket connection to 'wss://[project-id].api.sanity.io/v2022-06-30/socket/production?tag=sanity.studio' failed: WebSocket is closed before the connection is established.
```
and
```
Unable to connect to visual editing. Make sure you've setup '@sanity/visual-editing' correctly
```
#### Steps to reproduce
1. Clone said repo
2. Make a new sanity project, get a new sanity project id
3. Create a read token, as a prequisite to use `Presentation` tool
4. Update `projectId` and `token` in `sanity.config.ts` and `app/fe-test-presentation/nuxt.config.ts` with yours.
5. In sanity studio, there is a placeholder `Event` document, please add one.
6. Add `presentationTool` in sanity plugin and uncomment the `visualEditing` field inside `app/fe-test-presentation/`
7. Open presentation panel and the console, you should see those two error log mentioned at the Issue Description

## Additional information
This issue is consistently replicatable in my offic project or a fresh sanity studio project and a fresh new nuxt project like the reproduction repo.

There might be [a similiar open issue](https://github.com/nuxt-modules/sanity/issues/1053), the key difference is that issue happens in vercel but mine is replicatable in **localhost**
## Checklist
* [x]  I have tested with the latest Nuxt version and the issue still occurs
* [x]  I have tested with the latest module version and the issue still occurs
* [x]  I have searched the issue tracker and this issue hasn't been reported yet
* [x]  I have my `projectId` and `token` is correct in both `nuxt.config.ts` and `sanity.config.ts`

