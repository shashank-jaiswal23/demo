# Your UI Library

A reusable React component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install your-ui-library-react
# or
yarn add your-ui-library-react
```

## Usage

### Basic Setup

Import the CSS file in your main application file:

```javascript
import 'your-ui-library-react/dist/index.css';
```

**Important**: This library includes all necessary CSS styles and does not require Tailwind CSS or any other CSS framework to work properly.

### Components

#### MediaTextCard

```jsx
import { MediaTextCard } from 'your-ui-library-react';

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
import { Section } from 'your-ui-library-react';

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
import { RichText } from 'your-ui-library-react';

function App() {
  return (
    <RichText text="<p>This is <strong>rich text</strong> content</p>" />
  );
}
```

#### Link Components

```jsx
import { Link, LinkWithArrow, ExternalLink } from 'your-ui-library-react';

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

### Centered Text

```jsx
    <CenteredText
      title="Centered Text Example"
      text="This is an example of centered text with a link."
      link={{ Title: "Click Here", URL: "https://example.com" }}
      navSlug="centered-text"
      colorTheme="Black"
    />
```

#### Image and Video

```jsx
import { Image, Video, File } from 'your-ui-library-react';

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

The library includes all necessary CSS styles and works independently without requiring Tailwind CSS or any other CSS framework. Simply import the CSS file as shown in the Basic Setup section.

## Development

To build the library:

```bash
npm run build:lib
```

## License

MIT