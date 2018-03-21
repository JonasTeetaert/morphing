{
    const parallax = false;

    // Parallax effect - source: http://www.firewatchgame.com/
    if (parallax) {
        var layers = document.getElementsByClassName("parallax");
        window.addEventListener("scroll", function (event) {

            var top = this.pageYOffset;

            var layer, speed, yPos;
            for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                var yPos = -(top * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

            }
        });
    }

    // Infinite Morphing
    const DOM = {};
    DOM.svg = document.querySelector('.morph');
    DOM.shapeEl = DOM.svg.querySelector('path');
    DOM.contentElems = document.querySelectorAll('.content-block');
    const shape = {
        path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
        pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
        scaleX: 1.2,
        scaleY: 1,
        rotate: 0,
        tx: -30,
        ty: -300,
        fill: {
            color: '#282faf',
            duration: 500,
            easing: 'linear'
        },
        animation: {
            path: {
                duration: 3000,
                easing: 'easeOutElastic',
                elasticity: 600
            },
            svg: {
                duration: 2000,
                easing: 'easeOutElastic'
            }
        }
    }

    const initShapeLoop = function (pos) {
        pos = pos || 0;
        anime.remove(DOM.shapeEl);
        anime({
            targets: DOM.shapeEl,
            easing: 'linear',
            d: [{ value: shape.pathAlt, duration: 3500 }, { value: shape.path, duration: 3500 }],
            loop: true,
            fill: {
                value: shape.fill.color,
                duration: shape.fill.duration,
                easing: shape.fill.easing
            },
            direction: 'alternate'
        });
    };

    const setShapePos = function (pos) {
        pos = pos || 0;
        const contentRect = DOM.contentElems[pos].getBoundingClientRect();
        console.log(DOM.svg);
        
        DOM.svg.style.width = contentRect.width;
        DOM.svg.style.height = contentRect.height;
        DOM.svg.style.left = contentRect.x;
        DOM.svg.style.top = contentRect.y;

    }

    initShapeLoop();
    // setShapePos(0);
}