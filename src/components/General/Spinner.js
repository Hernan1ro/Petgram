import React from "react";
// import "./Spinner.css";

export const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "auto", background: "#fff", display: "block" }}
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 50 50;0 50 50"
        keyTimes="0;1"
        dur="1s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.5 0 0.5 1"
        begin="-0.1s"
      />
      <circle
        cx={50}
        cy={50}
        r="39.891"
        stroke="#6994b7"
        strokeWidth="14.4"
        fill="none"
        strokeDasharray="0 300"
      >
        <animate
          attributeName="stroke-dasharray"
          values="15 300;55.1413599195142 300;15 300"
          keyTimes="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
          calcMode="linear"
          keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
          begin="-0.046s"
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r="39.891"
        stroke="#eee"
        strokeWidth="7.2"
        fill="none"
        strokeDasharray="0 300"
      >
        <animate
          attributeName="stroke-dasharray"
          values="15 300;55.1413599195142 300;15 300"
          keyTimes="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
          calcMode="linear"
          keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
          begin="-0.046s"
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r="32.771"
        stroke="#000"
        fill="none"
        strokeDasharray="0 300"
      >
        <animate
          attributeName="stroke-dasharray"
          values="15 300;45.299378454348094 300;15 300"
          keyTimes="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
          calcMode="linear"
          keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
          begin="-0.046s"
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r="47.171"
        stroke="#000"
        fill="none"
        strokeDasharray="0 300"
      >
        <animate
          attributeName="stroke-dasharray"
          values="15 300;66.03388996804073 300;15 300"
          keyTimes="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
          calcMode="linear"
          keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
          begin="-0.046s"
        />
      </circle>
    </g>
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 50 50;0 50 50"
        keyTimes="0;1"
        dur="1s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.5 0 0.5 1"
      />
      <path
        fill="#6994b7"
        stroke="#000"
        d="M97.2 50.1c0 6.1-1.2 12.2-3.5 17.9l-13.3-5.4c1.6-3.9 2.4-8.2 2.4-12.4"
      />
      <path
        fill="#eee"
        d="M93.5 49.9c0 1.2 0 2.7-.1 3.9l-.4 3.6c-.4 2-2.3 3.3-4.1 2.8l-.2-.1c-1.8-.5-3.1-2.3-2.7-3.9l.4-3c.1-1 .1-2.3.1-3.3"
      />
      <path
        fill="#6994b7"
        stroke="#000"
        d="M85.4 62.7c-.2.7-.5 1.4-.8 2.1-.3.7-.6 1.4-.9 2-.6 1.1-2 1.4-3.2.8-1.1-.7-1.7-2-1.2-2.9.3-.6.5-1.2.8-1.8.2-.6.6-1.2.7-1.8M94.5 65.8c-.3.9-.7 1.7-1 2.6-.4.9-.7 1.7-1.1 2.5-.7 1.4-2.3 1.9-3.4 1.3-1.1-.7-1.5-2.2-.9-3.4.4-.8.7-1.5 1-2.3.3-.8.7-1.5.9-2.3"
      />
    </g>
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 50 50;0 50 50"
        keyTimes="0;1"
        dur="1s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.5 0 0.5 1"
        begin="-0.1s"
      />
      <path
        fill="#eee"
        stroke="#000"
        d="m86.9 35.3-6 2.4c-.4-1.2-1.1-2.4-1.7-3.5-.2-.5.3-1.1.9-1 2.2.6 4.7 1.2 6.8 2.1zM87.1 35.3l6-2.4c-.6-1.7-1.5-3.3-2.3-4.9-.3-.7-1.2-.6-1.4.1-.6 2.5-1.2 4.9-2.3 7.2z"
      />
      <path
        fill="#6994b7"
        stroke="#000"
        d="M82.8 50.1c0-3.4-.5-6.8-1.6-10-.2-.8-.4-1.5-.3-2.3.1-.8.4-1.6.7-2.4.7-1.5 1.9-3.1 3.7-4 1.8-.9 3.7-1.1 5.6-.3.9.4 1.7 1 2.4 1.8s1.3 1.7 1.7 2.8c1.5 4.6 2.2 9.5 2.3 14.4"
      />
      <path
        fill="#eee"
        d="M86.3 50.2v-.9l-.1-.9-.1-1.9c0-.9.2-1.7.7-2.3.5-.7 1.3-1.2 2.3-1.4h.3c.9-.2 1.9 0 2.6.6.7.5 1.3 1.4 1.4 2.4l.2 2.2.1 1.1v1.1"
      />
      <path
        fill="#f92"
        d="M93.2 34.6c.1.4-.3.8-.9 1-.6.2-1.2.1-1.4-.2-.1-.3.3-.8.9-1 .6-.2 1.2-.1 1.4.2zM81.9 38.7c.1.3.7.3 1.3.1.6-.2 1-.6.9-.9-.1-.3-.7-.3-1.3-.1-.6.2-1 .6-.9.9z"
      />
      <path d="M88.5 36.8c.1.3-.2.7-.6.8-.5.2-.9 0-1.1-.3-.1-.3.2-.7.6-.8.5-.2 1-.1 1.1.3z" />
      <path
        stroke="#000"
        d="M85.9 38.9c.2.6.8.9 1.4.7.6-.2.9-.9.6-2.1.3 1.2 1 1.7 1.6 1.5.6-.2.9-.8.8-1.4"
      />
      <path
        fill="#6994b7"
        stroke="#000"
        d="m86.8 42.3.4 2.2c.1.4.1.7.2 1.1l.1 1.1c.1 1.2-.9 2.3-2.2 2.3-1.3 0-2.5-.8-2.5-1.9l-.1-1c0-.3-.1-.6-.2-1l-.3-1.9M96.2 40.3l.5 2.7c.1.5.2.9.2 1.4l.1 1.4c.1 1.5-.9 2.8-2.2 2.9-1.3 0-2.5-1.1-2.6-2.4l-.1-1.3c0-.4-.1-.8-.2-1.2l-.4-2.5"
      />
      <path d="M91.1 34.1c.3.7 0 1.4-.7 1.6-.6.2-1.3-.1-1.6-.7-.2-.6 0-1.4.7-1.6.6-.3 1.3.1 1.6.7zM85.5 36.3c.2.6-.1 1.2-.7 1.5-.6.2-1.3 0-1.5-.6-.3-.5.1-1.2.7-1.4.6-.3 1.3-.1 1.5.5z" />
    </g>
  </svg>
);
