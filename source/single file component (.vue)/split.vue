<template>
  <div>
    <h1>Move js and css out</h1>
    <p>{{Greeting}}</p>
    <slot></slot>
  </div>
</template>
<script src="./split.js"></script>
<style src="./split.css"></style>