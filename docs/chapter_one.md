# Chapter 1 Implementation Plan — AeroOps

Chapter: 1 — Understanding TypeScript\
Project: AeroOps — Aviation Fleet & Flight Operations Management Platform\
Objective: Establish the TypeScript development environment and build the first set of typed aviation domain components.

I have used the actual Chapter 1 contents you provided, including the technical requirements, TypeScript compiler, dynamic versus static typing, interfaces, and all four OOP principles. The implementation below follows the chapter's order rather than introducing concepts from later chapters prematurely.&#x20;

Pasted text(20261111-052438).txt

Pasted text(20261111-052438).txt

Pasted text(20261111-052438).txt



## 1. What we should have built by the end of Chapter 1

By the end of this chapter, AeroOps will have its first technical foundation:

# AeroOps — Chapter 1

Target deliverable

TypeScript domain foundation

- Development environment configured.
- TypeScript compiler working.
- Dynamic and static typing demonstrated.
- Aircraft and flight domain contracts defined.
- Encapsulation demonstrated through an aircraft registration class.
- Abstraction implemented through repository interfaces.
- Inheritance demonstrated through operational records.
- Polymorphism demonstrated through operational reports.
- All source files compile successfully.
- Chapter 1 exercises and decisions documented.

  Scope

  TypeScript foundations only

  No frontend, database, authentication or deployment yet. Those will be implemented when the book introduces the necessary concepts.

The point is to build a foundation that will be extended throughout the course, not throw away the code after completing each exercise.

# 2. Set up the AeroOps project

### Chapter concepts: Technical requirements and project initialization

The book requires Node.js, VS Code, npm and TypeScript. It instructs you to install Node.js version 24 or later and initialize a project using `npm init`.&#x20;

Pasted text(20261111-052438).txt

Pasted text(20261111-052438).txt



Your practical implementation

Create the project directory:

```
mkdir AeroOps
cd AeroOps
```

Initialize Git:

```
git init
```

Create the initial project structure:

```
AeroOps/
│
├── src/
│   └── chapter-01/
│
├── docs/
│
├── package.json
├── .gitignore
└── README.md
```

Initialize npm:

```
npm init
```

Follow the book's instruction to understand the interactive initialization and the generated `package.json`.

Next, install TypeScript.

The book demonstrates a global installation:

```
npm install -g typescript
```

It also explains that a normal project would install TypeScript locally. For AeroOps, use the local installation so that the project has a reproducible compiler dependency:

```
npm install --save-dev typescript
```

Check the installed tools:

```
node --version
npm --version
npx tsc --version
```

Practical deliverables

- `AeroOps` project directory.
- Initialized Git repository.
- `package.json`.
- Local TypeScript installation.
- Working Node.js and npm environment.
- Initial README.
- `.gitignore` excluding `node_modules/` and generated build files.

Important: Do not initialize Next.js yet. Chapter 1 is about understanding TypeScript. We will introduce the actual application framework when the book covers the appropriate concepts.

# 3. What is TypeScript?

### Chapter concept: TypeScript is a language and a compiler

The book introduces two distinct but related technologies:

1. TypeScript as a statically typed programming language.
2. The TypeScript compiler, which converts TypeScript into JavaScript and identifies development-time errors.

It also explains transpilation and that TypeScript itself is not executed at runtime.&#x20;

Pasted text(20261111-052438).txt



Your practical implementation

Create:

```
src/chapter-01/
└── typescript-introduction.ts
```

Write a small aviation example:

```
const operatorName: string = "Aero Charter Kenya";

const aircraftCount: number = 5;

const isOperational: boolean = true;

console.log("Operator:", operatorName);
console.log("Aircraft:", aircraftCount);
console.log("Operational:", isOperational);
```

Compile:

```
npx tsc src/chapter-01/typescript-introduction.ts
```

Run the generated JavaScript:

```
node src/chapter-01/typescript-introduction.js
```

Inspect both files.

Your objective is to understand:

- What a `.ts` file represents.
- What the TypeScript compiler does.
- Why a `.js` file is generated.
- Why Node.js executes the generated JavaScript.
- Why TypeScript is useful during development.

Deliverable: A working demonstration of TypeScript-to-JavaScript transpilation using an AeroOps example.

