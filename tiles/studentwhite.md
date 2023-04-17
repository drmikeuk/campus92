---
layout: dashboard
title: "Student (white)"
navtitle: "Default UG"
nav: "stuwhite"
sortTitle: "a"
css: white.css
---

{% assign tiles = site.data.student  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
