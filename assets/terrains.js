/**
 * Gamebook Kartograf – terény
 * mode=pattern → len SVG vzory | mode=image → len obrázky (JPG / SVG ikona)
 */
(function (global) {
    'use strict';

    function pat(id, w, h, body) {
        return '<pattern id="terrain-' + id + '" patternUnits="userSpaceOnUse" width="' + w + '" height="' + h + '">' + body + '</pattern>';
    }

    function ico(bg, body) {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="' + bg + '"/>' + body + '</svg>';
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    function resolveUrl(rel) {
        try { return new URL(rel, (typeof document !== 'undefined' && document.baseURI) || global.location.href).href; }
        catch (_) { return rel; }
    }

    var TERRAINS = [
        { id: '', label: 'Hladká', swatch: '#334155', group: 'Základ' },

        // —— Stavba / interiér ——
        { id: 'stone', label: 'Kameň', swatch: '#6b7280', group: 'Stavba',
            pattern: pat('stone', 10, 10, '<rect width="10" height="10" fill="#4b5563"/><path d="M0 5h10M5 0v10" stroke="#9ca3af" stroke-width=".7" opacity=".5"/>'),
            icon: ico('#4b5563', '<path d="M8 40l10-18 12 8 14-16 12 26H8z" fill="#9ca3af"/><path d="M18 44h28" stroke="#d1d5db" stroke-width="2"/>') },
        { id: 'brick', label: 'Tehla', swatch: '#b45309', group: 'Stavba',
            pattern: pat('brick', 12, 8, '<rect width="12" height="8" fill="#7c2d12"/><rect width="5.5" height="3.2" fill="#c2410c"/><rect x="6.5" width="5.5" height="3.2" fill="#ea580c" opacity=".8"/><rect x="3" y="4" width="5.5" height="3.2" fill="#c2410c"/><path d="M0 3.5h12M0 7.5h12M6 0v3.5M3 4v3.5M9 4v3.5" stroke="#451a03" stroke-width=".7"/>'),
            icon: ico('#7c2d12', '<rect x="8" y="14" width="22" height="12" rx="1" fill="#ea580c"/><rect x="34" y="14" width="22" height="12" rx="1" fill="#c2410c"/><rect x="20" y="30" width="22" height="12" rx="1" fill="#ea580c"/><rect x="8" y="46" width="22" height="10" rx="1" fill="#c2410c"/><rect x="34" y="46" width="22" height="10" rx="1" fill="#ea580c"/>') },
        { id: 'corridor', label: 'Chodba', swatch: '#78716c', group: 'Stavba',
            pattern: pat('corridor', 12, 8, '<rect width="12" height="8" fill="#44403c"/><path d="M0 4h12" stroke="#a8a29e" stroke-width="2.2" opacity=".45"/><path d="M0 1.5h12M0 6.5h12" stroke="#1c1917" stroke-width=".6"/>'),
            icon: ico('#292524', '<path d="M10 8h12v48H10zM42 8h12v48H42z" fill="#57534e"/><path d="M22 32h20" stroke="#a8a29e" stroke-width="3"/><path d="M18 12h28M18 52h28" stroke="#1c1917" stroke-width="2"/>') },
        { id: 'hall', label: 'Sieň', swatch: '#a8a29e', group: 'Stavba',
            pattern: pat('hall', 14, 12, '<rect width="14" height="12" fill="#44403c"/><path d="M2 11V4h2v7M6 11V2h2v9M10 11V4h2v7" stroke="#d6d3d1" stroke-width="1.2" opacity=".55"/>'),
            icon: ico('#44403c', '<path d="M8 52V28l24-16 24 16v24H8z" fill="none" stroke="#d6d3d1" stroke-width="3"/><path d="M20 52V34h24v18" fill="none" stroke="#a8a29e" stroke-width="2"/><circle cx="32" cy="22" r="3" fill="#fbbf24"/>') },
        { id: 'dungeon', label: 'Kobka', swatch: '#57534e', group: 'Stavba',
            pattern: pat('dungeon', 12, 12, '<rect width="12" height="12" fill="#1c1917"/><rect width="5.5" height="5.5" fill="#44403c"/><rect x="6.5" y="6.5" width="5.5" height="5.5" fill="#44403c"/><path d="M0 6h12M6 0v12" stroke="#0c0a09" stroke-width="1.4"/>'),
            icon: ico('#1c1917', '<rect x="10" y="10" width="20" height="20" fill="#44403c"/><rect x="34" y="34" width="20" height="20" fill="#44403c"/><path d="M8 32h48M32 8v48" stroke="#0c0a09" stroke-width="3"/>') },
        { id: 'crypt', label: 'Krypta', swatch: '#3f3f46', group: 'Stavba',
            pattern: pat('crypt', 14, 10, '<rect width="14" height="10" fill="#18181b"/><path d="M2 9V4h3v5M7 9V2.5h3.5v6.5" fill="none" stroke="#71717a" stroke-width="1.4"/>'),
            icon: ico('#18181b', '<path d="M14 50V22h12v28M34 50V14h16v36" fill="none" stroke="#a1a1aa" stroke-width="3"/><path d="M10 50h44" stroke="#71717a" stroke-width="3"/>') },
        { id: 'castle', label: 'Hrad', swatch: '#64748b', group: 'Stavba',
            pattern: pat('castle', 16, 12, '<rect width="16" height="12" fill="#334155"/><path d="M1 11V5h3v6M5 11V3h3v8M9 11V5h3v6M13 11V4h2.5v7" fill="none" stroke="#94a3b8" stroke-width="1.3"/>'),
            icon: ico('#334155', '<path d="M8 52V28h10v-8h8v8h12v-6h8v14h10v16H8z" fill="#94a3b8"/><path d="M18 20h8M38 22h8" stroke="#64748b" stroke-width="3"/>') },
        { id: 'temple', label: 'Chrám', swatch: '#a78bfa', group: 'Stavba',
            pattern: pat('temple', 14, 12, '<rect width="14" height="12" fill="#2e1065"/><path d="M7 1.5L12 5H2z" fill="#c4b5fd" opacity=".55"/><path d="M3 5v6h8V5" fill="none" stroke="#ddd6fe" stroke-width="1.1"/>'),
            icon: ico('#2e1065', '<path d="M32 8L54 28H10z" fill="#c4b5fd"/><rect x="16" y="28" width="32" height="24" fill="#a78bfa"/><rect x="26" y="36" width="12" height="16" fill="#2e1065"/>') },
        { id: 'ruins', label: 'Ruiny', swatch: '#a8a29e', group: 'Stavba',
            pattern: pat('ruins', 16, 12, '<rect width="16" height="12" fill="#44403c"/><path d="M1 11V4l2-1.5 1 2V11M6 11V2.5h2.5V11M11 11V5h3.5v3l-1 3" fill="none" stroke="#d6d3d1" stroke-width="1.35"/>'),
            icon: ico('#44403c', '<path d="M8 50V22l8-6 4 10V50M28 50V14h10v36M46 50V26h10v12l-4 12" fill="none" stroke="#d6d3d1" stroke-width="3"/>') },
        { id: 'tower', label: 'Veža', swatch: '#94a3b8', group: 'Stavba',
            pattern: pat('tower', 10, 14, '<rect width="10" height="14" fill="#334155"/><path d="M3 13V4h4v9" fill="none" stroke="#cbd5e1" stroke-width="1.2"/><path d="M2 4h6l-1-2h-4z" fill="#94a3b8"/>'),
            icon: ico('#1e293b', '<path d="M24 54V22h16v32M22 22l10-12 10 12" fill="#94a3b8"/><rect x="28" y="30" width="8" height="8" fill="#0f172a"/>') },
        { id: 'library', label: 'Knižnica', swatch: '#a16207', group: 'Stavba',
            pattern: pat('library', 12, 10, '<rect width="12" height="10" fill="#44403c"/><path d="M1 2h10M1 5h10M1 8h10" stroke="#a16207" stroke-width="1.4"/><path d="M3 1v8M6 1v8M9 1v8" stroke="#78350f" stroke-width=".6"/>'),
            icon: ico('#292524', '<rect x="8" y="12" width="10" height="40" fill="#b45309"/><rect x="20" y="12" width="10" height="40" fill="#92400e"/><rect x="32" y="12" width="10" height="40" fill="#d97706"/><rect x="44" y="12" width="10" height="40" fill="#a16207"/>') },
        { id: 'prison', label: 'Väzenie', swatch: '#52525b', group: 'Stavba',
            pattern: pat('prison', 10, 10, '<rect width="10" height="10" fill="#18181b"/><path d="M2 0v10M5 0v10M8 0v10" stroke="#a1a1aa" stroke-width="1"/>'),
            icon: ico('#18181b', '<rect x="12" y="10" width="40" height="44" fill="none" stroke="#a1a1aa" stroke-width="3"/><path d="M20 10v44M28 10v44M36 10v44M44 10v44" stroke="#d4d4d8" stroke-width="2.5"/>') },

        // —— Osídlenie ——
        { id: 'village', label: 'Dedina', swatch: '#f97316', group: 'Osídlenie',
            pattern: pat('village', 14, 12, '<rect width="14" height="12" fill="#365314"/><path d="M3 8V5l2.5-2L8 5v3z" fill="#fdba74"/><rect x="9" y="6" width="3.5" height="2.5" fill="#fed7aa"/>'),
            icon: ico('#365314', '<path d="M12 40V28l12-10 12 10v12z" fill="#fdba74"/><path d="M12 28l12-10 12 10" fill="none" stroke="#9a3412" stroke-width="2"/><rect x="40" y="32" width="14" height="12" fill="#fed7aa"/><path d="M40 32l7-6 7 6" fill="#b45309"/>') },
        { id: 'city', label: 'Mesto', swatch: '#64748b', group: 'Osídlenie',
            pattern: pat('city', 14, 12, '<rect width="14" height="12" fill="#1e293b"/><path d="M1 11V5h3v6M5 11V3h2v8M8 11V6h2v5M11 11V4h2v7" fill="#64748b"/>'),
            icon: ico('#0f172a', '<rect x="8" y="28" width="12" height="24" fill="#64748b"/><rect x="22" y="16" width="14" height="36" fill="#94a3b8"/><rect x="38" y="24" width="16" height="28" fill="#64748b"/><path d="M6 52h52" stroke="#334155" stroke-width="3"/>') },
        { id: 'tavern', label: 'Krčma', swatch: '#d97706', group: 'Osídlenie',
            pattern: pat('tavern', 12, 10, '<rect width="12" height="10" fill="#44403c"/><path d="M2 9V4h8v5" fill="#b45309"/><path d="M1 4l5-3 5 3" fill="#92400e"/><circle cx="6" cy="6.5" r="1" fill="#fbbf24"/>'),
            icon: ico('#292524', '<path d="M12 50V28h40v22" fill="#b45309"/><path d="M10 28l22-14 22 14" fill="#92400e"/><rect x="26" y="34" width="12" height="16" fill="#451a03"/><circle cx="48" cy="18" r="6" fill="#fbbf24"/>') },
        { id: 'shop', label: 'Obchod', swatch: '#f59e0b', group: 'Osídlenie',
            pattern: pat('shop', 12, 10, '<rect width="12" height="10" fill="#365314"/><path d="M1 8V4h10v4" fill="#fbbf24"/><path d="M0 4h12" stroke="#b45309" stroke-width="1.5"/>'),
            icon: ico('#365314', '<path d="M8 28h48l-4 24H12z" fill="#fbbf24"/><path d="M6 28l26-12 26 12" fill="#f59e0b"/><rect x="26" y="36" width="12" height="16" fill="#78350f"/>') },
        { id: 'harbor', label: 'Prístav', swatch: '#0ea5e9', group: 'Osídlenie',
            pattern: pat('harbor', 14, 10, '<rect width="14" height="10" fill="#0c4a6e"/><path d="M0 7h14" stroke="#38bdf8" stroke-width="1.5"/><path d="M2 7V3h8v4" fill="#a16207"/>'),
            icon: ico('#0c4a6e', '<path d="M4 40h56" stroke="#38bdf8" stroke-width="4"/><path d="M10 40V24h28v16" fill="#a16207"/><path d="M42 36l14-8v16z" fill="#fdba74"/>') },

        // —— Príroda ——
        { id: 'plain', label: 'Pláň', swatch: '#84cc16', group: 'Príroda',
            pattern: pat('plain', 12, 10, '<rect width="12" height="10" fill="#3f6212"/><path d="M1 8c1.5-3.5 3-3.5 4.5 0M5 8c1.2-2.8 2.5-2.8 4 0" fill="none" stroke="#a3e635" stroke-width="1"/>'),
            icon: ico('#3f6212', '<path d="M4 44c8-16 16-16 28 0M20 44c6-12 12-12 24 0" fill="none" stroke="#a3e635" stroke-width="3"/><circle cx="48" cy="16" r="8" fill="#fde047"/>') },
        { id: 'meadow', label: 'Lúka', swatch: '#4ade80', group: 'Príroda',
            pattern: pat('meadow', 12, 10, '<rect width="12" height="10" fill="#166534"/><circle cx="3" cy="3.5" r="1.1" fill="#f472b6"/><circle cx="8" cy="2.5" r=".9" fill="#facc15"/>'),
            icon: ico('#166534', '<circle cx="18" cy="22" r="5" fill="#f472b6"/><circle cx="34" cy="16" r="4" fill="#facc15"/><circle cx="46" cy="26" r="4" fill="#fb7185"/><path d="M8 48c10-14 16-14 28 0" fill="none" stroke="#86efac" stroke-width="3"/>') },
        { id: 'forest', label: 'Les', swatch: '#166534', group: 'Príroda',
            pattern: pat('forest', 14, 14, '<rect width="14" height="14" fill="#052e16"/><path d="M3.5 12L7 3l3.5 9z" fill="#16a34a"/><path d="M1 12l2.5-5.5L6 12z" fill="#15803d"/>'),
            icon: ico('#052e16', '<path d="M18 48L32 12l14 36z" fill="#16a34a"/><path d="M8 50l10-22 10 22z" fill="#15803d"/><path d="M36 50l10-20 10 20z" fill="#22c55e"/>') },
        { id: 'swamp', label: 'Močiar', swatch: '#365314', group: 'Príroda',
            pattern: pat('swamp', 14, 10, '<rect width="14" height="10" fill="#1a2e05"/><ellipse cx="4" cy="6" rx="3" ry="1.4" fill="#3f6212" opacity=".55"/>'),
            icon: ico('#1a2e05', '<ellipse cx="22" cy="40" rx="14" ry="6" fill="#3f6212"/><ellipse cx="44" cy="46" rx="12" ry="5" fill="#4d7c0f"/><path d="M16 28c4-10 8-10 12 0" fill="none" stroke="#65a30d" stroke-width="2"/>') },
        { id: 'mountain', label: 'Hory', swatch: '#94a3b8', group: 'Príroda',
            pattern: pat('mountain', 16, 12, '<rect width="16" height="12" fill="#1e293b"/><path d="M1 11L5 3l3 5 2-4 5 7z" fill="#64748b"/>'),
            icon: ico('#1e293b', '<path d="M4 52L24 12l12 20 8-14 16 34z" fill="#64748b"/><path d="M24 12l6 10-8 4z" fill="#e2e8f0"/>') },
        { id: 'snow', label: 'Sneh', swatch: '#e2e8f0', group: 'Príroda',
            pattern: pat('snow', 12, 12, '<rect width="12" height="12" fill="#cbd5e1"/><circle cx="2" cy="3" r=".7" fill="#fff"/><circle cx="7" cy="2" r=".5" fill="#fff"/>'),
            icon: ico('#94a3b8', '<circle cx="16" cy="18" r="3" fill="#fff"/><circle cx="32" cy="12" r="2.5" fill="#fff"/><circle cx="48" cy="20" r="3" fill="#f8fafc"/><path d="M4 48q14-12 28 0t28 0" fill="none" stroke="#e2e8f0" stroke-width="3"/>') },
        { id: 'camp', label: 'Tábor', swatch: '#f97316', group: 'Príroda',
            pattern: pat('camp', 12, 12, '<rect width="12" height="12" fill="#1c1917"/><path d="M6 9L3 4h6z" fill="#f97316"/><circle cx="6" cy="3" r="1.2" fill="#fbbf24"/>'),
            icon: ico('#1c1917', '<path d="M32 14c-4 10-10 18-10 28h20c0-10-6-18-10-28z" fill="#f97316"/><circle cx="32" cy="12" r="5" fill="#fde047"/><path d="M18 48h28" stroke="#78716c" stroke-width="3"/>') },
        { id: 'cliff', label: 'Útes', swatch: '#78716c', group: 'Príroda',
            pattern: pat('cliff', 12, 12, '<rect width="12" height="12" fill="#1c1917"/><path d="M0 2h7v10H0z" fill="#78716c"/><path d="M7 2l5 4v6H7z" fill="#44403c"/>'),
            icon: ico('#0c0a09', '<path d="M4 8h28v48H4z" fill="#78716c"/><path d="M32 20l28 16v20H32z" fill="#292524"/><path d="M8 24h16M8 36h12" stroke="#a8a29e" stroke-width="2"/>') },

        // —— Živly / voda ——
        { id: 'water', label: 'Voda', swatch: '#0284c7', group: 'Živly',
            pattern: pat('water', 14, 10, '<rect width="14" height="10" fill="#0c4a6e"/><path d="M0 3q3.5 2.5 7 0t7 0" fill="none" stroke="#7dd3fc" stroke-width="1.2"/>'),
            icon: ico('#0c4a6e', '<path d="M4 24q14 12 28 0t28 0M4 40q14 12 28 0t28 0" fill="none" stroke="#7dd3fc" stroke-width="3"/>') },
        { id: 'river', label: 'Rieka', swatch: '#0ea5e9', group: 'Živly',
            pattern: pat('river', 10, 12, '<rect width="10" height="12" fill="#075985"/><path d="M3 0c2 2 2 3 0 5s-2 3 0 5 2 3 0 5" fill="none" stroke="#7dd3fc" stroke-width="2.2"/>'),
            icon: ico('#075985', '<path d="M20 4c12 10 12 16 0 28s-12 16 0 28" fill="none" stroke="#7dd3fc" stroke-width="8"/>') },
        { id: 'sea', label: 'More', swatch: '#1d4ed8', group: 'Živly',
            pattern: pat('sea', 16, 10, '<rect width="16" height="10" fill="#1e3a8a"/><path d="M0 2.5q4 3 8 0t8 0M0 6q4 3 8 0t8 0" fill="none" stroke="#93c5fd" stroke-width="1"/>'),
            icon: ico('#1e3a8a', '<path d="M2 20q15 14 30 0t30 0M2 36q15 14 30 0t30 0M2 50q15 10 30 0t30 0" fill="none" stroke="#93c5fd" stroke-width="2.5"/>') },
        { id: 'lava', label: 'Láva', swatch: '#ef4444', group: 'Živly',
            pattern: pat('lava', 12, 12, '<rect width="12" height="12" fill="#450a0a"/><path d="M1 8c2-4 3-1 5-5 1.5 3 2 1 4 4 1 2 1 3 2 5H1z" fill="#f97316"/>'),
            icon: ico('#450a0a', '<path d="M8 48c8-22 12-8 20-28 6 14 8 6 16 20 4 8 4 12 8 20H8z" fill="#f97316"/><path d="M20 50c4-12 8-4 12-16 4 8 6 4 10 12" fill="#fbbf24"/>') },
        { id: 'ice', label: 'Ľad', swatch: '#67e8f9', group: 'Živly',
            pattern: pat('ice', 12, 12, '<rect width="12" height="12" fill="#155e75"/><path d="M2 2l3 4-1.5 3M7 1l2 5 2 2" fill="none" stroke="#a5f3fc" stroke-width="1"/>'),
            icon: ico('#155e75', '<path d="M32 8l18 28-18 20L14 36z" fill="none" stroke="#a5f3fc" stroke-width="3"/><path d="M18 28h28M32 12v40" stroke="#67e8f9" stroke-width="2"/>') },

        // —— Podzemie ——
        { id: 'cave', label: 'Jaskyňa', swatch: '#44403c', group: 'Podzemie',
            pattern: pat('cave', 12, 12, '<rect width="12" height="12" fill="#0c0a09"/><ellipse cx="6" cy="6.5" rx="4.2" ry="3.2" fill="none" stroke="#78716c" stroke-width="1.2"/>'),
            icon: ico('#0c0a09', '<ellipse cx="32" cy="34" rx="22" ry="16" fill="none" stroke="#78716c" stroke-width="4"/><ellipse cx="32" cy="36" rx="10" ry="8" fill="#1c1917"/>') },
        { id: 'mines', label: 'Bane', swatch: '#a16207', group: 'Podzemie',
            pattern: pat('mines', 12, 12, '<rect width="12" height="12" fill="#1c1917"/><path d="M2 2h8v8H2z" fill="none" stroke="#a8a29e" stroke-width="1"/><path d="M2 2l8 8M10 2L2 10" stroke="#ca8a04" stroke-width="1.1"/>'),
            icon: ico('#1c1917', '<path d="M12 12h40v40H12z" fill="none" stroke="#a8a29e" stroke-width="3"/><path d="M12 12l40 40M52 12L12 52" stroke="#fbbf24" stroke-width="3"/>') },
        { id: 'graveyard', label: 'Cintorín', swatch: '#71717a', group: 'Podzemie',
            pattern: pat('graveyard', 12, 12, '<rect width="12" height="12" fill="#18181b"/><path d="M3 10V5h2v5M7 10V3.5h3V10" fill="#71717a"/>'),
            icon: ico('#18181b', '<path d="M14 50V28h10v22M34 50V20h16v30" fill="#71717a"/><path d="M36 20h12v6H36z" fill="#a1a1aa"/><circle cx="48" cy="12" r="4" fill="#94a3b8" opacity=".4"/>') },

        // —— Cesty ——
        { id: 'sand', label: 'Piesok', swatch: '#d97706', group: 'Púšť',
            pattern: pat('sand', 14, 8, '<rect width="14" height="8" fill="#78350f"/><path d="M0 3q3.5-2.5 7 0t7 0" fill="none" stroke="#fbbf24" stroke-width="1"/>'),
            icon: ico('#78350f', '<path d="M2 28q15-14 30 0t30 0M2 44q15-10 30 0t30 0" fill="none" stroke="#fbbf24" stroke-width="3"/>') },
        { id: 'desert', label: 'Púšť', swatch: '#f59e0b', group: 'Púšť',
            pattern: pat('desert', 16, 10, '<rect width="16" height="10" fill="#92400e"/><path d="M0 7q4-4 8-1t8-1" fill="none" stroke="#fcd34d" stroke-width="1.3"/>'),
            icon: ico('#92400e', '<path d="M2 40q16-18 32-4t28-4" fill="none" stroke="#fcd34d" stroke-width="4"/><circle cx="48" cy="14" r="7" fill="#fef3c7"/>') },
        { id: 'road', label: 'Cesta', swatch: '#a8a29e', group: 'Cesty',
            pattern: pat('road', 10, 12, '<rect width="10" height="12" fill="#292524"/><path d="M2 0h6v12H2z" fill="#78716c"/><path d="M5 1v2M5 5v2M5 9v2" stroke="#e7e5e4" stroke-width="1.1" stroke-dasharray="2 2"/>'),
            icon: ico('#1c1917', '<path d="M18 4h28v56H18z" fill="#78716c"/><path d="M32 8v8M32 24v8M32 40v8" stroke="#e7e5e4" stroke-width="3" stroke-dasharray="6 6"/>') },
        { id: 'bridge', label: 'Most', swatch: '#92400e', group: 'Cesty',
            pattern: pat('bridge', 14, 10, '<rect width="14" height="10" fill="#1e3a5f"/><path d="M1 5h12v2H1z" fill="#a16207"/>'),
            icon: ico('#1e3a5f', '<path d="M4 44h56" stroke="#38bdf8" stroke-width="3"/><path d="M8 32h48v8H8z" fill="#a16207"/><path d="M14 20v12M26 16v16M38 16v16M50 20v12" stroke="#78350f" stroke-width="3"/>') },
        { id: 'crossroads', label: 'Rázcestie', swatch: '#a8a29e', group: 'Cesty',
            pattern: pat('crossroads', 12, 12, '<rect width="12" height="12" fill="#365314"/><path d="M5 0h2v12H5zM0 5h12v2H0z" fill="#a8a29e"/>'),
            icon: ico('#365314', '<path d="M28 4h8v56h-8zM4 28h56v8H4z" fill="#a8a29e"/><path d="M34 14h16v6H34zM14 34v16h6V34z" fill="#fbbf24"/>') },
        { id: 'gate', label: 'Brána', swatch: '#78716c', group: 'Cesty',
            pattern: pat('gate', 12, 12, '<rect width="12" height="12" fill="#292524"/><path d="M2 11V3h3v8M7 11V3h3v8" fill="#78716c"/>'),
            icon: ico('#1c1917', '<path d="M10 54V18h18v36M36 54V18h18v36" fill="#78716c"/><circle cx="24" cy="36" r="2" fill="#fbbf24"/><circle cx="40" cy="36" r="2" fill="#fbbf24"/>') },
        { id: 'ship', label: 'Loď', swatch: '#92400e', group: 'Cesty',
            pattern: pat('ship', 14, 10, '<rect width="14" height="10" fill="#0c4a6e"/><path d="M2 7h10l-2 2H4z" fill="#a16207"/><path d="M7 7V2l4 3z" fill="#e7e5e4"/>'),
            icon: ico('#0c4a6e', '<path d="M8 40h48l-8 12H16z" fill="#a16207"/><path d="M32 10v30" stroke="#e7e5e4" stroke-width="3"/><path d="M32 12l18 14H32z" fill="#f8fafc"/>') },

        // —— Udalosti ——
        { id: 'battle', label: 'Boj', swatch: '#ef4444', group: 'Udalosti',
            pattern: pat('battle', 12, 12, '<rect width="12" height="12" fill="#1c1917"/><path d="M2 2l8 8M10 2L2 10" stroke="#ef4444" stroke-width="1.4"/>'),
            icon: ico('#1c1917', '<path d="M12 16l20 20M16 12l20 20" stroke="#f8fafc" stroke-width="4"/><path d="M52 16L32 36M48 12L28 36" stroke="#ef4444" stroke-width="4"/><circle cx="32" cy="40" r="6" fill="#fbbf24"/>') },
        { id: 'treasure', label: 'Poklad', swatch: '#f59e0b', group: 'Udalosti',
            pattern: pat('treasure', 12, 10, '<rect width="12" height="10" fill="#1c1917"/><path d="M2 4h8v5H2z" fill="#b45309"/><path d="M2 4h8v2H2z" fill="#fbbf24"/>'),
            icon: ico('#1c1917', '<path d="M12 28h40v24H12z" fill="#b45309"/><path d="M12 28h40v8H12z" fill="#fbbf24"/><circle cx="32" cy="40" r="4" fill="#78350f"/><circle cx="20" cy="20" r="3" fill="#fde047"/><circle cx="44" cy="18" r="2.5" fill="#facc15"/>') },
        { id: 'trap', label: 'Pasca', swatch: '#a3e635', group: 'Udalosti',
            pattern: pat('trap', 12, 12, '<rect width="12" height="12" fill="#1c1917"/><path d="M2 8h8M4 8l2-5 2 5" fill="none" stroke="#a3e635" stroke-width="1.1"/>'),
            icon: ico('#1c1917', '<path d="M10 40h44l-6 14H16z" fill="#44403c"/><path d="M20 40V18l6 8 6-14 6 14 6-8v22" fill="none" stroke="#a3e635" stroke-width="3"/>') },

        // —— Vesmír ——
        { id: 'space', label: 'Vesmír', swatch: '#312e81', group: 'Vesmír',
            pattern: pat('space', 14, 14, '<rect width="14" height="14" fill="#0f172a"/><circle cx="3" cy="4" r=".6" fill="#e2e8f0"/><circle cx="9" cy="2" r=".4" fill="#fff"/><circle cx="11" cy="9" r=".7" fill="#c4b5fd"/>'),
            icon: ico('#020617', '<circle cx="14" cy="16" r="1.5" fill="#e2e8f0"/><circle cx="40" cy="12" r="1" fill="#fff"/><circle cx="50" cy="28" r="1.2" fill="#c4b5fd"/><circle cx="22" cy="44" r="1" fill="#93c5fd"/><circle cx="36" cy="36" r="8" fill="#6366f1" opacity=".5"/>') },
        { id: 'spaceship', label: 'Vesm. loď', swatch: '#38bdf8', group: 'Vesmír',
            pattern: pat('spaceship', 14, 10, '<rect width="14" height="10" fill="#0f172a"/><path d="M2 5h8l2-2v4l-2-2H2z" fill="#38bdf8"/>'),
            icon: ico('#020617', '<path d="M8 34h36l12-6-12-6H8l6 6z" fill="#38bdf8"/><path d="M14 28v12" stroke="#0ea5e9" stroke-width="3"/><circle cx="12" cy="34" r="3" fill="#fde047"/>') },
        { id: 'planet', label: 'Planéta', swatch: '#22d3ee', group: 'Vesmír',
            pattern: pat('planet', 14, 14, '<rect width="14" height="14" fill="#0f172a"/><circle cx="7" cy="7" r="4" fill="#0369a1"/><path d="M2 7h10" stroke="#67e8f9" stroke-width=".8" opacity=".5"/>'),
            icon: ico('#020617', '<circle cx="32" cy="32" r="16" fill="#0284c7"/><path d="M16 30c10 6 22 6 32 0" fill="none" stroke="#67e8f9" stroke-width="2"/><circle cx="24" cy="24" r="3" fill="#075985"/>') },
        { id: 'asteroid', label: 'Asteroid', swatch: '#a8a29e', group: 'Vesmír',
            pattern: pat('asteroid', 12, 12, '<rect width="12" height="12" fill="#0f172a"/><ellipse cx="6" cy="6" rx="3.5" ry="3" fill="#78716c"/>'),
            icon: ico('#020617', '<ellipse cx="32" cy="32" rx="18" ry="14" fill="#78716c"/><circle cx="24" cy="28" r="3" fill="#44403c"/><circle cx="38" cy="36" r="4" fill="#57534e"/>') },
        { id: 'sun', label: 'Slnko', swatch: '#facc15', group: 'Vesmír',
            pattern: pat('sun', 12, 12, '<rect width="12" height="12" fill="#0f172a"/><circle cx="6" cy="6" r="2.5" fill="#facc15"/><path d="M6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11" stroke="#fde047" stroke-width=".7"/>'),
            icon: ico('#020617', '<circle cx="32" cy="32" r="12" fill="#facc15"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M12 12l6 6M46 46l6 6M12 52l6-6M46 18l6-6" stroke="#fde047" stroke-width="3"/>') },
        { id: 'star', label: 'Hviezda', swatch: '#e2e8f0', group: 'Vesmír',
            pattern: pat('star', 12, 12, '<rect width="12" height="12" fill="#0f172a"/><path d="M6 2l1.2 3.2H11L8 7.2 9 11 6 8.8 3 11l1-3.8L1 5.2h3.8z" fill="#e2e8f0"/>'),
            icon: ico('#020617', '<path d="M32 8l6 16h17l-14 10 5 17-14-10-14 10 5-17-14-10h17z" fill="#f8fafc"/>') },
        { id: 'alien', label: 'Mimozemšťan', swatch: '#4ade80', group: 'Vesmír',
            pattern: pat('alien', 12, 12, '<rect width="12" height="12" fill="#0f172a"/><ellipse cx="6" cy="6" rx="3" ry="3.5" fill="#4ade80"/><circle cx="4.5" cy="5.5" r=".7" fill="#052e16"/><circle cx="7.5" cy="5.5" r=".7" fill="#052e16"/>'),
            icon: ico('#020617', '<ellipse cx="32" cy="30" rx="16" ry="20" fill="#4ade80"/><ellipse cx="24" cy="28" rx="5" ry="7" fill="#052e16"/><ellipse cx="40" cy="28" rx="5" ry="7" fill="#052e16"/><path d="M20 10c-4-6-8-4-8 0M44 10c4-6 8-4 8 0" stroke="#4ade80" stroke-width="3"/>') },
        { id: 'shipdoor', label: 'Dvere lode', swatch: '#64748b', group: 'Vesmír',
            pattern: pat('shipdoor', 10, 12, '<rect width="10" height="12" fill="#0f172a"/><rect x="2" y="2" width="6" height="8" rx="1" fill="#334155"/><circle cx="6.5" cy="6" r=".6" fill="#38bdf8"/>'),
            icon: ico('#0f172a', '<rect x="16" y="10" width="32" height="44" rx="6" fill="#334155"/><rect x="22" y="16" width="20" height="32" rx="3" fill="#1e293b"/><circle cx="38" cy="32" r="3" fill="#38bdf8"/>') },
        { id: 'shipcorridor', label: 'Chodba lode', swatch: '#475569', group: 'Vesmír',
            pattern: pat('shipcorridor', 12, 8, '<rect width="12" height="8" fill="#0f172a"/><path d="M0 4h12" stroke="#38bdf8" stroke-width="1.2" opacity=".5"/><path d="M0 1h12M0 7h12" stroke="#334155" stroke-width=".8"/>'),
            icon: ico('#020617', '<path d="M8 8h16v48H8zM40 8h16v48H40z" fill="#334155"/><path d="M24 32h16" stroke="#38bdf8" stroke-width="4"/><circle cx="28" cy="16" r="2" fill="#22d3ee"/><circle cx="36" cy="48" r="2" fill="#22d3ee"/>') }
    ];

    /**
     * JPG v assets/terrain-icons/<id>.jpg
     * Režim „obrázky“ = VÝHRADNE tieto súbory (žiadne SVG miešanie).
     * Poradie hľadania: GitHub Pages → offline pri HTML → offline pri terrains.js
     */
    var GITHUB_ICONS_BASE = 'https://tomaskrs.github.io/kartograf/assets/terrain-icons/';
    /** bust po úprave JPG (biele okraje) */
    var RASTER_CACHE_VER = 'v20261117f';
    var JPG_IDS = [
        'stone', 'forest', 'water', 'cave', 'dungeon', 'desert', 'mountain', 'lava', 'ruins',
        'castle', 'meadow', 'ice', 'road', 'village', 'swamp', 'temple', 'bridge', 'sea',
        'tavern', 'city', 'spaceship', 'treasure', 'graveyard', 'tower', 'planet', 'camp',
        'crossroads', 'ship', 'prison', 'library', 'battle', 'space', 'gate', 'cliff',
        'shop', 'harbor', 'alien', 'trap'
    ];
    JPG_IDS.forEach(function (id) {
        var t = TERRAINS.find(function (x) { return x.id === id; });
        if (t) t.rasterFile = id + '.jpg';
    });

    var rasterReadyCallbacks = [];

    function byId(terrainId) {
        return TERRAINS.find(function (t) { return t.id === (terrainId || ''); }) || TERRAINS[0];
    }

    function assetsBaseUrl() {
        if (typeof document === 'undefined') return 'assets/';
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length - 1; i >= 0; i--) {
            var src = scripts[i].getAttribute('src') || '';
            if (!/terrains\.js(\?|#|$)/i.test(src)) continue;
            try {
                return new URL('.', scripts[i].src || new URL(src, document.baseURI).href).href;
            } catch (_) {
                return src.replace(/[^/]*$/, '');
            }
        }
        try {
            return new URL('assets/', document.baseURI || '').href;
        } catch (_) {
            return 'assets/';
        }
    }

    function withCacheVer(url) {
        if (!url) return url;
        return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'v=' + RASTER_CACHE_VER;
    }

    function candidateRasterUrls(t) {
        if (!t || !t.rasterFile) return [];
        var urls = [];
        var host = (typeof location !== 'undefined' && location.hostname) || '';
        var onGh = /\.github\.io$/i.test(host);
        // Lokálne cesty skôr (rýchle offline); GitHub až ako záloha
        try { urls.push(new URL('assets/terrain-icons/' + t.rasterFile, document.baseURI).href); } catch (_) {}
        try { urls.push(new URL('terrain-icons/' + t.rasterFile, assetsBaseUrl()).href); } catch (_) {}
        urls.push('assets/terrain-icons/' + t.rasterFile);
        if (onGh || host) {
            urls.push(GITHUB_ICONS_BASE + t.rasterFile);
        }
        return urls.filter(function (u, idx, arr) { return !!u && arr.indexOf(u) === idx; })
            .map(withCacheVer);
    }

    /** Timeout, aby offline/GitHub neblokovali lokálne JPG */
    function probeImageUrl(url) {
        return new Promise(function (resolve, reject) {
            if (!url) return reject();
            var img = new Image();
            var done = false;
            var timer = setTimeout(function () {
                if (done) return;
                done = true;
                try { img.src = ''; } catch (_) {}
                reject(new Error('timeout'));
            }, 2500);
            img.onload = function () {
                if (done) return;
                done = true;
                clearTimeout(timer);
                resolve(url);
            };
            img.onerror = function () {
                if (done) return;
                done = true;
                clearTimeout(timer);
                reject(new Error('fail'));
            };
            img.src = url;
        });
    }

    /** Len úspešný JPG – nikdy SVG icon */
    function resolveTerrainSrc(t) {
        if (!t) return Promise.resolve(null);
        if (t.resolvedSrc && t.rasterOk) return Promise.resolve(t.resolvedSrc);
        if (!t.rasterFile) {
            t.rasterOk = false;
            t.resolvedSrc = null;
            return Promise.resolve(null);
        }
        var candidates = candidateRasterUrls(t);
        var chain = candidates.reduce(function (prev, url) {
            return prev.catch(function () { return probeImageUrl(url); });
        }, Promise.reject(new Error('start')));

        return chain.then(function (url) {
            t.resolvedSrc = url;
            t.rasterOk = true;
            return url;
        }).catch(function () {
            t.resolvedSrc = null;
            t.rasterOk = false;
            return null;
        });
    }

    /** JPG URL len ak reálne načítateľný */
    function imageSrc(t) {
        if (!t || !t.rasterOk || !t.resolvedSrc) return null;
        return t.resolvedSrc;
    }

    /**
     * mode: 'image' = len terény s JPG
     * mode: 'pattern' = len so SVG pattern
     * mode: 'icons' = prázdne (bez výplní v zozname okrem hladkej)
     */
    function getList(mode) {
        if (mode === 'image') {
            // Len terény s úspešne načítaným JPG – žiadne SVG ako náhrada
            return TERRAINS.filter(function (t) {
                if (!t.id) return true;
                return !!imageSrc(t);
            });
        }
        if (mode === 'icons') {
            return TERRAINS.filter(function (t) { return !t.id; });
        }
        // pattern: len SVG vzory (bez JPG)
        return TERRAINS.filter(function (t) { return !t.id || t.pattern; });
    }

    function install(defsEl) {
        if (!defsEl || defsEl.querySelector('#terrain-stone')) return;
        var html = TERRAINS.filter(function (t) { return t.pattern; }).map(function (t) { return t.pattern; }).join('');
        if (html) defsEl.insertAdjacentHTML('beforeend', html);
    }

    function ensureSoftMask(defsEl) {
        if (!defsEl || defsEl.querySelector('#terrain-soft-mask')) return;
        var svgNS = 'http://www.w3.org/2000/svg';
        var grad = document.createElementNS(svgNS, 'radialGradient');
        grad.setAttribute('id', 'terrain-soft-fade');
        grad.setAttribute('gradientUnits', 'objectBoundingBox');
        grad.setAttribute('cx', '0.5');
        grad.setAttribute('cy', '0.5');
        grad.setAttribute('r', '0.58');
        [
            ['0%', '1'],
            ['60%', '1'],
            ['82%', '0.4'],
            ['100%', '0']
        ].forEach(function (pair) {
            var stop = document.createElementNS(svgNS, 'stop');
            stop.setAttribute('offset', pair[0]);
            stop.setAttribute('stop-color', '#ffffff');
            stop.setAttribute('stop-opacity', pair[1]);
            grad.appendChild(stop);
        });
        defsEl.appendChild(grad);

        var mask = document.createElementNS(svgNS, 'mask');
        mask.setAttribute('id', 'terrain-soft-mask');
        mask.setAttribute('maskUnits', 'objectBoundingBox');
        mask.setAttribute('maskContentUnits', 'objectBoundingBox');
        mask.setAttribute('x', '0');
        mask.setAttribute('y', '0');
        mask.setAttribute('width', '1');
        mask.setAttribute('height', '1');
        var rect = document.createElementNS(svgNS, 'rect');
        rect.setAttribute('width', '1');
        rect.setAttribute('height', '1');
        rect.setAttribute('fill', 'url(#terrain-soft-fade)');
        mask.appendChild(rect);
        defsEl.appendChild(mask);
    }

    /** V režime obrázkov NEINŠTALUJEME pattern fills – kreslí sa <image>+clip */
    function installImages(defsEl) {
        if (!defsEl) return;
        ensureSoftMask(defsEl);
        // odstráň staré pattern-img (z predchádzajúcich verzií)
        defsEl.querySelectorAll('pattern[id^="terrain-img-"]').forEach(function (p) { p.remove(); });
    }

    function preloadRasters(onDone) {
        var list = TERRAINS.filter(function (t) { return t.id && t.rasterFile; });
        var finished = false;
        function done() {
            if (finished) return;
            finished = true;
            if (typeof onDone === 'function') onDone();
            rasterReadyCallbacks.splice(0).forEach(function (cb) {
                try { cb(); } catch (_) {}
            });
        }
        if (!list.length) { done(); return; }
        Promise.all(list.map(function (t) { return resolveTerrainSrc(t); })).then(done).catch(done);
    }

    function onRastersReady(cb) {
        if (typeof cb === 'function') rasterReadyCallbacks.push(cb);
    }

    /** Pattern fill URL – len pre režim vzorov */
    function fillUrl(terrainId, preferImage) {
        if (!terrainId) return null;
        var t = TERRAINS.find(function (x) { return x.id === terrainId; });
        if (!t) return null;
        if (preferImage) return null; // obrázky idú cez <image>, nie pattern
        return t.pattern ? ('url(#terrain-' + t.id + ')') : null;
    }

    function previewStyle(terrainId, preferImage) {
        var t = byId(terrainId);
        if (preferImage) {
            var src = imageSrc(t);
            if (src) {
                return {
                    backgroundImage: 'url("' + src.replace(/"/g, '\\"') + '")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: t.swatch || '#334155'
                };
            }
            return {
                backgroundImage: 'none',
                backgroundColor: '#1e293b'
            };
        }
        return {
            backgroundImage: 'none',
            backgroundColor: t.swatch || '#334155'
        };
    }

    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () { preloadRasters(); });
        } else {
            preloadRasters();
        }
    }

    global.KartografTerrains = {
        list: TERRAINS,
        getList: getList,
        byId: byId,
        imageSrc: imageSrc,
        assetsBaseUrl: assetsBaseUrl,
        install: install,
        installImages: installImages,
        ensureSoftMask: ensureSoftMask,
        preloadRasters: preloadRasters,
        onRastersReady: onRastersReady,
        fillUrl: fillUrl,
        previewStyle: previewStyle
    };
})(typeof window !== 'undefined' ? window : globalThis);
