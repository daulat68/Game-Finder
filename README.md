#  Game Finder

Game Finder is a responsive React application that allows users to discover, search, and bookmark video games. It features authentication with Clerk, state management through Redux Toolkit, and data fetched from a RAWG API. Users can view detailed game information, browse screenshots, filter games by category or tag, and save their favorite games.


##  Features

-  **Game Discovery** – Browse and search for games with a clean UI.
-  **Bookmarks** – Save and manage favorite games (per-user via Clerk + localStorage).
-  **Authentication** – Secure sign-in/out using [Clerk].
-  **Game Details** – View detailed game info with screenshots and descriptions.
-  **Filtering** – Filter games by categories and tags dynamically fetched from the API.
-  **Routing** – Built with `react-router-dom` for smooth navigation.
-  **State Management** – Handled with Redux Toolkit.
-  **UI** – Styled with Bootstrap and custom CSS, fully responsive.
-  **Pagination** – Load more games dynamically using pagination.
-  **Shimmer Loaders** – Custom loading skeletons while data is fetched.


##  Tech Stack

- **React**
- **Vite**
- **Redux Toolkit**
- **React Router**
- **Bootstrap**
- **Clerk** (for authentication)
- **RAWG Video Games API** 


##  Authentication with Clerk

- Users must be signed in to view the **Bookmarks** page.
- If not signed in, they’ll see a message prompting them to sign in (no redirect).
- Bookmarks are persisted to `localStorage` **per user**.


##  Setup Instructions

### **Clone the repository:**

```bash
git clone https://github.com/daulat68/Game-Finder.git

cd Game-Finder
```

### Install dependencies
```sh
npm install
```

### Start the development server
```sh
npm start
```

## Visit Site
https://game-finderbydaulat.netlify.app/