# MasterDex 🗂️ Gotta Track 'Em All

**MasterDex** is a full-stack web application built for **Pokémon TCG collectors** who want to complete **Master Sets** — including all possible variations like **Reverse Holos, Promos, and Special Releases**. It recreates the experience of tracking your binder digitally while helping you monitor real-time card availability and value.

Whether you’re going for a pack-only binder, a reverse holo mirror set, or a full master completion with promos, MasterDex makes it easy to visualize, organize, and price your collection.

---

## 🎯 What is a Master Set?

A **Master Set** typically includes:

- All standard cards in a set
- Reverse Holo variants of every card
- Promo, pre-release, and exclusive cards tied to that set

MasterDex lets you track them all and define what a “complete” set means to you.

---

## 🔍 Core Features

- 🧭 **Browse by Generation** – Easily explore sets by Pokémon TCG generation.
- 🗂️ **Master Set Tracking** – Track standard, reverse holo, and promo versions of each card.
- 🎛️ **Custom Set Options** – Define what counts toward your Master Set: base cards only, reverse holos only, or both.
- 📊 **Visual Progress** – See how close you are to completion with beautiful progress bars and counters.
- 🧠 **Advanced Filtering** – Filter sets by type, release year, completion status, or total card count.
- 🏷️ **Live Price Data (via TCGplayer API)** – View real-time market prices for individual cards to make smart collecting decisions.
- 🧾 **Estimated Set Value** – Get a running total of what your collection is worth (or what you still need to complete it).
- 📁 **Virtual Binder View (Planned)** – A customizable grid layout that mirrors physical binder slots like 3x3, 4x4, etc.

---

## 🧰 Tech Stack

**Frontend**
- React (TypeScript)
- Tailwind CSS
- Vite

**Backend**
- Python (Flask)
- PostgreSQL (with SQLAlchemy)
- OpenAI API – for AI-driven feedback and collecting recommendations

**APIs**
- [PokéTCG API](https://docs.pokemontcg.io) – for card data, set listings, and images
- [TCGplayer API](https://docs.tcgplayer.com/) – for real-time market prices, product listings, and card availability

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Python 3.10+
- PostgreSQL

### Setup Instructions

```bash
git clone https://github.com/yourusername/masterdex.git
cd masterdex
