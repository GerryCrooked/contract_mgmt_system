import requests
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

class KeycloakAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get("Authorization")
        if not token:
            return None

        try:
            keycloak_url = "http://keycloak:8080/auth/realms/contract-management/protocol/openid-connect/userinfo"
            headers = {"Authorization": token}
            response = requests.get(keycloak_url, headers=headers)
            response.raise_for_status()
            user_data = response.json()
            return (user_data, None)
        except requests.exceptions.RequestException:
            raise AuthenticationFailed("Invalid token")