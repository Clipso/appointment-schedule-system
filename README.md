# Appointment Scheduling System

This is a RESTful API for an appointment scheduling system that allows users to create, view, and cancel appointments. The system supports configurable appointment slots, operational parameters, and advanced configurations such as lunch breaks and public holidays.

## Features

- Create, view, and cancel appointments
- Retrieve available slots based on the selected date
- Support for configurable slot duration and maximum number of slots per appointment
- Configurable operational hours and days for scheduling appointments
- Handle public holidays and unavailable hours (e.g., lunch breaks)
- Basic API security considerations (input validation)

## Tech Stack

- Framework: Express.js
- Language: TypeScript
- Database: MySQL (via Prisma ORM)
- Other libraries: Prisma Client

## Getting Started

1. Clone the repository: <>
2. npm install


### ERD
![ERD](/prisma/prisma-erd.svg)

### CREATE APPOINTMENT
![CREATE](/postman-img/create-appointment.png)

### GET AVAILABLE SLOTS
![GET](/postman-img/get-available-slots.png)

### DEL APPOINTMENT
![DEL](/postman-img/delete-appointment.png)