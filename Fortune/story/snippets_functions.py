import random
from .snippets import quotes

text = quotes


def text_quote():
    random_quote = random.randint(0, 35)
    return quotes[random_quote]


def all_quotes():
    return quotes
