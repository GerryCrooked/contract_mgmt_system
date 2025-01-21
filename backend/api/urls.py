# URL-Routing
from django.urls import path
from .views import ContractListView
from .workflows import WorkflowView
from .auditlog import AuditLogView
from .tenants import TenantView

urlpatterns = [
    path('contracts/', ContractListView.as_view(), name='contract-list'),
    path("workflows/", WorkflowView.as_view(), name="workflow-list"),
    path("auditlogs/", AuditLogView.as_view(), name="auditlog-list"),
    path("tenants/", TenantView.as_view(), name="tenant-list"),
]