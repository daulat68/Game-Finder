#  Game Finder

Game Finder is a responsive React application that allows users to discover, search, and bookmark video games. It features authentication with Clerk, state management through Redux Toolkit, and data fetched from a RAWG API. Users can view detailed game information, browse screenshots, filter games by category or tag, and save their favorite games.


##  Features
    
-  **Custom Error Page** - This app includes a custom error page that handles unexpected routing errors or broken links using React Router's useRouteError hook.
-  **Shimmer Loaders** – Custom loading skeletons while data is fetched.
-  **Game Discovery** – Browse and search for games with a clean UI.
-  **Bookmarks** – Save and manage favorite games (per-user via Clerk + localStorage).
-  **Authentication** – Secure sign-in/out using [Clerk].
-  **Game Details** – View detailed game info with screenshots and descriptions.
-  **Filtering** – Filter games by categories and tags dynamically fetched from the API.
-  **Routing** – Built with `react-router-dom` for smooth navigation.
-  **State Management** – Handled with Redux Toolkit.
-  **UI** – Styled with Bootstrap and custom CSS, fully responsive.
-  **Pagination** – Load more games dynamically using pagination.


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
npm run dev
```

## Visit Site
https://game-finderbydaulat.netlify.app/

## Docker & CI/CD

This project has a **CI/CD pipeline set up using GitHub Actions** that automates Docker tasks whenever code is pushed to the `main` branch. This ensures that your app is always built, packaged, and ready to deploy. Here’s what the workflow does:

1. **Docker Build** – The workflow checks out the code, installs dependencies, and builds the React app inside a Docker image.

2. **Docker Push** – After building, the workflow pushes the Docker image to Docker Hub. The image is tagged as `latest` and also with the commit SHA for version tracking.

3. **Nginx Configuration** – The Docker image serves the built React app using Nginx with SPA routing, ensuring smooth navigation for all routes.

### Pulling and Running the Docker Image

Once the image is on Docker Hub, you or anyone else can run it locally or on a server:

```bash
# Pull the latest image
docker pull daulat68/my-app:latest

# Run the container
docker run -d -p 8080:80 daulat68/my-app:latest
