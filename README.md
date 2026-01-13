# WinguFleet
A web-based charter management and CRM system tailored for small aviation companies. Built to streamline flight scheduling, client management, aircraft tracking and operations in a single platform.

## Project Overview

**Aircraft Charter Management & CRM** is a **Django-based platform** designed for small to medium-sized air charter operators. It provides a **full end-to-end workflow** for managing clients, quotes, bookings, flights, pilots, fleet, finances, and compliance.

**MVP Focus:**

* User & Roles management
* Fleet & Aircraft management
* Pilot assignment
* Client & CRM management
* Quotes & bookings
* Flight/Trip operations
* Invoicing & basic financial tracking

**Post-MVP:**

* Reporting & analytics
* Compliance management
* Notifications (Email/SMS)
* Marketing campaigns
* Automation & AI-assisted features

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Modules & Responsibilities](#modules--responsibilities)
3. [Installation](#installation)
4. [Setup & Configuration](#setup--configuration)
5. [Database Models Overview](#database-models-overview)
6. [User Roles & Permissions](#user-roles--permissions)
7. [MVP vs Post-MVP Features](#mvp-vs-post-mvp-features)
8. [Future Enhancements](#future-enhancements)
9. [Contributing](#contributing)
10. [License](#license)

---

## Project Structure

```
charter_system/
├── manage.py
├── requirements.txt
├── .env.example
├── .gitignore
├── README.md
├── config/
│   ├── __init__.py
│   ├── settings/
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── development.py
│   │   ├── staging.py
│   │   └── production.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── apps/
│   ├── __init__.py
│   ├── users/     
│   ├── fleet/     
│   ├── clients/   
│   ├── bookings/  
│   ├── operations/
│   ├── finance/   
│   ├── portal/    
│   └── reports/   
├── static/
├── media/
├── templates/
│   ├── base.html
│   ├── includes/
│   └── errors/
└── logs/
```

---

## Modules & Responsibilities

| Module            | Responsibilities                                               |
| ----------------- | -------------------------------------------------------------- |
| **users**         | Authentication, Roles, Permissions, Audit Logs                 |
| **fleet**         | Aircraft details, registration, status, documents              |
| **pilots**        | Pilot/Crew profiles, license, type ratings, assignment         |
| **crm**           | Clients, leads, preferences, inquiry tracking                  |
| **quotes**        | Quote generation, approval workflow, booking lifecycle         |
| **flights**       | Flight scheduling, dispatch, aircraft/pilot assignment, status |
| **finance**       | Invoices, payments, cost/revenue tracking                      |
| **reports**       | Operational, financial, CRM analytics                          |
| **marketing**     | Campaigns, promotions, empty-leg marketing                     |
| **compliance**    | Regulatory tracking, certifications, safety & duty logs        |
| **notifications** | Email/SMS alerts for staff and clients                         |

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/charter_management.git
cd charter_management
```

2. **Create a virtual environment**

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Apply migrations**

```bash
python manage.py makemigrations
python manage.py migrate
```

5. **Create a superuser**

```bash
python manage.py createsuperuser
```

6. **Run the development server**

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/admin/` to access Django Admin.

---

## Setup & Configuration

* **Database:** PostgreSQL (recommended), but SQLite is fine for MVP/testing.
* **Email backend:** Configure SMTP for notifications.
* **Timezones:** Set `TIME_ZONE` in `settings.py` (UTC recommended for aviation ops).
* **Static files:** Configure `STATIC_ROOT` and `MEDIA_ROOT` for file uploads (aircraft docs, invoices).

---

## Database Models Overview

**Core MVP Entities:**

* **User** → full name, email, role, password, employee ID
* **Role** → Admin, Sales, Dispatch, Finance, Pilot, Client
* **AuditLog** → records user actions (login, quote creation, flight assignment)
* **Aircraft (Fleet)** → tail number, model, capacity, status, documents
* **Pilot** → name, license, type ratings, assigned flights
* **Client** → individual/corporate, contact info, flight preferences
* **Quote** → client, aircraft, pricing, status
* **Flight** → assigned aircraft/pilot, route, ETD/ETA, status
* **Invoice** → flight/quote association, amount, payment status

---

## User Roles & Permissions

| Role                | Responsibilities                             |
| ------------------- | -------------------------------------------- |
| Admin               | Full access, compliance oversight            |
| Sales               | Quotes & client management                   |
| Dispatch/Operations | Flight scheduling, aircraft/pilot assignment |
| Finance             | Invoice creation & payment tracking          |
| Pilot               | View assigned flights                        |
| Client              | View quotes, bookings, invoices in portal    |

**Permissions:**

* Fine-grained per-module permissions can be added later.
* Audit logs ensure traceability for regulatory compliance.

---

## MVP vs Post-MVP Features

| Phase        | Modules/Features                                                                        |
| ------------ | --------------------------------------------------------------------------------------- |
| **MVP**      | users, fleet, pilots (basic), crm, quotes, flights (basic), finance (basic)             |
| **Post-MVP** | reports, compliance, notifications, marketing campaigns, advanced analytics, automation |

---

## Future Enhancements

* Automated flight planning (fuel, route optimization)
* Regulatory compliance automation (Part 135 duty tracking, EASA OPS)
* Real-time flight tracking integration
* Mobile app for pilots & clients
* AI-assisted pricing and predictive maintenance
* Multi-currency, multi-location support

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/<name>`
3. Commit changes: `git commit -m "Add <feature>"`
4. Push: `git push origin feature/<name>`
5. Open a Pull Request

**Code Guidelines:**

* Follow PEP 8 for Python code
* Use Django best practices for models, views, and templates
* Add unit tests for all new features

---

## License

This project is licensed under the **MIT License**. See `LICENSE` file for details.

---