# 🧠 NeighborFit – Problem Solving & Technical Documentation

---

## 🔍 Problem Definition

Choosing the right neighborhood is a deeply personal decision based on lifestyle, safety, budget, and access to green spaces or amenities. However, current tools (like housing websites or maps) are either too generic or focused on real estate listings.

**Goal:** Build a full-stack application that helps users discover neighborhoods aligned with their lifestyle preferences (e.g., safety, affordable rent, green spaces).

---

## 📊 User Research & Hypotheses

### 👥 Personas
- **Student**: Needs affordable rent and peaceful surroundings.
- **Working Professional**: Prioritizes safety and commute convenience.
- **Family**: Prefers green areas and good schools.

### 💡 Hypotheses
- Users don’t just search by rent or location — they care about **how a place feels**.
- A lightweight matching system based on lifestyle priorities can guide better neighborhood discovery.

---

## 🔍 Existing Solutions & Gaps

| Platform        | Focus        | Gaps                             |
|----------------|--------------|----------------------------------|
| 99acres, MagicBricks | Real estate | No lifestyle-based filters       |
| WalkScore       | Walkability   | Limited to select cities         |
| Numbeo          | Data-rich     | Not personalized or contextual   |

---

## 🧠 Matching Algorithm

We used a **scoring system** based on selected lifestyle preferences:

### ✅ Criteria Considered:
- 🛡️ Safety
- 💰 Affordable Rent
- 🌳 Green Spaces

### 🧮 Sample Scoring Logic:

```js
score = (safety ? 1 : 0) + (rent ? 1 : 0) + (green ? 1 : 0)
 🗂️ Data Structure & Challenges
📄 Mock Dataset Used
[
  { "name": "Greenview", "safety": true, "rent": true, "green": true },
  { "name": "Sunny Heights", "safety": true, "rent": true, "green": false },
  { "name": "Riverside", "safety": false, "rent": true, "green": true },
  { "name": "Lakewood", "safety": false, "rent": false, "green": false },
  { "name": "UrbanSide", "safety": false, "rent": false, "green": false }
]
⚠️ Real-World Challenges
Lack of structured, open neighborhood data in India

Most API access is gated or costly

Solution: Created mock data mimicking real-world traits for rapid prototyping

🏗️ System Design
Component	Stack
Frontend	React + Vite
Backend	(To be added)
Data Source	Static JSON (can later scale to DB or API)

⚖️ Trade-offs & Design Decisions
Decision	Trade-off
Mock data	Fast dev, lacks realism
No backend	Simplified stack, limits scalability
Simple scoring	Easy to implement, not weighted

✅ Testing & Validation
Manually tested across all preference combinations

Verified score updates and UI rendering

Confirmed edge cases like “no preferences selected” behave correctly

🚧 Limitations
No backend/API yet

Static dataset only

Not yet deployed live

Limited real-world validation

🔮 Future Improvements
✅ Add backend with real neighborhood APIs

✅ Use Firebase or Supabase for persistent data

✅ Add user login and saved searches

✅ Add more filters like commute time, school quality, noise, etc.

✅ Deploy full-stack app to Netlify or Render
