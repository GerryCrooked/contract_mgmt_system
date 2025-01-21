# Administrator Guide

## Initial Setup
1. Run the initialization script: `python scripts/init_setup.py`
2. Configure SMTP settings and Super Admin credentials.
3. Start the application using Docker Compose.

## Managing Users
- Navigate to the Admin panel to add or manage users.
- Assign roles such as Admin, Auditor, or Employee.

## Backups
- Schedule backups using the provided script: `python scripts/db_backup.py`.
- Restore databases using: `python scripts/db_restore.py`.