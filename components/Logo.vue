<template>
  <div class="logo-container">
    <img src="~/assets/images/logo-shwarma.png" class="logo img-fluid">
  </div>
</template>

<style>
  body {
    filter: contrast(2) saturate(2);
  }
  .logo {
    animation: color-shift 6s ease-in-out infinite alternate;
    filter: hue-rotate(0deg);
    transform: skewY(-2deg) skewX(20deg);
  }

  @keyframes color-shift {
    0% {
      filter: hue-rotate(0deg);
      transform: skewY(-2deg) skewX(20deg);
    }
    100% {
      filter: hue-rotate(180deg);
      transform: skewY(2deg) skewX(-20deg);
    }
  }
</style>
