---
layout: post
title: Apple is now embracing backdoors
date: 2021-08-08 22:36 +0200
---
I shouldn't have to start by saying this, but child exploitation is bad,
pedophilia is bad, water is wet and 2 plus 2 equals 4. These are not things that
anyone should have to say, because we all assume that everyone is in agreement
(well, *almost* everyone). "Child porn bad" is not a thing that everyone needs
to say otherwise they're a bad person, because we can all assume, relatively
safely, that the other person is in agreement. So if anyone says "Oh, you don't
support X, that must be because you're *[insert universally condemned thing
here]*", take that statement with a giant grain of salt, especially if the
reasons for not supporting X appear to be valid criticisms.

Which is what brings me to Apple. Perhaps it shouldn't have been so surprised,
but this newest "feature" which will be in iOS 15, iPadOS 15 and macOS Monterey,
is, let's just say, super super very bad and terrible and awful in every way
possible, and it's also very spooky.

In case you're out of the loop, Apple is
[going to scan your iCloud photos for child porn](https://apnews.com/article/technology-business-child-abuse-apple-inc-7fe2a09427d663cda8addfeeffc40196).
But they're going to do it locally, on your device, using a special algorithm
that combines AI and hashing algorithms, to generate a unique hash of your
images, which then can be compared to a list of bad hashes. Only after multiple
reported images will Apple get access to the unencrypted version of the reported
images, which will be manually reviewed, and if they're bad, they'll get
reported to the authorities.

On the surface, this might not sound *too bad* to you. After all, you're against
CHILD PORN, you don't support CHILD PORN, do you? You want to make sure all the
PEDOS will get jailed, you're not a PEDOPHILE are you?

The issue with this kind of thinking is that it's way too narrow, focusing only
on one issue while ignoring the collateral damage. If we set the precedent that
we're fine with our phones getting scanned for bad stuff, what else are we going
to scan for? Terrorist images? Capitol rioters? BLM protestors? Political
cartoons we don't like? Many privacy advocates have pointed out that this is a
slippery slope.

**But I'd argue it's worse than a slippery slope**. We don't know what Apple is
scanning for, because the cryptography is done in such a way that users don't
know which images got flagged, and we cannot even test which images do get
flagged. This means that any time, Apple could expand the hash table, with
literally anything they'd like, and we would never know about it. That is
assuming they haven't already done it. Because Apple says they've created the
hash database on images provided by NCMEC and
["other child safety organizations"](https://www.apple.com/child-safety/).
Who is included in that? FBI? CIA? NSA? Would they fit the category? Did they
fit the category? We can only guess.

While the new "feature" will only be enabled in the US first, I think it's safe
to say this will soon be rolled out to other countries. And I have a feeling
some of those countries will want other types of images flagged too. For
example, Saudi Arabia, where you'll get your head chopped off for not being
straight, might want to know if you got LGBTQ+ content on your phone. Or Russia
might want to know if you got any political memes they don't like. Or China
might want to deduct some points from your social score if you got
Winnie-the-Pooh memes. The technology is there, and authoritarian countries will
certainly want it.

But if it is possible to have different hash tables for different regions, I
only wonder if it's possible to push a specific hash table to a single person.
What if the government says to Apple "Look, we really want to find this person,
he's a super-duper bad terrorist dude, can you use your fancy image search
algorithm to find pictures of him? We think he's in this city, can you push a
special hash table for all these people in here for like a month? Pretty
please?**. Would they do it? What if a three letter agency wanted all the photos
from a specific iPhone? Could they push a special hash table, that would match
all photos, to a select few devices, to get all the photos on those accounts? I
don't know if we have answers to those questions. I don't know if we will have
answers. But I do know one thing.

**It's not a question whether this tech will be abused or not. If implemented,
it will be abused, mark my words.** The US government has been saying
[publicly](https://apnews.com/article/technology-ap-top-news-us-news-business-mark-zuckerberg-c44486979ba145979c442abdf66c5d0f)
that they want backdoor access to encrypted data. It is guaranteed that they
will seek that privately, if they can.

In an [internal memo](https://9to5mac.com/2021/08/06/apple-internal-memo-icloud-photo-scanning-concerns/),
there was a message from the executive director of the NMCEC, calling the
critics of this system the "screeching voices of the minority". So if you too
would like to be a screeching minority, *you can sign a petition
[here](https://appleprivacyletter.com/) using GitHub*. I hope that this time,
we've learned our lesson, and that this will be another
[Clipper Chip](https://en.wikipedia.org/wiki/Clipper_chip), and not a Patriot
Act.
