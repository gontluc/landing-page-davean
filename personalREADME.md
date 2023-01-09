# testing environment

- Deployed to my vercel account and available at ...

- Once pushed to github, changes should be updated automatically

<br>

# dependencies
 
npm i framer-motion

# Migration from Vercel to Cloudflare

https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/

- Delete API route `hello.js` (incompatible with Cloudflare)

- Configure `next.config.js`

- On Cloudflare deployment settings: add an evironmental variable: NODE_VERSION with value of 14