# bilo-ui

This is an npm package used for frontend web development.

## Setting up

To develop locally (in `.../bilo-ui/`) run:
|||
|:-|:-|
|`npm install`| installs all dependencies|
|`npm run dev`| runs in watch mode, recompiling (to `dist/`) after each change|
| `npm link` | create symlink for other packages|
| `npm unlink`| |

## Symlinks
You can use the local version of `bilo-ui` to work on other projects, rather than the one hosted on `npmjs.com`. This is achieved with symlinking node_modules.

>NOTE: **Linking**
>- in the directory `bilo-ui/` run `npm link`
>- in the directory `some-other-proj/` run `npm link bilo-ui`

>NOTE: **Unlinking**
>- In `some-other-proj` directory running `npm unlink bilo-ui`
>- To unlink it globally, run: `npm remove -g bilo-ui`

## Colors

### Color Palette

|color|value|
|:----|:----|
| `$ws-col-accent`    | <div style="background-color: #00FFEE; border: 1px solid grey">accent</div> |
| `$ws-col-primary`   | <div style="background-color: #28E0B5; border: 1px solid grey">primary</div> |
| `$ws-col-secondary` | <div style="background-color: #2D363D; border: 1px solid grey">secondary</div> |
| `$ws-col-background`| <div style="background-color: #1e1e1e; border: 1px solid grey">background</div> |
| `$ws-col-text`      | <div style="background-color: #F8F8F8; border: 1px solid grey">text color</div> |

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

## Components

```jsx
<AppTopBar>
  <SidenavToggle icon={icon} faIcon={'icon'}/>
  <AppTitle text={'My App'}/>
  <AppDropdown name={} icon={} faIcon={}>
    {}
  </AppDropdown>
</AppTopBar>

<AppBody>
  <AppSidenav>
      <SidenavItem></SidnavItem>
  </AppSidenav>
  <AppContent>
      <Router></Router>
  </AppContent>
</AppBody>

<AppFooter>
  
</AppFooter>
```