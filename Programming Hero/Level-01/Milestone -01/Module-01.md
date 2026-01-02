# HTML
HTML stands for HyperText Markup Language.

It is the standard language used to create web pages and structure content on the internet.

## HTML Text: Creating paragraphs, Text formatting (b,i, strong, em)
| Tag        | Purpose | Meaning            |
| ---------- | ------- | ------------------ |
| `<b>`      | Bold    | Style only         |
| `<strong>` | Bold    | Important meaning  |
| `<i>`      | Italic  | Style only         |
| `<em>`     | Italic  | Emphasis / meaning |

## HTML Text: Headings, small, and inline vs block (div, span)

1️⃣ HTML Headings

HTML has 6 heading tags, used for titles and subtitles.

Syntax:
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

Important points:
```css
<h1> is the largest and most important

<h6> is the smallest

Headings are block-level elements

Use only one <h1> per page (best practice)
```

✅ Helps SEO and page structure

2️⃣ <small> Tag

The <small> tag makes text smaller and is used for less important information.

Example:
```html
<p>
  HTML is easy <small>(Beginner friendly)</small>
</p>
```
Common uses:

 - Copyright text

 - Side notes

 - Warnings or disclaimers

3️⃣ Block vs Inline Elements

HTML elements are mainly two types:

🔹 Block Elements

 - Take full width

 - Always start on a new line

 - Can contain other block & inline elements

Examples:

```html
<div>This is a div</div>
<p>This is a paragraph</p>
<h1>This is a heading</h1>
```

📌 Common block elements:
```html
<div>, <p>, <h1>–<h6>, <section>, <article>
```

🔹 Inline Elements

  - Take only required width

  - Stay in the same line

 - Cannot contain block elements

Examples:

```html
<span>This is a span</span>
<strong>Important</strong>
<em>Emphasized</em>
```

📌 Common inline elements:
```html
<span>, <a>, <b>, <i>, <strong>, <em>, <small>
```
4️⃣ ```<div> vs <span>```

Feature	<div>	<span>

Type	Block	Inline

New line	Yes	No

Width	Full width	Content width

Use	Layout / sections	Inline styling

Example:

```html
<div>
  This is a block element.
</div>

<p>
  This is <span style="color:red;">red text</span> inside a paragraph.
</p>
```

5️⃣ Visual Understanding
```html
[ DIV BLOCK ]
-----------------
|   Full width  |
-----------------
```

Inline: text <span>here</span> continues

6️⃣ Exam / Interview Tips ✅
```css
Use <h1>–<h6> for headings only

Prefer <div> for layout

Prefer <span> for inline text styling

<small> is inline element
```
## HTML List: Container tag, list tags (ol, ul, li), line break, button
[see more....](https://www.w3schools.com/html/)
