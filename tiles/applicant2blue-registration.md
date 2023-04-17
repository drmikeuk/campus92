---
layout: dashboard
title: "Applicant v2 (blue): Registration period"
navtitle: "Registration"
nav: "app2blue"
sortTitle: "c"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.applicant-registration  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
