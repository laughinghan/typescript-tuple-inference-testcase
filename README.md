This repo is a minimalist testcase reproducing a bug with TypeScript's type
inference for tuples.

The bug doesn't happen on the TypeScript playground, only with actual files.

To reproduce, run:

```sh
node_modules/.bin/tsc --lib esnext hello.ts
```

Observed: `error TS2345: Argument of type '(string | number)[][]' is not assignable to parameter of type 'Iterable<[string | number, string | number]>'.`

Expected: `x` is inferred to be of type `MyOrderedMap<number, string>`, just
like happens on the TypeScript playground, e.g. go to this URL and try
hovering over the `x`:

https://www.typescriptlang.org/play/index.html#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwFkBPAeRlDmAKgAcAeAaQBp4A1APgAowcIJxseAFzwAkhhAwoAI350A2szYBddgEoRxMhRBVajFhwDcAKFCRYCLKgkxEUMAi3lJu6vSUd4IAB4TUwADOhPqe7PAA3ibw8HBQwHgQRPCBWABeICKoyAC20pKmAL4mJvwY8D7wALyEpC6U7pzy8gCMLADkUO3KympGQA

I have reproduced this with TypeScript versions:
- 3.5.1, which is what the Playground reports it's running
- 3.5.3, which is `typescript@latest` as of this writing
- 3.6.0-beta, which is `typescript@beta` as of this writing
- 3.6.0-dev.20190808, which is `typescript@next` as of this writing
