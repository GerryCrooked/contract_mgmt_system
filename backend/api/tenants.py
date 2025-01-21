from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.timezone import now

# Temporäre Speicherung von Mandanten
TENANTS = []

class TenantView(APIView):
    def get(self, request):
        """Rückgabe aller Mandanten"""
        return Response(TENANTS, status=status.HTTP_200_OK)

    def post(self, request):
        """Neuen Mandanten erstellen"""
        tenant = {
            "id": len(TENANTS) + 1,
            "name": request.data.get("name"),
            "created_at": now().isoformat()
        }
        TENANTS.append(tenant)
        return Response(tenant, status=status.HTTP_201_CREATED)