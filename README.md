# Angular v22 — Debounced Signals

Demo project for the YouTube tutorial: **Angular v22 Debounced Signals**

This app demonstrates how to uuse the new debounced signal API in Angular v22:

| Branch | Approach | Key APIs |
|---|---|---|
| `start` | No debouncing (the problem) | `signal`, `toObservable`, `switchMap` |
| `rxjs-debounce` | The old way | + `debounceTime` |
| `main` | The new way (Angular v22) | `debounced()`, `resource()` |

## Running the Demo

```bash
npm install
npm start
```

Then open `http://localhost:4200`, type something like **"phone"** in the search box, and watch the Network tab in DevTools.

## Key Files

- `src/app/search/search.component.ts` — all the signal and RxJS logic
- `src/app/search/search.component.html` — the template using `@if`, `isLoading()`, and `value()`

> **Note:** `debounced()` and `resource()` are curently `experimental`.