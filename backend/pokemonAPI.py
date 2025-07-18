from pokemontcgsdk import Card
from pokemontcgsdk import Set
from pokemontcgsdk import Type
from pokemontcgsdk import Supertype
from pokemontcgsdk import Subtype
from pokemontcgsdk import Rarity

cards = Card.all()
sets = Set.all()

print(sets[0])

count = 0
# for set in sets:
#     if count == 2:
#         break
# 
#     print(set)
#     count += 1
#     # print(set.series)

for card in cards:
    if count == 2:
        break

    print(card)
    count += 1

"[Set(id='base1', images=SetImage(symbol='https://images.pokemontcg.io/base1/symbol.png', logo='https://images.pokemontcg.io/base1/logo.png'),"

# --- Set ---
# Set(id='base2', images=SetImage(symbol='https://images.pokemontcg.io/base2/symbol.png',
# logo='https://images.pokemontcg.io/base2/logo.png'), legalities=Legality(unlimited='Legal', expanded=None, standard=None), name='Jungle',
# printedTotal=64, ptcgoCode='JU', releaseDate='1999/06/16', series='Base', total=64, updatedAt='2020/08/14 09:35:00')

# --- Card ---
#


# Scarlet and Violet: https://images.pokemontcg.io/sv1/logo.png
# Sword and Shield: https://images.pokemontcg.io/swsh1/logo.png
# Sun and Moon: 
# XY:
# Black and White:
# Heartgold and SoulSilver:
# Platnium:
# Diamond and Pearl:
# EX Series:
# 

