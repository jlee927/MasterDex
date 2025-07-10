from pokemontcgsdk import Card
from pokemontcgsdk import Set
from pokemontcgsdk import Type
from pokemontcgsdk import Supertype
from pokemontcgsdk import Subtype
from pokemontcgsdk import Rarity

card = Card.find('xy1-1')
sets = Set.all()

print(sets[0])

for set in sets:
    print(set.images)
    # print(set.series)

" [Set(id='base1', images=SetImage(symbol='https://images.pokemontcg.io/base1/symbol.png', logo='https://images.pokemontcg.io/base1/logo.png'),"

