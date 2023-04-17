---
layout: dashboard
title: "Applicant v5 (blue): Embargo period"
navtitle: "Embargo"
nav: "app5blue"
sortTitle: "b"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.applicant-embargo  %}
{% for tile in tiles %}
  {% include tileMDsharp.html %}
{% endfor %}
