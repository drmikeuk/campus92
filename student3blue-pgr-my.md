---
layout: dashboard
title: "Student v3 (blue): PGR, Malaysia campus"
navtitle: "PGR (MY)"
nav: "stu3blue"
sortTitle: "e"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student-pgr-my  %}
{% for tile in tiles %}
  {% include tileMD.html %}
{% endfor %}
