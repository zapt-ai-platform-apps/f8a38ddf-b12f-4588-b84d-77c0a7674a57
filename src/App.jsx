import Navbar from './components/Navbar';

export default function App() {
  return (
    <div class="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-sans">
      <Navbar />
      <main class="container mx-auto p-4">
        <h1 class="text-3xl font-bold">Welcome to MyApp</h1>
        <p class="mt-4">This is a sample application with light and dark mode support.</p>
        <p class="mt-4">
          Made on{' '}
          <a
            href="https://www.zapt.ai"
            target="_blank"
            class="text-primary hover:underline"
          >
            ZAPT
          </a>
        </p>
      </main>
    </div>
  );
}