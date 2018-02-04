# bilo-ui

This is an npm package used for frontend web development.

## Setting up

To develop locally (in `{local-path-to}/bilo-ui/`) run:

|command|effect|
|:-|:-|
|`npm install`| installs all dependencies|
|`npm run dev`| runs in watch mode, recompiling (to `dist/`) after each change|
|`npm run demo:dev`| runs a demo of the webapp, served on [http://localhost:8080](http://localhost:8080)|

# Development
## Symlinks
You can use the local version of `bilo-ui` to work on other projects, rather than the one hosted on `npmjs.com`. This is achieved with symlinking node_modules.

>**Linking**
>- in the directory `bilo-ui/` run `npm link`
>- in the directory `some-other-proj/` run `npm link bilo-ui`

>**Unlinking**
>- In `some-other-proj` directory running `npm unlink bilo-ui`
>- To unlink it globally, run: `npm remove -g bilo-ui`

## Updating

To update the package, you need to:
- update the version number in the `package.json`
- run `npm run deploy` 
    - which unlinks the package if it was linked
    - creates the build folder (`dist`)
    - publishes that folder as a package to `https://npmjs.com/bilo-ui`

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

You can combine a set of basic components to quickly put together an application. For example:

```jsx
{/*Top bar of the application*/}
<AppTopBar>
  <i
    className='fa fa-bars' 
    onClick={() => this.toggleSidenav()}
  />
  <h1>My Application</h1>
  {/*TODO: AppDropdown*/}
  <AppDropdown 
      name={} 
      icon={} 
      faIcon={}>
      {items.map((item) => {
          return <a>{item}</a>
      })}
  </AppDropdown>
</AppTopBar>

<AppBody>
    <AppSidenav>
            {sidenav.items.map((page) => {
                return <Link
                    key={page.link}
                    to={page.link}
                    className='app-sidenav-link'
                    onClick={() => this.toggleSidenav())}>
                    {page.name}
                </Link>
            })}
    </AppSidenav>
    <AppContent>
        {/* any content, e.g. <Router></Router> */}
    </AppContent>
</AppBody>
```

### AppTopBar

The top bar displays the title of the app (potentially of the route) along with basic navigation, etc.

```jsx
<AppTopBar>
  {/* 
    style: {
        $dim-app-top-bar: 4em;
        top: 0;
        height: $dim-app-top-bar;
    }
  */}
</AppTopBar>
```

### AppBody

Displays the application content.

```jsx
<AppBody>
  {/* 
    style: {
      top: $dim-app-top-bar,
      height: cal(100% - dim-app-top-bar),
      display: flex,
      flex-direction: row,
    }
  */}
</AppBody>
```

### Sidenav

The sidenav provides an easy way to navigate to different application pages.

```jsx
// ...
render() {
    let sidenav = this.state.sidenav;
    return (
        <AppSidenav isOpen={this.state.sidenav.isOpen}>
                {this.state.sidenav.map((page) => {
                    return <Link
                        key={page.link}
                        to={page.link}
                        className='app-sidenav-link'
                        onClick={() => this.toggleSidenav()}>
                        {page.name}
                    </Link>
                })}
        </AppSidenav>
    )
}
// ...
componentWillMount() {
    this.setState({ sidenav: {
        isOpen: false,
        items: [
            {
                link: '/',
                name: 'home'
            }, {
                link: '/xui',
                name: 'Contact'
            }
        ]
    }})
}
// ...
toggleSideneav() {
    let sidenav = this.state.sidenav
    this.setState({
        ...this.state,
        sidenav: {
            ...sidenav,
            isOpen: !sidenav.isOpen
        }
    });
}
```

You can also specify your own theme, overriding the `sidenav` and `sidenav-link` classes.

### Search

Search using an API endpoint, with simple text queries.

```jsx
<Search
    tag='search_id'                                 
    placeholder='search...'
    search={(tag, q) => {console.log('handle search')}}
    select={(tag, item) => {console.log('select item: ', item)}}
    suggestions={this.props.searchResults.search_id}
    suggestionsOn={true}
/>
```

## Icons

Icons supported in this web ui pack are from [FontAwesome](http://fontawesome.io).

```jsx
<Icon 
  names={['menu']}          // (required) at least 1 icon (stacks icons if more)
  spin={true}               // (optional) rotates icon
  flipX={true}              // (optional) flip along x axis (upside down)
  flipY={false}             // (optional) flip along x axis (upside down)
  />
```