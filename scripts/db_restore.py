# Restore-Skript
import os

def restore_database(backup_file):
    if not os.path.exists(backup_file):
        print("Backup file not found!")
        return

    command = f"psql -U admin -h postgres contracts < {backup_file}"
    os.system(command)
    print(f"Database restored from: {backup_file}")

if __name__ == "__main__":
    backup_file = input("Enter the path to the backup file: ")
    restore_database(backup_file)