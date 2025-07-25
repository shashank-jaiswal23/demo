# Your UI Library

A reusable React component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install your-ui-library
# or
yarn add your-ui-library
```

## Usage

### Basic Setup

Import the CSS file in your main application file:

```javascript
import 'your-ui-library/dist/index.css';
```

### Components

#### MediaTextCard

```jsx
import { MediaTextCard } from 'your-ui-library';

function App() {
  const mediaData = {
    data: {
      attributes: {
        url: 'https://example.com/image.jpg',
        mime: 'image/jpeg'
      }
    }
  };

  return (
    <MediaTextCard
      title="Welcome to our platform"
      text="<p>This is a rich text description</p>"
      media={mediaData}
      layout="Right"
      size="Medium"
      link={{
        Title: "Learn More",
        URL: "/about"
      }}
    />
  );
}
```

#### Section

```jsx
import { Section } from 'your-ui-library';

function App() {
  return (
    <Section id="hero" className="bg-gray-100">
      <h1>Hero Section</h1>
      <p>Content goes here</p>
    </Section>
  );
}
```

#### RichText

```jsx
import { RichText } from 'your-ui-library';

function App() {
  return (
    <RichText text="<p>This is <strong>rich text</strong> content</p>" />
  );
}
```

#### Link Components

```jsx
import { Link, LinkWithArrow, ExternalLink } from 'your-ui-library';

function App() {
  return (
    <div>
      <Link href="/about" title="About Us" />
      <ExternalLink href="https://example.com" title="External Site" />
      <LinkWithArrow title="Click Here" />
    </div>
  );
}
```

#### Image and Video

```jsx
import { Image, Video, File } from 'your-ui-library';

function App() {
  return (
    <div>
      <Image 
        url="https://example.com/image.jpg" 
        alt="Description" 
        className="w-full h-auto"
      />
      
      <Video 
        url="https://example.com/video.mp4" 
        displayVideoPlayer={true}
        className="w-full"
      />
      
      <File 
        data={{
          attributes: {
            url: "https://example.com/media.jpg",
            mime: "image/jpeg"
          }
        }}
        className="w-full"
      />
    </div>
  );
}
```

## TypeScript Support

This library is built with TypeScript and includes type definitions. All components are fully typed for the best development experience.

## Styling

The library uses Tailwind CSS classes. Make sure you have Tailwind CSS configured in your project, or the components may not display correctly.

### Required Tailwind Configuration

Add the library path to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/your-ui-library/dist/**/*.{js,ts,jsx,tsx}"
  ],
  // ... rest of your config
}
```

## Development

To build the library:

```bash
npm run build:lib
```

## License

MIT