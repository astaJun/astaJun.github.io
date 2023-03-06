<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
import md5 from "md5"
import Gitalk from "gitalk"
import "gitalk/dist/gitalk.css"
export default {
  name: "git-talk",
  data() {
    return {}
  },
  mounted() {
    const commentConfig = {
      clientID: "5dee1b5546c28f6ca709",
      clientSecret: "e38e6e8a90d8ae6328c7c184785db3b22faccb4a",
      repo: "docs",
      owner: "astaJun",
      admin: ["astaJun"],
      id: md5(location.pathname),
      distractionFreeMode: false,
    }
    const gitalk = new Gitalk(commentConfig)
    gitalk.render("gitalk-container")
  },
}
</script>
<style>
.gt-container .gt-header-textarea {
  color: #000;
}
</style>

