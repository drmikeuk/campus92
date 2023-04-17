---
layout: registration
title: "(Registration screens list)"
nav: "no"
sortTitle: "z"
next: regIntro.html
---

## Registration screens

(Test in brackets not in use)

<ul>
{% assign pages = (site.pages | where: "layout", "registration" | sort: "this" ) %}
{% for page in pages %}
  <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
