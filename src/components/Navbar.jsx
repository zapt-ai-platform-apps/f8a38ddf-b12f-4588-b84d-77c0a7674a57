import { createSignal, onMount } from 'solid-js';

export default function Navbar() {
  const [isOpen, setIsOpen] = createSignal(false);
  const [theme, setTheme] = createSignal('light');

  onMount(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
      if (theme() === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });

  const toggleTheme = () => {
    const newTheme = theme() === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav class="bg-primary DEFAULT p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white font-bold text-lg">MyApp</div>
        <div class="flex items-center">
          <button
            class="text-white md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen())}
          >
            ☰
          </button>
          <button
            class="ml-4 text-white cursor-pointer"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme() === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        <ul class={`md:flex ${isOpen() ? 'block' : 'hidden'}`}>
          <li class="md:ml-6">
            <a href="#home" class="text-white hover:bg-primary-dark px-3 py-2 rounded">Home</a>
          </li>
          <li class="md:ml-6">
            <a href="#about" class="text-white hover:bg-primary-dark px-3 py-2 rounded">About</a>
          </li>
          <li class="md:ml-6">
            <a href="#contact" class="text-white hover:bg-primary-dark px-3 py-2 rounded">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}