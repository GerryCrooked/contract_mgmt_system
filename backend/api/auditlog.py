from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.timezone import now

# Temporäre Speicherung der Logs
AUDIT_LOGS = []

class AuditLogView(APIView):
    def get(self, request):
        """Rückgabe aller Audit-Logs"""
        return Response(AUDIT_LOGS, status=status.HTTP_200_OK)

    def post(self, request):
        """Neues Audit-Log hinzufügen"""
        log_entry = {
            "timestamp": now().isoformat(),
            "action": request.data.get("action"),
            "user": request.data.get("user"),
            "details": request.data.get("details"),
            "color": request.data.get("color", "blue"),
        }
        AUDIT_LOGS.append(log_entry)
        return Response(log_entry, status=status.HTTP_201_CREATED)