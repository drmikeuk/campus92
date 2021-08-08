---
layout: dashboard
title: "Student v5 (blue)"
navtitle: "Default UG"
nav: "stu5blue"
sortTitle: "a"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student  %}
{% for tile in tiles %}
  {% include tileMDsharp.html %}
{% endfor %}
