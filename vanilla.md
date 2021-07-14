---
layout: dashboard
title: "Vanilla"
nav: "yes"
sortTitle: "a"
---
<style>
  .blue .nuilp {background: #D6EAF8}
</style>

{% assign tiles = site.data.vanilla  %}
{% for tile in tiles %}
  {% include tile.html %}
{% endfor %}
