---
layout: dashboard
title: "All tiles"
nav: "yes"
sortTitle: "z"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.all  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
