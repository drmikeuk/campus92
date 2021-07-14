---
layout: dashboard
title: "Student (white): Registration period"
navtitle: "Registration"
nav: "stuwhite"
sortTitle: "b"
css: white.css
---

{% assign tiles = site.data.student-registration  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
