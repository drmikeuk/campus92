---
layout: dashboard
title: "Student v2 (blue)"
navtitle: "Default UG"
nav: "stu2blue"
sortTitle: "a"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
