# Gamebook Kartograf

Jednosúborová webová appka na mapovanie kníh typu *Choose Your Own Adventure* (gamebooky): atlas stromu, silová sieť, reading loop (Karty) a mapa sveta.

## Spustenie

- **Lokálne:** otvor `gamebook_kartograf_v1_7.html` v prehliadači (Chrome / Edge / Firefox / Safari).
- **Online (GitHub Pages):** po zapnutí Pages otvor koreň repozitára — `index.html` ťa presmeruje na appku.

Funguje na PC, Mac, Linux, iOS aj Android (prehliadač). Netreba inštaláciu.

## Dáta

- Knižnica kníh, pokusy a nastavenia sa ukladajú v **localStorage** daného prehliadača / zariadenia.
- Medzi zariadeniami synchronizuj cez **QR prenos** (záloha / prenos v appke).
- Vymazanie dát prehliadača = strata lokálnej knižnice — pred tým exportuj QR alebo JSON zálohu.

## Pohľady

| Pohľad | Účel |
|--------|------|
| **Atlas** | Hierarchický prehľad celej mapy |
| **Sieť** | Silový layout (pavučina) |
| **Karty** | Reading loop — čítanie jednou rukou (mobile) |
| **Mapa sveta** | Ilustrácia so špendlíkmi |

## Farby hrán

Ručná farba voľby (`edge.color`) sa zobrazí na mape aj ako ľavý farebný pruh v Kartách. V Atlase majú navyše systémové farby spätné / krížové hrany (cyklus / cross).

## Súbory

- `gamebook_kartograf_v1_7.html` — celá aplikácia
- `index.html` — vstupný bod pre GitHub Pages (presmerovanie)
