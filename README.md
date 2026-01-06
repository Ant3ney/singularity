# Singularity Planet

This is the repo for the front end of singularityplanet.com. The purpose of this site is to display products and allow users to buy them or interact with me about them.

# Repo info

**First things first. This repo is a mess and requires you to do more than `npm install` to get it working :<**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Installation

1. Clone repo

```bash
git clone https://github.com/Ant3ney/singularity.git
```

After cloning, do not delete package-lock.json. If you get errors after running `npm install` the solution is to follow the proceeding steps.

2. Delete all references to node-sass in package.json and package-lock.json.

3. Install dependencies

Now you will be able to run `npm install` without errors

```bash
npm install
```

4. Reinstall node sass v. 6.0.1

```bash
npm install node-sass@6.0.1
```

5. Populate .env file

You need to assign the following variables to appropriate values in .env file

`NEXT_PUBLIC_EMAIL_SANITY_ID`

note that if you update .env file in live server / dev mode. You will have to reset you dev server after modifying you .env file before you can expect to see your changes applied.

**This repo at this point should be installed and able to run with out errors**

This repo needs to get either completely overhauled or migrated to a newer version of next. I recommend migrating because that appears by far to be the simplest way to fix the issues with this repo

## Development

```bash
npm run dev
# or
yarn dev
```

Openhttp://localhost:3000 with your browser to see the result.

### Media Query Sizes
max width
1600
1200
1000
992
767
480

### Common nasty errors

#### Inside formatData file your must handle potentaly undefind values like the following

**Correct**

```javascript
actionLink: rawP?.actionLink ? rawP.actionLink : null,
```

**Incorrect**

```javascript
actionLink: rawP?.actionLink,
```

#### Node 24 / OpenSSL Build Error on Vercel

Issue
Build fails with:

```
error:0308010C:digital envelope routines::unsupported
ERR_OSSL_EVP_UNSUPPORTED
```


Cause
Vercel enforces Node.js 24, which uses OpenSSL 3. Webpack still relies on legacy crypto algorithms.

Fix (Required on Vercel)
Add this environment variable in Vercel (Production, Preview, Development):

```
NODE_OPTIONS=--openssl-legacy-provider
```

Then redeploy.

