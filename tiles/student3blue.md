---
layout: dashboard
title: "Student v3 (blue)"
navtitle: "Default UG"
nav: "stu3blue"
sortTitle: "a"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student  %}
{% for tile in tiles %}
  {% include tileMD.html %}
{% endfor %}
