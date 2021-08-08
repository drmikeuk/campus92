---
layout: dashboard
title: "Student v5 (blue): Registration period"
navtitle: "Registration"
nav: "stu5blue"
sortTitle: "b"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student-registration  %}
{% for tile in tiles %}
  {% include tileMDsharp.html %}
{% endfor %}
