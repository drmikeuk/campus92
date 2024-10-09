---
layout: dashboard
title: "New icon ideas"
navtitle: "New icon ideas"
nav: "new"
sortTitle: "b"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.newideas  %}
{% for tile in tiles %}
  {% include tileMDsharp.html %}
{% endfor %}
