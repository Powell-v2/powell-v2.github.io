---
date: 2025-03-07
title: "[DRAFT] Unlocking the power of recursion in TypeScript - Part 1"
# published: true
---

import { CodeSnippetTs } from "../components/CodeSnippetTs"

In this article we’ll dive into the realm of recursion in TypeScript by breaking down the process of creating an enhanced function overload for `_.pick` function from venerable Lodash utility library which unlocks comprehensive path and return type hints for complex object inputs. We’ll examine the shortcomings of existing overloads and build the extensions step-by-step while learning few practical approaches and neat tricks along the way. Let’s dive right in!

## Step 0. Overview of the \_.pick function and its existing function overloads

If you are unfamiliar with `_.pick` utility function, it allows to create a copy of an object containing only specified properties. You can read the full definition and play around with the function in the REPL [here](https://lodash.com/docs/4.17.15#pick).

Curiously enough, you can extract deeply nested values using the dot notation, even though this isn’t explicitly mentioned in the documentation:

<CodeSnippetTs
code={`
import \_ from 'lodash';

    const object = { a: { a1: 1, a2: 2 }, b: 'B', c: 'C' };

    const result = _.pick(object, 'a.a2', 'b');

`}
/>
