# Singularity CMS

This Sanity Studio controls the content stored in the Singularity Sanity project and displayed by the external Singularity applications.

## Development

This Studio uses Sanity v6 and requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Open the Studio at `http://localhost:3333/`. Use `localhost`, not `127.0.0.1`, because Sanity checks the browser origin against the project's CORS origins.

## Data Compatibility

The Studio still points at the existing Sanity project and dataset:

- Project ID: `2a4pwebi`
- Dataset: `production`

Most schema `_type` names and all field names have been preserved so existing front ends can continue querying the same content shape. The only forced exception is the custom inline `span` member inside `boldsBreaksAndSpans`: Sanity v6 reserves `span`, so new entries use `_type: "textSpan"` with the same `title` field.
