<template>
  <div class="home-body">
    <headerComp ref="headerComp"></headerComp>
    <div class="home-content">
      <div class="banner">
        Learning notes and experiences
      </div>
      <ul class="nav">
        <li class="item" v-for="item in navLists">
          <img :src="item.url" alt="">
          <div class="name">{{item.name}}</div>
        </li>
      </ul>
      <ul class="list">
        <li class="item" v-for="item in lists">
          <div class="title">{{item.title}}</div>
          <div class="introduce">{{item.introduce}}</div>
          <div class="time">{{item.time}}</div>
          <div class="listFooter">
            <div class="tag">{{item.tag}}</div>
            <div class="praise">{{item.praise}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.js">
  
</script>

<style lang="scss" src="./index.scss">
  
</style>
