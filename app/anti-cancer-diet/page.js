"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heading = { fontFamily: "'Raleway', 'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Open Sans', Arial, sans-serif" };

export default function AntiCancerDiet() {
  const [activeCategory, setActiveCategory] = useState('all');

  const foodCategories = {
    all: [
      { name: "Turmeric", benefit: "Contains curcumin that fights cancer cells", howToUse: "Add to milk, curries, or warm water", bestTime: "Morning & Evening", emoji: "🟡" },
      { name: "Amla (Indian Gooseberry)", benefit: "Rich in Vitamin C and antioxidants", howToUse: "Fresh juice, powder, or whole fruit", bestTime: "Morning empty stomach", emoji: "🍊" },
      { name: "Giloy", benefit: "Immunity booster and anti-inflammatory", howToUse: "Juice or tablets", bestTime: "Morning", emoji: "🌿" },
      { name: "Ashwagandha", benefit: "Reduces stress and boosts immunity", howToUse: "With warm milk", bestTime: "Night before sleep", emoji: "🌱" },
      { name: "Leafy Greens", benefit: "Rich in chlorophyll and antioxidants", howToUse: "Steamed, soups, or salads", bestTime: "Lunch", emoji: "🥬" },
      { name: "Garlic", benefit: "Sulfur compounds that fight cancer", howToUse: "Raw or in cooking", bestTime: "With meals", emoji: "🧄" },
      { name: "Ginger", benefit: "Anti-inflammatory properties", howToUse: "Tea or fresh in food", bestTime: "Morning tea", emoji: "🫚" },
      { name: "Pomegranate", benefit: "Rich in ellagic acid", howToUse: "Fresh juice or fruit", bestTime: "Afternoon snack", emoji: "🍎" }
    ],
    vegetables: [
      { name: "Broccoli", benefit: "Contains sulforaphane that kills cancer stem cells", howToUse: "Steamed or lightly cooked", bestTime: "Lunch/Dinner", emoji: "🥦" },
      { name: "Carrots", benefit: "Rich in beta-carotene", howToUse: "Raw, juice, or cooked", bestTime: "Anytime", emoji: "🥕" },
      { name: "Spinach", benefit: "High in antioxidants", howToUse: "Soups, stir-fry, or salads", bestTime: "Lunch", emoji: "🥬" },
      { name: "Tomatoes", benefit: "Lycopene prevents cell damage", howToUse: "Cooked for better absorption", bestTime: "With meals", emoji: "🍅" },
      { name: "Bitter Gourd", benefit: "Regulates blood sugar and fights cancer", howToUse: "Juice or cooked", bestTime: "Morning", emoji: "🥒" },
      { name: "Pumpkin", benefit: "Rich in beta-carotene and fiber", howToUse: "Soup, curry, or roasted", bestTime: "Lunch/Dinner", emoji: "🎃" }
    ],
    fruits: [
      { name: "Papaya", benefit: "Contains papain and antioxidants", howToUse: "Fresh fruit", bestTime: "Morning", emoji: "🍈" },
      { name: "Apple", benefit: "Quercetin fights cancer cells", howToUse: "With peel", bestTime: "Morning snack", emoji: "🍎" },
      { name: "Berries", benefit: "High in anthocyanins", howToUse: "Fresh or frozen", bestTime: "Snack time", emoji: "🍓" },
      { name: "Grapes", benefit: "Resveratrol prevents cancer growth", howToUse: "Fresh fruit", bestTime: "Afternoon", emoji: "🍇" },
      { name: "Orange", benefit: "Vitamin C boosts immunity", howToUse: "Fresh fruit or juice", bestTime: "Morning", emoji: "🍊" }
    ],
    herbs: [
      { name: "Tulsi (Holy Basil)", benefit: "Powerful antioxidant and immune booster", howToUse: "Tea or fresh leaves", bestTime: "Morning & Evening", emoji: "🌿" },
      { name: "Neem", benefit: "Blood purifier and detoxifier", howToUse: "Juice or tablets", bestTime: "Morning", emoji: "🌳" },
      { name: "Moringa", benefit: "Rich in vitamins and minerals", howToUse: "Powder in water or food", bestTime: "Morning", emoji: "🌿" },
      { name: "Cinnamon", benefit: "Anti-inflammatory and blood sugar regulator", howToUse: "In tea or food", bestTime: "Morning", emoji: "🪵" },
      { name: "Fenugreek", benefit: "Rich in fiber and antioxidants", howToUse: "Soaked seeds or powder", bestTime: "Morning", emoji: "🌱" }
    ],
    grains: [
      { name: "Millets", benefit: "Gluten-free and high in fiber", howToUse: "Roti, porridge, or rice substitute", bestTime: "Lunch/Dinner", emoji: "🌾" },
      { name: "Quinoa", benefit: "Complete protein and antioxidants", howToUse: "Salads or as rice", bestTime: "Lunch", emoji: "🍚" },
      { name: "Brown Rice", benefit: "Rich in selenium and fiber", howToUse: "Cooked as staple", bestTime: "Lunch/Dinner", emoji: "🍙" },
      { name: "Oats", benefit: "Beta-glucan boosts immunity", howToUse: "Porridge or smoothie", bestTime: "Breakfast", emoji: "🥣" }
    ]
  };

  const weeklyPlan = [
    { day: "Monday", morning: "Amla juice + Turmeric milk", breakfast: "Oats with berries", lunch: "Steamed broccoli + Brown rice + Dal", evening: "Green tea", dinner: "Pumpkin soup + Millets roti" },
    { day: "Tuesday", morning: "Giloy juice", breakfast: "Fruit smoothie with spinach", lunch: "Bitter gourd curry + Quinoa", evening: "Herbal tea", dinner: "Vegetable soup + Steamed vegetables" },
    { day: "Wednesday", morning: "Neem + Tulsi juice", breakfast: "Millets porridge", lunch: "Tomato dal + Brown rice + Salad", evening: "Pomegranate juice", dinner: "Broccoli soup + Millets roti" },
    { day: "Thursday", morning: "Aloe vera juice", breakfast: "Papaya bowl", lunch: "Pumpkin curry + Brown rice", evening: "Ginger tea", dinner: "Vegetable khichdi" },
    { day: "Friday", morning: "Moringa powder with water", breakfast: "Smoothie bowl", lunch: "Mixed vegetable curry + Quinoa", evening: "Turmeric milk", dinner: "Clear vegetable soup" },
    { day: "Saturday", morning: "Carrot + Beetroot juice", breakfast: "Fruit salad", lunch: "Dal + Brown rice + Leafy greens", evening: "Herbal tea", dinner: "Grilled vegetables" },
    { day: "Sunday", morning: "Warm lemon water", breakfast: "Light breakfast", lunch: "Complete meal with all colors", evening: "Fruit", dinner: "Light dinner before 7 PM" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] bg-gradient-to-r from-[#0D3B38] to-[#1B6B5A]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={heading}>
              Anti-Cancer Diet
            </h1>
            <p className="text-lg md:text-xl opacity-90" style={body}>
              Food as Medicine - Ayurvedic Nutrition for Cancer Prevention & Recovery
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
            Your Diet Can Be Your Medicine
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={body}>
            According to Ayurveda, proper nutrition plays a crucial role in preventing and managing cancer. 
            Our anti-cancer diet plan focuses on natural, plant-based foods rich in antioxidants, anti-inflammatory 
            compounds, and immune-boosting nutrients that help fight cancer cells naturally.
          </p>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#0D3B38", ...heading }}>
            Key Principles of Anti-Cancer Diet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Eat the Rainbow", description: "Include colorful fruits & vegetables for diverse antioxidants", icon: "🌈" },
              { title: "Plant-Based Focus", description: "70% of your plate should be plant-based foods", icon: "🌱" },
              { title: "Avoid Processed Foods", description: "Stay away from processed, fried, and packaged foods", icon: "🚫" },
              { title: "Stay Hydrated", description: "Drink warm water and herbal teas throughout the day", icon: "💧" }
            ].map((principle, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38" }}>{principle.title}</h3>
                <p className="text-gray-600" style={body}>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Categories Navigation */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { id: 'all', label: '🌟 All Foods' },
              { id: 'vegetables', label: '🥬 Vegetables' },
              { id: 'fruits', label: '🍎 Fruits' },
              { id: 'herbs', label: '🌿 Herbs' },
              { id: 'grains', label: '🌾 Grains' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeCategory === category.id 
                    ? 'bg-[#0D3B38] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                style={body}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Food Items Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodCategories[activeCategory].map((food, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition p-6"
                style={{ border: "1px solid #e5f0ec" }}
              >
                <div className="text-4xl mb-3">{food.emoji}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38", ...heading }}>
                  {food.name}
                </h3>
                <p className="text-gray-600 mb-3" style={body}>
                  <span className="font-semibold">Benefit:</span> {food.benefit}
                </p>
                <p className="text-gray-600 mb-2" style={body}>
                  <span className="font-semibold">How to use:</span> {food.howToUse}
                </p>
                <p className="text-gray-500 text-sm" style={body}>
                  <span className="font-semibold">Best time:</span> {food.bestTime}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Diet Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0D3B38", ...heading }}>
              7-Day Anti-Cancer Diet Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={body}>
              Follow this weekly plan designed by our Ayurvedic nutrition experts
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0D3B38] text-white">
                  <th className="p-3 text-left">Day</th>
                  <th className="p-3 text-left">Morning (6-7 AM)</th>
                  <th className="p-3 text-left">Breakfast (8-9 AM)</th>
                  <th className="p-3 text-left">Lunch (12-1 PM)</th>
                  <th className="p-3 text-left">Evening (4-5 PM)</th>
                  <th className="p-3 text-left">Dinner (6-7 PM)</th>
                </tr>
              </thead>
              <tbody>
                {weeklyPlan.map((day, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-3 font-semibold" style={{ color: "#0D3B38" }}>{day.day}</td>
                    <td className="p-3 text-gray-600" style={body}>{day.morning}</td>
                    <td className="p-3 text-gray-600" style={body}>{day.breakfast}</td>
                    <td className="p-3 text-gray-600" style={body}>{day.lunch}</td>
                    <td className="p-3 text-gray-600" style={body}>{day.evening}</td>
                    <td className="p-3 text-gray-600" style={body}>{day.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Foods to Avoid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#c0392b", ...heading }}>
              ⚠️ Foods to Avoid During Cancer Treatment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Processed meats (sausages, bacon)",
                "Fried and junk foods",
                "Sugar and artificial sweeteners",
                "White flour (maida) products",
                "Carbonated drinks",
                "Alcohol",
                "Packaged snacks",
                "Excess dairy products",
                "Microwave foods"
              ].map((food, i) => (
                <div key={i} className="flex items-center gap-2 p-2">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700" style={body}>{food}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#0D3B38", ...heading }}>
            Important Dietary Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Eat Small Meals", desc: "Have 5-6 small meals instead of 3 large ones", icon: "🍽️" },
              { title: "Chew Thoroughly", desc: "Chew each bite at least 20-30 times for better digestion", icon: "👄" },
              { title: "Warm Water", desc: "Drink warm water throughout the day", icon: "💧" },
              { title: "No Cold Food", desc: "Avoid refrigerated or cold food items", icon: "❄️" },
              { title: "Early Dinner", desc: "Have dinner before 7 PM for better digestion", icon: "🌙" },
              { title: "Mindful Eating", desc: "Eat in a calm environment without distractions", icon: "🧘" }
            ].map((tip, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl">{tip.icon}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#0D3B38" }}>{tip.title}</h3>
                  <p className="text-gray-600" style={body}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Juices & Drinks */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#0D3B38", ...heading }}>
            Healing Ayurvedic Drinks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Turmeric Milk", ingredients: "Turmeric + Warm Milk + Black Pepper", benefit: "Anti-inflammatory & immunity booster", timing: "Before bed" },
              { name: "Giloy Juice", ingredients: "Giloy stem + Water", benefit: "Detoxifies blood & boosts immunity", timing: "Morning empty stomach" },
              { name: "Amla Juice", ingredients: "Fresh Amla + Water + Honey", benefit: "Rich in Vitamin C & antioxidants", timing: "Morning" },
              { name: "Wheatgrass Juice", ingredients: "Fresh wheatgrass", benefit: "Rich in chlorophyll & oxygenates blood", timing: "Morning" },
              { name: "Ginger Tea", ingredients: "Ginger + Tulsi + Black Pepper", benefit: "Reduces inflammation & nausea", timing: "Throughout day" },
              { name: "Aloe Vera Juice", ingredients: "Fresh aloe vera gel + Water", benefit: "Heals & detoxifies digestive system", timing: "Morning" }
            ].map((drink, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">🥤</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0D3B38" }}>{drink.name}</h3>
                <p className="text-sm text-gray-500 mb-2" style={body}>{drink.ingredients}</p>
                <p className="text-gray-600 mb-2" style={body}>{drink.benefit}</p>
                <p className="text-xs text-[#F4A118] font-semibold">{drink.timing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0D3B38, #1B6B5A)" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={heading}>
            Need a Personalized Diet Plan?
          </h2>
          <p className="text-white/80 mb-8 text-lg" style={body}>
            Every patient is unique. Consult our Ayurvedic nutrition experts for a customized diet plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F4A118, #d4600a)" }}
            >
              Book Consultation →
            </Link>
            <Link
              href="/support-program"
              className="inline-block px-8 py-4 rounded-xl bg-white text-[#0D3B38] font-bold text-lg transition hover:scale-105"
            >
              Get Support →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}