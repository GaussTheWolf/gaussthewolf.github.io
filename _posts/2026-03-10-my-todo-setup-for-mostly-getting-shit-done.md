---
layout: post
title: My todo setup for (mostly) getting shit done
date: 2026-03-10 23:13 +0100
---
I've been struggling with my to-do list for way too long at this point. So I've
decided to do something about it. Many, many times. After like an entire year of
messing around, plus a lifetime of trying to find a good setup, I think I've
created something that should be good enough to keep track of what I need to do.

Before you read any further, you should know that this is a setup that works
*for me*. It might not work for you. Ideally, you should take this as
inspiration, since I will elaborate for each and every decision I've made, and
why I did it like that.

**Ultimately, my todos consist of the following principles:**
- **The computer should decide what I do, not me** (because I'm bad at it and
  keep context switching every 1-2 ~~minutes~~ hours). There should be a simple
  dashboard that shows me exactly what I'm supposed to do.
- **There should be multiple todo lists**, and each of those should have a
  guiding principle for what to put in it.
- **There should only be 1 task in progress at any given time** (I currently
  have 36 tasks "in progress" :wlfNervous:).
- **Tasks in progress can be interrupted if there's something urgent** and
  important that comes up (for example, a convention is coming up and I need to
  fix the code I wrote for it :wlf:).
- Any task that is urgent and important enough that I have to be notified about
  it, possibly multiple times, and on my phone, should instead go into my
  regular todo app (I'll elaborate more on this).

I've thought a lot about what would be the best software to use for this.
Ultimately, I've settled for **org-mode**, but the road to that decision was not
simple at all.

##### **WARNING**: Life story incoming. Feel free to [skip](#life-story-over) this.

Originally, I've been averse to org-mode, since I tried emacs, and really didn't
like it (especially once I started using vim). But a specific distribution of
emacs, Spacemacs, is what convinced me to get back to it. Despite it being
incredibly slow and buggy, it showed me how powerful things like org-mode and
magit are, and thus I used it for a few months to write code. But eventually, I
stopped, once I decided to focus full-time on university instead of doing what
was basically freelance coding.

But I didn't stop completely. I still kept using Spacemacs, because of org-mode.
I also installed Orgzly on my phone, and used Syncthing to keep everything
synced between my devices. It's how I got through university, but I also kept
track of personal projects and stuff.

However, Spacemacs was being very unfriendly with me. Although they have
proposed stable melpa packages, the overall experience - when trying to do
anything remotely advanced - was more fragile than me :wlfFlat:. It was hard to
configure, it kept dying on me, and because I was only using it for org-mode, I
considered switching from it permanently.

Unfortunately, I couldn't find anything better than org-mode. And the vim
emulation of it was nowhere near there. Eventually, I got to the point that I
really needed to rethink the entire way I do task management. Thankfully, I
found a much better and way more stable alternative to Spacemacs: Doom emacs.
This single quote from their GitHub convinced me that this is the best piece of
software ever:

> It is a story as old as time. A stubborn, shell-dwelling, and melodramatic
vimmer—envious of the features of modern text editors—spirals into despair
before he succumbs to the dark side. This is his config.

I still had to do a bunch more thinking, because now I was faced with another
dilemma: I've been getting more and more used to writing code in a tmux + vim
combo, since that's what I used at work, as we were developing stuff on remote
servers.

I've considered switching to another task management solution, but there was
always 1 factor that stopped me from doing so: the mobile app (or lack thereof).
There are many good pieces of open source organization software, but they either
have a really bad mobile app, or don't have one at all (look at vimwiki for
example).

However, on the org-mode side, there's Orgzly, which is just amazing. Like, even
if you don't use org-mode at all, you should give this app a try. It's that
good. Although it doesn't have the full org-mode feature set, it has plenty
enough for me, and I imagine it's enough for most people. It's also open source
and actively developed, so if you lack anything in it, you can just add it, or
wait for it to be added.

I really wanted a nicer solution to be honest, and there are a bunch of other
interesting options, but they all have their downsides:

- A lot of options are not open source, such as all the task apps provided by
  the big corporations
