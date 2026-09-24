# Steer visual prototype

## Build
- Replace the blank page with a polished, responsive Steer prototype using the ECEC cream, navy, green, amber, and neutral palette.
- Create a shared PM shell with mirrored RTL navigation, desktop sidebar, mobile drawer, locale switch, and sign-out control.
- Add isolated, reusable visual components for the project list, project form, project detail, task board, inbox, today view, login form, and public employee task.
- Add routes for `/`, `/login`, `/projects/new`, `/projects/$id`, `/inbox`, `/board`, `/today`, and `/t/$token`, each with distinct metadata.
- Use representative mock data only; controls will demonstrate local visual states without authentication, persistence, uploads, or integrations.

## Screen details
- Projects: project cards, archive treatment, new-project action, and mascot empty-state styling.
- Project form: bilingual-ready fields for project details and keywords.
- Project detail: 60/40 task board and team workspace, all seven statuses, delegation/link-sharing treatment, and member form.
- Inbox: four capture methods, paste-notes disclosure, and human-review proposal cards.
- Board: portfolio-wide work with project labels across the same seven statuses.
- Today: attention queue and per-project progress report.
- Employee task: focused public task card with Accepted, Done, and Blocked states and no PM navigation.

## Design system and verification
- Define semantic color, type, spacing, radius, and shadow tokens centrally; use professional bilingual sans-serif typography.
- Ensure 44px controls, restrained motion, mobile stacking, text containment, and true directional mirroring.
- Verify the main screens at desktop and mobile sizes, including Arabic switching and key local interactions.
