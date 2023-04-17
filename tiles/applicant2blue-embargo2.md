---
layout: dashboard
title: "Applicant v2 (blue): Embargo period 2"
navtitle: "Embargo 2"
nav: "app2blue"
sortTitle: "b"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.applicant-embargo2  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
