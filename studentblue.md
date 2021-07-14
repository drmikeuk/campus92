---
layout: dashboard
title: "Student (blue)"
navtitle: "Default UG"
nav: "stublue"
sortTitle: "a"
css: blue.css
---

{% assign tiles = site.data.student  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
