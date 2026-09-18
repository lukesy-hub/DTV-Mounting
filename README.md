# DTV Mounting

Premium DTV Mounting marketing site and quote request experience.

The frontend includes hash-routed pages for Home, Services, Our Work, Locations, About, FAQ, Contact, and Quote, plus dedicated service detail files for every listed DTV Mounting service. The Services navigation item opens a desktop dropdown and a mobile expandable menu.

## Development

```bash
npm install
npm run dev
```

## Lead submission

The quote form is defined in [`src/data/formSchema.ts`](./src/data/formSchema.ts) and submitted through [`src/services/leadService.ts`](./src/services/leadService.ts).

Set `VITE_CRM_API_URL` to the public CRM API base URL to send requests to `POST /api/leads`:

```bash
VITE_CRM_API_URL=https://your-crm.example.com
```

When the variable is not set, development uses a local delay-only adapter so the UI can be tested without pretending that a CRM lead was created. No private credentials belong in Vite environment variables.

## Checks

```bash
npm run lint
npm run build
```
