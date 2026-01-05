# 1.`html <header>`

Purpose: Represents the introductory content of a page or a section. Often contains logo, navigation, headings, or introductory info.

Example:

```html
<header>
  <h1>My Website</h1>
  <p>Welcome to my awesome site!</p>
</header>
```

Notes:

Can be used multiple times (for the whole page or for sections/articles).

Usually at the top of the page or section.

# 2. `html<nav>`

Purpose: Defines a navigation block containing links to other pages or sections.

Example:

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

Notes:

Should only be used for major navigational links, not every single link on the page.

# 3. `html<main>`

Purpose: Represents the main content of the document. There should be only one <main> per page.

Example:

```html
<main>
  <h2>About Me</h2>
  <p>I am a web developer and designer.</p>
</main>
```

Notes:

Helps screen readers quickly jump to the main content.

Should not include sidebars, navigation, headers, or footers.

# 4. `html<section>`

Purpose: Represents a thematic grouping of content. Often has a heading.

Example:

```html
<section>
  <h2>Services</h2>
  <p>We offer web design, SEO, and app development.</p>
</section>
```

Notes:

Think of it as a chapter in a book.

Can contain multiple <article> or other elements.

# 5. `html<article>`

Purpose: Represents independent, self-contained content that could be distributed separately (like blog posts or news articles).

Example:

```html
<article>
  <h3>Blog Post Title</h3>
  <p>This is a post about learning HTML5.</p>
</article>
```

Notes:

Can be inside <section> or directly in <main>.

Should make sense on its own.

# 6. `html<footer>`

Purpose: Defines a footer for a page or section, typically containing author info, copyright, or links.

Example:

```html
<footer>
  <p>&copy; 2026 My Website</p>
  <a href="#privacy">Privacy Policy</a>
</footer>
```

Notes:

Can be used for the whole page or specific sections/articles.
