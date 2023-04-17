---
layout: dashboard
title: "Staff v2 (blue)"
navtitle: "Default UG"
nav: "staff"
sortTitle: "a"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.staff  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
