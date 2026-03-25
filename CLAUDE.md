# Next Hello - Project Context

## Product summary
Next Hello is a dating app for over-50s.

It is designed to reduce dating app fatigue, emotional risk, and game-playing.

The core idea is simple:
- Users can browse profiles
- They can choose Hello, Maybe, Favourite, Skip, or Goodbye
- Messaging should only be available after mutual interest
- Goodbye should remove a profile from future browsing
- Browsing should not force interaction

## Product principles
- Simplicity over complexity
- Emotional safety over gamification
- Lifestyle compatibility matters more than superficial matching
- Independence and peace are important to the target audience
- Do not design this like a swipe addiction app
- Avoid unnecessary complexity in matching logic
- Favour trust, clarity, and calm UX

## Target audience
- Primarily over-50s
- Users who may value companionship, long-term connection, or a calmer way to meet
- Many users value independence and stability

## Current priorities
Stabilise the core app before adding new features.

Priority order:
1. Hello / Match / Messaging flow
2. Browse filtering and profile visibility
3. Goodbye exclusion logic
4. Admin messaging
5. VIP badge display
6. Welcome email delivery
7. Login persistence
8. Profile photo cropping/repositioning

## Working rules
- Do not rewrite large sections without diagnosis
- Always identify root cause before changing code
- Make the smallest safe fix possible
- Work in a branch, not directly on production
- After each fix, report:
  - root cause
  - files changed
  - what changed
  - how to test
  - possible side effects

## Important UX rules
- Users must be able to browse without being forced to say Hello or Goodbye
- Goodbye profiles must not reappear
- Messaging must be reliable
- VIP badge must display correctly

## Domain language
- Hello = interest
- Goodbye = not interested / remove
- Maybe = undecided
- Favourite = saved profile
- VIP Founding Member = approved badge
