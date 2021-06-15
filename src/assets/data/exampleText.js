const exampleText =
`## 1. Title Headings

This is what headings look like:

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

---

## 2. Horizontal Rules

Three different ways to write the rule element:

___
---
***

---

## 3. Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

---

## 3. Blocks of text

This is what a couple of paragraphs look like:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui in velit bibendum aliquet nec vitae ex. Vivamus tincidunt porttitor est a lacinia. Nulla finibus tortor at nibh efficitur aliquam. Quisque tincidunt pharetra fermentum. Suspendisse et est eget dolor molestie tristique quis quis ex. Aenean ultricies sapien vel mi laoreet finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Morbi egestas, enim a scelerisque lobortis, ipsum ex scelerisque velit, ut convallis massa urna non nisi. Duis tempor enim ut lectus porta semper. Vestibulum nec est vitae turpis mollis volutpat at sit amet magna. Aenean non sem euismod, sodales est a, iaculis magna. Praesent molestie ex sed erat bibendum, id blandit orci venenatis.

---

## 4. Emphasis

**This is bold text**

__This is also bold text__

*This is italic text*

_This is also italic text_

**_This is both bold and italic text_**

~~This is strikethrough text~~

---

## 5. Blockquotes

This is how blockquotes will display:

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between the arrows.
---

## 6. Lists

This is how unordered lists look like:

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

This is how ordered lists look like:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

157. foo
1. bar

---

## 7. Code

This is inline: \`code\`

This is a block of code:
\`\`\`
line 1 of code
line 2 of code
line 3 of code
\`\`\`
Using [highlight.js](https://highlightjs.org/) You can display the programming language and syntax highlighting like this:
\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

---

## 8. Tables

A table:

| option | description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

A table with right aligned columns:

| option |description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

---

## 9. Links

[This is what linked text looks like](http://dev.nodeca.com)

[This is a link with a title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

---

## 10. Images

A GIF image:

*[GIF]: Graphics Interchange Format

![Daftpunktocat-Guy](https://octodex.github.com/images/daftpunktocat-guy.gif)

A JPG image with a title:

*[JPG]: Joint Photographic Experts Group

![Octocat De Los Muertos](https://octodex.github.com/images/octocat-de-los-muertos.jpg "Octocat De Los Muertos")

Like links, images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location.

[id]: https://octodex.github.com/images/yaktocat.png  "Yaktocat"

---

## 11. Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum: Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [Inserted Text](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [Marked Text](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

Compact style:

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: error
here be dragons
:::

`;

export default exampleText;