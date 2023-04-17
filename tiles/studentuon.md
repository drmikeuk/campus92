---
layout: dashboard
title: "Student UoN"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student  %}
{% for tile in tiles %}
  {% include tile2.html %}
{% endfor %}
