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
