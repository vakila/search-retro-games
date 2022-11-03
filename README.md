# Search Retro Games 
An app powered by [Next 13](https://beta.nextjs.com), [Xata](https://xata.io), and games data collected by [Sara Vieira](https://github.com/SaraVieira/lets-play-retro-games)

Developed by [Anjana Vakil](https://twitter.com/AnjanaVakil) with support from Xata

## Features
- Full-text search through a database of 7K+ games
- Filter search results by console (NES, Game Boy, Playstation, etc.)
- Top-rated games appear first in results
- Aggregate total number of games
- Debounced search input & timed search operation
- Game details pages with additional info and links to [IGDB](https://idgb.com)

## Implementation details
- Uses the brand-new (at time of development) `app/` directory of Next 13 
- Makes use of both client components (interactive search page) & server components (static game page)
- Retrieves data from Xata's serverless data platform
- Powered by Xata's built-in search functionality, including filtering & boosting
- Uses an internal API to retrieve data without exposing secrets to client


## See also

- Sara Vieira's [letsplayretro.games](https://letsplayretro.games)
- Written tutorial: [Searching for retro games with Xata & Next.js 13](https://dev.to/anjanavakil/searching-for-retro-games-with-next-13-xata-4e5g)
- Livestream on [twitch.tv/anjanavakil](https://www.twitch.tv/videos/1641478425)


---

# create-next-app
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
