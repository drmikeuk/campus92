---
layout: dashboard
title: "Student v4 (blue)"
navtitle: "Default UG"
nav: "stu4blue"
sortTitle: "a"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student  %}
{% for tile in tiles %}
  {% include tileFAL.html %}
{% endfor %}
