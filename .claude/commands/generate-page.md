# generate-page

Generate a complete SEO blog post for the FoodTruckN AI blog.

## Usage
```
/generate-page <keyword>
```

## What this command does

1. Analyzes the keyword to determine the post type:
   - **City page** — keyword contains a city/location (e.g. "food truck app Austin", "online ordering Portland food truck")
   - **Problem page** — keyword describes a pain point (e.g. "food truck losing orders", "how to reduce food truck errors")
   - **Solution page** — keyword describes a tool or method (e.g. "food truck automation", "AI upsells food truck", "food truck ordering app")

2. Generates a slug from the keyword (lowercase, hyphens, no special chars)

3. Creates the file at `src/content/blog/[slug].md`

## Brand voice rules (follow exactly)

- Short sentences. No walls of text.
- Operator-first: write like you're talking to someone running a truck, not reading a blog
- No buzzwords: "leverage", "streamline", "optimize", "cutting-edge", "innovative" — banned
- Every feature ties to money saved or time saved. Always.
- Use specific numbers where possible ($, %, hours)
- Sections use `##` headers. No more than 4-5 words per header.
- End with a CTA to [FoodTruckN AI](https://foodtrucknai.com) at $1/day
- Tone: direct, honest, a little blunt. Like a peer, not a marketer.

## Post structure by type

### City page
```
---
title: "Best Food Truck Ordering App for [City] Operators"
description: "[City]-specific hook about the market"
pubDate: "[TODAY]"
category: "City Guide"
image:
keywords: ["food truck app [city]", "food truck ordering [city]", ...]
---

- Hook: what's specific about [city]'s food truck market
- H2: What [city] operators deal with (weather, competition, events, etc.)
- H2: What top [city] trucks are running
- H2: The math (how much they're making/saving)
- H2: What to look for in a tool
- CTA block: FoodTruckN AI, $1/day, start free
```

### Problem page
```
---
title: "How to [Solve the Problem] on Your Food Truck"
description: "Pain-point hook"
pubDate: "[TODAY]"
category: "Operations"
image:
keywords: [relevant to problem]
---

- Hook: name the pain bluntly
- H2: Why this keeps happening (root cause)
- H2: What it's costing you (in $ or time)
- H2: The fix, step by step
- H2: The math with the fix in place
- CTA block: FoodTruckN AI, $1/day
```

### Solution page
```
---
title: "How to [Use the Solution] on Your Food Truck"
description: "Solution hook"
pubDate: "[TODAY]"
category: "Technology"
image:
keywords: [relevant to solution]
---

- Hook: what the solution does in plain language
- H2: What it looks like in practice (step-by-step)
- H2: What it's worth (revenue/time math)
- H2: Common objections + real answers
- H2: What to look for (3 criteria)
- CTA block: FoodTruckN AI, $1/day
```

## Instructions

When this command is run with a keyword:

1. Identify the keyword type (city / problem / solution)
2. Generate a full blog post following the matching structure above
3. Fill in real, specific numbers — don't use vague ranges
4. Write 600-900 words
5. Save it to `src/content/blog/[slug].md`
6. Output the filename and a one-line summary of the post
