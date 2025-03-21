
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData
> Date: 21/02/2025 at ~11:00AM
> Topics: #coding/language/r 

## What is Data Science?

- A term in existence for around a decade, often associated with confusion about its definition.
- Involves:
    - Data
    - Computer Science
    - Machine Learning
    - Statistics
    - Programming and Databases
- Modern definition:
    - Extracts information from data through statistical and computational methods.

## Applications of Data Science

- Data collected across various fields, including:
    - **Business**: Banking, insurance, transaction databases, loyalty cards.
    - **Social Science**: Social networks, crime data.
    - **Science**: Astronomy, genomics, physics.

## Common Data Science Problems

- **Biotechnology**: Gene mapping, metabolite analysis.
- **Finance**: Credit risk, customer segmentation, predictive modeling.
- **Government**: Tax evasion, security.
- **Healthcare**: Patient data analytics.
- **Retail**: Customer behavior modeling, supply chain management.
- **Telecommunications**: Network optimization, churn analysis.

## About This Subject

- Focus on practical aspects of Data Science.
- Low assumption of prior knowledge; High School math is sufficient.
- Use of open-source statistical software R.
- Assessments based on practical work (no formal exam).

## Subject Philosophy

- Emphasis on practical Data Science with computers.
- Simple foundational knowledge required; practical assessments only.
- Utilization of R and RStudio for data analysis.

## Topics Covered

- Introduction to key data science questions, such as:
    - Are the digits of pi random?
    - Maternal smoking and birth weight.
    - Mapping diseases, among others.

## Teaching Team

- **Subject Coordinator**: Gizem Intepe ([g.intepe@westernsydney.edu.au](mailto:g.intepe@westernsydney.edu.au))
- **Lecturer**: Franco Ubaudi ([f.ubaudi@westernsydney.edu.au](mailto:f.ubaudi@westernsydney.edu.au))
- **Lab Demonstrator**: Gordon Kuzet ([g.kuzet@westernsydney.edu.au](mailto:g.kuzet@westernsydney.edu.au))

## Emailing Teaching Staff

- Must be sent from student email accounts.
- Include full name, student number, subject name, and purpose of message.
- Expect delays in response times.

## Examining the Learning Guide

- Contains essential information on content, student expectations, delivery, and assessments.
- Available on vUWS under COMP1014 > Subject Information.

## Assessment Overview

- Total of 100 marks:
    - 5 online quizzes (20 marks total).
    - Written project (40 marks).
    - Final exam (40 marks).
- Must achieve at least 50 marks overall and 12 marks in the final exam to pass.

## Resources for R

- **R**: Statistical computing and graphics software.
- **RStudio**: Integrated development environment for R.
- Multiple resources available for learning and using R effectively.

## What is R?

- Free and open-source statistical software environment.
- Commonly used in academia and increasingly in business.
- Offers around 18,800 extension packages.

### Pros:

- Free and extensible.
- Quality graphics output.
- Strong community support.

### Cons:

- Steep learning curve.
- Lack of a built-in GUI.

# Chapter 1: Are the digits of π random?

## The Digits of Pi

- Definition of Pi (π) as the ratio of a circle's circumference to its diameter.
- Pi is an irrational and transcendental number.
- Infinite decimal representation leads to questions about randomness.

## What is Random?

- **Randomness Definition**:
    - Uniformity in digit occurrence
    - Non-predictability of subsequent digits from a sequence
- Challenging to prove true randomness.

## Analyzing the Uniform Distribution of Pi’s Digits

- Frequency distribution of the first 500 digits.
- Expected distribution for uniformity (50 occurrences per digit).
- Results indicate:
    - Some digits deviate from the expected count.
    - Observations may suggest a lack of uniformity.

## Comparison with Random Digits

- Conducted analyses on sequences of random digits as a benchmark.
- Total squared differences calculated to compare the expected uniformity.
- Pi’s digit distribution was consistent with random digits, while 1/81 was not.

## Summary

- Pi's digits are potentially uniformly distributed based on histogram distances from expected counts.
- Further analyses required for pairs and triples of digits.
- Current findings indicate no strong evidence against the randomness of Pi's digits.