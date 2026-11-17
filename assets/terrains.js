/**
 * Cartonode – terény
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
            pattern: pat('stone', 48, 48, '<rect width="48" height="48" fill="#4b5563"/><g transform="scale(0.75)"><path d="M12 44L22 18l12 12 12-16 10 30H12z" fill="#d1d5db"/><path d="M18 44h28" stroke="#9ca3af" stroke-width="3"/></g>'),
            icon: ico('#4b5563', '<path d="M12 44L22 18l12 12 12-16 10 30H12z" fill="#d1d5db"/><path d="M18 44h28" stroke="#9ca3af" stroke-width="3"/>') },
        { id: 'brick', label: 'Tehla', swatch: '#b45309', group: 'Stavba',
            pattern: pat('brick', 48, 48, '<rect width="48" height="48" fill="#7c2d12"/><g transform="scale(0.75)"><rect x="10" y="16" width="20" height="12" rx="2" fill="#f97316"/><rect x="34" y="16" width="20" height="12" rx="2" fill="#ea580c"/><rect x="22" y="32" width="20" height="12" rx="2" fill="#fb923c"/><rect x="10" y="48" width="20" height="8" rx="2" fill="#ea580c"/><rect x="34" y="48" width="20" height="8" rx="2" fill="#f97316"/></g>'),
            icon: ico('#7c2d12', '<rect x="10" y="16" width="20" height="12" rx="2" fill="#f97316"/><rect x="34" y="16" width="20" height="12" rx="2" fill="#ea580c"/><rect x="22" y="32" width="20" height="12" rx="2" fill="#fb923c"/><rect x="10" y="48" width="20" height="8" rx="2" fill="#ea580c"/><rect x="34" y="48" width="20" height="8" rx="2" fill="#f97316"/>') },
        { id: 'corridor', label: 'Chodba', swatch: '#78716c', group: 'Stavba',
            pattern: pat('corridor', 48, 48, '<rect width="48" height="48" fill="#292524"/><g transform="scale(0.75)"><path d="M8 10h14v44H8zm34 0h14v44H42z" fill="#78716c"/><rect x="26" y="28" width="12" height="8" rx="2" fill="#e7e5e4"/></g>'),
            icon: ico('#292524', '<path d="M8 10h14v44H8zm34 0h14v44H42z" fill="#78716c"/><rect x="26" y="28" width="12" height="8" rx="2" fill="#e7e5e4"/>') },
        { id: 'hall', label: 'Sieň', swatch: '#a8a29e', group: 'Stavba',
            pattern: pat('hall', 48, 48, '<rect width="48" height="48" fill="#44403c"/><g transform="scale(0.75)"><path d="M8 52V30L32 12l24 18v22z" fill="#d6d3d1"/><rect x="26" y="34" width="12" height="18" fill="#57534e"/><circle cx="32" cy="24" r="3" fill="#fbbf24"/></g>'),
            icon: ico('#44403c', '<path d="M8 52V30L32 12l24 18v22z" fill="#d6d3d1"/><rect x="26" y="34" width="12" height="18" fill="#57534e"/><circle cx="32" cy="24" r="3" fill="#fbbf24"/>') },
        { id: 'dungeon', label: 'Kobka', swatch: '#57534e', group: 'Stavba',
            pattern: pat('dungeon', 48, 48, '<rect width="48" height="48" fill="#1c1917"/><g transform="scale(0.75)"><rect x="14" y="12" width="36" height="40" rx="3" fill="#57534e"/><path d="M22 12v40M32 12v40M42 12v40" stroke="#1c1917" stroke-width="3"/><circle cx="28" cy="34" r="2" fill="#fbbf24"/></g>'),
            icon: ico('#1c1917', '<rect x="14" y="12" width="36" height="40" rx="3" fill="#57534e"/><path d="M22 12v40M32 12v40M42 12v40" stroke="#1c1917" stroke-width="3"/><circle cx="28" cy="34" r="2" fill="#fbbf24"/>') },
        { id: 'crypt', label: 'Krypta', swatch: '#3f3f46', group: 'Stavba',
            pattern: pat('crypt', 48, 48, '<rect width="48" height="48" fill="#18181b"/><g transform="scale(0.75)"><path d="M16 50V24h12v26M36 50V16h14v34" fill="#a1a1aa"/><path d="M12 50h44" stroke="#71717a" stroke-width="4"/></g>'),
            icon: ico('#18181b', '<path d="M16 50V24h12v26M36 50V16h14v34" fill="#a1a1aa"/><path d="M12 50h44" stroke="#71717a" stroke-width="4"/>') },
        { id: 'castle', label: 'Hrad', swatch: '#64748b', group: 'Stavba',
            pattern: pat('castle', 48, 48, '<rect width="48" height="48" fill="#334155"/><g transform="scale(0.75)"><path d="M10 52V28h8V18h8v10h12V20h8v8h8v24z" fill="#cbd5e1"/><rect x="28" y="36" width="10" height="16" fill="#0f172a"/></g>'),
            icon: ico('#334155', '<path d="M10 52V28h8V18h8v10h12V20h8v8h8v24z" fill="#cbd5e1"/><rect x="28" y="36" width="10" height="16" fill="#0f172a"/>') },
        { id: 'temple', label: 'Chrám', swatch: '#a78bfa', group: 'Stavba',
            pattern: pat('temple', 48, 48, '<rect width="48" height="48" fill="#2e1065"/><g transform="scale(0.75)"><path d="M32 8l24 20H8z" fill="#ddd6fe"/><rect x="14" y="28" width="36" height="24" fill="#a78bfa"/><rect x="26" y="36" width="12" height="16" fill="#2e1065"/></g>'),
            icon: ico('#2e1065', '<path d="M32 8l24 20H8z" fill="#ddd6fe"/><rect x="14" y="28" width="36" height="24" fill="#a78bfa"/><rect x="26" y="36" width="12" height="16" fill="#2e1065"/>') },
        { id: 'ruins', label: 'Ruiny', swatch: '#a8a29e', group: 'Stavba',
            pattern: pat('ruins', 48, 48, '<rect width="48" height="48" fill="#44403c"/><g transform="scale(0.75)"><path d="M10 52V22l8-8v38M28 52V12h12v40M46 52V28h10v12l-4 12" fill="#e7e5e4"/></g>'),
            icon: ico('#44403c', '<path d="M10 52V22l8-8v38M28 52V12h12v40M46 52V28h10v12l-4 12" fill="#e7e5e4"/>') },
        { id: 'tower', label: 'Veža', swatch: '#94a3b8', group: 'Stavba',
            pattern: pat('tower', 48, 48, '<rect width="48" height="48" fill="#1e293b"/><g transform="scale(0.75)"><path d="M22 54V24h20v30z" fill="#94a3b8"/><path d="M20 24L32 8l12 16z" fill="#cbd5e1"/><rect x="28" y="32" width="8" height="8" fill="#0f172a"/></g>'),
            icon: ico('#1e293b', '<path d="M22 54V24h20v30z" fill="#94a3b8"/><path d="M20 24L32 8l12 16z" fill="#cbd5e1"/><rect x="28" y="32" width="8" height="8" fill="#0f172a"/>') },
        { id: 'library', label: 'Knižnica', swatch: '#a16207', group: 'Stavba',
            pattern: pat('library', 48, 48, '<rect width="48" height="48" fill="#292524"/><g transform="scale(0.75)"><rect x="10" y="12" width="10" height="40" rx="1" fill="#b45309"/><rect x="22" y="12" width="10" height="40" rx="1" fill="#d97706"/><rect x="34" y="12" width="10" height="40" rx="1" fill="#f59e0b"/><rect x="46" y="12" width="8" height="40" rx="1" fill="#92400e"/></g>'),
            icon: ico('#292524', '<rect x="10" y="12" width="10" height="40" rx="1" fill="#b45309"/><rect x="22" y="12" width="10" height="40" rx="1" fill="#d97706"/><rect x="34" y="12" width="10" height="40" rx="1" fill="#f59e0b"/><rect x="46" y="12" width="8" height="40" rx="1" fill="#92400e"/>') },
        { id: 'prison', label: 'Väzenie', swatch: '#52525b', group: 'Stavba',
            pattern: pat('prison', 48, 48, '<rect width="48" height="48" fill="#18181b"/><g transform="scale(0.75)"><rect x="12" y="10" width="40" height="44" rx="2" fill="none" stroke="#d4d4d8" stroke-width="3"/><path d="M22 10v44M32 10v44M42 10v44" stroke="#a1a1aa" stroke-width="3"/><circle cx="36" cy="34" r="2.5" fill="#fbbf24"/></g>'),
            icon: ico('#18181b', '<rect x="12" y="10" width="40" height="44" rx="2" fill="none" stroke="#d4d4d8" stroke-width="3"/><path d="M22 10v44M32 10v44M42 10v44" stroke="#a1a1aa" stroke-width="3"/><circle cx="36" cy="34" r="2.5" fill="#fbbf24"/>') },

        // —— Osídlenie ——
        { id: 'village', label: 'Dedina', swatch: '#f97316', group: 'Osídlenie',
            pattern: pat('village', 48, 48, '<rect width="48" height="48" fill="#365314"/><g transform="scale(0.75)"><path d="M10 46V30L24 16l14 14v16z" fill="#fdba74"/><rect x="40" y="34" width="14" height="12" fill="#fed7aa"/><path d="M40 34l7-10 7 10" fill="#b45309"/><rect x="20" y="34" width="8" height="12" fill="#9a3412"/></g>'),
            icon: ico('#365314', '<path d="M10 46V30L24 16l14 14v16z" fill="#fdba74"/><rect x="40" y="34" width="14" height="12" fill="#fed7aa"/><path d="M40 34l7-10 7 10" fill="#b45309"/><rect x="20" y="34" width="8" height="12" fill="#9a3412"/>') },
        { id: 'city', label: 'Mesto', swatch: '#64748b', group: 'Osídlenie',
            pattern: pat('city', 48, 48, '<rect width="48" height="48" fill="#0f172a"/><g transform="scale(0.75)"><rect x="8" y="30" width="12" height="22" fill="#64748b"/><rect x="22" y="16" width="14" height="36" fill="#94a3b8"/><rect x="38" y="24" width="16" height="28" fill="#64748b"/><path d="M6 52h52" stroke="#334155" stroke-width="3"/></g>'),
            icon: ico('#0f172a', '<rect x="8" y="30" width="12" height="22" fill="#64748b"/><rect x="22" y="16" width="14" height="36" fill="#94a3b8"/><rect x="38" y="24" width="16" height="28" fill="#64748b"/><path d="M6 52h52" stroke="#334155" stroke-width="3"/>') },
        { id: 'tavern', label: 'Krčma', swatch: '#d97706', group: 'Osídlenie',
            pattern: pat('tavern', 48, 48, '<rect width="48" height="48" fill="#292524"/><g transform="scale(0.75)"><path d="M10 50V28h44v22z" fill="#b45309"/><path d="M8 28L32 12l24 16z" fill="#92400e"/><rect x="26" y="34" width="12" height="16" fill="#451a03"/><circle cx="48" cy="18" r="5" fill="#fbbf24"/></g>'),
            icon: ico('#292524', '<path d="M10 50V28h44v22z" fill="#b45309"/><path d="M8 28L32 12l24 16z" fill="#92400e"/><rect x="26" y="34" width="12" height="16" fill="#451a03"/><circle cx="48" cy="18" r="5" fill="#fbbf24"/>') },
        { id: 'shop', label: 'Obchod', swatch: '#f59e0b', group: 'Osídlenie',
            pattern: pat('shop', 48, 48, '<rect width="48" height="48" fill="#365314"/><g transform="scale(0.75)"><path d="M8 30h48l-4 22H12z" fill="#fbbf24"/><path d="M6 30L32 14l26 16z" fill="#f59e0b"/><rect x="26" y="36" width="12" height="16" fill="#78350f"/></g>'),
            icon: ico('#365314', '<path d="M8 30h48l-4 22H12z" fill="#fbbf24"/><path d="M6 30L32 14l26 16z" fill="#f59e0b"/><rect x="26" y="36" width="12" height="16" fill="#78350f"/>') },
        { id: 'harbor', label: 'Prístav', swatch: '#0ea5e9', group: 'Osídlenie',
            pattern: pat('harbor', 48, 48, '<rect width="48" height="48" fill="#0c4a6e"/><g transform="scale(0.75)"><path d="M4 42h56" stroke="#38bdf8" stroke-width="5"/><path d="M10 42V24h26v18z" fill="#a16207"/><path d="M42 38l14-10v20z" fill="#fdba74"/></g>'),
            icon: ico('#0c4a6e', '<path d="M4 42h56" stroke="#38bdf8" stroke-width="5"/><path d="M10 42V24h26v18z" fill="#a16207"/><path d="M42 38l14-10v20z" fill="#fdba74"/>') },

        // —— Príroda ——
        { id: 'plain', label: 'Pláň', swatch: '#84cc16', group: 'Príroda',
            pattern: pat('plain', 48, 48, '<rect width="48" height="48" fill="#3f6212"/><g transform="scale(0.75)"><path d="M6 46q14-22 28 0" fill="none" stroke="#a3e635" stroke-width="4"/><path d="M22 46q12-18 26 0" fill="none" stroke="#84cc16" stroke-width="4"/><circle cx="48" cy="16" r="8" fill="#fde047"/></g>'),
            icon: ico('#3f6212', '<path d="M6 46q14-22 28 0" fill="none" stroke="#a3e635" stroke-width="4"/><path d="M22 46q12-18 26 0" fill="none" stroke="#84cc16" stroke-width="4"/><circle cx="48" cy="16" r="8" fill="#fde047"/>') },
        { id: 'meadow', label: 'Lúka', swatch: '#4ade80', group: 'Príroda',
            pattern: pat('meadow', 48, 48, '<rect width="48" height="48" fill="#166534"/><g transform="scale(0.75)"><circle cx="18" cy="22" r="6" fill="#f472b6"/><circle cx="34" cy="16" r="5" fill="#facc15"/><circle cx="48" cy="24" r="5" fill="#fb7185"/><path d="M8 50q16-18 32 0" fill="none" stroke="#86efac" stroke-width="4"/></g>'),
            icon: ico('#166534', '<circle cx="18" cy="22" r="6" fill="#f472b6"/><circle cx="34" cy="16" r="5" fill="#facc15"/><circle cx="48" cy="24" r="5" fill="#fb7185"/><path d="M8 50q16-18 32 0" fill="none" stroke="#86efac" stroke-width="4"/>') },
        { id: 'forest', label: 'Les', swatch: '#166534', group: 'Príroda',
            pattern: pat('forest', 48, 48, '<rect width="48" height="48" fill="#052e16"/><g transform="scale(0.75)"><path d="M32 10l14 36H18z" fill="#22c55e"/><path d="M14 28l10 22H4z" fill="#15803d"/><path d="M50 30l10 20H40z" fill="#16a34a"/><rect x="29" y="44" width="6" height="10" fill="#78350f"/></g>'),
            icon: ico('#052e16', '<path d="M32 10l14 36H18z" fill="#22c55e"/><path d="M14 28l10 22H4z" fill="#15803d"/><path d="M50 30l10 20H40z" fill="#16a34a"/><rect x="29" y="44" width="6" height="10" fill="#78350f"/>') },
        { id: 'swamp', label: 'Močiar', swatch: '#365314', group: 'Príroda',
            pattern: pat('swamp', 48, 48, '<rect width="48" height="48" fill="#1a2e05"/><g transform="scale(0.75)"><ellipse cx="24" cy="40" rx="16" ry="8" fill="#3f6212"/><ellipse cx="44" cy="46" rx="14" ry="6" fill="#4d7c0f"/><path d="M18 28c4-12 10-12 14 0" fill="none" stroke="#65a30d" stroke-width="3"/></g>'),
            icon: ico('#1a2e05', '<ellipse cx="24" cy="40" rx="16" ry="8" fill="#3f6212"/><ellipse cx="44" cy="46" rx="14" ry="6" fill="#4d7c0f"/><path d="M18 28c4-12 10-12 14 0" fill="none" stroke="#65a30d" stroke-width="3"/>') },
        { id: 'mountain', label: 'Hory', swatch: '#94a3b8', group: 'Príroda',
            pattern: pat('mountain', 48, 48, '<rect width="48" height="48" fill="#1e293b"/><g transform="scale(0.75)"><path d="M4 52L24 12l12 22 8-14 16 32z" fill="#94a3b8"/><path d="M24 12l6 12-10 4z" fill="#f8fafc"/></g>'),
            icon: ico('#1e293b', '<path d="M4 52L24 12l12 22 8-14 16 32z" fill="#94a3b8"/><path d="M24 12l6 12-10 4z" fill="#f8fafc"/>') },
        { id: 'snow', label: 'Sneh', swatch: '#e2e8f0', group: 'Príroda',
            pattern: pat('snow', 48, 48, '<rect width="48" height="48" fill="#64748b"/><g transform="scale(0.75)"><path d="M32 10l4 16h16L40 36l4 16-12-10-12 10 4-16L12 26h16z" fill="#f8fafc"/><circle cx="14" cy="14" r="2.5" fill="#fff"/></g>'),
            icon: ico('#64748b', '<path d="M32 10l4 16h16L40 36l4 16-12-10-12 10 4-16L12 26h16z" fill="#f8fafc"/><circle cx="14" cy="14" r="2.5" fill="#fff"/>') },
        { id: 'camp', label: 'Tábor', swatch: '#f97316', group: 'Príroda',
            pattern: pat('camp', 48, 48, '<rect width="48" height="48" fill="#1c1917"/><g transform="scale(0.75)"><path d="M32 12c-6 16-12 28-12 38h24c0-10-6-22-12-38z" fill="#f97316"/><circle cx="32" cy="12" r="5" fill="#fde047"/><path d="M16 52h32" stroke="#a8a29e" stroke-width="3"/></g>'),
            icon: ico('#1c1917', '<path d="M32 12c-6 16-12 28-12 38h24c0-10-6-22-12-38z" fill="#f97316"/><circle cx="32" cy="12" r="5" fill="#fde047"/><path d="M16 52h32" stroke="#a8a29e" stroke-width="3"/>') },
        { id: 'cliff', label: 'Útes', swatch: '#78716c', group: 'Príroda',
            pattern: pat('cliff', 48, 48, '<rect width="48" height="48" fill="#0c0a09"/><g transform="scale(0.75)"><path d="M6 8h28v48H6z" fill="#a8a29e"/><path d="M34 20l24 16v20H34z" fill="#57534e"/><path d="M12 24h14M12 36h10" stroke="#44403c" stroke-width="3"/></g>'),
            icon: ico('#0c0a09', '<path d="M6 8h28v48H6z" fill="#a8a29e"/><path d="M34 20l24 16v20H34z" fill="#57534e"/><path d="M12 24h14M12 36h10" stroke="#44403c" stroke-width="3"/>') },

        // —— Živly / voda ——
        { id: 'water', label: 'Voda', swatch: '#0284c7', group: 'Živly',
            pattern: pat('water', 48, 48, '<rect width="48" height="48" fill="#0c4a6e"/><g transform="scale(0.75)"><path d="M6 22q13 14 26 0t26 0" fill="none" stroke="#7dd3fc" stroke-width="4"/><path d="M6 38q13 14 26 0t26 0" fill="none" stroke="#38bdf8" stroke-width="4"/></g>'),
            icon: ico('#0c4a6e', '<path d="M6 22q13 14 26 0t26 0" fill="none" stroke="#7dd3fc" stroke-width="4"/><path d="M6 38q13 14 26 0t26 0" fill="none" stroke="#38bdf8" stroke-width="4"/>') },
        { id: 'river', label: 'Rieka', swatch: '#0ea5e9', group: 'Živly',
            pattern: pat('river', 48, 48, '<rect width="48" height="48" fill="#075985"/><g transform="scale(0.75)"><path d="M22 6c14 12 14 18 0 30s-14 18 0 28" fill="none" stroke="#7dd3fc" stroke-width="10" stroke-linecap="round"/></g>'),
            icon: ico('#075985', '<path d="M22 6c14 12 14 18 0 30s-14 18 0 28" fill="none" stroke="#7dd3fc" stroke-width="10" stroke-linecap="round"/>') },
        { id: 'sea', label: 'More', swatch: '#1d4ed8', group: 'Živly',
            pattern: pat('sea', 48, 48, '<rect width="48" height="48" fill="#1e3a8a"/><g transform="scale(0.75)"><path d="M4 18q15 16 30 0t30 0" fill="none" stroke="#93c5fd" stroke-width="3"/><path d="M4 34q15 16 30 0t30 0" fill="none" stroke="#60a5fa" stroke-width="3"/><path d="M4 48q15 12 30 0t30 0" fill="none" stroke="#93c5fd" stroke-width="3"/></g>'),
            icon: ico('#1e3a8a', '<path d="M4 18q15 16 30 0t30 0" fill="none" stroke="#93c5fd" stroke-width="3"/><path d="M4 34q15 16 30 0t30 0" fill="none" stroke="#60a5fa" stroke-width="3"/><path d="M4 48q15 12 30 0t30 0" fill="none" stroke="#93c5fd" stroke-width="3"/>') },
        { id: 'lava', label: 'Láva', swatch: '#ef4444', group: 'Živly',
            pattern: pat('lava', 48, 48, '<rect width="48" height="48" fill="#450a0a"/><g transform="scale(0.75)"><path d="M8 50C16 20 22 36 32 14c8 20 12 10 20 28 4 6 4 10 6 12H8z" fill="#f97316"/><path d="M20 50c6-18 10-10 16-22 6 12 10 6 14 20" fill="#fbbf24"/></g>'),
            icon: ico('#450a0a', '<path d="M8 50C16 20 22 36 32 14c8 20 12 10 20 28 4 6 4 10 6 12H8z" fill="#f97316"/><path d="M20 50c6-18 10-10 16-22 6 12 10 6 14 20" fill="#fbbf24"/>') },
        { id: 'ice', label: 'Ľad', swatch: '#67e8f9', group: 'Živly',
            pattern: pat('ice', 48, 48, '<rect width="48" height="48" fill="#155e75"/><g transform="scale(0.75)"><path d="M32 8l20 28-20 20L12 36z" fill="#a5f3fc"/><path d="M32 14l14 22-14 14L18 36z" fill="#67e8f9"/></g>'),
            icon: ico('#155e75', '<path d="M32 8l20 28-20 20L12 36z" fill="#a5f3fc"/><path d="M32 14l14 22-14 14L18 36z" fill="#67e8f9"/>') },

        // —— Podzemie ——
        { id: 'cave', label: 'Jaskyňa', swatch: '#44403c', group: 'Podzemie',
            pattern: pat('cave', 48, 48, '<rect width="48" height="48" fill="#0c0a09"/><g transform="scale(0.75)"><path d="M8 52C8 24 20 12 32 12s24 12 24 40z" fill="#57534e"/><ellipse cx="32" cy="40" rx="12" ry="10" fill="#0c0a09"/></g>'),
            icon: ico('#0c0a09', '<path d="M8 52C8 24 20 12 32 12s24 12 24 40z" fill="#57534e"/><ellipse cx="32" cy="40" rx="12" ry="10" fill="#0c0a09"/>') },
        { id: 'mines', label: 'Bane', swatch: '#a16207', group: 'Podzemie',
            pattern: pat('mines', 48, 48, '<rect width="48" height="48" fill="#1c1917"/><g transform="scale(0.75)"><circle cx="32" cy="32" r="18" fill="none" stroke="#a8a29e" stroke-width="4"/><path d="M20 20l24 24M44 20L20 44" stroke="#fbbf24" stroke-width="4"/><circle cx="32" cy="32" r="5" fill="#ca8a04"/></g>'),
            icon: ico('#1c1917', '<circle cx="32" cy="32" r="18" fill="none" stroke="#a8a29e" stroke-width="4"/><path d="M20 20l24 24M44 20L20 44" stroke="#fbbf24" stroke-width="4"/><circle cx="32" cy="32" r="5" fill="#ca8a04"/>') },
        { id: 'graveyard', label: 'Cintorín', swatch: '#71717a', group: 'Podzemie',
            pattern: pat('graveyard', 48, 48, '<rect width="48" height="48" fill="#18181b"/><g transform="scale(0.75)"><path d="M14 52V28h12v24M34 52V18h16v34" fill="#a1a1aa"/><path d="M36 18h12v8H36z" fill="#d4d4d8"/><path d="M40 10v8M36 14h8" stroke="#e4e4e7" stroke-width="3"/></g>'),
            icon: ico('#18181b', '<path d="M14 52V28h12v24M34 52V18h16v34" fill="#a1a1aa"/><path d="M36 18h12v8H36z" fill="#d4d4d8"/><path d="M40 10v8M36 14h8" stroke="#e4e4e7" stroke-width="3"/>') },

        // —— Cesty ——
        { id: 'sand', label: 'Piesok', swatch: '#d97706', group: 'Púšť',
            pattern: pat('sand', 48, 48, '<rect width="48" height="48" fill="#78350f"/><g transform="scale(0.75)"><path d="M4 28q15-16 30 0t30 0" fill="none" stroke="#fbbf24" stroke-width="4"/><path d="M4 44q15-12 30 0t30 0" fill="none" stroke="#f59e0b" stroke-width="4"/></g>'),
            icon: ico('#78350f', '<path d="M4 28q15-16 30 0t30 0" fill="none" stroke="#fbbf24" stroke-width="4"/><path d="M4 44q15-12 30 0t30 0" fill="none" stroke="#f59e0b" stroke-width="4"/>') },
        { id: 'desert', label: 'Púšť', swatch: '#f59e0b', group: 'Púšť',
            pattern: pat('desert', 48, 48, '<rect width="48" height="48" fill="#92400e"/><g transform="scale(0.75)"><path d="M4 42q16-20 32-4t28-4" fill="none" stroke="#fcd34d" stroke-width="5"/><circle cx="48" cy="16" r="8" fill="#fef3c7"/></g>'),
            icon: ico('#92400e', '<path d="M4 42q16-20 32-4t28-4" fill="none" stroke="#fcd34d" stroke-width="5"/><circle cx="48" cy="16" r="8" fill="#fef3c7"/>') },
        { id: 'road', label: 'Cesta', swatch: '#a8a29e', group: 'Cesty',
            pattern: pat('road', 48, 48, '<rect width="48" height="48" fill="#1c1917"/><g transform="scale(0.75)"><path d="M18 4h28v56H18z" fill="#78716c"/><path d="M32 8v10M32 26v10M32 44v10" stroke="#fafaf9" stroke-width="4" stroke-linecap="round"/></g>'),
            icon: ico('#1c1917', '<path d="M18 4h28v56H18z" fill="#78716c"/><path d="M32 8v10M32 26v10M32 44v10" stroke="#fafaf9" stroke-width="4" stroke-linecap="round"/>') },
        { id: 'bridge', label: 'Most', swatch: '#92400e', group: 'Cesty',
            pattern: pat('bridge', 48, 48, '<rect width="48" height="48" fill="#1e3a5f"/><g transform="scale(0.75)"><path d="M4 46h56" stroke="#38bdf8" stroke-width="4"/><path d="M8 30h48v10H8z" fill="#a16207"/><path d="M14 18v12M26 14v16M38 14v16M50 18v12" stroke="#78350f" stroke-width="4"/></g>'),
            icon: ico('#1e3a5f', '<path d="M4 46h56" stroke="#38bdf8" stroke-width="4"/><path d="M8 30h48v10H8z" fill="#a16207"/><path d="M14 18v12M26 14v16M38 14v16M50 18v12" stroke="#78350f" stroke-width="4"/>') },
        { id: 'crossroads', label: 'Rázcestie', swatch: '#a8a29e', group: 'Cesty',
            pattern: pat('crossroads', 48, 48, '<rect width="48" height="48" fill="#365314"/><g transform="scale(0.75)"><path d="M28 4h8v56h-8zM4 28h56v8H4z" fill="#d6d3d1"/><rect x="34" y="12" width="16" height="8" rx="1" fill="#fbbf24"/></g>'),
            icon: ico('#365314', '<path d="M28 4h8v56h-8zM4 28h56v8H4z" fill="#d6d3d1"/><rect x="34" y="12" width="16" height="8" rx="1" fill="#fbbf24"/>') },
        { id: 'gate', label: 'Brána', swatch: '#78716c', group: 'Cesty',
            pattern: pat('gate', 48, 48, '<rect width="48" height="48" fill="#1c1917"/><g transform="scale(0.75)"><path d="M10 54V16h18v38M36 54V16h18v38" fill="#a8a29e"/><circle cx="24" cy="36" r="2.5" fill="#fbbf24"/><circle cx="40" cy="36" r="2.5" fill="#fbbf24"/></g>'),
            icon: ico('#1c1917', '<path d="M10 54V16h18v38M36 54V16h18v38" fill="#a8a29e"/><circle cx="24" cy="36" r="2.5" fill="#fbbf24"/><circle cx="40" cy="36" r="2.5" fill="#fbbf24"/>') },
        { id: 'ship', label: 'Loď', swatch: '#92400e', group: 'Cesty',
            pattern: pat('ship', 48, 48, '<rect width="48" height="48" fill="#0c4a6e"/><g transform="scale(0.75)"><path d="M8 40h48l-8 14H16z" fill="#a16207"/><path d="M32 10v30" stroke="#e7e5e4" stroke-width="3"/><path d="M32 12l20 16H32z" fill="#f8fafc"/></g>'),
            icon: ico('#0c4a6e', '<path d="M8 40h48l-8 14H16z" fill="#a16207"/><path d="M32 10v30" stroke="#e7e5e4" stroke-width="3"/><path d="M32 12l20 16H32z" fill="#f8fafc"/>') },

        // —— Udalosti ——
        { id: 'battle', label: 'Boj', swatch: '#ef4444', group: 'Udalosti',
            pattern: pat('battle', 48, 48, '<rect width="48" height="48" fill="#1c1917"/><g transform="scale(0.75)"><path d="M14 14l20 20" stroke="#f8fafc" stroke-width="5" stroke-linecap="round"/><path d="M50 14L30 34" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="42" r="7" fill="#fbbf24"/></g>'),
            icon: ico('#1c1917', '<path d="M14 14l20 20" stroke="#f8fafc" stroke-width="5" stroke-linecap="round"/><path d="M50 14L30 34" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="42" r="7" fill="#fbbf24"/>') },
        { id: 'treasure', label: 'Poklad', swatch: '#f59e0b', group: 'Udalosti',
            pattern: pat('treasure', 48, 48, '<rect width="48" height="48" fill="#1c1917"/><g transform="scale(0.75)"><path d="M12 28h40v24H12z" fill="#b45309"/><path d="M12 28h40v10H12z" fill="#fbbf24"/><circle cx="32" cy="42" r="4" fill="#78350f"/><circle cx="20" cy="18" r="3" fill="#fde047"/></g>'),
            icon: ico('#1c1917', '<path d="M12 28h40v24H12z" fill="#b45309"/><path d="M12 28h40v10H12z" fill="#fbbf24"/><circle cx="32" cy="42" r="4" fill="#78350f"/><circle cx="20" cy="18" r="3" fill="#fde047"/>') },
        { id: 'trap', label: 'Pasca', swatch: '#a3e635', group: 'Udalosti',
            pattern: pat('trap', 48, 48, '<rect width="48" height="48" fill="#1c1917"/><g transform="scale(0.75)"><path d="M10 42h44l-6 14H16z" fill="#57534e"/><path d="M20 42V20l8 10 6-16 6 16 8-10v22" fill="none" stroke="#a3e635" stroke-width="3"/></g>'),
            icon: ico('#1c1917', '<path d="M10 42h44l-6 14H16z" fill="#57534e"/><path d="M20 42V20l8 10 6-16 6 16 8-10v22" fill="none" stroke="#a3e635" stroke-width="3"/>') },

        // —— Vesmír ——
        { id: 'space', label: 'Vesmír', swatch: '#312e81', group: 'Vesmír',
            pattern: pat('space', 48, 48, '<rect width="48" height="48" fill="#020617"/><g transform="scale(0.75)"><circle cx="14" cy="16" r="2" fill="#e2e8f0"/><circle cx="40" cy="12" r="1.5" fill="#fff"/><circle cx="52" cy="28" r="2" fill="#c4b5fd"/><circle cx="36" cy="36" r="10" fill="#6366f1"/></g>'),
            icon: ico('#020617', '<circle cx="14" cy="16" r="2" fill="#e2e8f0"/><circle cx="40" cy="12" r="1.5" fill="#fff"/><circle cx="52" cy="28" r="2" fill="#c4b5fd"/><circle cx="36" cy="36" r="10" fill="#6366f1"/>') },
        { id: 'spaceship', label: 'Vesm. loď', swatch: '#38bdf8', group: 'Vesmír',
            pattern: pat('spaceship', 48, 48, '<rect width="48" height="48" fill="#020617"/><g transform="scale(0.75)"><path d="M10 34h34l12-6-12-6H10l6 6z" fill="#38bdf8"/><circle cx="14" cy="34" r="4" fill="#fde047"/></g>'),
            icon: ico('#020617', '<path d="M10 34h34l12-6-12-6H10l6 6z" fill="#38bdf8"/><circle cx="14" cy="34" r="4" fill="#fde047"/>') },
        { id: 'planet', label: 'Planéta', swatch: '#22d3ee', group: 'Vesmír',
            pattern: pat('planet', 48, 48, '<rect width="48" height="48" fill="#020617"/><g transform="scale(0.75)"><circle cx="32" cy="32" r="18" fill="#0284c7"/><path d="M10 30c12 10 32 10 44 0" fill="none" stroke="#67e8f9" stroke-width="3"/></g>'),
            icon: ico('#020617', '<circle cx="32" cy="32" r="18" fill="#0284c7"/><path d="M10 30c12 10 32 10 44 0" fill="none" stroke="#67e8f9" stroke-width="3"/>') },
        { id: 'asteroid', label: 'Asteroid', swatch: '#a8a29e', group: 'Vesmír',
            pattern: pat('asteroid', 48, 48, '<rect width="48" height="48" fill="#020617"/><g transform="scale(0.75)"><ellipse cx="32" cy="32" rx="20" ry="16" fill="#a8a29e"/><circle cx="24" cy="28" r="4" fill="#57534e"/><circle cx="40" cy="38" r="5" fill="#78716c"/></g>'),
            icon: ico('#020617', '<ellipse cx="32" cy="32" rx="20" ry="16" fill="#a8a29e"/><circle cx="24" cy="28" r="4" fill="#57534e"/><circle cx="40" cy="38" r="5" fill="#78716c"/>') },
        { id: 'sun', label: 'Slnko', swatch: '#facc15', group: 'Vesmír',
            pattern: pat('sun', 48, 48, '<rect width="48" height="48" fill="#020617"/><g transform="scale(0.75)"><circle cx="32" cy="32" r="12" fill="#facc15"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M14 14l6 6M44 44l6 6M14 50l6-6M44 14l6-6" stroke="#fde047" stroke-width="3" stroke-linecap="round"/></g>'),
            icon: ico('#020617', '<circle cx="32" cy="32" r="12" fill="#facc15"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M14 14l6 6M44 44l6 6M14 50l6-6M44 14l6-6" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>') },
        { id: 'star', label: 'Hviezda', swatch: '#e2e8f0', group: 'Vesmír',
            pattern: pat('star', 48, 48, '<rect width="48" height="48" fill="#020617"/><g transform="scale(0.75)"><path d="M32 8l6 18h18L44 38l4 18-16-10-16 10 4-18L8 26h18z" fill="#f8fafc"/></g>'),
            icon: ico('#020617', '<path d="M32 8l6 18h18L44 38l4 18-16-10-16 10 4-18L8 26h18z" fill="#f8fafc"/>') },
        { id: 'alien', label: 'Mimozemšťan', swatch: '#4ade80', group: 'Vesmír',
            pattern: pat('alien', 48, 48, '<rect width="48" height="48" fill="#020617"/><g transform="scale(0.75)"><ellipse cx="32" cy="34" rx="16" ry="18" fill="#4ade80"/><ellipse cx="24" cy="32" rx="5" ry="8" fill="#052e16"/><ellipse cx="40" cy="32" rx="5" ry="8" fill="#052e16"/></g>'),
            icon: ico('#020617', '<ellipse cx="32" cy="34" rx="16" ry="18" fill="#4ade80"/><ellipse cx="24" cy="32" rx="5" ry="8" fill="#052e16"/><ellipse cx="40" cy="32" rx="5" ry="8" fill="#052e16"/>') },
        { id: 'shipdoor', label: 'Dvere lode', swatch: '#64748b', group: 'Vesmír',
            pattern: pat('shipdoor', 48, 48, '<rect width="48" height="48" fill="#0f172a"/><g transform="scale(0.75)"><rect x="16" y="8" width="32" height="48" rx="8" fill="#475569"/><rect x="22" y="16" width="20" height="32" rx="4" fill="#1e293b"/><circle cx="38" cy="32" r="3" fill="#38bdf8"/></g>'),
            icon: ico('#0f172a', '<rect x="16" y="8" width="32" height="48" rx="8" fill="#475569"/><rect x="22" y="16" width="20" height="32" rx="4" fill="#1e293b"/><circle cx="38" cy="32" r="3" fill="#38bdf8"/>') },
        { id: 'shipcorridor', label: 'Chodba lode', swatch: '#475569', group: 'Vesmír',
            pattern: pat('shipcorridor', 48, 48, '<rect width="48" height="48" fill="#020617"/><g transform="scale(0.75)"><path d="M6 8h16v48H6zm36 0h16v48H42z" fill="#334155"/><rect x="26" y="28" width="12" height="8" rx="2" fill="#22d3ee"/></g>'),
            icon: ico('#020617', '<path d="M6 8h16v48H6zm36 0h16v48H42z" fill="#334155"/><rect x="26" y="28" width="12" height="8" rx="2" fill="#22d3ee"/>') }
    ];

    /**
     * JPG v assets/terrain-icons/<id>.jpg
     * Režim „obrázky“ = VÝHRADNE tieto súbory (žiadne SVG miešanie).
     * Poradie hľadania: GitHub Pages → offline pri HTML → offline pri terrains.js
     */
    var GITHUB_ICONS_BASE = 'https://tomaskrs.github.io/cartonode/assets/terrain-icons/';
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
        if (t && t.icon) {
            return {
                backgroundImage: 'url("' + String(t.icon).replace(/"/g, '\\"') + '")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: t.swatch || '#334155'
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
