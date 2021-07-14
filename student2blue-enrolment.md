---
layout: dashboard
title: "Student v2 (blue): Enrolment period"
navtitle: "Enrolment"
nav: "stu2blue"
sortTitle: "c"
css:
  - blue.css
  - 2extras.css
---

{% assign tiles = site.data.student-enrolment  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
