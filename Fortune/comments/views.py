import json

from django.http import HttpResponse
from .models import Comment


def add_comment(request):
    payload = {}
    if request.method == 'POST':
        user = request.POST.get("nickname")
        comment_text = request.POST.get("comment")

        if user and comment_text:
            comment_data = Comment(user=user, comment=comment_text)
            comment_data.save()
            payload['response'] = "Comment saved!"
        else:
            payload['response'] = "Something went wrong!"

    return HttpResponse(json.dumps(payload), content_type="applications/json")


def delete_comment(request):
    payload = {}

    if request.method == 'POST':
        comm_id = request.POST.get("comm_id")
        if comm_id:
            comment = Comment.objects.filter(id=comm_id)
            comment.delete()
            payload['response'] = "Comment deleted!"
        else:
            payload['response'] = "Unable to delete comment."
    return HttpResponse(json.dumps(payload), content_type="applications/json")


