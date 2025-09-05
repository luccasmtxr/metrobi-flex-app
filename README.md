# Metrobi Flex App

An interactive **React + Vite + TypeScript** project that demonstrates solutions to a series of algorithmic and logical challenges. The main page serves as a **visual dashboard**, where each section is clickable and opens a modal with either:

- A **code solution** (with syntax highlighting), or
- An **interactive demo** (like Zeno’s Paradox of Achilles and the Tortoise).

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/luccasmtxr/metrobi-flex-app.git
cd metrobi-flex-app
```

### 2. Install dependencies

Make sure you have **Node.js 22** installed, then run:

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to see the app running.

## 🐳 Running with Docker

You can also build and run this app inside a Docker container.

### 1. Build the Docker image

```bash
docker build -t metrobi-flex-app .
```

### 2. Run the container

```bash
docker run -p 3000:3000 metrobi-flex-app
```

### 3. Stop the container

## List running containers

```bash
docker ps
```

## Stop it

```bash
docker stop <container_id>
```

## 🖼️ Project Overview

The **main page** is structured like a grid of sections:

- **Header**
- **Hero**
- **Sidebar**
- **Main Content**
- **Extra Content**
- **Related Images**
- **Related Posts**
- **Footer**

Each section besides the header and the footer is **clickable** and opens a modal:

- **Code Questions** → display the problem description and a syntax-highlighted solution.
- **Interactive Questions** → display live demos (e.g., Zeno’s Paradox animation).

This makes the app a **self-contained, interactive solution showcase**.

## 📦 Tech Stack

- **React 19**
- **Vite (TypeScript + SWC)**
- **Lucide Icons** (UI icons like close and copy)
- **react-syntax-highlighter** (for pretty code blocks)
- **CSS Flexbox** (for layout)

## 🛠️ Scripts

- `npm run dev` → start local dev server
- `npm run build` → build for production
- `npm run preview` → preview built app
- `npm run prettier:check` → run Prettier validation
- `npm run prettier:write` → run Prettier format
