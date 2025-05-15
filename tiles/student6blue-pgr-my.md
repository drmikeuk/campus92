---
layout: dashboard
title: "Student v6 (PGR + forms)"
navtitle: "Student v6 PGR UNM"
nav: "new"
sortTitle: “i"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student6pgr-my  %}
{% for tile in tiles %}
  {% include tileMDsharp.html %}
{% endfor %}