- Most don't have a mobile app, such as vimwiki
- Taskwarrior is complicated, especially if you want to set up syncing
- Obsidian is an electron app, and also not open source (though it is a really
  cool piece of software, and I've been using it at work)

Emacs also has its downsides. For example, I still suck at writing lisp, and
support for backlinking is poor (I know that org-roam is a thing, but Orgzly
doesn't support it, meaning I can't use it on my phone).


##### **Life story over**


## But why org-mode?

There are a bunch of reasons:
- **It's plaintext**: This makes it easy to modify even without the official
  software, all you need is a text editor. If you're in a pinch and don't have
  access to org-mode (because you're away from your laptop, or because emacs
  died on you), you can just open a text editor. If you want to migrate away
  from org-mode, you can easily botch together some scripts, or even open a text
  editor and copy-paste the lines by hand.
- **There's nesting**: Each bullet point in org-mode is infinitely nestable, and
  they can all have their own todo state, scheduled and deadline time, etc. This
  makes it easy to organize everything in any way you'd like. For example, large
  projects can easily be broken down into smaller todos, each with their own
  state and deadline, or you can group todos about the same thing under 1 bullet
  point (for example, in my Projects, I have all my blog related stuff under 1
  point).
- **It's extremely powerful**: Besides the simple things such as tags,
  properties, subtasks, priority levels, scheduled and deadline times, it also
  has customizable states, tracking of state changes, a fully customizable
  agenda view, source code handling, citations, and a dizzying number of export
  options and other customizations. A lot of it I don't even use or need (though
  sometimes it is tempting to write an entire presentation in org-mode).
- **It has a mobile app**: Well, it's not an official one, but there are a few
  apps available for it on both major platforms. This is very important for me,
  as I want my todo list available at all times, and I often find myself with
  random notes or ideas I want to write down before I forgor :wlfWoozy.

## But why have another task management app?

The app for org-mode (Orgzly) on my phone is bad at reminding me hard enough
that my ADHD can't ignore it :wlfWoozy:.

I use an app called Tasks, which has an option to ring 5 times in succession,
and I usually set it up to repeat this every 5-15 minutes, so that I cannot
ignore it. I've also found it to be more reliable (sometimes Orgzly wouldn't
remind me, it can be a little inconsistent). Basically, if there are any task
where I require active poking for me to do it, and if it's important enough, I
just write it in Tasks. I feel that app is better suited for such a use case.

I've also set up Tasks to sync with Nextcloud. And GNOME has pretty good support
for syncing Tasks from Nextcloud, and sending reminders to my laptop, which I
quite like. I'm sure I could set up org-mode to do active poking, but I'd prefer
if it stayed passive.

## And how do you have org-mode set up?

I have the following todo types:
- **TODO**: Self explanatory. Things I should do.
- **PROGRESS**: Things I'm working on right now. The number of these should be
  kept to an absolute minimum (it is not).
- **NEXT**: Once I've ran out of things I'm doing right now, these are the
  things I should start working on.
- **BLOCKED**: Tasks that I cannot work on for one reason or another, usually
  because it requires me to do something else, or to wait for something.
- **TODELEGATE**: Tasks that I need to give out to someone else. It's rare that
  I use this one.
- **DELEGATED**: Tasks that I gave out to someone else. Also rare that I use
  this; so far I've used it exactly once.
- **RUSH**: Interruptions basically, tasks that have suddenly come in, and are
  not only important, but time sensitive (like some project that I need to
  finish for a convention that's happening soon).
- **LONG**: Tasks that take a really long time to complete. I reserve this for
  stuff that can take months to complete, or even longer. For example, I have
  "learn Italian" on this, but I don't have my coding projects here (unless they
  take a really long time).
- **REFINE**: This can only apply to items in my backlog. The idea is that I
  often throw just a link or a single word into my backlog, and next time I'm
  looking at it, I might not know what it means. The idea is that I should write
  enough about these items so that I know exactly what it is about just by
  reading it, and then decide if I want to move it out of my backlog.
- **DONE**: Self explanatory. Tasks that are done. I usually archive these,
  typically for future reference. But I also like to keep some around, just as
  motivation to see how much I've done already.
- **CANCELLED**: Self explanatory. Tasks that I decided not to do, for one
  reason or another. I also typically archive these tasks, just so they don't
  clutter up my file.

I also have a number of org files, with clear definitions on what they contain:
- **Backlog**: Basically a giant dump of notes that can be checked later, to
  create tasks out of. When I'm on the phone, I usually save things to here (I
  even have the double-tap-back shortcut set up so that it creates a new note in
  my backlog).
