---
layout: dashboard
title: "Student v2 (blue): Graduation period"
navtitle: "Graduation"
nav: "stu2blue"
sortTitle: "d"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student-graduation  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
