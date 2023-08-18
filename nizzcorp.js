const svg = document.getElementById('svg-One');
const movingRect = document.getElementById('moving-rect');
const container = document.getElementById('new-Svg');


svg.addEventListener('click', (e) => {
    const svgMove = svg.addEventListener('mouseover', (e) => {
        const x = e.clientX - svg.getBoundingClientRect().left - 50;
        const y = e.clientY - svg.getBoundingClientRect().top - 50;
        movingRect.setAttribute('x', x);
        movingRect.setAttribute('y', y);
    });
})

svg.addEventListener('dblclick', (e) => {
    console.log("test");
    svg.removeEventListener('mouseover', () => {
        console.log("test");
    }, true)
})

svg.addEventListener('contextmenu', (event) => {
    console.log("🖱 right click detected!")
    // event.preventDefault(); // Prevent the default context menu
    // Create a new SVG rect element.
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    // Set the attributes of the rect element.
    rect.setAttribute('x', event.clientX - container.getBoundingClientRect().left);
    rect.setAttribute('y', event.clientY - container.getBoundingClientRect().top);
    rect.setAttribute('width', '100px');
    rect.setAttribute('height', '100px');
    rect.setAttribute('fill', 'blue');
    rect.setAttribute('viewBox', '0 0 300 300');
    container.appendChild(rect)

    // moveing


    container.addEventListener('mouseover', (e) => {
        const x = e.clientX - svg.getBoundingClientRect().left - 50;
        const y = e.clientY - svg.getBoundingClientRect().top - 50;
        movingRect.setAttribute('x', x);
        movingRect.setAttribute('y', y);
    });

})


