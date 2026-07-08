# Cat BCS Assessment Core

Minimal helpers for mapping cat Body Condition Score (1-9) to clinical bands.

Built by [pawsandpounds.com](https://pawsandpounds.com).

## Installation

```bash
npm install cat-bcs-assessment-core
```

## Quick Start

```ts
import { catBcsBand } from "cat-bcs-assessment-core"

catBcsBand(3) // "underweight"
catBcsBand(5) // "ideal"
catBcsBand(7) // "overweight"
catBcsBand(9) // "obese"
```

## API

### `catBcsBand(score: number): "underweight" | "ideal" | "overweight" | "obese"`

Rules:
- 1-3 => `underweight`
- 4-5 => `ideal`
- 6-7 => `overweight`
- 8-9 => `obese`

Throws if score is outside `1..9`.

## License

MIT