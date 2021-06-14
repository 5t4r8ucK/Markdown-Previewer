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

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui in velit bibendum aliquet nec vitae ex. Vivamus tincidunt porttitor est a lacinia.

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

---

## 7. Code

This is inline: \`code\`

This is a block of code:
\`\`\`
line 1 of code
line 2 of code
line 3 of code
\`\`\`
You can display the programming language like this:
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

---

## 10. Images

A gif image:

![Daftpunktocat-Guy](https://octodex.github.com/images/daftpunktocat-guy.gif)

A jpeg image with a title:

![Octocat De Los Muertos](https://octodex.github.com/images/octocat-de-los-muertos.jpg "Octocat De Los Muertos")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/yaktocat.png  "Yaktocat"`;

export default exampleText;