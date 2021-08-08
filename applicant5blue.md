---
layout: dashboard
title: "Applicant v5 (blue)"
navtitle: "Default"
nav: "app5blue"
sortTitle: "a"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.applicant  %}
{% for tile in tiles %}
  {% include tileMDsharp.html %}
{% endfor %}
