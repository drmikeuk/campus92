---
layout: dashboard
title: "Applicant v2 (blue)"
navtitle: "Default"
nav: "app2blue"
sortTitle: "a"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.applicant  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
