---
date: 2019-04-24
title: Reshaping Git History
published: true
---


## Rebase to the occasion

It's all too familiar - you start working on some feature locally, you've made several commits, it's almost completed. But suddenly requirements change (happens once in a blue moon, right?), and you have to introduce changes. You tack new commits onto the existing chain. But what if you wanted to unite related changes in an effort to improve readability, portability and clarity before sharing your work with others?

Or consider the following situation. Idea sparks in your mind and you get down to implementing it. In the heat of development, you run up several crude commits in a short succession. You usually strive to keep it focused, but your hands were on fire, you didn't want to be bogged down so you temporarily turned a blind eye on formalities. How do you put things in order now that the sudden drive has subsided?

Another common scenario is back and forth during PR's review rounds. There could be several takes before you get it right. Once the review is over, it's time to stick changes produced on the fly where they initially belong.

Git grants plenty of freedom when a need to revise local history arises. Commits could be rearranged, altered, split apart, squashed together or wiped out entirely. Surprisingly enough, there is no dedicated tool for modifying history directly! `git commit --amend` might come to your mind as it helps with altering the most recent commit. However, if you need to reach deeper into history, you've got to resort to interactive rebase - the trick is to take a series of commits and rebase them onto their original HEAD instead of another one.

I personally like my commit history to come across as neat and polished, clearly showcasing what has been accomplished. But in this post I'm not going to dig into why maintaining clean history is beneficial. It's rather meant as a practical overview of several `git rebase --interactive` actions allowing for history grooming. Suffice to say it especially makes sense in collaboration environment. When working on some local project which isn't destined to see the light of the day you might not really care how its history looks.


## Turn up the bass and rebase

`git rebase --interactive` command is a robust way to mould commit history. It offers more than ten various actions and rather helpfully all of them, along with succinct explanations, are always outlined below the list of commits which are being rebased. For our purposes, we'll be considering the following subset:

* `edit` - allows for amending commit in question;
* `squash` - combine commit at hand with the one directly above and choose which commit message to use;
* `fixup` - has the same effect as `squash`, but uses target commit's log message;
* `drop` - erase commit.

To actually kick off the process we need to supply an SHA hash of the commit which comes right before the point where we'd like to start rebasing (`-i` is a shorthand for `--interactive`):

```text
git rebase -i <after_this_commit>
```

You don't have to always indicate hash. Tip of the branch (aka HEAD pointer) could be used as a reference instead. Let's stick with the last three commits:

```
git rebase -i HEAD~3
```

As a result, Git opens up an editor within the terminal window and presents a list of selected records which will resemble the following:

```
pick a1rt1m3 third-to-last commit summary
pick bass1st second-to-last commit summary
pick cr0wbar last commit summary
```

Compared to `git log`'s output, the chronological order is reversed - the oldest change appears at the top here. If we just save the buffer without touching anything, Git will follow the listing downward and execute actions sequentially. `pick` is the default one indicating our intention to keep the commit. If we wanted to manipulate any of the records, we'd replace `pick` with desired action.


### Editing

```
pick a1rt1m3 third-to-last commit summary
edit bass1st second-to-last commit summary
pick cr0wbar last commit summary
```

In this scenario, when Git reaches `bass1st`, it will pause and give you an opportunity to introduce changes. Once done, toss edits into the staging area, invoke `git commit --amend` to fold them in and resume the process using `git rebase --continue`.

Sometimes it might make sense to split one large commit apart. In order to achieve that, unstage all associated files via `git reset HEAD~` (which effectively undoes the commit) and form tinier commits as required.

It's worth noting that when Git stops and gives you a chance to edit a commit you'll find yourself in so called [detached HEAD state](https://git-scm.com/docs/git-checkout#_detached_head). It usually implies that all new commits will be lost unless you create an explicit reference (new branch or tag) as garbage collector routinely removes non-referenced objects. However, you don't have to worry about that while rebasing since Git already knows that we'd like to retain any changes as part of the process.

Finally, if you misstepped and things got messed up - don't fret! It's always possible to cancel an ongoing rebase and restore everything to the prior state by executing `git rebase --abort`.


### Squashing and fixups

Say we committed something which fundamentally belongs to the existing `a1rt1m3` commit:

```
pick a1rt1m3 third-to-last commit summary
pick bass1st second-to-last commit summary
pick cr0wbar last commit summary
pick jazz13r new changes
```

There are two options to meld `jazz13r` into `a1rt1m3`. First would be `squash`, which allows for choosing which commit message to apply in the end. Second one would be `fixup`, which acts identically but doesn't let you pick and uses target commit's message instead.

With any of these commands, however, the general idea is to place accessary commit (or commits) right below the target commit:

```
pick a1rt1m3 third-to-last commit summary
fixup jazz13r new changes
pick bass1st second-to-last commit summary
pick cr0wbar last commit summary
```

Picking an action and reordering actually could be done automatically. Start with committing new changes using [one of the special flags](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---fixupltcommitgt) and specifying the target:

```text
git commit --squash (or --fixup) <commit_to_modify>
```

Which translates to following, in line with our example:

```
git commit --fixup a1rt1m3
```

You'll notice that the subject line will contain target commit's message prefixed with the action we defined earlier:

```text
pick a1rt1m3 third-to-last commit summary
pick bass1st second-to-last commit summary
pick cr0wbar last commit summary
pick jazz13r fixup! third-to-last commit summary
```

Start rebasing with an additional flag called ['autosquash'](https://git-scm.com/docs/git-rebase#Documentation/git-rebase.txt---autosquash):

```
git rebase -i --autosquash HEAD~4
```

Git will pre-scan records and rearrange the list for you. Hey presto!

```text
pick a1rt1m3 third-to-last commit summary
fixup jazz13r fixup! third-to-last commit summary
pick bass1st second-to-last commit summary
pick cr0wbar last commit summary
```

### Deleting

Deletion is trivial. Either apply `drop` action, or simply erase the line.


### Reordering

Switching order of the items is also a no-brainer. Simply rearrange the lines as necessary:

```
pick bass1st second-to-last commit summary
pick cr0wbar last commit summary
pick a1rt1m3 third-to-last commit summary
```

## Proceed with caution
Rebasing (or any other method of rewriting for that matter) a branch which others have used as a basis for their work is a terrible idea. It will likely cause major nuisance and provoke issues. Even if you haven't changed anything during rebase, every commit touched by the process will have its hash recalculated and everyone downstream at the very least will be forced to refetch in order to avoid complications. [In the worst case](https://git-scm.com/docs/git-rebase#_the_hard_case), they'll have to manually fix their history and this is by no means an enjoyable pastime. Bottom line - never ever tamper shared work history and only push your commits to the remote when you are truly happy with the result.
