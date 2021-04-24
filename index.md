---
layout: default
title: Midgard
description: The Viking Pool
is_home: true
---

# Blog
<section>
  {% for post in site.posts %}
    <div>
      <small>{{ post.date | date_to_string: "ordinal", "EU" }}</small><br/>
	  <a href="{{ post.url }}">{{ post.title }}</a><br/>
    </div>
  {% endfor %}
</section>

# Statistics

Hi there and welcome to Midgard. Check out our stats and let's go from there :)

<section>
	<iframe width="100%" height="400" frameborder="0" src="https://js.adapools.org/widget.html?pool=edbf17f6796a0434a8269f000cf2cba87452abf39c9967c8a318f456"><a href="https://adapools.org/pool/edbf17f6796a0434a8269f000cf2cba87452abf39c9967c8a318f456">Detail</a></iframe>
</section>
