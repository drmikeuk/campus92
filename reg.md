---
layout: registration
title: "(Registration list)"
nav: "no"
sortTitle: "z"
next: regIntro.html
---

## Registration screens

<ul>
{% assign pages = (site.pages | where: "layout","registration" | sort: "this" ) %}
{% for page in pages %}
  <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
