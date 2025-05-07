# Extension-LaTeX

Render math formulas in LaTeX/AsciiMath format in SillyTavern chats.

## How to use

1. Install the "LaTeX" extension from the "Download Extensions & Assets" menu in the Extensions panel.
2. Use the `latex` or `asciimath` code block to render math formulas in LaTeX or AsciiMath format respectively.

### Alternative syntax

In the [assets](./assets) folder you'll find a collection of regex scripts for alternative LaTeX syntax options. Import them with the Regex extension to use them in your chats.

* Double Dollar Signs [`($$...$$)`](./assets/$$.json)
* Single Dollar Signs [`($...$)`](./assets/$.json)
* LaTeX Brackets [`(\[...\])`](./assets/[.json)
* LaTeX Parentheses [`(\(...\))`](./assets/\(.json)

## Legacy syntax

To use the legacy syntax with `$$` (LaTeX) and `$` (AsciiMath) delimiters in Markdown, import the following scripts with the Regex extension.

* [$$ - LaTeX](./assets/$$_-_latex.json)
* [$ - AsciiMath](./assets/$_-_asciimath.json)

### Example

### Code blocks

~~~txt
```latex
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
```
~~~

~~~txt
```asciimath
int_{-oo}^{oo} e^{-x^2} dx = sqrt{pi}
```
~~~

### With regex scripts

~~~txt
$$\boxed{\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}}$$
~~~

~~~txt
$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$
~~~

~~~txt
\[ \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} \]
~~~

~~~txt
\( \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} \)
~~~

## License

AGPL-3.0
