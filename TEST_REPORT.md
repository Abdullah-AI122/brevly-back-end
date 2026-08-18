# 🧪 Curtio Backend Test Execution Report

**Date:** 8/18/2026, 12:36:44 AM
**Overall Status:** ✅ PASSED

### Summary Overview

| Metric | Count |
| :--- | :--- |
| **Total Test Suites** | 3 (3 Passed, 0 Failed) |
| **Total Tests** | 14 |
| **Passed Tests** | ✅ 14 |
| **Failed Tests** | 0 |
| **Execution Time** | 25.72s |

---

## Test Results Detail

### ✅ PASS - `url.test.js`

| Status | Test Title | Duration |
| :---: | :--- | :---: |
| ✅ | POST /api/urls - should return 401 if unauthenticated | 112ms |
| ✅ | POST /api/urls - should create a short URL when authenticated | 290ms |
| ✅ | POST /api/urls - should fail when destination URL is missing | 8ms |
| ✅ | GET /api/urls - should return user's URLs | 192ms |
| ✅ | PATCH /api/urls/:shortCode/toggle - should toggle URL active status | 206ms |
| ✅ | DELETE /api/urls/:shortCode - should delete a URL | 215ms |
| ✅ | GET / - Health check endpoint | 18ms |

### ✅ PASS - `register.test.js`

| Status | Test Title | Duration |
| :---: | :--- | :---: |
| ✅ | should register a new user successfully | 3683ms |
| ✅ | should fail registration if email is already registered and verified (returns 409) | 250ms |
| ✅ | should return 400 when missing required fields | 17ms |

### ✅ PASS - `login.test.js`

| Status | Test Title | Duration |
| :---: | :--- | :---: |
| ✅ | should fail login when password is wrong (returns 401) | 756ms |
| ✅ | should fail login when email is not verified (returns 403) | 106ms |
| ✅ | should fail login when required fields are missing (returns 400) | 18ms |
| ✅ | should login successfully with correct registered credentials (returns 200) | 780ms |

