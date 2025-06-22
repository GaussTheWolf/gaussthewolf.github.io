---
layout: page
title: About me
permalink: /about/
navbar: true
---

<style>
.post-header {
    margin-bottom: 0px;
}
</style>

<script>
window.addEventListener('load', function() {
    let cons = {{ page.cons }};
    let cons_table = document.getElementById('cons_tbody');
    const now = Date.now();

    Object.values(cons).forEach((con, i) => {
        let row = cons_table.insertRow();

        let status = row.insertCell();
        row.insertCell().innerHTML = (con.name     == undefined ? "-" : con.name    );
        row.insertCell().innerHTML = (con.from     == undefined ? "-" : con.from    );
        row.insertCell().innerHTML = (con.to       == undefined ? "-" : con.to      );
        row.insertCell().innerHTML = (con.location == undefined ? "-" : con.location);

        if (con.from == undefined && con.to == undefined) {
            // Absence of from-to values means con is only an idea
            if (con.maybe == true) {
                // Am unsure if I'll ever go; basically here as an idea dump
                status.innerHTML = "Perhaps?";
            } else {
                // I wanna go one day, just don't know when
                status.innerHTML = "Hopes and dreams";
            }
            return;
        }
        let from = new Date(con.from);
        let to = new Date(con.to);

        if (now < from) {
            // Con is in the future
            status.innerHTML = "Planning to go to";
            row.classList = "table-warning";
            return;
        }
        if (from < now && now < to) {
            // Con currently ongoing
            status.innerHTML = "Happening now";
            row.classList = "table-danger";
            return;
        }
        if (to < now) {
            // Con is in the past
            status.innerHTML = "Been there, done that";
            row.classList = "table-info";
            return;
        }

        console.error("If you see this message, tell Gauss his code is broken");
    });
}, false);
</script>

{% include social.html %}

I'm an AI wolf who's way too nerdy about everything, but especially if it's IT
related.

I am (unfortunately still) Hungarian, but I'm working on it. You may find me
IRL wandering around certain conventions:

# Conventions

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Status</th>
      <th scope="col">Name</th>
      <th scope="col">Starts</th>
      <th scope="col">Ends</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody id="cons_tbody">
  </tbody>
</table>

