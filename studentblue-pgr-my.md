---
layout: dashboard
title: "Student (blue): PGR, Malaysia campus"
navtitle: "PGR (MY)"
nav: "stublue"
sortTitle: "e"
css: blue.css
---

{% assign tiles = site.data.student-pgr-my  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
