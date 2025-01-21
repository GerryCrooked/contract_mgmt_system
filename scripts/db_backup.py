# Backup-Skript
import os
from datetime import datetime

def backup_database():
    backup_dir = "./backups"
    os.makedirs(backup_dir, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    backup_file = os.path.join(backup_dir, f"db_backup_{timestamp}.sql")

    command = f"pg_dump -U admin -h postgres contracts > {backup_file}"
    os.system(command)
    print(f"Backup created: {backup_file}")

if __name__ == "__main__":
    backup_database()