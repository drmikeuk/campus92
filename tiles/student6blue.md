---
layout: dashboard
title: "Student v6 (+ forms)"
navtitle: "Student v6"
nav: "new"
sortTitle: "f"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student6  %}
{% for tile in tiles %}
  {% include tileMDsharp.html %}
{% endfor %}