# 4. Why TypeScript is necessary

### Chapter concepts: Dynamic typing versus static typing

The book explains why dynamically typed JavaScript can introduce bugs, particularly in large applications.

It demonstrates this using a number and a string being added together, followed by a correction using TypeScript annotations.&#x20;

Pasted text(20261111-052438).txt



Your practical implementation

Create:

```
src/chapter-01/
└── dynamic-vs-static.ts
```

First, reproduce the JavaScript problem from the book:

```
let totalFlightHours = 5;

let additionalFlightHours = "6";

console.log(totalFlightHours + additionalFlightHours);
```

Compile and execute the file.

Observe what happens when JavaScript combines a number and a string.

Now modify the code:

```
let totalFlightHours: number = 5;

let additionalFlightHours: number = "6";

console.log(totalFlightHours + additionalFlightHours);
```

Compile again.

The compiler should identify the invalid string assignment.

Fix it:

```
let totalFlightHours: number = 5;

let additionalFlightHours: number = 6;

console.log(totalFlightHours + additionalFlightHours);
```

Expected output:

```
11
```

### Apply this to actual AeroOps data

Imagine an operations officer recording flight hours.

Create another example:

```
let flightHours: number = 4.5;

function calculateTotalFlightHours(
  previousHours: number,
  newHours: number
): number {
  return previousHours + newHours;
}

const total = calculateTotalFlightHours(
  flightHours,
  2.5
);

console.log(total);
```

Try passing a string instead of a number.

Observe the compiler error.

Deliverables:

- JavaScript dynamic typing demonstration.
- TypeScript static typing demonstration.
- Aviation flight-hours calculation.
- Evidence of a compiler-caught error.
- Corrected implementation.

# 5. Interfaces and typed application contracts

### Chapter concept: Preventing invalid object structures

The book introduces an interface called `User` and uses it to enforce the required properties of an object. It demonstrates how an object missing its `age` property causes a compiler error.&#x20;

Pasted text(20261111-052438).txt



Your practical implementation

Instead of the book's driving example, create an aircraft contract.

Create:

```
src/chapter-01/
└── aircraft-interface.ts
```

Implement:

```
interface Aircraft {
  registration: string;
  manufacturer: string;
  model: string;
  mtow: number;
  aircraftType: string;
}

const aircraft: Aircraft = {
  registration: "5Y-ABC",
  manufacturer: "De Havilland Canada",
  model: "Dash 8-100",
  mtow: 16000,
  aircraftType: "Turboprop"
};

console.log(aircraft);
```

Now deliberately remove `registration`.

Try compiling.

The compiler should identify the missing required property.

Try assigning a string to `mtow`.

The compiler should identify the type mismatch.

Restore the correct implementation.

### Add a flight record contract

Create:

```
src/chapter-01/flight-interface.ts
```

```
interface Flight {
  flightNumber: string;
  aircraftRegistration: string;
  departureAirport: string;
  arrivalAirport: string;
  flightHours: number;
  flightDate: string;
}

const flight: Flight = {
  flightNumber: "CK101",
  aircraftRegistration: "5Y-ABC",
  departureAirport: "HKJK",
  arrivalAirport: "HKMO",
  flightHours: 1.5,
  flightDate: "2026-11-11"
};
```

Deliverables:

- `Aircraft` interface.
- `Flight` interface.
- Valid aircraft object.
- Valid flight object.
- At least two deliberately introduced type errors and their corrections.

These interfaces become the starting point for the application's domain model. Later chapters will extend them with additional TypeScript features.

# 6. Object-oriented programming

The book introduces the four pillars of OOP:

1. Encapsulation.
2. Abstraction.
3. Inheritance.
4. Polymorphism.

We will implement each one using the AeroOps domain.&#x20;

Pasted text(20261111-052438).txt



## 6.1 Encapsulation

Book concept: Information hiding. A class protects its internal data and exposes controlled methods for accessing or modifying it.

The book demonstrates private properties, getters, setters and constructors. It also notes that it will prefer standard JavaScript private fields using `#` in later examples.&#x20;

Pasted text(20261111-052438).txt



AeroOps implementation: Aircraft registration management

Create:

```
src/chapter-01/oop/encapsulation/
└── aircraft-registration.ts
```

Implement:

