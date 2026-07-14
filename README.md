# 🏢 SAP Enterprise & BTP Portfolio

Welcome to my master repository for SAP configurations, BTP side-by-side extension frameworks, and integration assets. This repository serves as a live technical portfolio demonstrating end-to-end knowledge of the SAP cloud ecosystem.

---

## 🛠️ Project 1: SAP BTP Core Cloud Connectivity
* **Status:** Verified & Live Handshake Succeeded (July 2026)
* **Target Platforms:** SAP BTP (Business Technology Platform) Trial Subaccount, SAP Business One Service Layer

### 📋 Architectural Overview
In modern enterprise landscapes, maintaining a "Clean Core" is vital. This project demonstrates how to decouple an external application or middleware platform from the core ERP database by configuring a secure, centralized cloud gateway via SAP BTP.

### 🗂️ Project Assets
* [`SAP_B1_ServiceLayer.json`](./SAP_B1_ServiceLayer.json): The production-grade HTTP Destination manifest exported directly from the live SAP BTP Cockpit.

### ⚙️ Configuration Technical Specifications
* **Destination Name:** `SAP_B1_ServiceLayer`
* **Type / Proxy Type:** HTTP / Internet Gateway
* **Protocol Base:** REST / OData Payload Management
* **Authentication Mechanism:** Abstracted bearer routing token via injected `apiKey` properties to mimic stateless session management.
* **Result:** Successfully orchestrated a live cloud-to-cloud infrastructure handshake (HTTP 200 equivalent) via the BTP connectivity service.

---

## 🛠️ Project 2: Multi-Tenant Cloud Extension Node.js Runtime Platform
* **Status:** Service Instance Initialized & OAuth 2.0 Binding Verified Live (July 2026)
* **Target Platforms:** SAP BTP HTML5 Application Repository Service, Cloud Foundry Compute Layer, UAA (User Account & Authentication)

### 📋 Architectural Overview
To satisfy advanced side-by-side extension requirements without altering core ERP source code, a dedicated cloud execution container is necessary. This project demonstrates how to provision and bind an enterprise-grade web runtime within SAP BTP to safely host, scale, and process custom Node.js and TypeScript business APIs.

### 🗂️ Project Assets
* [`NodeJS_Extension_Auth_Key.json`](./NodeJS_Extension_Auth_Key.json): The official system-generated credentials blueprint containing live client IDs, environment tokens, and OAuth authorization routes downloaded directly from the active BTP cockpit.

### ⚙️ Provisioning & Security Specifications
* **Service Framework:** `html5-apps-repo`
* **Target Service Plan:** `app-runtime`
* **Execution Environment:** Cloud Foundry Cloud Provider Isolation Layer
* **Target Space / Scope:** Dedicated `dev` subaccount space
* **Authentication Protocol:** OAuth 2.0 Client Credentials Flow
* **Architectural Integration:** This container functions as the dedicated compute cluster. A backend Node.js/TypeScript application consumes the exported JSON configuration upon bootstrapping to auto-discover security scopes and routing URIs. This isolates external custom logic and ensures a completely "Clean Core" strategy adjacent to the `SAP_B1_ServiceLayer` destination.
