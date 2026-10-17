# Mavern Studio — Website

A responsive, single-page marketing website for Mavern Studio, a design-led web design and development studio. Built with plain HTML, CSS, and JavaScript so it can be hosted on GitHub Pages without a build step.

## Files
- `index.html` — page content and metadata
- `styles.css` — responsive layout, typography, colors, and interactions
- `script.js` — mobile navigation, FAQ interactions, enquiry form mailto behavior, and footer year
- `404.html` — custom not-found page
- `.nojekyll` — tells GitHub Pages not to process the site with Jekyll

## Before publishing
1. Replace `hello@example.com` in `index.html` and `script.js` with the business email you want enquiries sent to.
2. Replace the WhatsApp URL in `index.html` with `https://wa.me/91XXXXXXXXXX` using your real number in international format, digits only.
3. Review all pricing, service descriptions, and concept projects. Concept projects are examples, not client work; keep that distinction clear until you have real case studies.
4. Decide on your domain and confirm domain/trademark availability before buying or advertising it.

## Publish using GitHub Pages
1. Create a new GitHub repository (for example, `mavern-studio`).
2. Upload all files from this folder to the repository root.
3. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
4. GitHub Pages will show the default published URL after the deployment finishes.

## Connect your own domain
1. Buy a domain from a registrar after confirming it is available.
2. In **Repository → Settings → Pages → Custom domain**, enter the exact domain you purchased and save. GitHub will create/update a `CNAME` file for that domain.
3. At your domain registrar, configure the DNS records GitHub Pages currently recommends for your account. For an apex domain, GitHub commonly uses A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`; IPv6 AAAA records may also be offered. For `www`, use a CNAME pointing to `<your-github-username>.github.io`. Follow the current values in GitHub's official docs.
4. Wait for DNS to propagate, return to **Settings → Pages**, verify the domain, and enable **Enforce HTTPS** when available.

Official guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Enquiry form note
The current form opens the visitor's default email app with a prefilled message. It does **not** send or store submissions on its own. To collect leads without the visitor's email app, connect a form service or backend before launch.