```
class AircraftRegistration {
  #registration: string;

  constructor(registration: string) {
    this.#registration = registration;
  }

  get registration(): string {
    return this.#registration;
  }

  set registration(value: string) {
    if (value.trim().length === 0) {
      throw new Error("Registration cannot be empty");
    }

    this.#registration = value.toUpperCase();
  }
}

const aircraft = new AircraftRegistration("5Y-ABC");

console.log(aircraft.registration);

aircraft.registration = "5Y-XYZ";

console.log(aircraft.registration);
```

### Practical exercises

1. Create an aircraft registration object.
2. Retrieve its registration using the getter.
3. Update its registration using the setter.
4. Attempt to assign an empty registration.
5. Attempt to access `#registration` directly from outside the class.
6. Observe why internal data should not be modified freely.

Deliverable: A reusable aircraft registration class that demonstrates controlled access to aircraft data.

Note that the validation here demonstrates class-level encapsulation. Later, we will also validate data entering the system through API requests and CSV uploads.

## 6.2 Abstraction

Book concept: Hide implementation details and expose a simplified contract through interfaces or abstract classes.

The book demonstrates an interface containing properties and a method, then a class implementing that interface. This separates the contract from its implementation.&#x20;

Pasted text(20261111-052438).txt



AeroOps implementation: Aircraft repository

Imagine that the application needs to retrieve and save aircraft records.

The application should not need to know exactly how those records are stored.

Create:

```
src/chapter-01/oop/abstraction/
├── aircraft-repository.ts
└── in-memory-aircraft-repository.ts
```

First, define the contract:

```
import type { Aircraft } from "../../aircraft-interface";

export interface AircraftRepository {
  findByRegistration(
    registration: string
  ): Aircraft | undefined;

  save(aircraft: Aircraft): void;
}
```

Next, implement it:

```
import type { Aircraft } from "../../aircraft-interface";
import type { AircraftRepository } from "./aircraft-repository";

export class InMemoryAircraftRepository
  implements AircraftRepository {

  private aircraft: Aircraft[] = [];

  findByRegistration(
    registration: string
  ): Aircraft | undefined {
    return this.aircraft.find(
      item => item.registration === registration
    );
  }

  save(aircraft: Aircraft): void {
    this.aircraft.push(aircraft);
  }
}
```

### Practical exercises

1. Define the repository interface.
2. Create a class implementing the interface.
3. Save an aircraft.
4. Retrieve an aircraft by registration.
5. Try removing one of the required interface methods.
6. Observe the compiler error.

Deliverable: An aircraft repository contract and an in-memory implementation.

Why this matters: later, we can introduce a PostgreSQL/Prisma implementation without requiring every part of the application to know how the database works.

The interface establishes the contract; the in-memory class is only the current implementation.

## 6.3 Inheritance

Book concept: Reuse common properties and methods through a base class and derived classes.

The book demonstrates this using `Item` and `Bicycle`, where the bicycle inherits common properties from the item class.&#x20;

Pasted text(20261111-052438).txt



AeroOps implementation: Operational records

Create:

```
src/chapter-01/oop/inheritance/
├── operational-record.ts
└── flight-record.ts
```

First, create a base class:

```
export class OperationalRecord {
  id: string;
  createdAt: Date;
  description: string;

  constructor(
    id: string,
    description: string
  ) {
    this.id = id;
    this.description = description;
    this.createdAt = new Date();
  }

  getId(): string {
    return this.id;
  }
}
```

Now create a flight record that inherits from it:

```
import { OperationalRecord } from "./operational-record";

export class FlightRecord extends OperationalRecord {
  flightNumber: string;
  aircraftRegistration: string;
  departureAirport: string;
  arrivalAirport: string;

  constructor(
    id: string,
    flightNumber: string,
    aircraftRegistration: string,
    departureAirport: string,
    arrivalAirport: string
  ) {
    super(id, `Flight ${flightNumber}`);

    this.flightNumber = flightNumber;
    this.aircraftRegistration = aircraftRegistration;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
  }
}
```

### Practical exercises

1. Create an operational record.
2. Create a flight record.
3. Retrieve its inherited ID through `getId()`.
4. Retrieve its flight number.
5. Demonstrate that the flight record inherits `createdAt` and `description`.
6. Add another type of operational record and determine whether common functionality can be reused.

