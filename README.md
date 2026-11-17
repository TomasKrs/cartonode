# Cartonode

Webová appka na mapovanie kníh typu *Choose Your Own Adventure* (gamebooky): atlas stromu, silová sieť, reading loop (Karty) a mapa sveta.

## Spustenie

- **Lokálne:** otvor `index.html` v prehliadači (Chrome / Edge / Firefox / Safari).
- **Online:** [tomaskrs.github.io/cartonode](https://tomaskrs.github.io/cartonode)

Funguje na PC, Mac, Linux, iOS aj Android. Netreba inštaláciu.

## Dáta

- Knižnica kníh, pokusy a nastavenia sa ukladajú v **localStorage** daného prehliadača / zariadenia.
- Medzi zariadeniami: **QR prenos**, alebo **Prenos → Záloha .JSON** (aktuálna kniha / celá knižnica).
- Vymazanie dát prehliadača = strata lokálnej knižnice — pred tým ulož JSON na disk.

## Atlas filtre

Tlačidlo **Všetko / Fokus / Trasa / Nové** cykluje hustotu mapy. Metlička opraví duplicitné prázdne spojnice.

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

- `index.html` — aplikácia
- `assets/terrains.js` — vzory + logika výplní
- `assets/terrain-icons/*.jpg` — obrázkové výplne

Drž pohromade: HTML + `assets/`. V témach: **Len symbolické vzory** / **Len obrázky**.