# SetImage(symbol='https://images.pokemontcg.io/base1/symbol.png', logo='https://images.pokemontcg.io/base1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/base2/symbol.png', logo='https://images.pokemontcg.io/base2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/basep/symbol.png', logo='https://images.pokemontcg.io/basep/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/base3/symbol.png', logo='https://images.pokemontcg.io/base3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/base4/symbol.png', logo='https://images.pokemontcg.io/base4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/base5/symbol.png', logo='https://images.pokemontcg.io/base5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/gym1/symbol.png', logo='https://images.pokemontcg.io/gym1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/gym2/symbol.png', logo='https://images.pokemontcg.io/gym2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/neo1/symbol.png', logo='https://images.pokemontcg.io/neo1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/neo2/symbol.png', logo='https://images.pokemontcg.io/neo2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/si1/symbol.png', logo='https://images.pokemontcg.io/si1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/neo3/symbol.png', logo='https://images.pokemontcg.io/neo3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/neo4/symbol.png', logo='https://images.pokemontcg.io/neo4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/base6/symbol.png', logo='https://images.pokemontcg.io/base6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ecard1/symbol.png', logo='https://images.pokemontcg.io/ecard1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ecard2/symbol.png', logo='https://images.pokemontcg.io/ecard2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ecard3/symbol.png', logo='https://images.pokemontcg.io/ecard3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex1/symbol.png', logo='https://images.pokemontcg.io/ex1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex2/symbol.png', logo='https://images.pokemontcg.io/ex2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex3/symbol.png', logo='https://images.pokemontcg.io/ex3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/np/symbol.png', logo='https://images.pokemontcg.io/np/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex4/symbol.png', logo='https://images.pokemontcg.io/ex4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex5/symbol.png', logo='https://images.pokemontcg.io/ex5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex6/symbol.png', logo='https://images.pokemontcg.io/ex6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop1/symbol.png', logo='https://images.pokemontcg.io/pop1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex7/symbol.png', logo='https://images.pokemontcg.io/ex7/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex8/symbol.png', logo='https://images.pokemontcg.io/ex8/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex9/symbol.png', logo='https://images.pokemontcg.io/ex9/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex10/symbol.png', logo='https://images.pokemontcg.io/ex10/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop2/symbol.png', logo='https://images.pokemontcg.io/pop2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex11/symbol.png', logo='https://images.pokemontcg.io/ex11/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex12/symbol.png', logo='https://images.pokemontcg.io/ex12/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop3/symbol.png', logo='https://images.pokemontcg.io/pop3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex13/symbol.png', logo='https://images.pokemontcg.io/ex13/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex14/symbol.png', logo='https://images.pokemontcg.io/ex14/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop4/symbol.png', logo='https://images.pokemontcg.io/pop4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex15/symbol.png', logo='https://images.pokemontcg.io/ex15/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop5/symbol.png', logo='https://images.pokemontcg.io/pop5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ex16/symbol.png', logo='https://images.pokemontcg.io/ex16/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dp1/symbol.png', logo='https://images.pokemontcg.io/dp1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dpp/symbol.png', logo='https://images.pokemontcg.io/dpp/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dp2/symbol.png', logo='https://images.pokemontcg.io/dp2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop6/symbol.png', logo='https://images.pokemontcg.io/pop6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dp3/symbol.png', logo='https://images.pokemontcg.io/dp3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dp4/symbol.png', logo='https://images.pokemontcg.io/dp4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop7/symbol.png', logo='https://images.pokemontcg.io/pop7/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dp5/symbol.png', logo='https://images.pokemontcg.io/dp5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dp6/symbol.png', logo='https://images.pokemontcg.io/dp6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop8/symbol.png', logo='https://images.pokemontcg.io/pop8/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dp7/symbol.png', logo='https://images.pokemontcg.io/dp7/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pl1/symbol.png', logo='https://images.pokemontcg.io/pl1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pop9/symbol.png', logo='https://images.pokemontcg.io/pop9/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pl2/symbol.png', logo='https://images.pokemontcg.io/pl2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pl3/symbol.png', logo='https://images.pokemontcg.io/pl3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pl4/symbol.png', logo='https://images.pokemontcg.io/pl4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/ru1/symbol.png', logo='https://images.pokemontcg.io/ru1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/hgss1/symbol.png', logo='https://images.pokemontcg.io/hgss1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/hsp/symbol.png', logo='https://images.pokemontcg.io/hsp/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/hgss2/symbol.png', logo='https://images.pokemontcg.io/hgss2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/hgss3/symbol.png', logo='https://images.pokemontcg.io/hgss3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/hgss4/symbol.png', logo='https://images.pokemontcg.io/hgss4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/col1/symbol.png', logo='https://images.pokemontcg.io/col1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bwp/symbol.png', logo='https://images.pokemontcg.io/bwp/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw1/symbol.png', logo='https://images.pokemontcg.io/bw1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd11/symbol.png', logo='https://images.pokemontcg.io/mcd11/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw2/symbol.png', logo='https://images.pokemontcg.io/bw2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw3/symbol.png', logo='https://images.pokemontcg.io/bw3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw4/symbol.png', logo='https://images.pokemontcg.io/bw4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw5/symbol.png', logo='https://images.pokemontcg.io/bw5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd12/symbol.png', logo='https://images.pokemontcg.io/mcd12/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw6/symbol.png', logo='https://images.pokemontcg.io/bw6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dv1/symbol.png', logo='https://images.pokemontcg.io/dv1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw7/symbol.png', logo='https://images.pokemontcg.io/bw7/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw8/symbol.png', logo='https://images.pokemontcg.io/bw8/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw9/symbol.png', logo='https://images.pokemontcg.io/bw9/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw10/symbol.png', logo='https://images.pokemontcg.io/bw10/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xyp/symbol.png', logo='https://images.pokemontcg.io/xyp/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bw11/symbol.png', logo='https://images.pokemontcg.io/bw11/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy0/symbol.png', logo='https://images.pokemontcg.io/xy0/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy1/symbol.png', logo='https://images.pokemontcg.io/xy1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy2/symbol.png', logo='https://images.pokemontcg.io/xy2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy3/symbol.png', logo='https://images.pokemontcg.io/xy3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy4/symbol.png', logo='https://images.pokemontcg.io/xy4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy5/symbol.png', logo='https://images.pokemontcg.io/xy5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/dc1/symbol.png', logo='https://images.pokemontcg.io/dc1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy6/symbol.png', logo='https://images.pokemontcg.io/xy6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy7/symbol.png', logo='https://images.pokemontcg.io/xy7/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy8/symbol.png', logo='https://images.pokemontcg.io/xy8/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy9/symbol.png', logo='https://images.pokemontcg.io/xy9/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/g1/symbol.png', logo='https://images.pokemontcg.io/g1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy10/symbol.png', logo='https://images.pokemontcg.io/xy10/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy11/symbol.png', logo='https://images.pokemontcg.io/xy11/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd16/symbol.png', logo='https://images.pokemontcg.io/mcd16/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/xy12/symbol.png', logo='https://images.pokemontcg.io/xy12/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm1/symbol.png', logo='https://images.pokemontcg.io/sm1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/smp/symbol.png', logo='https://images.pokemontcg.io/smp/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm2/symbol.png', logo='https://images.pokemontcg.io/sm2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm3/symbol.png', logo='https://images.pokemontcg.io/sm3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm35/symbol.png', logo='https://images.pokemontcg.io/sm35/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm4/symbol.png', logo='https://images.pokemontcg.io/sm4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm5/symbol.png', logo='https://images.pokemontcg.io/sm5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm6/symbol.png', logo='https://images.pokemontcg.io/sm6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm7/symbol.png', logo='https://images.pokemontcg.io/sm7/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm75/symbol.png', logo='https://images.pokemontcg.io/sm75/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm8/symbol.png', logo='https://images.pokemontcg.io/sm8/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm9/symbol.png', logo='https://images.pokemontcg.io/sm9/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/det1/symbol.png', logo='https://images.pokemontcg.io/det1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm10/symbol.png', logo='https://images.pokemontcg.io/sm10/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm11/symbol.png', logo='https://images.pokemontcg.io/sm11/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm115/symbol.png', logo='https://images.pokemontcg.io/sm115/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sma/symbol.png', logo='https://images.pokemontcg.io/sma/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd19/symbol.png', logo='https://images.pokemontcg.io/mcd19/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sm12/symbol.png', logo='https://images.pokemontcg.io/sm12/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swshp/symbol.png', logo='https://images.pokemontcg.io/swshp/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh1/symbol.png', logo='https://images.pokemontcg.io/swsh1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh2/symbol.png', logo='https://images.pokemontcg.io/swsh2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh3/symbol.png', logo='https://images.pokemontcg.io/swsh3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh35/symbol.png', logo='https://images.pokemontcg.io/swsh35/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh4/symbol.png', logo='https://images.pokemontcg.io/swsh4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh45/symbol.png', logo='https://images.pokemontcg.io/swsh45/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh45sv/symbol.png', logo='https://images.pokemontcg.io/swsh45sv/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh5/symbol.png', logo='https://images.pokemontcg.io/swsh5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh6/symbol.png', logo='https://images.pokemontcg.io/swsh6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh7/symbol.png', logo='https://images.pokemontcg.io/swsh7/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/cel25/symbol.png', logo='https://images.pokemontcg.io/cel25/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/cel25c/symbol.png', logo='https://images.pokemontcg.io/cel25c/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd14/symbol.png', logo='https://images.pokemontcg.io/mcd14/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd15/symbol.png', logo='https://images.pokemontcg.io/mcd15/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd18/symbol.png', logo='https://images.pokemontcg.io/mcd18/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd17/symbol.png', logo='https://images.pokemontcg.io/mcd17/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd21/symbol.png', logo='https://images.pokemontcg.io/mcd21/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/bp/symbol.png', logo='https://images.pokemontcg.io/bp/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh8/symbol.png', logo='https://images.pokemontcg.io/swsh8/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/fut20/symbol.png', logo='https://images.pokemontcg.io/fut20/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/tk1a/symbol.png', logo='https://images.pokemontcg.io/tk1a/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/tk1b/symbol.png', logo='https://images.pokemontcg.io/tk1b/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/tk2a/symbol.png', logo='https://images.pokemontcg.io/tk2a/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/tk2b/symbol.png', logo='https://images.pokemontcg.io/tk2b/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh9/symbol.png', logo='https://images.pokemontcg.io/swsh9/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh9tg/symbol.png', logo='https://images.pokemontcg.io/swsh9tg/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh10/symbol.png', logo='https://images.pokemontcg.io/swsh10/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh10tg/symbol.png', logo='https://images.pokemontcg.io/swsh10tg/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/pgo/symbol.png', logo='https://images.pokemontcg.io/pgo/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh11/symbol.png', logo='https://images.pokemontcg.io/swsh11/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh11tg/symbol.png', logo='https://images.pokemontcg.io/swsh11tg/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh12/symbol.png', logo='https://images.pokemontcg.io/swsh12/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh12tg/symbol.png', logo='https://images.pokemontcg.io/swsh12tg/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/mcd22/symbol.png', logo='https://images.pokemontcg.io/mcd22/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh12pt5/symbol.png', logo='https://images.pokemontcg.io/swsh12pt5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/swsh12pt5gg/symbol.png', logo='https://images.pokemontcg.io/swsh12pt5gg/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv1/symbol.png', logo='https://images.pokemontcg.io/sv1/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/svp/symbol.png', logo='https://images.pokemontcg.io/svp/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv2/symbol.png', logo='https://images.pokemontcg.io/sv2/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sve/symbol.png', logo='https://images.pokemontcg.io/sve/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv3/symbol.png', logo='https://images.pokemontcg.io/sv3/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv3pt5/symbol.png', logo='https://images.pokemontcg.io/sv3pt5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv4/symbol.png', logo='https://images.pokemontcg.io/sv4/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv4pt5/symbol.png', logo='https://images.pokemontcg.io/sv4pt5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv5/symbol.png', logo='https://images.pokemontcg.io/sv5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv6/symbol.png', logo='https://images.pokemontcg.io/sv6/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv6pt5/symbol.png', logo='https://images.pokemontcg.io/sv6pt5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv7/symbol.png', logo='https://images.pokemontcg.io/sv7/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv8/symbol.png', logo='https://images.pokemontcg.io/sv8/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv8pt5/symbol.png', logo='https://images.pokemontcg.io/sv8pt5/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv9/symbol.png', logo='https://images.pokemontcg.io/sv9/logo.png')
# SetImage(symbol='https://images.pokemontcg.io/sv10/symbol.png', logo='https://images.pokemontcg.io/sv10/logo.png')



