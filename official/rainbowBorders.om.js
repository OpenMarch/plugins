// This is an example of an OpenMarch plugin that adds a rainbow border effect to moving Marchers.
// Copyright (c) 2025 OpenMarch. Licensed under the AGPL-3.0 License.

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
