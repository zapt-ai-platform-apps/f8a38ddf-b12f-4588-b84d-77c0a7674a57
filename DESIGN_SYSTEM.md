# Design System

## Color Palette

- **Primary Colors**
  - Light: `#6D28D9`
  - Default: `#5B21B6`
  - Dark: `#4C1D95`

- **Secondary Colors**
  - Light: `#FBBF24`
  - Default: `#F59E0B`
  - Dark: `#D97706`

- **Neutral Colors**
  - 100: `#F3F4F6`
  - 200: `#E5E7EB`
  - 300: `#D1D5DB`
  - 400: `#9CA3AF`
  - 500: `#6B7280`
  - 600: `#4B5563`
  - 700: `#374151`
  - 800: `#1F2937`
  - 900: `#111827`

## Typography

- **Font Families**
  - Sans: `Inter, sans-serif`
  - Serif: `Merriweather, serif`
  - Monospace: `Fira Code, monospace`

- **Font Sizes**
  - XS: `0.75rem`
  - SM: `0.875rem`
  - Base: `1rem`
  - LG: `1.125rem`
  - XL: `1.25rem`
  - 2XL: `1.5rem`
  - 3XL: `1.875rem`
  - 4XL: `2.25rem`
  - 5XL: `3rem`

- **Line Heights**
  - Snug: `1.375`
  - Normal: `1.5`
  - Relaxed: `1.625`
  - Loose: `2`

## Spacing

- **Scale**
  - 72: `18rem`
  - 84: `21rem`
  - 96: `24rem`

## Design Principles

- **Clarity**: Ensure information is immediately understandable.
- **Efficiency**: Allow tasks to be completed with minimal effort.
- **Confidence**: Make users feel in control and informed.
- **Simplicity**: Reduce cognitive load with clean interfaces.

## Design Integration

### Using the Design System in Components

1. **Colors**: Use Tailwind's extended color classes.
   - Example: `bg-primary`, `text-secondary-dark`
2. **Typography**: Apply font families and sizes as defined.
   - Example: `font-sans text-lg`
3. **Spacing**: Utilize the spacing scale for padding and margins.
   - Example: `p-4`, `mt-6`

### Adding New Components

1. **Follow Mobile-First Approach**: Design for mobile screens first, then enhance for larger screens.
2. **Consistent Styling**: Use the predefined color palettes, typography, and spacing.
3. **Responsive Utilities**: Leverage Tailwind’s responsive classes to ensure scalability.
4. **Accessibility**: Ensure all components are accessible, with proper focus states and semantic HTML.