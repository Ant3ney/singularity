# Singularity Planet

This is the frontend for singularityplanet.com. It is a Next.js App Router project using TypeScript source under `src/`.

## Installation

Install dependencies:

```bash
npm install
```

Populate `.env.local`:

`NEXT_PUBLIC_EMAIL_SANITY_ID`
`SANITY_API_TOKEN`

Restart the dev server after changing environment variables.

## Development

```bash
npm run dev
```

Open http://localhost:3003 with your browser to see the result.

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