- **Todo**: Simple tasks that I can do, hopefully in one sitting, usually in
  front of a computer.
- **Projects**: This is for big, long running things. I use a lot of nesting and
  subtasks here.
- **Habits**: These are all my recurring tasks. I have things in here I want to
  do on a regular basis, which right now are clearing out the backlog and
  checking my RSS feeds (I suck a lot at doing this one lol).
- **Travels**: This one is relatively new, but for me, extremely useful.
  Basically, I store a list of things I need to do before travelling, including
  requesting time off, buying tickets, and everything I need to put in my
  luggage. And the really nice thing is that I can just keep copying this every
  time I travel somewhere, and I'll know exactly what I have to do. Plus, I can
  keep a nice record of all the places I've been to.

I also have a bunch of other ones that are not as important (such as for memes I
want to make, books I want to read, movies I want to watch, things I want to
buy). Honestly, my setup is still kind of evolving, always changing, but the
core parts of it are settled.

## That's cool, but how do you use it?

The most important part is that the computer should make the decision on what
I'm gonna work on. Unfortunately, I'm bad at sticking to this, but eventually
(hopefully?) I'll learn.

Whenever I hear or read about something cool I wanna take a note of, I just
throw it into my backlog. Maybe this is my ADHD, but this helps me declutter my
mind, as I can just forget about whatever it is I heard, since it's in my
backlog where I know I'll eventually look at it. Of course if this is something
more important, it might start in my todos or projects, with a higher priority.
Or if it's really important, it's not gonna go in org-mode, but into my Tasks
app.

## Can I get a uhhhhh... config file?

Sure, here you go:
```lisp
(after! org
        (setq org-todo-keywords
                '((sequence "TODO(t)" "NEXT(n)" "PROGRESS(p)" "BLOCKED(b@)" "LONG(l)" "TODELEGATE(g)" "DELEGATED(D)" "RUSH(r)" "REFINE(e)" "|" "CANCELLED(c@)" "DONE(d)")))
        (setq org-checkbox-hierarchical-statistics nil)
        (setq org-log-into-drawer t)
        (setq org-log-done 'time)
        (setq org-agenda-custom-commands
                '(
                    ("n" "Tell me what to do"
                            ((todo "RUSH" (
                                    (org-agenda-sorting-strategy '(priority-down))
                                    (org-agenda-overriding-header "Finish this shit ASAP:")
                            ))
                            (tags "-gaming-watching+TODO=\"PROGRESS\"" (
                                    (org-agenda-sorting-strategy '(priority-down))
                                    (org-agenda-overriding-header "If there's no rush, you should like, finish all this:")
                            ))
                            (todo "LONG" (
                                    (org-agenda-sorting-strategy '(priority-down))
                                    (org-agenda-overriding-header "These are gonna take a while, maybe chip away at them:")
                            ))
                            (tags "+TODO=\"BLOCKED\"" (
                                    (org-agenda-sorting-strategy '(priority-down))
                                    (org-agenda-overriding-header "Check if any of this stuff is still blocked:")
                            ))
                            (agenda "" nil)
                            (todo "NEXT" (
                                    (org-agenda-sorting-strategy '(priority-down))
                                    (org-agenda-overriding-header "Wow, ran out of things to do? Then I got some ideas:")
                            )))
                    )
                    ("r" "Refine that backlog"
                            ((tags "+TODO=\"BLOCKED\"" (
                                    (org-agenda-sorting-strategy '(priority-down))
                                    (org-agenda-overriding-header "Check if any of this stuff is still blocked:")
                            ))
                            (tags "+TODO=\"REFINE\"" (
                                    (org-agenda-sorting-strategy '(priority-down))
                                    (org-agenda-overriding-header "This is all the shit you need to look at:")
                            )))
                    )
                )
        )
)
```

## And does it work for you?

So far... kinda? I've been trying hard to stick to it, but it's not been easy.
It's also not perfect, and I'm still refining the process occasionally. The
hardest part is actually sticking to the top priority instead of just starting
some brand new fancy project just because I feel like it.

Either way, I'm sharing all this, because I want to help out my fellow
disorganised procrastinators to be a little bit more organised.
