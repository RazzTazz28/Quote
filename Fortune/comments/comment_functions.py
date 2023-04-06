from .models import Comment


def get_comments():
    comments = Comment.objects.all()
    return comments

