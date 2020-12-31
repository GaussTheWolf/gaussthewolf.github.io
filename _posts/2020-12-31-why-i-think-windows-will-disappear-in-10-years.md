---
layout: post
title: Why I think Windows will disappear in 10 years
date: 2020-12-31 21:59 +0100
---
I'm going to make a bold prediction here: I think that in 10 years (or shorter),
Windows will either disappear, or use the Linux kernel by turning into a sort-of
Linux distribution (not like Ubuntu or Debian, but more like Android).

You might wonder why I think that. After all, Windows dominates the desktop and
laptop market, having roughly
[87%](https://netmarketshare.com/operating-system-market-share.aspx) of the
market. Meanwhile, Linux has less than 3%. Why would this change in 10 years?
Surely Microsoft is gonna continue developing Windows and keep making tons of
money off of it. Right?

Well, I don't think so. And to understand why, I first have to explain why
Windows is popular.

# Why is Windows popular?

Imagine computers as being on a scale, from smaller and less powerful to bigger
and more powerful. Windows dominates the devices around the middle, ranging from
laptops to desktops. Everything else is dominated by Linux - from routers to
smartphones, from servers to supercomputers. Even Microsoft uses Linux to run
their cloud services. But if Linux runs all this stuff, why is it so unpopular
on the desktop?

Linux Torvalds - the creator of Linux - was
[asked](https://www.youtube.com/watch?v=KFKxlYNfT_o) this question. His answer
is basically that Windows comes pre-installed on these devices, because
consumers don't want to install their own operating system. They just want to
take it home, turn it on, and start working on it. It's why Android is so
successful - not because millions of people download and install an ISO every
day, but because it comes pre-installed with the phone. Windows is successful
for the same reason - because it comes with desktops and laptops.

So why would that change?

# The problem with Windows

Windows isn't any better than Linux. I'd even argue that it's worse: Linux has a
central, rebootless update system that upgrades not just your operating system,
but also all your software. Everything from the kernel to your music player gets
updated in the background, while your computer is running. And the next time you
turn it on, you immediately get to use the latest software. You also install all
your software from a sort-of app store, and you can customise which app stores
you want to use. The updates are also not forced on you: you get to decide when
to update, and what to update.

Windows on the other hand, while it finally got an app store after "10"
versions, you still have to install most of your software from all kinds of
different websites. And each piece of software either has a built-in update
mechanism, or not, and you have to update it manually. Meanwhile Windows updates
itself during shutdown and startup, which depending on how much it has to do and
how powerful your computer is, can take a short time or a really long time.

These issues aren't new, however. They existed from the very beginning, and it
didn't stop people from using Windows. I'd argue that there is only one thing
good about Windows: everyone's using it. And because of that, all the programs
are written for Windows. All the computer manufacturers install Windows on their
devices. And everyone knows how to use Windows. This makes it near impossible
to de-throne Windows as the king of the operating systems, however there are 2
reasons why I think it might happen: portability, and development cost.

Portability means the ability to run on other systems. Windows needs a certain
amount of RAM, a certain type of CPU, and this and that. Linux however, doesn't
really have any hardware requirements. It can run on your toaster - and probably
does, if you have a smart toaster. This is because Linux is open source, and so
are most of the applications written for it. So if a new architecture was made,
Linux could be easily run on it by just making a compiler for the architecture
and suddenly you'll have most Linux software running. Windows on the other hand,
can only really be used on the x86 architecture. Sure, there is an ARM version
of Windows called Windows RT, but we all know what happened to that. And it
happened for a good reason: almost all Windows applications are designed for
x86, making it hard for Windows to change architectures. This could become a big
problem very quickly, because of Apple's new ARM-based chips. These are
ridiculously fast yet consume a lot less power, and I'm certain that ARM-based
processors are the future of computing. Linux has existed on ARM since forever,
not just because of Android, which runs on ARM, but also because of many
single-board computers like the Raspberry Pi. In fact, Linux exists for pretty
much every architecture, due to it being open-source. Windows however, is closed
source, and so are most of the apps written for it. Because the main selling
point of Windows is that it has the most applications, creating a new version of
Windows that runs much faster is pointless if people can't use the apps they're
used to.

The other issue I see is development cost. Because Windows needs to keep adding
new features while making sure to not break old ones for applications, the cost
of developing the operating system goes up a lot. Meanwhile, Windows is
constantly becoming cheaper and cheaper, to the point where nowadays it's given
away almost for free (remember that 1 year when you could upgrade to Windows 10
free of charge? You can still do that, even though the program ended 4 years
ago). Of course, organisations still have to buy licenses in bulk, and
manufacturers who want to put Windows on their devices also buy a lot of
licenses, however, Microsoft is increasingly making money from other sources,
like Azure, ads in Windows, the Microsoft Store, and selling Surface devices.
This gives Microsoft an incentive to either abandon Windows, or to cut
development costs for it, which I think is the more likely option. And an
excellent way to cut development costs would be to switch kernels, and thus
remove the need, or at least cut down on the need for kernel developers.

# WSL

A lot of people seem to think Windows Subsystem for Linux hurts Linux, because
it means that people will be able to run Linux apps easily on Windows without
switching operating systems. I actually believe the exact opposite - it provides
an easy way to try out Linux for anyone who's curious. People don't just start
using Linux out of nowhere. Most Linux users - including me - start out with
having a dedicated machine, physical or virtual, running Linux. As they spend
more and more time getting to know Linux better, they'll use it more and more,
and slowly integrate it more and more into their workflow. Once someone realises
that they spend more time in Linux than in Windows, they'll switch operating
systems. This is because Linux runs Linux applications the best, similarly how
Windows runs Windows applications the best. This will always be true, no matter
how hard each system tries to emulate the other. I suspect most people don't use
Wine in their workflow, and instead choose to run Linux-native applications,
because those simply run better. The same will probably be true for WSL, meaning
that most people will either rarely use WSL, or use it so much that they'll just
switch over to Linux. Anyone who's in between will only be so temporarily.

Some people however (like [Richard
Stallman](https://linux.slashdot.org/story/17/09/24/2132218/richard-stallman-vs-canonicals-ceo-will-microsoft-love-linux-to-death))
have accused Microsoft of trying to [embrace, extend and extinguish
Linux](https://www.justice.gov/sites/default/files/atr/legacy/2006/06/01/V-A.pdf).
This is Microsoft's internal name for a tactic that has the following 3 steps: 

1. **Embrace**: Create a piece of software that's similar or even compatible
   with a competitor's software.

2. **Extend**: Implement some features that are not supported by the competing
   software, and make it proprietary to their own product.

3. **Extinguish**: Once the improvements to the product become widely used, the
   competition that doesn't or cannot support these new features will go out of
   business.

I am, however, not worried that this will happen. Many corporations want and do
try to control Linux, however, none of them will be able to. This is because the
main benefit of Linux is that all the code is developed in the open - companies
like Intel, IBM, Samsung, Google, AMD, ARM, Facebook - they all have their own
agenda, features that they want, and having these features made in an open way
allows anyone - from the biggest tech companies to random people - to work on
it. If Microsoft tried to put proprietary features into Linux, it'd take away
it's biggest feature, the only thing that makes Linux good and successful.

This is also why Linus Torvalds - the creator of Linux - [isn't
worried](https://www.zdnet.com/article/linus-torvalds-isnt-worried-about-microsoft-taking-over-linux/)
about Microsoft taking over Linux either. Many companies have tried and failed,
and Microsoft wouldn't be the first, not by a long shot. However, I think
Microsoft is aware of this. Their contributions and interest in Linux seems
genuine, and it looks like any other company that has joined the Linux community.

On another note, the name Windows Subsystem for Linux is weird, because it's a
Linux system running on Windows, meaning that Linux is the subsystem, not
Windows. I don't know if it's just a poor naming choice, or perhaps
foreshadowing - that one day Windows will be running under the Linux kernel.

# Closing thoughts

This is my end of year prediction for what's to come. I will certainly be
looking back at this in 2030. Maybe I'll eat my own words, maybe not, but one
thing is certain: the moment Microsoft ports Office over to Linux will be the
first nail in the coffin for Windows. I don't know when will that happen - if at
all - but Microsoft has already made one Office app available on Linux: Teams.
Sure, it's not Word, or Outlook, or even SharePoint, but it could be the start
of something bigger. We'll just have to see.
