import os
import json

def initialize_super_admin():
    print("Initializing Contract Management System...")

    # Set up Super Admin credentials
    admin_username = input("Enter Super Admin Username: ")
    admin_password = input("Enter Super Admin Password: ")

    credentials = {
        "username": admin_username,
        "password": admin_password
    }

    # Save credentials securely
    os.makedirs("./config", exist_ok=True)
    with open("./config/superadmin.json", "w") as f:
        json.dump(credentials, f)

    print("Super Admin credentials saved successfully.")

if __name__ == "__main__":
    initialize_super_admin()