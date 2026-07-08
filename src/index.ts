export type CatBcsBand = "underweight" | "ideal" | "overweight" | "obese"

export function catBcsBand(score: number): CatBcsBand {
  if (!Number.isFinite(score) || score < 1 || score > 9) throw new Error("score must be 1-9")
  if (score <= 3) return "underweight"
  if (score <= 5) return "ideal"
  if (score <= 7) return "overweight"
  return "obese"
}