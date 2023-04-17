---
layout: dashboard
title: "Student (blue): Registration period"
navtitle: "Registration"
nav: "stublue"
sortTitle: "b"
css: blue.css
---

{% assign tiles = site.data.student-registration  %}
{% for tile in tiles %}
  {% include tileFA.html %}
{% endfor %}
