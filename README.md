# JavaScript Exercises

This repository contains a collection of beginner-friendly JavaScript exercises designed to practice basic programming concepts such as conditionals, loops, functions, and arrays.

---

## 📋 Table of Contents

1. [Check Age](#1-check-age)
2. [Calculate Final Grade](#2-calculate-final-grade)
3. [Salary Increase by Category](#3-salary-increase-by-category)
4. [Find the Greatest Number](#4-find-the-greatest-number)
5. [Car Discount Calculator](#5-car-discount-calculator)
6. [Travel Discount Checker](#6-travel-discount-checker)
7. [Array Value Analysis](#7-array-value-analysis)
8. [Multiplication Table](#8-multiplication-table)
9. [Celsius to Fahrenheit with Temperature Status](#9-celsius-to-fahrenheit-with-temperature-status)
10. [Average Age by Shift](#10-average-age-by-shift)

---

## 1. Check Age

Checks if a person is over or under 18.

```js
function overAge(age) {
  age >= 18 ? console.log("You're over age") : console.log("you're underage");
}

overAge(17);
overAge(20);
