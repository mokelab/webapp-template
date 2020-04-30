import Ractive from "ractive";

const Loading = Ractive.extend(<any>{
  template:
    '<svg class="circle-loader progress" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="20" cy="20" r="15">' +
    "</svg>",
  css: `.circle-loader {
        margin-left: 48%;  
        fill: transparent;
        stroke: #009688;
        stroke-width: 5;
        animation: dash 2s ease infinite,rotate 2s linear infinite;
    }
    
    @keyframes dash {
        0% {
            stroke-dasharray: 1,95;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 85,95;
            stroke-dashoffset: -25;
        }
        100% {
            stroke-dasharray: 85,95;
            stroke-dashoffset: -93;
        }
    }
    
    @keyframes rotate {
        0% {transform: rotate(0deg); }
        100% {transform: rotate(360deg); }
    }    
    `,
});

export default Loading;
