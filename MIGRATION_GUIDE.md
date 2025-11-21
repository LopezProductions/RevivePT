# Template Migration Guide

This guide helps you apply recent improvements (Netlify config, footer updates, pricing page) to other templates.

---

## ✅ Quick Checklist

- [ ] Add `netlify.toml` to root directory
- [ ] Add `public/_redirects` file
- [ ] Update Footer component with "Browse More Templates" link
- [ ] (Optional) Add Pricing page and navigation updates
- [ ] Test deployment on Netlify
- [ ] Verify all routes work correctly

---

## 📋 Step-by-Step Migration Guide

### Step 1: Add Netlify Configuration

#### 1.1 Create `netlify.toml` in root directory

Create a new file `netlify.toml` in your template's root directory with this content:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*.js"
  [headers.values]
    Content-Type = "application/javascript; charset=utf-8"

[[headers]]
  for = "/*.mjs"
  [headers.values]
    Content-Type = "application/javascript; charset=utf-8"

[[headers]]
  for = "/*.jsx"
  [headers.values]
    Content-Type = "application/javascript; charset=utf-8"
```

**Why:** Fixes MIME type errors that prevent JavaScript modules from loading on Netlify.

---

#### 1.2 Create `public/_redirects` file

Create a new file `public/_redirects` with this content:

```
/*    /index.html   200
```

**Why:** Enables client-side routing for React Router. Without this, routes like `/about`, `/pricing`, etc. will return 404 errors.

**Note:** If `public/` folder doesn't exist, create it first.

---

### Step 2: Update Footer Component

#### 2.1 Locate your Footer component

Find your footer component (typically at `src/components/navigation/Footer.jsx` or similar).

#### 2.2 Update Footer with template link

Replace your footer with this structure (adjust path if different):

```jsx
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Lopez Productions</p>
        <div className="flex items-center gap-4">
          <a
            href="https://lopezproductions.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Browse More Templates →
          </a>
          <p className="text-blue-600 font-semibold">Web2 Starter v1.0</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
```

**Key changes:**
- Added `items-center` to flex container for vertical alignment
- Added new `<div>` wrapper for right-side items
- Added external link to `https://lopezproductions.ai/`
- Link opens in new tab with security attributes

**Theme-specific notes:**
- If using dark theme, adjust colors (e.g., `text-slate-300` instead of `text-slate-500`)
- Adjust border colors to match your theme (`border-slate-800` for dark, `border-slate-200` for light)
- Adjust link color to match your accent color

---

### Step 3: (Optional) Add Pricing Page

Only add this if you're selling the template.

#### 3.1 Create Pricing page

Create `src/pages/Pricing.jsx`:

```jsx
import SectionHeader from "../components/ui/SectionHeader.jsx";

function Pricing() {
  const basicFeatures = [
    "Full Template",
    "Home / About / Services / Contact",
    "SEO-Friendly Structure",
    "Responsive Layout",
    "1-Click Setup",
  ];

  const premiumFeatures = [
    "Everything in Basic",
    "Custom Services Page",
    "Brand Color Integration",
    "Copywriting Support",
    "CRM / Email Integration",
    "1 Revision Included",
  ];

  const comparison = [
    { feature: "Full Template", basic: true, premium: true },
    { feature: "Custom Services Page", basic: false, premium: true },
    { feature: "Brand Colors", basic: false, premium: true },
    { feature: "Integrations Setup", basic: false, premium: true },
    { feature: "Revisions Included", basic: "0", premium: "1" },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <SectionHeader
        label="Pricing"
        title="Choose Your Package"
        description="Start with the basic template or upgrade to the premium experience."
      />

      {/* Pricing Table */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic */}
        <div className="border border-slate-200 rounded-2xl p-8 bg-white shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Basic Template</h3>
          <p className="text-sm text-slate-600 mt-1">Perfect for quick launches</p>
          <p className="text-4xl font-bold text-blue-600 mt-4">$50</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            {basicFeatures.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>
          <a
            href="https://buy.stripe.com/bJe9AU5V4fGc0y47jjcs800"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-all"
          >
            Buy Basic — $50
          </a>
        </div>

        {/* Premium */}
        <div className="border border-blue-200 rounded-2xl p-8 bg-blue-50 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900">Premium Package</h3>
          <p className="text-sm text-slate-600 mt-1">Best for full customization</p>
          <p className="text-4xl font-bold text-blue-700 mt-4">$250</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            {premiumFeatures.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>
          <a
            href="https://buy.stripe.com/14A00k1EOeC8gx2avvcs801"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all"
          >
            Buy Premium — $250
          </a>
        </div>
      </div>

      {/* Feature Comparison */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b bg-slate-100">
                <th className="text-left p-3 text-slate-900">Feature</th>
                <th className="text-center p-3 text-slate-900">Basic</th>
                <th className="text-center p-3 text-slate-900">Premium</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3 text-slate-700">{row.feature}</td>
                  <td className="text-center p-3 text-slate-600">
                    {row.basic === true ? "✔" : row.basic || "—"}
                  </td>
                  <td className="text-center p-3 text-slate-600">
                    {row.premium === true ? "✔" : row.premium || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-6">What Clients Say</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
            <p className="text-slate-700 italic">
              "Fast, clean, and professional — this template saved me days of work."
            </p>
            <p className="mt-3 font-semibold text-slate-900">— J. Martinez</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
            <p className="text-slate-700 italic">
              "The premium upgrade was absolutely worth it for the custom branding."
            </p>
            <p className="mt-3 font-semibold text-slate-900">— A. Simmons</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-6">FAQ</h2>
        <div className="space-y-4 text-sm">
          <details className="border border-slate-200 rounded-lg p-4 bg-white">
            <summary className="font-semibold cursor-pointer text-slate-900">
              Do I need hosting?
            </summary>
            <p className="mt-2 text-slate-600">
              No — deploy instantly on Vercel, Netlify, or any static host.
            </p>
          </details>
          <details className="border border-slate-200 rounded-lg p-4 bg-white">
            <summary className="font-semibold cursor-pointer text-slate-900">
              Do you offer custom work?
            </summary>
            <p className="mt-2 text-slate-600">
              Yes — the Premium Package includes custom branding + integrations.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
```

**Note:** Update Stripe links if using different checkout URLs for each template.

---

#### 3.2 Add Pricing to Navigation

Update `src/components/navigation/Navbar.jsx`:

```jsx
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },  // Add this line
  { to: "/contact", label: "Contact" },
];
```

---

#### 3.3 Add Pricing Route

Update `src/app/routes.jsx` (or your routes file):

```jsx
import Pricing from "../pages/Pricing.jsx";  // Add import

// In your Routes:
<Route path="pricing" element={<Pricing />} />
```

---

## 🎨 Theme-Specific Adjustments

### For Dark Themes

If your template uses a dark theme, adjust colors in the footer:

```jsx
// Footer example for dark theme
<footer className="border-t border-slate-800 bg-slate-950/70">
  <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between items-center">
    <p>© {new Date().getFullYear()} Lopez Productions</p>
    <div className="flex items-center gap-4">
      <a
        href="https://lopezproductions.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
      >
        Browse More Templates →
      </a>
      <p className="text-blue-400 font-semibold">Web2 Starter v1.0</p>
    </div>
  </div>
</footer>
```

**Color adjustments:**
- `border-slate-200` → `border-slate-800`
- `bg-white/80` → `bg-slate-950/70`
- `text-blue-600` → `text-blue-400`
- `text-slate-500` → `text-slate-400`

---

## 🧪 Testing Checklist

After applying changes:

1. **Local Testing**
   - [ ] Run `npm run build` - should complete without errors
   - [ ] Run `npm run preview` - test all routes work
   - [ ] Click footer link - should open lopezproductions.ai in new tab

2. **Netlify Deployment**
   - [ ] Deploy to Netlify
   - [ ] Verify build completes successfully
   - [ ] Test all routes (`/`, `/about`, `/services`, `/pricing`, `/contact`)
   - [ ] Verify no MIME type errors in browser console
   - [ ] Test footer link functionality

3. **Cross-Browser Testing**
   - [ ] Test in Chrome
   - [ ] Test in Firefox
   - [ ] Test in Safari (if available)
   - [ ] Test mobile responsiveness

---

## 📝 Notes

- **Netlify.toml**: Required for all Vite + React templates deployed on Netlify
- **_redirects**: Required for all SPAs with client-side routing
- **Footer link**: Recommended for all templates to drive traffic back to main site
- **Pricing page**: Optional - only add if selling the template

---

## 🚀 Quick Copy-Paste Commands

If you want to quickly copy files between templates:

```bash
# Copy netlify.toml
cp /path/to/source/template/netlify.toml /path/to/target/template/

# Copy _redirects
cp /path/to/source/template/public/_redirects /path/to/target/template/public/

# Copy Pricing page (if applicable)
cp /path/to/source/template/src/pages/Pricing.jsx /path/to/target/template/src/pages/
```

---

## ❓ Troubleshooting

### MIME Type Errors Still Occurring
- Verify `netlify.toml` is in root directory
- Check Netlify build settings match the config
- Clear Netlify cache and redeploy

### Routes Still Returning 404
- Verify `public/_redirects` file exists
- Check file content is exactly: `/*    /index.html   200`
- Ensure file is in `public/` folder (not `src/public/`)

### Footer Link Not Working
- Verify URL is correct: `https://lopezproductions.ai/`
- Check `target="_blank"` and `rel="noopener noreferrer"` are present
- Test in browser console for any CORS or security errors

---

## 📚 Related Files Reference

Files modified/created in this migration:
- `netlify.toml` (new)
- `public/_redirects` (new)
- `src/components/navigation/Footer.jsx` (updated)
- `src/pages/Pricing.jsx` (new, optional)
- `src/components/navigation/Navbar.jsx` (updated, if adding pricing)
- `src/app/routes.jsx` (updated, if adding pricing)

---

**Last Updated:** 2025-01-27
**Template Version:** Web2 Starter v1.0

