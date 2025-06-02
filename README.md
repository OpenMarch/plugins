# The OpenMarch Plugin Repository

You must be interested in creating plugins for OpenMarch. It's very easy!

Plugins are loaded from the `plugins` directory within the OpenMarch app data folder (e.g., `%appdata%/OpenMarch/plugins` on Windows operating systems). 

Simply create a file that ends with the `.om.js` extension, and this script will be loaded in the main window on startup. 

There are a few requirements when creating plugins:
1. Plugin file names must be unique. You cannot publish to the plugin repository under a name that has been taken.
2. The plugin's file extension must end in `.om.js`.
3. Metadata is required in the file in a specific format, shown in the example below.
4. The plugin's code may be contained within a single function named for the plugin to avoid conflicts with other plugins.

The plugin's code will be run as if it were in a `<script>` tag within the main window (this is literally how plugins are loaded into OpenMarch). 

## Submitting a Plugin

To submit a plugin to the repository, create a pull request to add a file under the `/community/` directory in this repository (`OpenMarch/plugins`). The pull request must contain a name, version, author, and description of the plugin to be added. The only change the pull request should make is to add the file appropriately and uniquely named with a `.om.js` file extension.

## Example Plugin
Below is an example plugin for OpenMarch. You may use it as a template for your own plugins.
```js
// rainbowBorders.om.js


// Name: RainbowBorders
// Description: Adds a rainbow border effect to Marchers that are currently moving.
// Version: 1.0.0
// Author: OpenMarch Developers

async function RainbowBorders() {
    let canvas = window.canvas;
    if (!canvas) {
        // Retry after 1 second if canvas is not found
        console.log('Canvas element not found, retrying in 1 second...');
        setTimeout(RainbowBorders, 1000);
        return;
    }
    console.log('RainbowBorders loaded successfully!');
    setInterval(() => {
        canvas._objects.forEach(element => {
            if (element.classString === "Marcher" && element.isMoving) {
                const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E74C3C', '#2ECC71', '#3498DB'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];

                element.set('borderColor', randomColor);
            }
        });
    }, 100);
}
RainbowBorders();
```
