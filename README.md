# Multi-Tenant Property Management API

A NestJS-based API for managing properties across multiple tenants with role-based access control.

## Features

- Multi-tenant architecture
- Role-based access control
- Property management
- Maintenance job tracking
- Advanced MongoDB aggregations
- Docker support

## Prerequisites

- Node.js 18+
- Docker and Docker Compose
- MongoDB

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```
   MONGODB_URI=mongodb://localhost:27017/property-management
   JWT_SECRET=your-secret-key
   ```

4. Run with Docker:

   ```bash
   docker-compose up -d
   ```

   Or run locally:

   ```bash
   npm run start:dev
   ```

5. To view the Swagger UIvisit

```bash
 http://localhost:3000/api-docs
```

## API Endpoints

### Dashboard

- GET `/api/tenants/dashboard` - Get tenant dashboard data

### Properties

- GET `/api/properties/search` - Search properties

### Jobs

- POST `/api/jobs/assign` - Assign maintenance job
- GET `/api/jobs/status` - Get jobs grouped by status

## Testing

Run unit tests:

```bash
npm run test
```

Run e2e tests:

```bash
npm run test:e2e
```

## Database Schema

The application uses MongoDB with the following collections:

- Users
- Properties
- Jobs
- Tenancies
- Roles

See the schema files in `src/schemas` for detailed structure.

## Security

- Tenant isolation using guards
- Role-based access control
- Request validation using DTOs
- MongoDB indexing for performance

## License

MIT