Deliverable: A base operational-record class and a derived flight-record class.

## 6.4 Polymorphism

Book concept: Work with a general type while allowing different concrete implementations to perform different operations.

The chapter introduces this concept and explains how TypeScript adds compile-time enforcement to the implementation. It indicates that the more detailed treatment comes in Chapter 2.&#x20;

Pasted text(20261111-052438).txt



AeroOps implementation: Multiple operational reports

AeroOps will eventually produce different management reports.

For example:

- Fleet utilization report.
- Flight movements report.
- Aircraft activity report.

Each report should be capable of generating its own summary.

Create:

```
src/chapter-01/oop/polymorphism/
├── operational-report.ts
├── fleet-report.ts
├── movement-report.ts
└── report-runner.ts
```

Define a general contract:

```
export interface OperationalReport {
  generateSummary(): string;
}
```

Implement the fleet report:

```
import type { OperationalReport } from "./operational-report";

export class FleetReport implements OperationalReport {
  generateSummary(): string {
    return "Fleet utilization report generated";
  }
}
```

Implement the movement report:

```
import type { OperationalReport } from "./operational-report";

export class MovementReport implements OperationalReport {
  generateSummary(): string {
    return "Flight movements report generated";
  }
}
```

Finally, create a common function:

```
import type { OperationalReport } from "./operational-report";
import { FleetReport } from "./fleet-report";
import { MovementReport } from "./movement-report";

function generateReport(report: OperationalReport): void {
  console.log(report.generateSummary());
}

const fleetReport = new FleetReport();
const movementReport = new MovementReport();

generateReport(fleetReport);
generateReport(movementReport);
```

### Practical exercises

1. Implement the general report contract.
2. Implement two different report classes.
3. Pass both classes to the same function.
4. Create a third report type.
5. Try implementing a class without the required method.
6. Observe how TypeScript enforces the common contract.

Deliverable: Three different report implementations that can be processed through a common interface.

This is a small but important foundation for the reporting module we will build later.

# 7. Complete Chapter 1 project structure

By the end of the chapter, your directory should look like this:

