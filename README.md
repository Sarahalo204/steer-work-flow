# Steer Project Flow

# Steer —




Use this as the **initial project prompt** in Lovable. Build **visual design only** — we will wire the real Next.js app ourselves. Do not invent backend logic.




---




## Product




**Steer** is an Arabic/English **project execution platform** for construction/engineering PMs (ECEC). It is **not** a charter/WBS/Jira clone like Musa'ad Maydan. It is the **system of record for execution**: capture meeting inputs → human review → tasks → delegate to field staff → confirm completion.




**Users:**

- **PM (full account):** login, projects, team, inbox, board, today, integrations

- **Field employee (no account):** one signed link `/t/:token` for one task only




**Brand:** ECEC design system — warm cream background (`#FDFBF7`), navy primary (`#1A2B4B`), rounded cards, professional sans-serif, bilingual **Arabic + English with RTL**. Include a friendly mascot character (Esto-style) only for empty states — not on every screen.




---




## App shell (all PM pages)




- **Sidebar (start side):** logo + nav: Projects · Inbox · Board · Today

- **Top bar:** locale toggle EN | ع · Sign out

- **Mobile:** hamburger drawer

- **No duplicate page titles** in sidebar and content




---




## Screens to design (8)




### 1. Login

Centered card. Email + password. Primary CTA. Minimal chrome.




### 2. Projects list (`/`)

Grid or list of project cards: name, client, deadline badge, archived state. Empty state with mascot + "Create project" CTA. FAB or header button for new project.




### 3. Create / edit project

Form: name, client, consultant, deadline, description, keywords. Save / Cancel.




### 4. Project detail (`/projects/:id`)

Two-column layout (desktop):

- **Left (~60%):** task form + **Kanban board** columns: Open · In progress · Waiting · Delegated · Done by assignee · Blocked · Done

- **Right (~40%):** team list (name + **work email** + role) + add member form




**Task card actions:** Move · Delegate · Confirm · Return · Copy link  

When delegated: show readonly URL field + "Share with {email}"




**Delegate modal/inline form:** pick team member (name — email), instruction note, "Create link"




### 5. Inbox (`/inbox`)

**Four capture cards** in a row (stack on mobile):

1. **Voice** — record + upload

2. **Document** — PDF/Word upload

3. **Telegram** — connect flow

4. **Teams & Outlook** — work email input + Connect + Sync




Below: collapsible "Paste notes instead"  

Section **To review:** proposal cards with meeting summary, bullet notes, confidence, actions: Approve (create project / use existing) · Ignore




### 6. Board (`/board`)

All projects' open work — same Kanban columns as project detail but with project name on each card.




### 7. Today (`/today`)

**Attention list** (not a calendar): items tagged Confirm · Blocked · Overdue · Delegated · Waiting · Duplicate — each links to project  

Below: **Project report** grid — per project counts (open, in progress, done, blocked)




### 8. Employee task page (`/t/:token`) — **public, no nav**

Single card: project name, task title, description, due date, PM instruction  

Buttons: **Accepted** · **Done** · **Blocked** (with optional note)  

No sidebar, no login, no other tasks visible




---




## Interaction principles




- HITL everywhere for AI: never auto-create tasks without PM approve

- Delegation creates a **copyable link**; employee never gets full platform access

- Work emails on team members are **required** for Teams/Outlook notifications

- Status colors subtle — navy/gray/green/amber, not rainbow Jira

- Generous whitespace, 44px min touch targets, logical RTL mirroring




---




## Do NOT build in Lovable




- Supabase, OpenRouter, Microsoft Graph OAuth, Telegram webhooks

- Real auth — mock logged-in state

- Maydan-style charter, epics, WBS trees




---




## Deliverables from Lovable




Prefer exporting:

1. **Figma-style component list** or **screenshots per screen** (EN + AR)

2. **Design tokens** (colors, spacing, radius, typography scale)

3. **One screen at a time** as isolated components — not a monolithic 50-file dump




We will map designs onto existing React components: `app-shell`, `inbox-panel`, `task-board`, `today-panel`, `employee-task`, `project-list`, `project-detail`, `login-form`.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cd73f9c3-f938-4da4-b1b9-dfdd10e30c38).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
