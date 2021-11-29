<template>
  <div class="hide-base-svg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol id="add" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
      </symbol>
      <symbol id="add-big" viewBox="0 0 48 48">
        <path d="M0 0h48v48H0z" fill="none" />
        <path
          fill="currentColor"
          d="M26 14h-4v8h-8v4h8v8h4v-8h8v-4h-8v-8zM24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"
        />
      </symbol>
      <symbol id="angle-arrow-up" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
      </symbol>
      <symbol id="angle-arrow-down" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z" />
      </symbol>
      <symbol id="arrow-left" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" />
      </symbol>
      <symbol id="arrow-right" viewBox="0 0 24 24">
        <path d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
      </symbol>
      <symbol id="calendar" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5z"
        />
      </symbol>
      <symbol id="check" viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" />
      </symbol>
      <symbol id="chevron-left" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" />
      </symbol>
      <symbol id="close-circle-outline" viewBox="0 0 24 24">
        <path
          d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8z"
        />
      </symbol>
      <symbol id="close" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </symbol>
      <symbol id="delete-outline" viewBox="0 0 24 24">
        <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
        <path fill="none" d="M0 0h24v24H0V0z" />
      </symbol>
      <symbol id="download" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
        />
        <path fill="none" d="M0 0h24v24H0z" />
      </symbol>
      <symbol id="error" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8z"
        />
      </symbol>
      <symbol id="file" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <g>
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
        </g>
      </symbol>
      <symbol id="magnify" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"
        />
      </symbol>
      <symbol id="magnify-big" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M20.667 18.667h-1.054l-.373-.36c1.307-1.52 2.093-3.494 2.093-5.64C21.333 7.88 17.453 4 12.667 4 7.88 4 4 7.88 4 12.667c0 4.786 3.88 8.666 8.667 8.666 2.146 0 4.12-.786 5.64-2.093l.36.373v1.054l6.666 6.653 1.987-1.987-6.653-6.666zm-8 0c-3.32 0-6-2.68-6-6s2.68-6 6-6 6 2.68 6 6-2.68 6-6 6z"
        />
      </symbol>
      <symbol id="menu-down" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
      </symbol>
      <symbol id="menu-left" viewBox="0 0 24 24">
        <path d="M14 7l-5 5 5 5V7z" />
      </symbol>
      <symbol id="menu-up" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7 15l5-5 5 5H7z" />
      </symbol>
      <symbol id="minus" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 13H5v-2h14v2z" />
      </symbol>
      <symbol id="open-in-new" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" />
      </symbol>
      <symbol id="eye-hide" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M12.5 5.99995C16.29 5.99995 19.67 8.12995 21.32 11.5C20.73 12.72 19.9 13.77 18.91 14.62L20.32 16.03C21.71 14.8 22.81 13.26 23.5 11.5C21.77 7.10995 17.5 3.99995 12.5 3.99995C11.23 3.99995 10.01 4.19995 8.86 4.56995L10.51 6.21995C11.16 6.08995 11.82 5.99995 12.5 5.99995ZM11.43 7.13995L13.5 9.20995C14.07 9.45995 14.53 9.91995 14.78 10.49L16.85 12.56C16.93 12.22 16.99 11.86 16.99 11.49C17 9.00995 14.98 6.99995 12.5 6.99995C12.13 6.99995 11.78 7.04995 11.43 7.13995ZM2.51 3.86995L5.19 6.54995C3.56 7.82995 2.27 9.52995 1.5 11.5C3.23 15.89 7.5 19 12.5 19C14.02 19 15.48 18.71 16.82 18.18L20.24 21.6L21.65 20.19L3.92 2.44995L2.51 3.86995ZM10.01 11.37L12.62 13.98C12.58 13.99 12.54 14 12.5 14C11.12 14 10 12.88 10 11.5C10 11.45 10.01 11.42 10.01 11.37ZM6.61 7.96995L8.36 9.71995C8.13 10.27 8 10.87 8 11.5C8 13.98 10.02 16 12.5 16C13.13 16 13.73 15.87 14.27 15.64L15.25 16.62C14.37 16.86 13.45 17 12.5 17C8.71 17 5.33 14.87 3.68 11.5C4.38 10.07 5.4 8.88995 6.61 7.96995Z"
        />
      </symbol>
      <symbol id="pencil" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"
        />
      </symbol>
      <symbol id="pencil-outline" viewBox="0 0 24 24">
        <path
          d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
        />
      </symbol>
      <symbol id="plus" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </symbol>
      <symbol id="paere" viewBox="0 0 24 24">
        <path
          d="M12 3C11.54 3 11.07 3.04 10.6 3.14C7.84 3.67 5.64 5.9 5.12 8.66C4.64 11.27 5.6 13.67 7.34 15.22C7.77 15.6 8 16.13 8 16.69V19C8 20.1 8.9 21 10 21H10.28C10.63 21.6 11.26 22 12 22C12.74 22 13.38 21.6 13.72 21H14C15.1 21 16 20.1 16 19V16.69C16 16.14 16.22 15.6 16.64 15.23C18.09 13.95 19 12.08 19 10C19 6.13 15.87 3 12 3ZM14 17H10V16H14V17ZM10 19V18H14V19H10ZM15.31 13.74C15.22 13.82 15.15 13.92 15.07 14H8.92C8.84 13.91 8.77 13.81 8.68 13.73C7.36 12.55 6.77 10.79 7.09 9.03C7.45 7.09 9.04999 5.48 10.98 5.1C11.32 5.03 11.66 5 12 5C14.76 5 17 7.24 17 10C17 11.43 16.39 12.79 15.31 13.74Z"
          fill="white"
        />
        <path d="M12.5 11H11.5V14H12.5V11Z" fill="white" />
        <path d="M10.3795 8.87372L9.67239 9.58082L11.7937 11.7021L12.5008 10.995L10.3795 8.87372Z" fill="white" />
        <path d="M11.501 11.0052L12.2081 11.7123L14.3294 9.59098L13.6223 8.88388L11.501 11.0052Z" fill="white" />
      </symbol>
      <symbol id="knap" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M13 5c2.21 0 4 1.79 4 4 0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 .89.39 1.69 1 2.24v1.22C9.8 11.77 9 10.5 9 9c0-2.21 1.79-4 4-4zm7 15.5c-.03.82-.68 1.47-1.5 1.5H13c-.38 0-.74-.15-1-.43l-4-4.2.74-.77c.19-.21.46-.32.76-.32h.2L12 18V9c0-.55.45-1 1-1s1 .45 1 1v4.47l1.21.13 3.94 2.19c.53.24.85.77.85 1.35v3.36zM20 2H4c-1.1 0-2 .9-2 2v8c0 1.11.9 2 2 2h4v-2H4V4h16v8h-2v2h2v-.04l.04.04c1.09 0 1.96-.91 1.96-2V4c0-1.1-.89-2-2-2z"
        />
      </symbol>
      <symbol id="billede" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
        />
      </symbol>
      <symbol id="richtext" viewBox="0 0 24 24">
        <path fill="currentColor" d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
      </symbol>
      <symbol id="video" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
      </symbol>
      <symbol id="accordion" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 12h16v2H4v-2zm0-3h16v2H4V9zm12-5l-4 4-4-4h3V1h2v3h3zM8 19l4-4 4 4h-3v3h-2v-3H8z" />
      </symbol>
      <symbol id="liste" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
        />
      </symbol>
      <symbol id="card" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 15h-2v-2h2v2zm6 0h-4v-2h4v2zM8 11H6V9h2v2zm10 0h-8V9h8v2zm2 9H4c-.53 0-1.04-.21-1.414-.586C2.21 19.04 2 18.53 2 18V6c0-.53.21-1.04.586-1.414C2.96 4.21 3.47 4 4 4h16c.53 0 1.04.21 1.414.586C21.79 4.96 22 5.47 22 6v12c0 .53-.21 1.04-.586 1.414C21.04 19.79 20.53 20 20 20zM4 6v12h16V6H4z"
        />
      </symbol>
      <symbol id="listecard" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
        />
      </symbol>
      <symbol id="info" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M11 7h2v2h-2zM11 11h2v6h-2z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </symbol>
      <symbol id="infobox" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
      </symbol>
      <symbol id="loading" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 4V2c-1.313 0-2.614.259-3.827.761-1.213.503-2.315 1.24-3.244 2.168C3.054 6.804 2 9.348 2 12h2c0-2.122.843-4.157 2.343-5.657S9.878 4 12 4z"
        />
      </symbol>
      <symbol id="remove-red-eye-outline" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"
        />
      </symbol>
      <symbol id="afpublicer" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.46 15.88L15.88 14.46L18 16.59L20.12 14.46L21.54 15.88L19.41 18L21.54 20.12L20.12 21.54L18 19.41L15.88 21.54L14.46 20.12L16.59 18L14.46 15.88ZM5 3H19C20.11 3 21 3.89 21 5V12.8C20.39 12.45 19.72 12.2 19 12.08V5H5V19H12.08C12.2 19.72 12.45 20.39 12.8 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3ZM7 7H17V9H7V7ZM7 11H17V12.08C16.15 12.22 15.37 12.54 14.68 13H7V11ZM7 15H12V17H7V15Z"
        />
      </symbol>
      <symbol id="kopi" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z"
        />
      </symbol>
      <symbol id="hero" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M5 11h8v6H5v-6zm2 4h4v-2H7v2zM3 3h18c1.1 0 2 .88 2 1.98V19c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V4.98C1 3.88 1.9 3 3 3zm0 16.02h18V4.97H3v14.05z"
        />
      </symbol>
      <symbol id="location" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"
        />
      </symbol>
      <symbol id="tag" viewBox="0 0 24 24">
        <path
          fill="#000"
          d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"
        />
        <path fill="#000" d="M6.5 8C7.328 8 8 7.328 8 6.5S7.328 5 6.5 5 5 5.672 5 6.5 5.672 8 6.5 8z" />
      </symbol>
      <symbol id="teaser" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6V9.5zm0 2.5h6v1.5h-6V12zm0 2.5h6V16h-6v-1.5z"
        />
      </symbol>
      <symbol id="teaserbillede" viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13z" />
      </symbol>
      <symbol id="emnemenu" viewBox="0 0 24 24">
        <path fill="#000" d="M21 13h-8v2h8v-2zm0 4h-8v2h8v-2zm0-8h-8v2h8V9zm0-4h-8v2h8V5zM11 13H3v2h8v-2zm0 4H3v2h8v-2zm0-8H3v2h8V9zm0-4H3v2h8V5z" />
      </symbol>
      <symbol id="udvidede-cardgruppe" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 16v2h-4v-2h4zM9 4v6H5V4h4zm10 0v6h-4V4h4zM9 16v2H5v-2h4zm12-2h-8v6h8v-6zM11 2H3v10h8V2zm10 0h-8v10h8V2zM11 14H3v6h8v-6z"
        />
      </symbol>
      <symbol id="link" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"
        />
      </symbol>
      <symbol id="time" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        />
        <path fill="currentColor" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </symbol>
      <symbol id="antal-gange" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"
        />
      </symbol>
      <symbol id="menu" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </symbol>
      <symbol id="help-circle-outline" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M11 18h2v-2h-2v2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2 2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4z"
        />
      </symbol>
      <symbol id="filter" viewBox="0 0 24 24">
        <path fill="currentColor" d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      </symbol>
      <symbol id="play" viewBox="0 0 24 24">
        <rect fill="currentColor" x="9.141304" y="7.0869565" class="st0" width="7.5815215" height="10.548913" />
        <path fill="none" class="st1" d="M0,0h24v24H0V0z" />
        <path fill="#FFFFFF" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.4799995,10-10S17.5200005,2,12,2z M10,16.5v-9l6,4.5L10,16.5z" />
      </symbol>
      <symbol id="praedefineret-soegning" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
      </symbol>
      <symbol id="email" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
        />
      </symbol>
      <symbol id="phone" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
        />
      </symbol>
      <symbol id="linkedin" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M18.522 0H1.478C.662 0 0 .642 0 1.433v17.135C0 19.358.662 20 1.478 20h17.044c.816 0 1.478-.641 1.478-1.432V1.433C20 .642 19.338 0 18.522 0zM3.042 16.742V7.711h3.02v9.031h-3.02zm1.51-10.264h-.019c-1.014 0-1.67-.694-1.67-1.56 0-.887.676-1.56 1.71-1.56 1.033 0 1.669.673 1.689 1.56 0 .867-.656 1.56-1.71 1.56zm12.403 10.264h-3.02v-4.83c0-1.215-.438-2.043-1.53-2.043-.835 0-1.332.558-1.55 1.098-.08.192-.1.463-.1.732v5.043h-3.02s.04-8.183 0-9.03h3.02V8.99c.402-.616 1.12-1.49 2.723-1.49 1.988 0 3.478 1.29 3.478 4.064v5.178z"
        />
      </symbol>
      <symbol id="people" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"
        />
      </symbol>
      <symbol id="linkboks" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M1.833 3.667v14.666h18.334V3.667H1.833zm16.5 4.28h-2.291V5.5h2.291v2.447zm-2.291 1.834h2.291v2.447h-2.291V9.781zM3.667 5.5h10.541v11H3.667v-11zm12.375 11v-2.447h2.291V16.5h-2.291z"
        />
      </symbol>
      <symbol id="tekstgruppe" viewBox="0 0 24 24">
        <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" fill="currentColor" />
      </symbol>
      <symbol id="accordion-open" viewBox="0 0 32 32">
        <g fill="currentColor" fill-rule="evenodd">
          <rect width="32" height="32" fill="currentColor" rx="4" />
          <path d="M4 4h24v24H4z" />
          <path fill="#FFF" fill-rule="nonzero" d="M24.902 16.997v-1.994h-7.905V7.098h-1.994v7.905H7.098v1.994h7.905v7.905h1.994v-7.905z" />
        </g>
      </symbol>
      <symbol id="accordion-close" viewBox="0 0 32 32">
        <g fill="currentColor" fill-rule="evenodd">
          <rect width="32" height="32" fill="currentColor" rx="4" />
          <path d="M4 4h24v24H4z" />
          <path fill="#FFF" fill-rule="nonzero" d="M24.902 16.997v-1.994H7.098v1.994H16.997z" />
        </g>
      </symbol>
      <symbol id="kontaktformular" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17 7h5v10h-5v2c0 .265.105.52.293.707.187.188.442.293.707.293h2v2h-2.5c-.55 0-1.5-.45-1.5-1 0 .55-.95 1-1.5 1H12v-2h2c.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707V5c0-.265-.105-.52-.293-.707C14.52 4.105 14.265 4 14 4h-2V2h2.5c.55 0 1.5.45 1.5 1 0-.55.95-1 1.5-1H20v2h-2c-.265 0-.52.105-.707.293C17.105 4.48 17 4.735 17 5v2zM2 7h11v2H4v6h9v2H2V7zm18 8V9h-3v6h3z"
        />
      </symbol>
      <symbol id="star-outline" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
        />
      </symbol>
      <symbol id="star-filled" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
      </symbol>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GlobalSvgIcons extends Vue {}
</script>

<style scoped lang="scss"></style>
