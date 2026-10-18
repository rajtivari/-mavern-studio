# Mavern Studio®

Responsive, multi-file website built with plain HTML, CSS, and native JavaScript modules. No framework or build step is required.

## Structure
- `index.html` — metadata, section mount points, and enquiry dialog
- `src/main.js` — renders page modules and wires interactions
- `src/components.js` — independent header, hero, philosophy, services, Mac-style project showcase, pricing, process, FAQ, contact, and footer sections
- `src/styles.css` — design tokens, shared components, responsive layouts, and reduced-motion support

## Run locally
Serve the folder over HTTP because native JavaScript modules do not work reliably from a file URL:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Enquiries
The enquiry form opens the visitor's email app with a prefilled message addressed to `tivariraj424@gmail.com`. It does not store or send submissions itself. WhatsApp contact is linked in the contact section.

## Project work
Project cards are presented as concept studies and are explicitly labelled as such, not commissioned client work.
