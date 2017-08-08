# bilo-ui

This is an npm package used for frontend web development.

## Quickstart

To dev on the library in watch mode, run:

- `npm install`
- `npm run dev`

To run it locally, run:

- `npm link`
- `npm unlink`

> NOTE: In project directory running `npm unlink bilo-ui`

To unlink it globally, run:

- `npm remove -g bilo-ui`

## Colors

### Color Palette

|color|value|
|:----|:----|
| `$ws-col-accent`    | <div style="background-color: #00FFEE">&nbsp;</div> |
| `$ws-col-primary`   | <div style="background-color: #28E0B5">&nbsp;</div> |
| `$ws-col-secondary` | <div style="background-color: #2D363D">&nbsp;</div> |
| `$ws-col-background`| <div style="background-color: #1e1e1e">&nbsp;</div> |
| `$ws-col-text`      | <div style="background-color: #F8F8F8">&nbsp;</div> |

### SCSS

```scss
$ws-col-accent:     #00FFEE;
$ws-col-primary:    #28E0B5;
$ws-col-secondary:  #2D363D;
$ws-col-background: #1e1e1e;
$ws-col-text:       #F8F8F8;

$col-lightgrey:     darken(#EFEFEF, 30%);
$col-background:    $ws-col-background;
$col-active:        $ws-col-primary;
$col-accent:        $ws-col-accent;
$col-text:          $ws-col-text; 
```