```
AeroOps/
│
├── src/
│   └── chapter-01/
│       │
│       ├── typescript-introduction.ts
│       ├── dynamic-vs-static.ts
│       ├── aircraft-interface.ts
│       ├── flight-interface.ts
│       │
│       └── oop/
│           │
│           ├── encapsulation/
│           │   └── aircraft-registration.ts
│           │
│           ├── abstraction/
│           │   ├── aircraft-repository.ts
│           │   └── in-memory-aircraft-repository.ts
│           │
│           ├── inheritance/
│           │   ├── operational-record.ts
│           │   └── flight-record.ts
│           │
│           └── polymorphism/
│               ├── operational-report.ts
│               ├── fleet-report.ts
│               ├── movement-report.ts
│               └── report-runner.ts
│
├── docs/
│   └── chapter-01-notes.md
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

You can add a `tsconfig.json` to configure compilation across these files rather than having to compile each file individually. Set `strict: true` explicitly so the project uses strict type checking.

For a convenient build command, add scripts to `package.json`:

```
{
  "scripts": {
    "build:chapter1": "tsc --project tsconfig.json",
    "typecheck": "tsc --project tsconfig.json --noEmit"
  }
}
```

The exact compiler configuration can be refined as we introduce modules and more advanced TypeScript in Chapter 2.

# 8. Final Chapter 1 completion checklist

This is the checklist to work through while reading. Do not mark a task complete simply because you have read the corresponding section. Mark it complete only after you have written, executed and understood the code.

Chapter 1 progress

### 0/63

0% completed

1\. Environment and project setup

Install Node.js version 24 or later.

Install and verify VS Code and its integrated terminal.

Create the AeroOps project directory and initialize Git.

Run npm init and inspect package.json.

Understand the purpose of package.json scripts and dependencies.

Install TypeScript locally as a development dependency.

Verify Node.js, npm and TypeScript compiler versions.

2\. Understanding TypeScript

Explain the two roles of TypeScript: language and compiler.

Create a .ts source file.

Compile TypeScript into JavaScript using tsc.

Execute the generated JavaScript using Node.js.

Inspect the generated JavaScript file.

Explain transpilation and why TypeScript has no runtime of its own.

3\. Dynamic versus static typing

Reproduce the number-plus-string JavaScript example.

Execute the example and observe type coercion.

Add TypeScript number annotations.

Trigger and understand a compiler type error.

Correct the assignment and verify the result.

Implement the AeroOps flight-hours calculation using number types.

4\. Interfaces and typed contracts

Reproduce the book's User interface and canDrive example.

Understand required interface properties.

Implement the AeroOps Aircraft interface.

Implement the AeroOps Flight interface.

Create valid aircraft and flight objects.

Remove a required property and observe the compiler error.

Assign an invalid property type and correct it.

5\. Encapsulation

Explain information hiding and encapsulation.

Create the AircraftRegistration class.

Implement a private #registration field.

Implement a getter and setter.

Instantiate the class using its constructor.

Update registration through the setter.

Reject an empty registration.

Attempt direct access to the private field and observe the error.

6\. Abstraction

Explain the purpose of abstraction and loose coupling.

Understand interfaces and abstract classes at a conceptual level.

Define the AircraftRepository interface.

Implement InMemoryAircraftRepository.

Save an aircraft through the repository.

Retrieve an aircraft by registration.

Remove an interface method and observe the compiler error.

Explain how a different repository implementation could replace the in-memory one.

7\. Inheritance

Explain classes and their fields and methods.

Understand the purpose of inheritance and code reuse.

Implement OperationalRecord.

Implement FlightRecord extending OperationalRecord.

Use super() to initialize the base class.

Access inherited fields and methods.

Create and inspect a FlightRecord instance.

8\. Polymorphism

Explain the relationship between inheritance and polymorphism.

Define the OperationalReport interface.

Implement FleetReport.

Implement MovementReport.

Pass both report implementations to one common function.

Create another report implementation.

Remove the required method and observe the compiler error.

9\. Final verification and documentation

Compile all Chapter 1 files successfully.

Resolve all TypeScript compiler errors.

Execute the working examples.

Document what each OOP principle means in AeroOps.

Document the decisions made while implementing the project.

Update the project README with Chapter 1 progress.

Commit the completed Chapter 1 implementation to Git.

Reset checklist

## 9. Chapter 1 final acceptance test

Before moving to Chapter 2, you should be able to complete these tasks without copying the book's examples:

| Practical test                           | Expected result                               |
| ---------------------------------------- | --------------------------------------------- |
| Create a typed aircraft object           | Compiler accepts valid data                   |
| Give aircraft an invalid MTOW type       | Compiler rejects it                           |
| Create an aircraft registration instance | Constructor initializes the value             |
| Update its registration                  | Setter controls the update                    |
| Save an aircraft through a repository    | Repository implementation accepts it          |
| Create a flight record                   | Inherits common operational record properties |
| Generate two different reports           | Common function processes both                |
| Compile all chapter files                | No TypeScript errors                          |

Chapter 1 is complete when all seven areas have been implemented, understood and verified.

## 10. What we deliberately leave for later chapters

It is important not to rush ahead and introduce technologies before the book teaches them.

| Subject                                               | Planned chapter |
| ----------------------------------------------------- | --------------- |
| Advanced TypeScript, interfaces, generics and classes | 2               |
| Modern JavaScript features                            | 3               |
| React components and SPA architecture                 | 4               |
| React Hooks                                           | 5               |
| Redux, Context and routing                            | 6               |
| Automated frontend testing                            | 7               |
| Node.js development                                   | 8               |
| Express and REST APIs                                 | 9               |
| PostgreSQL and Prisma                                 | 10              |
| Authentication and authorization                      | 11              |
| Complete full-stack integration                       | 12              |
| Deployment and CI/CD                                  | 13              |
| Monitoring and observability                          | 14              |
| AI-assisted engineering                               | 15              |

This separation is deliberate. Chapter 1 builds your understanding of TypeScript and object-oriented design. Chapters 8–12 will turn these foundations into a complete working application.&#x20;

Pasted text(20261111-052438).txt



My instruction for how we should approach every remaining chapter: For each concept in the book, we will identify what it teaches, implement the corresponding AeroOps feature, create testable deliverables, and finish with a checklist and an acceptance test. No chapter should be considered complete simply because you have finished reading it.