//* Imports
import React, { useEffect } from "react";
import styled from "styled-components";
import swal from "sweetalert";

//* Style
const SuccessPageStyle = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba(255, 255, 255, 0.5);
  fill: rgba(74, 207, 132, 0.58);
  background-size: 423px 423px;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' fill-opacity='1' %3E%3Cstyle%3E .st0{fill:rgba(74, 207, 132, 0.58)} %3C/style%3E%3Cpath class='st0' d='M55.5 475h-19c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h19c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM144.7 178.9c-.4 0-.8-.1-1.2-.2-1.8-.7-2.7-2.7-2.1-4.5l6.6-17.8c.7-1.8 2.7-2.7 4.5-2.1 1.8.7 2.7 2.7 2.1 4.5l-6.6 17.8c-.6 1.4-1.9 2.3-3.3 2.3zM107.9 130.4c-1 0-2.1-.5-2.7-1.3l-11.8-14.9c-1.2-1.5-.9-3.7.6-4.9 1.5-1.2 3.7-.9 4.9.6l11.8 14.9c1.2 1.5.9 3.7-.6 4.9-.7.5-1.4.7-2.2.7zM103.2 87.6c-1.5 0-2.8-.9-3.3-2.4-.6-1.8.3-3.8 2.2-4.4l6.6-2.3c1.8-.6 3.8.3 4.4 2.2.6 1.8-.3 3.8-2.2 4.4l-6.6 2.3c-.3.2-.7.2-1.1.2zM300.5 46c-.9 0-1.8-.3-2.5-1-1.4-1.4-1.4-3.6 0-5l15-15c1.4-1.4 3.6-1.4 4.9 0 1.4 1.4 1.4 3.6 0 5l-15 15c-.6.7-1.5 1-2.4 1zM193.5 292c-1.9 0-3.5-1.6-3.5-3.5v-9c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v9c0 1.9-1.6 3.5-3.5 3.5zM163.5 40c-.9 0-1.8-.3-2.5-1-1.4-1.4-1.4-3.6 0-5l17.5-17.5c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5L166 39c-.7.7-1.6 1-2.5 1zM252.5 167h-12c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h12c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM199 142.5c-.9 0-1.8-.3-2.5-1L186 131c-1.4-1.4-1.4-3.6 0-5s3.6-1.4 5 0l10.5 10.5c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1zM108.5 162h-31c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h31c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM134.5 231c-1.9 0-3.5-1.6-3.5-3.5v-16c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v16c0 1.9-1.6 3.5-3.5 3.5zM136.5 86c-1.9 0-3.5-1.6-3.5-3.5v-23c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v23c0 1.9-1.6 3.5-3.5 3.5zM63.5 64h-21c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h21c1.9 0 3.5 1.6 3.5 3.5S65.4 64 63.5 64zM70.5 124c-.9 0-1.8-.3-2.5-1l-9-9c-1.4-1.4-1.4-3.6 0-5s3.6-1.4 5 0l9 9c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1zM97.5 200c-1.9 0-3.5-1.6-3.5-3.5v-8c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v8c0 1.9-1.6 3.5-3.5 3.5zM256.5 129h-15c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h15c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM172.5 102c-1.9 0-3.5-1.6-3.5-3.5v-9c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v9c0 1.9-1.6 3.5-3.5 3.5zM275.5 214c-.9 0-1.8-.3-2.5-1l-9-9c-1.4-1.4-1.4-3.6 0-5s3.6-1.4 4.9 0l9 9c1.4 1.4 1.4 3.6 0 5-.6.7-1.5 1-2.4 1zM104.5 262c-1.9 0-3.5-1.6-3.5-3.5v-17c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v17c0 1.9-1.6 3.5-3.5 3.5zM53.5 278c-1.1 0-2.1-.5-2.8-1.4-1.2-1.5-.8-3.7.7-4.9l12-9c1.5-1.2 3.7-.8 4.9.7 1.2 1.5.8 3.7-.7 4.9l-12 9c-.6.5-1.4.7-2.1.7zM173.5 264c-.6 0-1.1-.1-1.7-.4l-13-7c-1.7-.9-2.3-3-1.4-4.7.9-1.7 3-2.3 4.7-1.4l13 7c1.7.9 2.3 3 1.4 4.7-.6 1.1-1.8 1.8-3 1.8zM203.5 182h-26c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h26c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM84.5 61c-1.9 0-3.5-1.6-3.5-3.5v-22c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v22c0 1.9-1.6 3.5-3.5 3.5zM196.5 82c-.9 0-1.8-.3-2.5-1-1.4-1.4-1.4-3.6 0-5l15-15c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-15 15c-.7.7-1.6 1-2.5 1zM196.5 236c-.9 0-1.8-.3-2.5-1l-13-13c-1.4-1.4-1.4-3.6 0-5s3.6-1.4 5 0l13 13c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1zM37.5 151c-1.1 0-2.2-.5-2.9-1.6-1.1-1.6-.6-3.8 1-4.9l9-6c1.6-1.1 3.8-.6 4.9 1 1.1 1.6.6 3.8-1 4.9l-9 6c-.7.4-1.3.6-2 .6zM30.5 107h-5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h5c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM121.5 42h-6c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h6c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM123.5 345c-1.2 0-2.3-.6-3-1.6l-7-11c-1-1.6-.6-3.8 1.1-4.8 1.6-1 3.8-.6 4.8 1.1l7 11c1 1.6.6 3.8-1.1 4.8-.5.3-1.2.5-1.8.5zM31.5 353c-.2 0-.5 0-.7-.1-1.9-.4-3.1-2.3-2.7-4.2l3-14c.4-1.9 2.3-3.1 4.2-2.7 1.9.4 3.1 2.3 2.7 4.2l-3 14c-.4 1.7-1.9 2.8-3.5 2.8zM72.5 318c-.6 0-1.1-.1-1.6-.4l-17-9c-1.7-.9-2.4-3-1.5-4.7.9-1.7 3-2.4 4.7-1.5l17 9c1.7.9 2.4 3 1.5 4.7-.6 1.2-1.8 1.9-3.1 1.9zM256.5 380h-19c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h19c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM299.2 353.3c-.2 0-.4 0-.7-.1-1.9-.4-3.1-2.2-2.8-4.1l3.6-18.7c.4-1.9 2.2-3.1 4.1-2.8 1.9.4 3.1 2.2 2.8 4.1l-3.6 18.7c-.3 1.8-1.7 2.9-3.4 2.9zM328 295c-.4 0-.7-.1-1.1-.2l-18-5.9c-1.8-.6-2.8-2.6-2.2-4.4.6-1.8 2.6-2.8 4.4-2.2l18 5.9c1.8.6 2.8 2.6 2.2 4.4-.4 1.4-1.8 2.4-3.3 2.4zM345.2 267.6c-1.5 0-2.8-.9-3.3-2.4-.6-1.8.3-3.8 2.2-4.4l6.6-2.3c1.8-.6 3.8.3 4.4 2.2.6 1.8-.3 3.8-2.2 4.4l-6.6 2.3c-.4.2-.7.2-1.1.2zM396 381.5c-.9 0-1.8-.3-2.5-1L376 363c-1.4-1.4-1.4-3.6 0-4.9 1.4-1.4 3.6-1.4 4.9 0l17.5 17.5c1.4 1.4 1.4 3.6 0 4.9-.6.7-1.5 1-2.4 1zM350.5 422c-.9 0-1.8-.3-2.5-1-1.4-1.4-1.4-3.6 0-4.9l15-15c1.4-1.4 3.6-1.4 4.9 0 1.4 1.4 1.4 3.6 0 4.9l-15 15c-.6.7-1.5 1-2.4 1zM417.3 460.2c-1.4 0-2.7-.8-3.2-2.2-.7-1.8.1-3.8 1.9-4.6l8.3-3.4c1.8-.7 3.8.1 4.6 1.9.7 1.8-.1 3.8-1.9 4.6l-8.3 3.4c-.5.2-.9.3-1.4.3zM329.5 464c-.9 0-1.8-.3-2.5-1-1.4-1.4-1.4-3.6 0-4.9l17.5-17.5c1.4-1.4 3.6-1.4 4.9 0 1.4 1.4 1.4 3.6 0 4.9L332 463c-.7.7-1.6 1-2.5 1zM486.5 401h-12c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h12c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM399 442.5c-.9 0-1.8-.3-2.5-1L386 431c-1.4-1.4-1.4-3.6 0-4.9 1.4-1.4 3.6-1.4 4.9 0l10.5 10.5c1.4 1.4 1.4 3.6 0 4.9-.6.7-1.5 1-2.4 1zM314.5 405h-31c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h31c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM338.5 375c-1.9 0-3.5-1.6-3.5-3.5v-23c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v23c0 1.9-1.6 3.5-3.5 3.5zM454.5 382h-15c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h15c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM426.5 414c-1.9 0-3.5-1.6-3.5-3.5v-9c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v9c0 1.9-1.6 3.5-3.5 3.5zM402.5 325c-.9 0-1.8-.3-2.5-1-1.4-1.4-1.4-3.6 0-4.9l15-15c1.4-1.4 3.6-1.4 4.9 0 1.4 1.4 1.4 3.6 0 4.9l-15 15c-.6.7-1.5 1-2.4 1zM423.5 257c-1.2 0-2.3-.6-3-1.6l-7-11c-1-1.6-.6-3.8 1.1-4.8 1.6-1 3.8-.6 4.8 1.1l7 11c1 1.6.6 3.8-1.1 4.8-.5.3-1.2.5-1.8.5zM413.5 198c-.6 0-1.1-.1-1.6-.4l-17-9c-1.7-.9-2.4-3-1.5-4.7.9-1.7 3-2.4 4.7-1.5l17 9c1.7.9 2.4 3 1.5 4.7-.6 1.2-1.8 1.9-3.1 1.9zM220.5 344c-1.6 0-3-1.1-3.4-2.7l-9-36c-.5-1.9.7-3.8 2.5-4.2 1.9-.5 3.8.7 4.2 2.5l9 36c.5 1.9-.7 3.8-2.5 4.2-.2.2-.5.2-.8.2zM276.5 281.5c-2.5 0-4.6-1.9-4.9-4.3l-3-22c-.2-1.3.2-2.6 1-3.7s2-1.7 3.3-1.9c1.3-.2 2.6.2 3.7 1s1.8 2 1.9 3.3l3 22c.2 1.3-.2 2.6-1 3.7s-2 1.7-3.3 1.9h-.7zm-3-29h-.3c-.5.1-1 .3-1.3.8-.3.4-.5 1-.4 1.5l3 22c.1 1.1 1.1 1.9 2.2 1.7.5-.1 1-.3 1.3-.8.3-.4.5-1 .4-1.5l-3-22c-.1-.5-.3-1-.8-1.3-.2-.3-.7-.4-1.1-.4zM139.5 297h-.3l-21-2c-1.9-.2-3.3-1.9-3.2-3.8.2-1.9 1.9-3.3 3.8-3.2l21 2c1.9.2 3.3 1.9 3.2 3.8-.2 1.8-1.7 3.2-3.5 3.2zM289.5 168c-.3 0-.6 0-1-.1l-7-2c-1.9-.5-2.9-2.5-2.4-4.3.5-1.9 2.5-2.9 4.3-2.4l7 2c1.9.5 2.9 2.5 2.4 4.3-.4 1.5-1.8 2.5-3.3 2.5zM89.5 400H89c-1.9-.3-3.2-2.1-2.9-4l4-26c.3-1.9 2.1-3.2 4-2.9 1.9.3 3.2 2.1 2.9 4l-4 26c-.3 1.7-1.8 2.9-3.5 2.9zM163.5 400c-.5 0-1-.1-1.5-.3-1.8-.8-2.5-2.9-1.7-4.7l7-15c.8-1.8 2.9-2.5 4.7-1.7 1.8.8 2.5 2.9 1.7 4.7l-7 15c-.6 1.3-1.9 2-3.2 2zM221.5 263c-1.7 0-3.2-1.2-3.5-3-.3-1.9 1-3.7 2.9-4l13-2c1.9-.3 3.7 1 4 2.9s-1 3.7-2.9 4l-13 2c-.1.1-.3.1-.5.1zM174.5 341c-.4 0-.7-.1-1.1-.2l-15-5c-1.8-.6-2.8-2.6-2.2-4.4.6-1.8 2.6-2.8 4.4-2.2l15 5c1.8.6 2.8 2.6 2.2 4.4-.5 1.5-1.8 2.4-3.3 2.4zM260.5 320c-1 0-1.9-.4-2.6-1.2-1.3-1.5-1.1-3.7.3-4.9l8-7c1.5-1.3 3.7-1.1 4.9.3 1.3 1.5 1.1 3.7-.3 4.9l-8 7c-.7.6-1.5.9-2.3.9zM217.5 384c-1 0-2-.4-2.7-1.3l-5-6c-1.2-1.5-1-3.7.4-4.9 1.5-1.2 3.7-1 4.9.4l5 6c1.2 1.5 1 3.7-.4 4.9-.6.6-1.4.9-2.2.9zM55.5 423c-.7 0-1.3-.2-1.9-.6l-18-12c-1.6-1.1-2-3.2-1-4.9 1.1-1.6 3.2-2 4.9-1l18 12c1.6 1.1 2 3.2 1 4.9-.8 1.1-1.9 1.6-3 1.6zM53.5 36c-1 0-2.1-.5-2.8-1.4l-7-9c-1.2-1.5-.9-3.7.6-4.9 1.5-1.2 3.7-.9 4.9.6l7 9c1.2 1.5.9 3.7-.6 4.9-.6.6-1.3.8-2.1.8zM303.5 133c-1.8 0-3.4-1.4-3.5-3.3l-1-17c-.1-1.9 1.4-3.6 3.3-3.7 1.9-.1 3.6 1.4 3.7 3.3l1 17c.1 1.9-1.4 3.6-3.3 3.7h-.2zM319.5 184c-1.6 0-3-1.1-3.4-2.7-.5-1.9.7-3.8 2.5-4.2l28-7c1.9-.5 3.8.7 4.2 2.5.5 1.9-.7 3.8-2.5 4.2l-28 7c-.2.2-.5.2-.8.2zM431.5 72c-1.7 0-3.1-1.2-3.4-2.9l-4-22c-.3-1.9.9-3.7 2.8-4.1 1.9-.3 3.7.9 4.1 2.8l4 22c.3 1.9-.9 3.7-2.8 4.1-.3.1-.5.1-.7.1zM354.5 232c-1.3 0-2.5-.7-3.1-1.9l-11-21c-.9-1.7-.2-3.8 1.5-4.7 1.7-.9 3.8-.2 4.7 1.5l11 21c.9 1.7.2 3.8-1.5 4.7-.5.3-1.1.4-1.6.4zM339.5 139c-.6 0-1.2-.2-1.8-.5-1.7-1-2.2-3.1-1.2-4.8l9-15c1-1.7 3.1-2.2 4.8-1.2 1.7 1 2.2 3.1 1.2 4.8l-9 15c-.7 1.1-1.8 1.7-3 1.7zM338.5 79c-.5 0-1-.1-1.5-.3l-13-6c-1.8-.8-2.5-2.9-1.7-4.6.8-1.8 2.9-2.5 4.6-1.7l13 6c1.8.8 2.5 2.9 1.7 4.6-.5 1.2-1.8 2-3.1 2zM223.5 100h-7c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h7c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM312.5 233c-1.9 0-3.5-1.6-3.5-3.5v-8c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v8c0 1.9-1.6 3.5-3.5 3.5zM402.2 160.3c-.3 0-.6 0-.8-.1-2.7-.4-4.6-3-4.1-5.7l4.6-27.7c.5-2.7 3-4.6 5.8-4.1 2.6.4 4.4 2.8 4.2 5.4v.4l-4.6 27.7c-.2 1.3-.9 2.5-2 3.2-1.1.6-2.1.9-3.1.9zm4.6-34.6c-1 0-1.8.7-2 1.7l-4.6 27.7c-.2 1.1.6 2.1 1.6 2.3.5.1 1.1 0 1.5-.3s.7-.8.8-1.3l4.6-27.7v-.1c.1-1-.6-2-1.7-2.2 0-.1-.1-.1-.2-.1zM379.5 102c-1.7 0-3.2-1.3-3.5-3l-2-14c-.3-1.9 1.1-3.7 3-4 1.9-.3 3.7 1.1 4 3l2 14c.3 1.9-1.1 3.7-3 4h-.5zM101.5 454c-.5 0-1.1-.1-1.6-.4l-8-4c-1.7-.9-2.4-3-1.6-4.7.9-1.7 3-2.4 4.7-1.6l8 4c1.7.9 2.4 3 1.6 4.7-.6 1.3-1.8 2-3.1 2zM474.5 136c-1.6 0-3-1.1-3.4-2.7l-3-12c-.5-1.9.7-3.8 2.5-4.2 1.9-.5 3.8.7 4.2 2.5l3 12c.5 1.9-.7 3.8-2.5 4.2-.2.2-.5.2-.8.2zM480.5 508c-1.1 0-2.2-.5-2.9-1.5l-7-10c-1.1-1.6-.7-3.8.9-4.9 1.6-1.1 3.8-.7 4.9.9l7 10c1.1 1.6.7 3.8-.9 4.9-.6.4-1.3.6-2 .6zM145 475.5c-1.9 0-3.5-1.6-3.5-3.5v-21.1c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V472c0 2-1.6 3.5-3.5 3.5zM380.5 302c-.6 0-1.1-.1-1.7-.4l-13-7c-1.7-.9-2.3-3-1.4-4.7.9-1.7 3-2.3 4.7-1.4l13 7c1.7.9 2.3 3 1.4 4.7-.6 1.1-1.8 1.8-3 1.8zM362.4 343.9c-1.8 0-3.4-1.4-3.5-3.3l-.8-14.7c-.1-1.9 1.4-3.6 3.3-3.7 1.9-.1 3.6 1.4 3.7 3.3l.8 14.7c.1 1.9-1.4 3.6-3.3 3.7h-.2zM223.5 224c-1.9 0-3.5-1.6-3.5-3.5v-9c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v9c0 1.9-1.6 3.5-3.5 3.5zM380.5 481c-1.2 0-2.3-.6-3-1.6l-7-11c-1-1.6-.6-3.8 1.1-4.8 1.6-1 3.8-.6 4.8 1.1l7 11c1 1.6.6 3.8-1.1 4.8-.5.3-1.2.5-1.8.5zM390.5 26h-12c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h12c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zM434.4 111.1c-.6 0-1.2-.2-1.8-.5-1.7-1-2.2-3.2-1.2-4.8l6.2-10.3c1-1.7 3.2-2.2 4.8-1.2 1.7 1 2.2 3.2 1.2 4.8l-6.2 10.3c-.7 1.1-1.8 1.7-3 1.7zM113.5 424.5c-2.3 0-4.3-1.6-4.8-3.8-.3-1.3-.1-2.6.6-3.8.7-1.1 1.8-2 3.1-2.3l28-7c1.3-.3 2.6-.1 3.8.6 1.1.7 2 1.8 2.3 3.1.3 1.3.1 2.6-.6 3.8-.7 1.1-1.8 2-3.1 2.3l-28 7c-.5.1-.9.1-1.3.1zm28-14c-.2 0-.3 0-.5.1l-28 7c-.5.1-1 .5-1.2.9s-.4 1-.2 1.5c.3 1.1 1.4 1.7 2.4 1.5l28-7c.5-.1 1-.5 1.2-.9s.4-1 .2-1.5c-.1-.5-.5-1-.9-1.2-.3-.3-.6-.4-1-.4zM513.5 33.5h-31c-2.8 0-5-2.2-5-5s2.2-5 5-5h31c2.8 0 5 2.2 5 5s-2.2 5-5 5zm-31-7c-1.1 0-2 .9-2 2s.9 2 2 2h31c1.1 0 2-.9 2-2s-.9-2-2-2h-31zM15.5 33.5h-31c-2.8 0-5-2.2-5-5s2.2-5 5-5h31c2.8 0 5 2.2 5 5s-2.2 5-5 5zm-31-7c-1.1 0-2 .9-2 2s.9 2 2 2h31c1.1 0 2-.9 2-2s-.9-2-2-2h-31zM160.5 129h-.7l-24.5-3.4c-1.3-.2-2.5-.9-3.3-1.9-.8-1.1-1.1-2.4-1-3.7.2-1.3.9-2.5 1.9-3.3 1.1-.8 2.4-1.1 3.7-1l24.5 3.4c1.3.2 2.5.9 3.3 1.9.8 1.1 1.1 2.4 1 3.7-.3 2.4-2.4 4.3-4.9 4.3zM136 118.5c-.4 0-.8.1-1.2.4-.4.3-.7.8-.8 1.3-.1.5.1 1.1.4 1.5.3.4.8.7 1.3.8l24.5 3.4c1.1.2 2.1-.6 2.3-1.7.1-.5-.1-1.1-.4-1.5-.3-.4-.8-.7-1.3-.8l-24.5-3.4h-.3zM105.5 14.8c-.6 0-1.2-.1-1.8-.3-1.2-.5-2.2-1.4-2.8-2.6s-.6-2.6-.1-3.8l7.9-20.5c.5-1.2 1.4-2.2 2.6-2.8 1.2-.5 2.6-.6 3.8-.1 2.6 1 3.9 3.9 2.9 6.5l-7.9 20.5c-.6 1.8-2.5 3.1-4.6 3.1zm8-27.6c-.3 0-.5.1-.8.2-.5.2-.9.6-1.1 1.1L103.7 9c-.2.5-.2 1 0 1.5s.6.9 1.1 1.1c1 .4 2.2-.2 2.6-1.1l7.9-20.5c.4-1-.1-2.2-1.1-2.6-.3-.1-.5-.2-.7-.2zM105.5 515.3c-.6 0-1.2-.1-1.8-.3-2.6-1-3.9-3.9-2.9-6.5l7.9-20.5c.5-1.2 1.4-2.2 2.6-2.8 1.2-.5 2.6-.6 3.8-.1 1.2.5 2.2 1.4 2.8 2.6.5 1.2.6 2.6.1 3.8l-7.9 20.5c-.6 2-2.5 3.3-4.6 3.3zm8-27.6c-.3 0-.5.1-.8.2-.5.2-.9.6-1.1 1.1l-7.9 20.5c-.4 1 .1 2.2 1.1 2.6 1 .4 2.2-.2 2.6-1.1l7.9-20.5c.2-.5.2-1 0-1.5s-.6-.9-1.1-1.1c-.3-.1-.5-.2-.7-.2zM480.5 8.5c-1.1 0-2.2-.5-2.9-1.5l-7-10c-1.1-1.6-.7-3.8.9-4.9 1.6-1.1 3.8-.7 4.9.9l7 10c1.1 1.6.7 3.8-.9 4.9-.6.4-1.3.6-2 .6zM200 435c-1.6 0-3.1-1-3.7-2.5l-4-10c-.8-2.1.2-4.4 2.2-5.2 2.1-.8 4.4.2 5.2 2.2l4 10c.8 2.1-.2 4.4-2.2 5.2-.5.2-1 .3-1.5.3zM233 461c-.9 0-1.9-.3-2.7-1-1.6-1.5-1.8-4-.3-5.6l17-19c1.5-1.6 4-1.8 5.6-.3 1.6 1.5 1.8 4 .3 5.6l-17 19c-.7.8-1.8 1.3-2.9 1.3zM296 512c-1.7 0-3.2-1-3.8-2.7l-7-20c-.7-2.1.4-4.4 2.5-5.1 2.1-.7 4.4.4 5.1 2.5l7 20c.7 2.1-.4 4.4-2.5 5.1-.4.1-.9.2-1.3.2zM296 14c-1.7 0-3.2-1-3.8-2.7l-7-20c-.7-2.1.4-4.4 2.5-5.1 2.1-.7 4.4.4 5.1 2.5l7 20c.7 2.1-.4 4.4-2.5 5.1-.4.1-.9.2-1.3.2zM11 270c-.8 0-1.6-.2-2.3-.7l-28-20c-1.8-1.3-2.2-3.8-.9-5.6 1.3-1.8 3.8-2.2 5.6-.9l28 20c1.8 1.3 2.2 3.8.9 5.6-.8 1-2.1 1.6-3.3 1.6zM512 270c-.8 0-1.6-.2-2.3-.7l-28-20c-1.8-1.3-2.2-3.8-.9-5.6 1.3-1.8 3.8-2.2 5.6-.9l28 20c1.8 1.3 2.2 3.8.9 5.6-.8 1-2.1 1.6-3.3 1.6zM41 211c-1.1 0-2.2-.5-3-1.3l-8-9c-1.5-1.7-1.3-4.2.3-5.6 1.7-1.5 4.2-1.3 5.6.3l8 9c1.5 1.7 1.3 4.2-.3 5.6-.7.7-1.7 1-2.6 1zM261 80c-2.1 0-3.9-1.7-4-3.8l-1-23c-.1-2.2 1.6-4.1 3.8-4.2 2.2-.1 4.1 1.6 4.2 3.8l1 23c.1 2.2-1.6 4.1-3.8 4.2h-.2zM209 39c-.5 0-1.1-.1-1.6-.3-2-.9-3-3.2-2.1-5.3l6-14c.9-2 3.2-3 5.3-2.1 2 .9 3 3.2 2.1 5.3l-6 14c-.7 1.5-2.2 2.4-3.7 2.4zM460 327c-.8 0-1.7-.3-2.4-.8-1.8-1.3-2.1-3.8-.8-5.6l12-16c1.3-1.8 3.8-2.1 5.6-.8 1.8 1.3 2.1 3.8.8 5.6l-12 16c-.8 1-2 1.6-3.2 1.6zM446 182c-1.6 0-3.1-1-3.7-2.6l-3-8c-.8-2.1.3-4.4 2.3-5.1 2.1-.8 4.4.3 5.1 2.3l3 8c.8 2.1-.3 4.4-2.3 5.1-.5.2-.9.3-1.4.3zM466 213c-.9 0-1.7-.3-2.5-.8-1.7-1.4-2.1-3.9-.7-5.6l7-9c1.4-1.7 3.9-2.1 5.6-.7 1.7 1.4 2.1 3.9.7 5.6l-7 9c-.7 1-1.9 1.5-3.1 1.5zM9 391c-1.3 0-2.6-.6-3.3-1.8-1.2-1.8-.7-4.3 1.1-5.5l12-8c1.8-1.2 4.3-.7 5.5 1.1 1.2 1.8.7 4.3-1.1 5.5l-12 8c-.7.5-1.4.7-2.2.7z'/%3E%3C/svg%3E");
`;

//* JSX
function SuccessPage() {
  useEffect(() => {
    return swal({
      title: "Your Buying Process Succeded!",
      text: "Click Ok to Return To website",
      icon: "success",
    }).then(() => (window.location = "/"));
  });

  return <SuccessPageStyle />;
}

export default SuccessPage;