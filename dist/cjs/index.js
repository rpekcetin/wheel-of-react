'use strict';

var React = require('react');
require('@fontsource/quicksand');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".container {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.spin_button {\n    position: absolute;\n    width: 35px;\n    height: 35px;\n    border-radius: 100%;\n    background-color: transparent;\n    color: white;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}";
styleInject(css_248z);

var img = "data:image/png;base64,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";

const Wheel = ({ size, wheelData, selectedDataIndex, onFinishedRotation, fontSize, fontWeight, fontFamily }) => {
    const exampleData = [
        { color: '#fa7890', text: 'Text 1' },
        { color: '#7896fa', text: 'Text 2' },
        { color: '#78fa78', text: 'Text 3' },
        { color: '#faf378', text: 'Text 4' },
        { color: '#facd5c', text: 'Text 5' },
        { color: '#fa78dc', text: 'Text 6' },
    ];
    const data = wheelData !== null && wheelData !== void 0 ? wheelData : exampleData;
    const sizes = size !== null && size !== void 0 ? size : 250;
    const radius = sizes / 2;
    const total = data.length;
    const sliceDegree = 360 / total;
    const pieRef = React.useRef(null);
    const [currentRotation, setCurrentRotation] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    React.useEffect(() => {
        if (pieRef.current) {
            pieRef.current.style.transform = `rotate(${currentRotation}deg)`;
        }
    }, [currentRotation]);
    const startRotation = () => {
        if (isAnimating || !pieRef.current)
            return;
        setIsAnimating(true);
        const max = data.length;
        const targetAngle = 360 - (selectedDataIndex !== null && selectedDataIndex !== void 0 ? selectedDataIndex : Math.floor(Math.random() * (max - 1)) * sliceDegree) - (sliceDegree / 2);
        const rotation = currentRotation % 360;
        const additionalRotation = rotation > targetAngle ? 360 - rotation + targetAngle : targetAngle - rotation;
        const newRotation = currentRotation + additionalRotation + 360 * 3; // Additional 3 full spins
        pieRef.current.style.transition = `transform 3s ease-out`;
        pieRef.current.style.transform = `rotate(${newRotation}deg)`;
        setTimeout(() => {
            setIsAnimating(false);
            setCurrentRotation(newRotation);
            //onFinishedRotation();
        }, 3000);
    };
    return (React.createElement("div", { className: 'container' },
        React.createElement("svg", { ref: pieRef !== null && pieRef !== void 0 ? pieRef : null, width: sizes, height: sizes, viewBox: `0 0 ${sizes} ${sizes}`, style: { transformOrigin: 'center' } }, data.map((item, index) => {
            const startAngle = sliceDegree * index;
            const endAngle = startAngle + sliceDegree;
            const midAngleRadians = Math.PI * (startAngle + endAngle) / 360;
            const startX = radius + radius * Math.cos(Math.PI * startAngle / 180);
            const startY = radius + radius * Math.sin(Math.PI * startAngle / 180);
            const endX = radius + radius * Math.cos(Math.PI * endAngle / 180);
            const endY = radius + radius * Math.sin(Math.PI * endAngle / 180);
            const textX = radius + (radius / 2) * Math.cos(midAngleRadians);
            const textY = radius + (radius / 2) * Math.sin(midAngleRadians);
            return (React.createElement("g", { key: index },
                React.createElement("path", { d: `M ${radius},${radius} L ${startX},${startY} A ${radius},${radius} 0 0 1 ${endX},${endY} z`, fill: item.color }),
                React.createElement("text", { x: textX, y: textY, textAnchor: "middle", dominantBaseline: "central", fontSize: fontSize !== null && fontSize !== void 0 ? fontSize : '14px', fill: 'black', fontWeight: fontWeight, fontFamily: fontFamily !== null && fontFamily !== void 0 ? fontFamily : 'QuickSand', style: { transform: `rotate(${startAngle + sliceDegree / 2}deg)`, transformOrigin: `${textX}px ${textY}px` } }, item.text)));
        })),
        React.createElement("button", { className: 'spin_button', onClick: startRotation, disabled: isAnimating },
            React.createElement("img", { src: img, style: { marginLeft: '8px', width: '32px', transform: 'rotate(90deg)' } }))));
};
// const data = [
//     { color: 'red', text: 'Text 1' },
//     { color: 'blue', text: 'Text 2' },
//     { color: 'green', text: 'Text 3' },
//     { color: 'yellow', text: 'Text 4' },
//     { color: 'orange', text: 'Text 5' },
//     { color: 'pink', text: 'Text 6' },
//     { color: 'purple', text: 'Text 7' },
//     { color: 'grey', text: 'Text 8' },
//     { color: 'black', text: 'Text 9' },
//     { color: 'cyan', text: 'Text 10' },
//     { color: 'lemon', text: 'Text 11' },
//     { color: 'cream', text: 'Text 12' },
//     // Add more objects for more slices
//   ];
//   const [selectedDataIndex, setSelectedDataIndex] = useState(0); // Index of the data slice to stop at
//   const handleFinishedRotation = () => {
//     console.log("Finished rotation at data index:", selectedDataIndex);
//     // You can update the selectedDataIndex here if needed
//   };
//   return (
//     <>
//       <PieChart
//         data={data}
//         selectedDataIndex={selectedDataIndex}
//         onFinishedRotation={handleFinishedRotation}
//       />
//     </>
//   )
// }

exports.Wheel = Wheel;
//# sourceMappingURL=index.js.map
