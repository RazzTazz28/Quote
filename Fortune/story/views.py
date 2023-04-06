import json

from comments.comment_functions import get_comments
from django.http import HttpResponse
from django.shortcuts import render
from .snippets_functions import *


def quote(request):
    payload = {}
    if request.method == "GET":
        payload = text_quote()
    return HttpResponse(json.dumps(payload), content_type="applications/json")


def quotes(request):
    payload = {}
    if request.method == "GET":
        payload = all_quotes()
    return HttpResponse(json.dumps(payload), content_type="applications/json")


def story(request):
    comments = get_comments()
    context = {'comments': comments}

    return render(request, "story/story.html", context)
