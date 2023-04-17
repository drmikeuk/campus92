---
layout: dashboard
title: "Applicant v2 (blue): Embargo period"
navtitle: "Embargo"
nav: "app2blue"
sortTitle: "b"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.applicant-embargo  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
