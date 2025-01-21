from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

workflows = []

class WorkflowView(APIView):
    def get(self, request):
        return Response(workflows, status=status.HTTP_200_OK)

    def post(self, request):
        new_workflow = {
            "id": len(workflows) + 1,
            "name": request.data.get("name"),
            "description": request.data.get("description"),
        }
        workflows.append(new_workflow)
        return Response(new_workflow, status=status.HTTP_201_CREATED)