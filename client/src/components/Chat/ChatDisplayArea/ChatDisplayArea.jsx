import MessageBox from "../MessageBox/MessageBox.jsx";
import { useSelector } from "react-redux";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { useState } from "react";

export default function ChatDisplayArea({ messages }) {
  const [isPopupDisplaying, setIsPopupDisplaying] = useState(
    chats.length === 0 ? true : false
  );
  const { name: loggedUser } = useSelector((state) => state.userRegister);

  const clickHandler = () => {
    setIsPopupDisplaying(false);
  };
  
  return (
    <ChatsContainer>
      {messages.map((message) => (
        <MessageBox
          message={message}
          loggedUser={loggedUser}
          key={message.id}
        />
      ))}
      {isPopupDisplaying && (
        <svg
          onClick={clickHandler}
          width="239"
          height="176"
          viewBox="0 0 239 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: "7rem",
            left: "3rem",
          }}
        >
          <path
            d="M44.2181 129.982L44.5895 128.863L43.5896 128.238C23.6081 115.745 11.5 98.5325 11.5 79.7401C11.5 61.172 23.3197 44.1479 42.8776 31.6916C62.4178 19.2465 89.5039 11.5 119.5 11.5C149.496 11.5 176.582 19.2465 196.122 31.6916C215.68 44.1479 227.5 61.172 227.5 79.7401C227.5 98.3082 215.68 115.332 196.122 127.789C176.582 140.234 149.496 147.98 119.5 147.98C104.491 147.98 82.5734 143.932 70.9205 141.269L70.3339 141.135L69.8172 141.443C59.5213 147.592 51.572 152.701 45.5952 156.542C44.056 157.531 42.6477 158.436 41.3637 159.253C38.2121 161.259 35.8545 162.706 34.1412 163.585C33.2814 164.026 32.6489 164.29 32.1998 164.417C32.1981 164.417 32.1963 164.418 32.1946 164.418C32.2124 164.193 32.2559 163.888 32.3413 163.488C32.6495 162.044 33.3745 159.904 34.4744 156.925C34.9828 155.548 35.565 154.008 36.2103 152.302C38.3266 146.704 41.1219 139.311 44.2181 129.982Z"
            fill="white"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="M85.8881 53.0732C85.9056 53.2842 85.7855 53.4424 85.5277 53.5479L83.9808 54.0049C83.8988 54.0283 83.8051 54.0225 83.6996 53.9873C83.5238 53.917 83.4301 53.7881 83.4183 53.6006C83.4066 53.4658 83.3949 53.3428 83.3832 53.2314C83.3363 52.8154 83.225 52.3877 83.0492 51.9482C82.9789 51.9248 82.9086 51.9131 82.8383 51.9131C82.1176 51.9189 81.4144 53.2314 80.7289 55.8506C80.4183 57.04 80.2631 58.0596 80.2631 58.9092C80.2631 59.8525 80.4125 60.3682 80.7113 60.4561H80.8695C80.975 60.3799 81.0775 60.292 81.1771 60.1924C81.4174 59.9404 81.7426 59.4189 82.1527 58.6279C82.2347 58.4697 82.308 58.3555 82.3724 58.2852C82.4838 58.168 82.6508 58.1592 82.8734 58.2588L84.3148 58.8916C84.3676 58.915 84.4115 58.9531 84.4467 59.0059C84.5404 59.1641 84.514 59.3604 84.3676 59.5947C83.7465 60.5908 83.184 61.3057 82.6801 61.7393C82.0121 62.3135 81.2035 62.6006 80.2543 62.6006C79.9027 62.6006 79.5277 62.4775 79.1293 62.2314C78.7133 61.9678 78.3851 61.5811 78.1449 61.0713C77.8695 60.4619 77.7318 59.7031 77.7318 58.7949C77.7318 57.7988 77.8988 56.6299 78.2328 55.2881C78.6429 53.6533 79.2142 52.3613 79.9467 51.4121C80.8842 50.1992 81.8949 49.5928 82.9789 49.5928C84.016 49.5928 84.7689 49.9736 85.2377 50.7354C85.5892 51.3037 85.806 52.083 85.8881 53.0732ZM88.2435 50.1201C88.3138 49.8682 88.4896 49.7393 88.7709 49.7334H90.265C90.3412 49.7334 90.4086 49.751 90.4672 49.7861C90.6195 49.8857 90.6693 50.0498 90.6166 50.2783L88.0414 60.3682H91.4076C91.7533 60.374 91.8881 60.5615 91.8119 60.9307L91.5834 61.9678C91.5658 62.0381 91.5336 62.1084 91.4867 62.1787C91.3519 62.3662 91.1849 62.46 90.9857 62.46H85.5892C85.5131 62.46 85.4457 62.4424 85.3871 62.4072C85.2347 62.3076 85.1849 62.1436 85.2377 61.915L88.2435 50.1201ZM95.3802 50.1201C95.4506 49.8682 95.6263 49.7393 95.9076 49.7334H97.4017C97.4779 49.7334 97.5453 49.751 97.6039 49.7861C97.7562 49.8857 97.806 50.0498 97.7533 50.2783L94.7474 62.0732C94.6771 62.3252 94.5013 62.4541 94.2201 62.46H92.726C92.6498 62.46 92.5824 62.4424 92.5238 62.4072C92.3715 62.3076 92.3217 62.1436 92.3744 61.915L95.3802 50.1201ZM105.523 53.0732C105.54 53.2842 105.42 53.4424 105.162 53.5479L103.616 54.0049C103.534 54.0283 103.44 54.0225 103.334 53.9873C103.159 53.917 103.065 53.7881 103.053 53.6006C103.041 53.4658 103.03 53.3428 103.018 53.2314C102.971 52.8154 102.86 52.3877 102.684 51.9482C102.614 51.9248 102.543 51.9131 102.473 51.9131C101.752 51.9189 101.049 53.2314 100.364 55.8506C100.053 57.04 99.8978 58.0596 99.8978 58.9092C99.8978 59.8525 100.047 60.3682 100.346 60.4561H100.504C100.61 60.3799 100.712 60.292 100.812 60.1924C101.052 59.9404 101.377 59.4189 101.787 58.6279C101.87 58.4697 101.943 58.3555 102.007 58.2852C102.119 58.168 102.286 58.1592 102.508 58.2588L103.95 58.8916C104.002 58.915 104.046 58.9531 104.081 59.0059C104.175 59.1641 104.149 59.3604 104.002 59.5947C103.381 60.5908 102.819 61.3057 102.315 61.7393C101.647 62.3135 100.838 62.6006 99.889 62.6006C99.5375 62.6006 99.1625 62.4775 98.764 62.2314C98.348 61.9678 98.0199 61.5811 97.7797 61.0713C97.5043 60.4619 97.3666 59.7031 97.3666 58.7949C97.3666 57.7988 97.5336 56.6299 97.8676 55.2881C98.2777 53.6533 98.849 52.3613 99.5814 51.4121C100.519 50.1992 101.53 49.5928 102.614 49.5928C103.651 49.5928 104.404 49.9736 104.872 50.7354C105.224 51.3037 105.441 52.083 105.523 53.0732ZM107.887 50.1201C107.957 49.8682 108.133 49.7393 108.414 49.7334H109.909C109.979 49.7334 110.046 49.751 110.111 49.7861C110.269 49.8857 110.319 50.0498 110.26 50.2783L109.091 54.8574L112.633 49.9619C112.68 49.8975 112.733 49.8447 112.791 49.8037C112.862 49.7568 112.985 49.7334 113.161 49.7334H114.883C115.024 49.7334 115.129 49.7744 115.2 49.8564C115.305 49.9971 115.27 50.1729 115.094 50.3838L110.84 55.9912L112.299 61.9326C112.399 62.2725 112.264 62.4482 111.895 62.46H110.506C110.166 62.46 109.95 62.3135 109.856 62.0205L108.617 56.7383L107.254 62.0732C107.184 62.3252 107.008 62.4541 106.727 62.46H105.233C105.162 62.46 105.095 62.4424 105.031 62.4072C104.872 62.3076 104.823 62.1436 104.881 61.915L107.887 50.1201ZM120.148 50.1201C120.218 49.8682 120.394 49.7393 120.675 49.7334H122.363C122.398 49.7334 122.436 49.7363 122.477 49.7422C122.653 49.7715 122.755 49.9033 122.785 50.1377C122.995 52.4229 123.063 54.4531 122.987 56.2285L126.564 50.0674C126.576 50.0498 126.587 50.0293 126.599 50.0059C126.722 49.8242 126.886 49.7334 127.091 49.7334H128.779C128.855 49.7334 128.922 49.751 128.981 49.7861C129.133 49.8857 129.183 50.0498 129.13 50.2783L126.124 62.0732C126.054 62.3252 125.878 62.4541 125.597 62.46H124.103C124.027 62.46 123.959 62.4424 123.901 62.4072C123.748 62.3076 123.699 62.1436 123.751 61.915L125.114 56.5625L123.962 58.4697C123.956 58.4814 123.948 58.4961 123.936 58.5137C123.625 59.0234 123.259 59.2783 122.837 59.2783L121.677 59.1553C121.279 59.1025 121.091 58.8682 121.115 58.4521C121.167 57.6436 121.176 56.7207 121.141 55.6836L119.515 62.0732C119.445 62.3252 119.269 62.4541 118.988 62.46H117.494C117.417 62.46 117.35 62.4424 117.291 62.4072C117.139 62.3076 117.089 62.1436 117.142 61.915L120.148 50.1201ZM132.734 54.5146H135.731C136.053 54.5205 136.176 54.708 136.1 55.0771L135.889 56.1143C135.871 56.1846 135.842 56.2549 135.801 56.3252C135.672 56.5127 135.514 56.6064 135.327 56.6064H132.206L131.24 60.3682H134.606C134.952 60.374 135.086 60.5615 135.01 60.9307L134.782 61.9678C134.764 62.0381 134.732 62.1084 134.685 62.1787C134.55 62.3662 134.383 62.46 134.184 62.46H128.787C128.711 62.46 128.641 62.4424 128.577 62.4072C128.424 62.3076 128.377 62.1436 128.436 61.915L131.011 51.8252H130.387C130.34 51.8252 130.296 51.8223 130.255 51.8164C130.021 51.7754 129.953 51.5674 130.053 51.1924L130.334 50.085C130.358 49.9795 130.384 49.8945 130.413 49.8301C130.449 49.7656 130.539 49.7334 130.686 49.7334H137.207C137.553 49.7393 137.688 49.9268 137.612 50.2959L137.383 51.333C137.366 51.4033 137.333 51.4736 137.286 51.5439C137.152 51.7314 136.985 51.8252 136.786 51.8252H133.419L132.734 54.5146ZM149.407 49.7334C149.752 49.7334 149.887 49.9209 149.811 50.2959L149.582 51.333C149.565 51.4033 149.533 51.4736 149.486 51.5439C149.351 51.7314 149.184 51.8252 148.985 51.8252H146.462L143.852 62.0732C143.782 62.3252 143.606 62.4541 143.325 62.46H141.813C141.707 62.46 141.614 62.4189 141.532 62.3369C141.45 62.2549 141.426 62.1436 141.461 62.0029L144.054 51.8252H141.373C141.332 51.8252 141.288 51.8223 141.242 51.8164C141.013 51.7754 140.946 51.5674 141.039 51.1924L141.321 50.085C141.344 49.9971 141.37 49.9268 141.4 49.874C141.464 49.7803 141.614 49.7334 141.848 49.7334H149.407ZM150.866 55.8506C150.514 57.1865 150.338 58.2734 150.338 59.1113C150.338 60.0078 150.537 60.4561 150.936 60.4561C151.024 60.4561 151.112 60.4443 151.2 60.4209C151.452 60.3389 151.721 60.0576 152.008 59.5771C152.371 58.9443 152.735 57.9072 153.098 56.4658C153.467 54.96 153.652 53.8291 153.652 53.0732C153.652 52.3174 153.467 51.9365 153.098 51.9307C152.676 51.9307 152.313 52.1826 152.008 52.6865C151.639 53.2959 151.258 54.3506 150.866 55.8506ZM148.37 55.2881C148.768 53.7471 149.333 52.4727 150.066 51.4648C150.98 50.2168 152.002 49.5928 153.133 49.5928C153.186 49.5928 153.239 49.5928 153.291 49.5928C154.235 49.6455 154.932 49.9385 155.383 50.4717C155.828 50.999 156.051 51.8955 156.051 53.1611C156.051 54.21 155.852 55.5225 155.453 57.0986C155.166 58.2354 154.8 59.2168 154.355 60.043C153.447 61.7129 152.313 62.5479 150.953 62.5479C150.022 62.5479 149.31 62.3105 148.818 61.8359C148.203 61.2266 147.895 60.1455 147.895 58.5928C147.895 57.6201 148.053 56.5186 148.37 55.2881ZM85.0355 79.3252C85.0355 79.3252 86.2953 79.3252 88.8148 79.3252C88.9965 79.3311 89.0492 79.46 88.973 79.7119L88.6918 80.6963C88.6215 80.9307 88.5453 81.0801 88.4633 81.1445C88.4457 81.209 88.4222 81.2822 88.3929 81.3643C88.1293 82.1904 87.8041 82.9082 87.4174 83.5176C86.556 84.8828 85.5043 85.5654 84.2621 85.5654C83.4066 85.5596 82.7328 85.3398 82.2406 84.9062C81.5492 84.2852 81.2035 83.1748 81.2035 81.5752C81.2035 80.6787 81.3676 79.583 81.6957 78.2881C82.0883 76.7178 82.6595 75.4258 83.4095 74.4121C84.3119 73.1992 85.3226 72.5928 86.4418 72.5928C87.0922 72.6104 87.6722 72.7627 88.182 73.0498C88.3344 73.1436 88.475 73.2578 88.6039 73.3926C89.1195 73.9316 89.3773 74.8604 89.3773 76.1787C89.3773 76.46 89.2601 76.6475 89.0258 76.7412L87.0394 77.3389C87.0043 77.3506 86.9691 77.3564 86.934 77.3564C86.7933 77.3623 86.7289 77.2627 86.7406 77.0576C86.764 76.501 86.7758 76.1787 86.7758 76.0908C86.7699 75.5342 86.6527 75.2236 86.4242 75.1592C86.3715 75.1416 86.3187 75.1328 86.266 75.1328C85.5453 75.1094 84.8539 76.3486 84.1918 78.8506C83.9047 79.9521 83.7582 80.9219 83.7523 81.7598C83.7523 82.6445 83.9164 83.1279 84.2445 83.21C84.432 83.251 84.6342 83.2012 84.851 83.0605C85.3138 82.7441 85.6859 82.1201 85.9672 81.1885H84.6664C84.4613 81.1768 84.391 81.0127 84.4554 80.6963L84.7719 79.5361C84.7777 79.5127 84.7865 79.4863 84.7982 79.457C84.8392 79.3691 84.9183 79.3252 85.0355 79.3252ZM93.2709 77.5146H96.2679C96.5902 77.5205 96.7133 77.708 96.6371 78.0771L96.4261 79.1143C96.4086 79.1846 96.3793 79.2549 96.3383 79.3252C96.2094 79.5127 96.0511 79.6064 95.8636 79.6064H92.7435L91.7767 83.3682H95.1429C95.4886 83.374 95.6234 83.5615 95.5472 83.9307L95.3187 84.9678C95.3011 85.0381 95.2689 85.1084 95.222 85.1787C95.0873 85.3662 94.9203 85.46 94.7211 85.46H89.3246C89.2484 85.46 89.1781 85.4424 89.1136 85.4072C88.9613 85.3076 88.9144 85.1436 88.973 84.915L91.5482 74.8252H90.9242C90.8773 74.8252 90.8334 74.8223 90.7924 74.8164C90.558 74.7754 90.4906 74.5674 90.5902 74.1924L90.8715 73.085C90.8949 72.9795 90.9213 72.8945 90.9506 72.8301C90.9857 72.7656 91.0765 72.7334 91.223 72.7334H97.7445C98.0902 72.7393 98.225 72.9268 98.1488 73.2959L97.9203 74.333C97.9027 74.4033 97.8705 74.4736 97.8236 74.5439C97.6888 74.7314 97.5219 74.8252 97.3226 74.8252H93.9564L93.2709 77.5146ZM99.9945 73.1201C100.065 72.8682 100.241 72.7393 100.522 72.7334H101.972C102.089 72.7334 102.198 72.7744 102.297 72.8564C102.321 72.874 102.344 72.8975 102.368 72.9268C102.397 72.9678 102.438 73.085 102.491 73.2783L104.02 80.0107L105.778 73.1201C105.848 72.8682 106.024 72.7393 106.305 72.7334H107.799C107.87 72.7334 107.937 72.751 108.001 72.7861C108.16 72.8857 108.209 73.0498 108.151 73.2783L105.145 85.0732C105.075 85.3252 104.899 85.4541 104.618 85.46H103.123C103 85.46 102.912 85.4248 102.86 85.3545C102.813 85.2842 102.778 85.2021 102.754 85.1084L101.155 78.0332L99.3617 85.0732C99.2914 85.3252 99.1156 85.4541 98.8344 85.46H97.3402C97.2699 85.46 97.2025 85.4424 97.1381 85.4072C96.9799 85.3076 96.9301 85.1436 96.9886 84.915L99.9945 73.1201ZM111.745 77.5146H114.743C115.065 77.5205 115.188 77.708 115.112 78.0771L114.901 79.1143C114.883 79.1846 114.854 79.2549 114.813 79.3252C114.684 79.5127 114.526 79.6064 114.338 79.6064H111.218L110.251 83.3682H113.618C113.963 83.374 114.098 83.5615 114.022 83.9307L113.793 84.9678C113.776 85.0381 113.744 85.1084 113.697 85.1787C113.562 85.3662 113.395 85.46 113.196 85.46H107.799C107.723 85.46 107.653 85.4424 107.588 85.4072C107.436 85.3076 107.389 85.1436 107.448 84.915L110.023 74.8252H109.399C109.352 74.8252 109.308 74.8223 109.267 74.8164C109.033 74.7754 108.965 74.5674 109.065 74.1924L109.346 73.085C109.37 72.9795 109.396 72.8945 109.425 72.8301C109.46 72.7656 109.551 72.7334 109.698 72.7334H116.219C116.565 72.7393 116.7 72.9268 116.623 73.2959L116.395 74.333C116.377 74.4033 116.345 74.4736 116.298 74.5439C116.163 74.7314 115.996 74.8252 115.797 74.8252H112.431L111.745 77.5146ZM119.489 78.5605L120.148 78.4639C120.318 78.4404 120.414 78.4229 120.438 78.4111C120.918 78.2471 121.235 78.0449 121.387 77.8047C121.534 77.5586 121.63 77.3477 121.677 77.1719C121.888 76.3867 121.994 75.7393 121.994 75.2295C121.994 75.1357 121.947 75.0508 121.853 74.9746C121.771 74.9043 121.671 74.8574 121.554 74.834C121.484 74.8223 121.287 74.8135 120.965 74.8076C120.807 74.8076 120.634 74.8076 120.447 74.8076L119.489 78.5605ZM118.038 74.79H117.441C117.359 74.79 117.283 74.7695 117.212 74.7285C117.06 74.6348 117.013 74.4912 117.072 74.2979L117.388 73.085C117.4 73.0381 117.42 72.9912 117.45 72.9443C117.543 72.8037 117.658 72.7334 117.792 72.7334H121.536C122.04 72.7334 122.489 72.8096 122.881 72.9619C123.766 73.3135 124.208 73.999 124.208 75.0186C124.208 75.7158 124.071 76.4717 123.795 77.2861C123.496 78.1709 123.165 78.7744 122.802 79.0967C122.41 79.4834 122.032 79.7705 121.668 79.958L122.38 84.7217C122.392 84.8154 122.398 84.9033 122.398 84.9854C122.38 85.3018 122.216 85.46 121.906 85.46H120.517C120.458 85.46 120.4 85.4482 120.341 85.4248C120.095 85.3135 119.943 85.0322 119.884 84.5811L119.357 80.3359H119.032L117.828 85.0732C117.757 85.3252 117.581 85.4541 117.3 85.46H115.806C115.73 85.46 115.662 85.4424 115.604 85.4072C115.452 85.3076 115.402 85.1436 115.454 84.915L118.038 74.79ZM127.97 79.9404H129.877L130.185 75.4229L127.97 79.9404ZM126.942 82.0322L125.43 85.126C125.295 85.3838 125.073 85.501 124.762 85.4775L123.391 85.4248C123.385 85.4248 123.373 85.4248 123.356 85.4248C122.981 85.3955 122.864 85.1787 123.004 84.7744L128.875 73.4717C128.916 73.3896 128.966 73.3076 129.025 73.2256C129.253 72.9209 129.526 72.7686 129.842 72.7686L131.864 72.751C131.975 72.7451 132.078 72.7627 132.171 72.8037C132.441 72.9268 132.567 73.1904 132.549 73.5947L131.899 85.0732C131.864 85.3193 131.688 85.4482 131.371 85.46H129.948C129.907 85.46 129.866 85.457 129.825 85.4512C129.602 85.4043 129.508 85.249 129.543 84.9854L129.737 82.0322H126.942ZM142.323 72.7334C142.668 72.7334 142.803 72.9209 142.727 73.2959L142.498 74.333C142.481 74.4033 142.449 74.4736 142.402 74.5439C142.267 74.7314 142.1 74.8252 141.901 74.8252H139.378L136.768 85.0732C136.698 85.3252 136.522 85.4541 136.241 85.46H134.729C134.623 85.46 134.53 85.4189 134.448 85.3369C134.366 85.2549 134.342 85.1436 134.377 85.0029L136.97 74.8252H134.289C134.248 74.8252 134.204 74.8223 134.158 74.8164C133.929 74.7754 133.862 74.5674 133.955 74.1924L134.237 73.085C134.26 72.9971 134.286 72.9268 134.316 72.874C134.38 72.7803 134.53 72.7334 134.764 72.7334H142.323ZM144.951 77.5146H147.948C148.27 77.5205 148.393 77.708 148.317 78.0771L148.106 79.1143C148.088 79.1846 148.059 79.2549 148.018 79.3252C147.889 79.5127 147.731 79.6064 147.543 79.6064H144.423L143.456 83.3682H146.823C147.168 83.374 147.303 83.5615 147.227 83.9307L146.998 84.9678C146.981 85.0381 146.949 85.1084 146.902 85.1787C146.767 85.3662 146.6 85.46 146.401 85.46H141.004C140.928 85.46 140.858 85.4424 140.793 85.4072C140.641 85.3076 140.594 85.1436 140.653 84.915L143.228 74.8252H142.604C142.557 74.8252 142.513 74.8223 142.472 74.8164C142.238 74.7754 142.17 74.5674 142.27 74.1924L142.551 73.085C142.575 72.9795 142.601 72.8945 142.63 72.8301C142.665 72.7656 142.756 72.7334 142.903 72.7334H149.424C149.77 72.7393 149.905 72.9268 149.828 73.2959L149.6 74.333C149.582 74.4033 149.55 74.4736 149.503 74.5439C149.369 74.7314 149.202 74.8252 149.002 74.8252H145.636L144.951 77.5146ZM62.2631 95.54C62.5092 95.54 62.7406 95.5693 62.9574 95.6279C64.1469 95.9678 64.724 97.1514 64.6888 99.1787C64.683 99.4834 64.5424 99.6709 64.267 99.7412L62.9838 100.075C62.9193 100.093 62.8461 100.099 62.764 100.093C62.5121 100.063 62.3802 99.9346 62.3685 99.7061C62.3275 98.7334 62.1429 98.0332 61.8148 97.6055C61.7738 97.6055 61.7357 97.6143 61.7006 97.6318C61.5599 97.7139 61.3959 97.9131 61.2084 98.2295C60.8217 98.8682 60.6283 99.4658 60.6283 100.022C60.6283 100.298 60.681 100.509 60.7865 100.655C60.9037 100.808 61.1732 100.942 61.5951 101.06L61.9115 101.147C62.2338 101.235 62.4916 101.347 62.6849 101.481C63.1888 101.839 63.4408 102.524 63.4408 103.538C63.4408 104.048 63.35 104.569 63.1683 105.103C62.8344 106.093 62.2836 106.939 61.516 107.643C60.7133 108.375 59.8959 108.741 59.0638 108.741C58.6302 108.741 58.2435 108.668 57.9037 108.521C56.9193 108.094 56.433 107.095 56.4447 105.524C56.4447 105.46 56.4506 105.393 56.4623 105.322C56.515 104.977 56.6498 104.769 56.8666 104.698L58.2201 104.224C58.3431 104.183 58.4662 104.165 58.5892 104.171C58.8002 104.188 58.9056 104.294 58.9056 104.487C58.8705 105.876 58.9584 106.696 59.1693 106.948C59.2806 106.948 59.3802 106.931 59.4681 106.896C59.6674 106.796 59.8636 106.623 60.057 106.377C60.5082 105.803 60.7338 105.12 60.7338 104.329C60.7338 104.001 60.7103 103.761 60.6635 103.608C60.558 103.298 60.2592 103.081 59.767 102.958L59.4857 102.888C59.3334 102.847 59.1752 102.791 59.0111 102.721C58.2494 102.363 57.8685 101.774 57.8685 100.954C57.8685 100.503 57.9447 100.025 58.097 99.5215C58.4076 98.4961 58.9232 97.6055 59.6439 96.8496C60.4701 95.9766 61.3431 95.54 62.2631 95.54ZM68.8109 108.583C67.6976 108.583 66.9008 108.337 66.4203 107.845C66.309 107.733 66.2094 107.607 66.1215 107.467C65.5297 106.564 65.4886 105.126 65.9984 103.151L67.809 96.1201C67.8793 95.8682 68.0551 95.7393 68.3363 95.7334H69.9008C69.9769 95.7334 70.0443 95.751 70.1029 95.7861C70.2552 95.8857 70.3051 96.0498 70.2523 96.2783L68.4769 103.345C68.1957 104.464 68.0785 105.278 68.1254 105.788C68.1781 106.374 68.4594 106.667 68.9691 106.667C69.2504 106.667 69.4994 106.57 69.7162 106.377C70.1615 105.967 70.5922 104.938 71.0082 103.292L72.8363 96.1201C72.9066 95.8682 73.0824 95.7393 73.3636 95.7334H74.7875C74.8636 95.7334 74.931 95.751 74.9896 95.7861C75.142 95.8857 75.1918 96.0498 75.139 96.2783L73.4164 103.099C73.0355 104.604 72.6136 105.753 72.1508 106.544C71.348 107.903 70.2347 108.583 68.8109 108.583ZM77.9252 100.998L78.2504 101.024C78.3324 101.024 78.4086 101.021 78.4789 101.016C79.3695 100.939 79.932 100.28 80.1664 99.0381C80.2015 98.8389 80.2162 98.666 80.2103 98.5195C80.1869 98.0332 79.9027 97.79 79.3578 97.79H78.7426L77.9252 100.998ZM76.3344 97.79H75.8773C75.7719 97.79 75.6722 97.7666 75.5785 97.7197C75.3793 97.6201 75.3031 97.4912 75.35 97.333L75.684 96.085C75.6957 96.0381 75.7162 95.9912 75.7455 95.9443C75.8392 95.8037 75.9535 95.7334 76.0883 95.7334H77.2836H78.7777H79.5511C80.3246 95.7334 80.9779 95.8506 81.5111 96.085C82.4545 96.5068 82.9261 97.2393 82.9261 98.2822C82.9261 98.4404 82.9174 98.6045 82.8998 98.7744C82.8119 99.583 82.5863 100.28 82.223 100.866C81.8773 101.423 81.4174 101.812 80.8431 102.035C80.9486 102.111 81.0453 102.199 81.1332 102.299C81.4496 102.686 81.5551 103.362 81.4496 104.329C81.4086 104.675 81.3177 105.044 81.1771 105.437C80.849 106.327 80.4008 107.019 79.8324 107.511C79.2758 108.009 78.6078 108.308 77.8285 108.407C77.5414 108.442 76.9144 108.46 75.9476 108.46H75.5961H75.139H74.1019C74.0258 108.46 73.9584 108.442 73.8998 108.407C73.7474 108.308 73.6976 108.144 73.7504 107.915L76.3344 97.79ZM76.5804 106.28L76.9847 106.263C77.3011 106.245 77.5736 106.195 77.8021 106.113C78.3939 105.902 78.8187 105.401 79.0765 104.61C79.3168 103.837 79.2699 103.31 78.9359 103.028C78.7543 102.876 78.265 102.8 77.4681 102.8L76.5804 106.28ZM86.7758 95.7334C86.7758 95.7334 87.2797 95.7334 88.2875 95.7334C88.3636 95.7334 88.434 95.7539 88.4984 95.7949C88.6508 95.8945 88.6976 96.0498 88.639 96.2607L85.6332 108.073C85.3754 109.034 84.8715 109.854 84.1215 110.534C83.5062 111.085 82.8383 111.466 82.1176 111.677C81.8539 111.747 81.6722 111.7 81.5726 111.536L81.098 110.552C81.0922 110.54 81.0834 110.522 81.0717 110.499C80.9603 110.235 81.016 110.06 81.2386 109.972C81.4789 109.878 81.7133 109.755 81.9418 109.603C82.6449 109.122 83.0961 108.501 83.2953 107.739L86.266 96.1201C86.3363 95.874 86.5062 95.7451 86.7758 95.7334ZM92.3304 100.515H95.3275C95.6498 100.521 95.7728 100.708 95.6967 101.077L95.4857 102.114C95.4681 102.185 95.4388 102.255 95.3978 102.325C95.2689 102.513 95.1107 102.606 94.9232 102.606H91.8031L90.8363 106.368H94.2025C94.5482 106.374 94.683 106.562 94.6068 106.931L94.3783 107.968C94.3607 108.038 94.3285 108.108 94.2816 108.179C94.1469 108.366 93.9799 108.46 93.7806 108.46H88.3842C88.308 108.46 88.2377 108.442 88.1732 108.407C88.0209 108.308 87.974 108.144 88.0326 107.915L90.6078 97.8252H89.9838C89.9369 97.8252 89.8929 97.8223 89.8519 97.8164C89.6176 97.7754 89.5502 97.5674 89.6498 97.1924L89.931 96.085C89.9545 95.9795 89.9808 95.8945 90.0101 95.8301C90.0453 95.7656 90.1361 95.7334 90.2826 95.7334H96.8041C97.1498 95.7393 97.2845 95.9268 97.2084 96.2959L96.9799 97.333C96.9623 97.4033 96.9301 97.4736 96.8832 97.5439C96.7484 97.7314 96.5814 97.8252 96.3822 97.8252H93.016L92.3304 100.515ZM104.336 99.0732C104.354 99.2842 104.234 99.4424 103.976 99.5479L102.429 100.005C102.347 100.028 102.253 100.022 102.148 99.9873C101.972 99.917 101.878 99.7881 101.867 99.6006C101.855 99.4658 101.843 99.3428 101.831 99.2314C101.785 98.8154 101.673 98.3877 101.497 97.9482C101.427 97.9248 101.357 97.9131 101.286 97.9131C100.566 97.9189 99.8627 99.2314 99.1771 101.851C98.8666 103.04 98.7113 104.06 98.7113 104.909C98.7113 105.853 98.8607 106.368 99.1595 106.456H99.3177C99.4232 106.38 99.5258 106.292 99.6254 106.192C99.8656 105.94 100.191 105.419 100.601 104.628C100.683 104.47 100.756 104.355 100.821 104.285C100.932 104.168 101.099 104.159 101.322 104.259L102.763 104.892C102.816 104.915 102.86 104.953 102.895 105.006C102.989 105.164 102.962 105.36 102.816 105.595C102.195 106.591 101.632 107.306 101.128 107.739C100.46 108.313 99.6517 108.601 98.7025 108.601C98.351 108.601 97.976 108.478 97.5775 108.231C97.1615 107.968 96.8334 107.581 96.5931 107.071C96.3177 106.462 96.1801 105.703 96.1801 104.795C96.1801 103.799 96.347 102.63 96.681 101.288C97.0912 99.6533 97.6625 98.3613 98.3949 97.4121C99.3324 96.1992 100.343 95.5928 101.427 95.5928C102.464 95.5928 103.217 95.9736 103.686 96.7354C104.037 97.3037 104.254 98.083 104.336 99.0732ZM113.134 95.7334C113.48 95.7334 113.615 95.9209 113.538 96.2959L113.31 97.333C113.292 97.4033 113.26 97.4736 113.213 97.5439C113.078 97.7314 112.911 97.8252 112.712 97.8252H110.19L107.579 108.073C107.509 108.325 107.333 108.454 107.052 108.46H105.54C105.435 108.46 105.341 108.419 105.259 108.337C105.177 108.255 105.154 108.144 105.189 108.003L107.782 97.8252H105.101C105.06 97.8252 105.016 97.8223 104.969 97.8164C104.741 97.7754 104.673 97.5674 104.767 97.1924L105.048 96.085C105.072 95.9971 105.098 95.9268 105.127 95.874C105.192 95.7803 105.341 95.7334 105.576 95.7334H113.134ZM117.757 95.54C118.003 95.54 118.235 95.5693 118.452 95.6279C119.641 95.9678 120.218 97.1514 120.183 99.1787C120.177 99.4834 120.036 99.6709 119.761 99.7412L118.478 100.075C118.413 100.093 118.34 100.099 118.258 100.093C118.006 100.063 117.874 99.9346 117.863 99.7061C117.822 98.7334 117.637 98.0332 117.309 97.6055C117.268 97.6055 117.23 97.6143 117.195 97.6318C117.054 97.7139 116.89 97.9131 116.703 98.2295C116.316 98.8682 116.122 99.4658 116.122 100.022C116.122 100.298 116.175 100.509 116.281 100.655C116.398 100.808 116.667 100.942 117.089 101.06L117.406 101.147C117.728 101.235 117.986 101.347 118.179 101.481C118.683 101.839 118.935 102.524 118.935 103.538C118.935 104.048 118.844 104.569 118.662 105.103C118.328 106.093 117.778 106.939 117.01 107.643C116.207 108.375 115.39 108.741 114.558 108.741C114.124 108.741 113.738 108.668 113.398 108.521C112.413 108.094 111.927 107.095 111.939 105.524C111.939 105.46 111.945 105.393 111.956 105.322C112.009 104.977 112.144 104.769 112.361 104.698L113.714 104.224C113.837 104.183 113.96 104.165 114.083 104.171C114.294 104.188 114.4 104.294 114.4 104.487C114.365 105.876 114.453 106.696 114.663 106.948C114.775 106.948 114.874 106.931 114.962 106.896C115.161 106.796 115.358 106.623 115.551 106.377C116.002 105.803 116.228 105.12 116.228 104.329C116.228 104.001 116.204 103.761 116.158 103.608C116.052 103.298 115.753 103.081 115.261 102.958L114.98 102.888C114.828 102.847 114.669 102.791 114.505 102.721C113.744 102.363 113.363 101.774 113.363 100.954C113.363 100.503 113.439 100.025 113.591 99.5215C113.902 98.4961 114.417 97.6055 115.138 96.8496C115.964 95.9766 116.837 95.54 117.757 95.54ZM132.576 95.7334C132.921 95.7334 133.056 95.9209 132.98 96.2959L132.751 97.333C132.734 97.4033 132.702 97.4736 132.655 97.5439C132.52 97.7314 132.353 97.8252 132.154 97.8252H129.631L127.021 108.073C126.951 108.325 126.775 108.454 126.494 108.46H124.982C124.876 108.46 124.783 108.419 124.701 108.337C124.619 108.255 124.595 108.144 124.63 108.003L127.223 97.8252H124.542C124.501 97.8252 124.457 97.8223 124.411 97.8164C124.182 97.7754 124.115 97.5674 124.208 97.1924L124.49 96.085C124.513 95.9971 124.539 95.9268 124.569 95.874C124.633 95.7803 124.783 95.7334 125.017 95.7334H132.576ZM134.035 101.851C133.683 103.187 133.507 104.273 133.507 105.111C133.507 106.008 133.706 106.456 134.105 106.456C134.193 106.456 134.281 106.444 134.369 106.421C134.62 106.339 134.89 106.058 135.177 105.577C135.54 104.944 135.904 103.907 136.267 102.466C136.636 100.96 136.821 99.8291 136.821 99.0732C136.821 98.3174 136.636 97.9365 136.267 97.9307C135.845 97.9307 135.482 98.1826 135.177 98.6865C134.808 99.2959 134.427 100.351 134.035 101.851ZM131.538 101.288C131.937 99.7471 132.502 98.4727 133.235 97.4648C134.149 96.2168 135.171 95.5928 136.302 95.5928C136.355 95.5928 136.408 95.5928 136.46 95.5928C137.404 95.6455 138.101 95.9385 138.552 96.4717C138.997 96.999 139.22 97.8955 139.22 99.1611C139.22 100.21 139.021 101.522 138.622 103.099C138.335 104.235 137.969 105.217 137.524 106.043C136.616 107.713 135.482 108.548 134.122 108.548C133.191 108.548 132.479 108.311 131.987 107.836C131.371 107.227 131.064 106.146 131.064 104.593C131.064 103.62 131.222 102.519 131.538 101.288ZM150.62 99.0732C150.637 99.2842 150.517 99.4424 150.259 99.5479L148.712 100.005C148.63 100.028 148.536 100.022 148.431 99.9873C148.255 99.917 148.161 99.7881 148.15 99.6006C148.138 99.4658 148.126 99.3428 148.115 99.2314C148.068 98.8154 147.956 98.3877 147.781 97.9482C147.71 97.9248 147.64 97.9131 147.57 97.9131C146.849 97.9189 146.146 99.2314 145.46 101.851C145.15 103.04 144.995 104.06 144.995 104.909C144.995 105.853 145.144 106.368 145.443 106.456H145.601C145.706 106.38 145.809 106.292 145.909 106.192C146.149 105.94 146.474 105.419 146.884 104.628C146.966 104.47 147.039 104.355 147.104 104.285C147.215 104.168 147.382 104.159 147.605 104.259L149.046 104.892C149.099 104.915 149.143 104.953 149.178 105.006C149.272 105.164 149.245 105.36 149.099 105.595C148.478 106.591 147.915 107.306 147.411 107.739C146.744 108.313 145.935 108.601 144.986 108.601C144.634 108.601 144.259 108.478 143.861 108.231C143.445 107.968 143.117 107.581 142.876 107.071C142.601 106.462 142.463 105.703 142.463 104.795C142.463 103.799 142.63 102.63 142.964 101.288C143.374 99.6533 143.946 98.3613 144.678 97.4121C145.616 96.1992 146.626 95.5928 147.71 95.5928C148.747 95.5928 149.5 95.9736 149.969 96.7354C150.321 97.3037 150.537 98.083 150.62 99.0732ZM153.045 96.1201C153.116 95.8682 153.291 95.7393 153.573 95.7334H155.067C155.143 95.7334 155.21 95.751 155.269 95.7861C155.421 95.8857 155.471 96.0498 155.418 96.2783L154.337 100.515H157.712L158.828 96.1201C158.899 95.8682 159.075 95.7393 159.356 95.7334H160.85C160.926 95.7334 160.994 95.751 161.052 95.7861C161.204 95.8857 161.254 96.0498 161.202 96.2783L158.196 108.073C158.125 108.325 157.95 108.454 157.668 108.46H156.174C156.098 108.46 156.031 108.442 155.972 108.407C155.82 108.308 155.77 108.144 155.823 107.915L157.176 102.606H153.81L152.412 108.073C152.342 108.325 152.166 108.454 151.885 108.46H150.391C150.315 108.46 150.247 108.442 150.189 108.407C150.036 108.308 149.987 108.144 150.039 107.915L153.045 96.1201ZM164.594 102.94H166.501L166.809 98.4229L164.594 102.94ZM163.566 105.032L162.054 108.126C161.919 108.384 161.697 108.501 161.386 108.478L160.015 108.425C160.009 108.425 159.997 108.425 159.98 108.425C159.605 108.396 159.488 108.179 159.628 107.774L165.499 96.4717C165.54 96.3896 165.59 96.3076 165.649 96.2256C165.877 95.9209 166.15 95.7686 166.466 95.7686L168.488 95.751C168.599 95.7451 168.702 95.7627 168.795 95.8037C169.065 95.9268 169.191 96.1904 169.173 96.5947L168.523 108.073C168.488 108.319 168.312 108.448 167.995 108.46H166.572C166.531 108.46 166.49 108.457 166.449 108.451C166.226 108.404 166.132 108.249 166.167 107.985L166.361 105.032H163.566ZM178.947 95.7334C179.292 95.7334 179.427 95.9209 179.351 96.2959L179.122 97.333C179.105 97.4033 179.073 97.4736 179.026 97.5439C178.891 97.7314 178.724 97.8252 178.525 97.8252H176.002L173.392 108.073C173.322 108.325 173.146 108.454 172.865 108.46H171.353C171.247 108.46 171.154 108.419 171.072 108.337C170.99 108.255 170.966 108.144 171.001 108.003L173.594 97.8252H170.913C170.872 97.8252 170.828 97.8223 170.782 97.8164C170.553 97.7754 170.486 97.5674 170.579 97.1924L170.861 96.085C170.884 95.9971 170.911 95.9268 170.94 95.874C171.004 95.7803 171.154 95.7334 171.388 95.7334H178.947Z"
            fill="black"
          />
        </svg>
      )}
    </ChatsContainer>
  );
};

export default ChatDisplayArea;
