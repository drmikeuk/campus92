---
layout: dashboard
title: "Student v2 (blue): PGR, Malaysia campus"
navtitle: "PGR (MY)"
nav: "stu2blue"
sortTitle: "e"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student-pgr-my  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
