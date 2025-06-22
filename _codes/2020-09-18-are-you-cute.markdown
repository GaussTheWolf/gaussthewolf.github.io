---
layout: post
title: Are you cute?
date: 2020-09-18 22:13 +0200
---
<script src="/assets/js/bootstrap.min.js"></script>
<script src="/assets/js/cutie.min.js"></script>

Press the button below to find out.

<div class="d-grid mb-3">
    <button type="button" class="btn btn-primary btn-lg" id="checkCuteness" onclick="checkCuteness()">Check cuteness</button>
</div>

<div class="collapse" id="poggersBarDiv">
    <div class="progress" style="height: 20px">
         <div id="poggersBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 0%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>

<div class="collapse" id="loadingText"></div>

<h1 class="collapse display-4" id="cutieText">You are</h1>
