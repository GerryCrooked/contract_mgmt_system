# API Documentation

## Endpoints
### `GET /api/contracts`
- Retrieves a list of all contracts.

### `POST /api/contracts`
- Creates a new contract.

### Request Body
```json
{
  "name": "Contract Name",
  "description": "Details about the contract",
  "start_date": "2025-01-01",
  "end_date": "2026-01-01",
  "amount": 5000.00,
  "owner": 1
}