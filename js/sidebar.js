(async function checkAuth() {
    if (window.location.pathname.endsWith('login.html')) return;
    
    // Inclusion automatique du SDK Supabase si non présent
    if (typeof supabase === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        document.head.appendChild(script);
        await new Promise(resolve => script.onload = resolve);
    }
    
    const sbClient = supabase.createClient('https://tumrbyxfnkqobyfzucax.supabase.co', 'sb_publishable_mmpD1yytpJEEJ7FV3oTwzA_Sa55Jf_8');
    const { data: { session } } = await sbClient.auth.getSession();
    
    if (!session) {
        const isAtRoot = !window.location.pathname.includes('/outils/');
        window.location.href = isAtRoot ? 'login.html' : '../login.html';
    }
})();
(function() {
    const styleId = 'dojo-sidebar-auto-styles';
    if (!document.getElementById(styleId)) {
        const styleEl = document.createElement('style');
        styleEl.id = styleId;
        styleEl.innerHTML = `
            :root {
                --rouge-dojo: #C41E3A;
                --rouge-hover: #A3182E;
                --noir-doux: rgba(26, 26, 26, 0.88); 
                --noir-surface: rgba(38, 38, 38, 0.95);
                --text-light: #FFFFFF;
                --text-muted: #B8B8B8;
            }

            .sidebar {
                width: 270px;
                background: var(--noir-doux);
                backdrop-filter: blur(15px);
                -webkit-backdrop-filter: blur(15px);
                background-image: url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66ZM28 100L0 84L0 68L28 84L56 68L56 84L28 100Z' fill='none' stroke='%23ffffff' stroke-opacity='0.08' stroke-width='1.8'/%3E%3C/svg%3E");
                color: var(--text-light);
                display: flex;
                flex-direction: column;
                height: 100vh;
                flex-shrink: 0;
                box-shadow: 4px 0 25px rgba(0,0,0,0.15);
                border-right: 1px solid rgba(255, 255, 255, 0.08);
                z-index: 1000;
                font-family: 'Roboto', sans-serif;
            }

            .workspace-container {
                position: relative;
                padding: 12px 14px;
                border-bottom: 1px solid rgba(255,255,255,0.08);
                background: rgba(0,0,0,0.2);
            }

            .workspace-btn {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 12px;
                background: transparent;
                border: 1px solid transparent;
                color: #FFF;
                cursor: pointer;
                text-align: left;
                padding: 8px 10px;
                border-radius: 10px;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .workspace-btn:hover {
                background: rgba(255,255,255,0.1);
                border-color: rgba(255,255,255,0.2);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }

            .workspace-icon-box {
                width: 36px;
                height: 36px;
                background-color: var(--rouge-dojo);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                box-shadow: 0 4px 12px rgba(196, 30, 58, 0.5); 
                border: 1px solid rgba(255,255,255,0.2);
            }

            .workspace-icon-box img {
                width: 24px;
                height: 24px;
                object-fit: contain;
            }

            .workspace-text { flex: 1; overflow: hidden; }

            .workspace-title {
                font-family: 'Fredoka', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                color: #FFF;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 1.2;
                letter-spacing: 0.3px;
            }

            .workspace-sub {
                font-size: 0.75rem;
                color: var(--text-muted);
                font-weight: 500;
            }

            .workspace-chevron {
                font-size: 0.75rem;
                color: var(--text-muted);
            }

            .workspace-dropdown {
                display: none;
                position: absolute;
                top: calc(100% + 4px);
                left: 10px;
                right: 10px;
                background: var(--noir-surface);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.15);
                border-radius: 12px;
                box-shadow: 0 15px 35px rgba(0,0,0,0.4);
                z-index: 9999;
                padding: 8px;
            }

            .workspace-dropdown.show { display: block; animation: slideDown 0.2s ease-out; }
            @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

            .workspace-dropdown-header {
                font-size: 0.7rem;
                font-weight: 700;
                text-transform: uppercase;
                color: var(--text-muted);
                padding: 6px 8px 6px 8px;
                letter-spacing: 0.5px;
            }

            .workspace-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px;
                border-radius: 8px;
                color: #CBD5E1;
                text-decoration: none;
                font-size: 0.85rem;
                font-weight: 500;
                transition: all 0.2s;
            }

            .workspace-item:hover {
                background: rgba(255,255,255,0.1);
                color: #FFF;
                transform: translateX(2px);
            }

            .workspace-item.active {
                background: rgba(196, 30, 58, 0.25);
                color: #FFF;
                font-weight: 600;
                border: 1px solid rgba(196, 30, 58, 0.4);
            }

            .workspace-item-icon {
                width: 30px;
                height: 30px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .workspace-item-icon img {
                width: 20px;
                height: 20px;
                object-fit: contain;
            }

            .sidebar-emoji-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 5px;
                padding: 12px 10px;
                background: rgba(0,0,0,0.1);
                border-bottom: 1px solid rgba(255,255,255,0.08);
            }

            .emoji-tab-btn {
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.06);
                border-radius: 8px;
                padding: 6px 2px;
                text-align: center;
                cursor: pointer;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .emoji-tab-btn:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
            .emoji-tab-btn.active {
                background: var(--rouge-dojo);
                border-color: rgba(255,255,255,0.3);
                box-shadow: 0 4px 15px rgba(196, 30, 58, 0.5);
                transform: translateY(-2px);
            }
            .emoji-tab-icon { font-size: 1.15rem; line-height: 1.2; text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
            .emoji-tab-label { 
                display: block;
                width: 100%;
                font-size: 0.55rem; 
                color: #FFF; 
                font-weight: 600; 
                margin-top: 4px; 
                text-transform: uppercase; 
                white-space: nowrap; 
                overflow: hidden; 
                text-overflow: ellipsis; 
            }

            .sidebar-menu { flex: 1; padding: 14px 12px; overflow-y: auto; }

            .nav-link {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 14px;
                color: rgba(255,255,255,0.75);
                text-decoration: none;
                border-radius: 8px;
                font-weight: 500;
                font-size: 0.9rem;
                margin-bottom: 4px;
                transition: all 0.2s ease;
                border: 1px solid transparent;
            }
            .nav-link:hover { 
                background: rgba(255,255,255,0.08); 
                color: #FFF; 
                transform: translateX(4px);
            }
            .nav-link.active { 
                background: linear-gradient(90deg, var(--rouge-dojo) 0%, rgba(196,30,58,0.7) 100%); 
                color: #FFF; 
                font-weight: 700; 
                box-shadow: 0 4px 15px rgba(196,30,58,0.4);
                border: 1px solid rgba(255,255,255,0.2);
            }
            .nav-link-icon { font-size: 1.1rem; width: 22px; text-align: center; }

            .sidebar-footer {
                padding: 12px 16px;
                border-top: 1px solid rgba(255,255,255,0.06);
                font-size: 0.75rem;
                color: var(--text-muted);
                display: flex;
                justify-content: space-between;
                background: rgba(0,0,0,0.3);
                font-weight: 500;
            }
        `;
        document.head.appendChild(styleEl);
    }

    function renderSidebar() {
        let structure = [];
        try {
            const saved = localStorage.getItem('dd_catalog_structure_v6');
            if (saved) structure = JSON.parse(saved);
        } catch(e) {}

        if (!structure || structure.length === 0) return;

        const currentFilename = window.location.pathname.split('/').pop() || 'index.html';
        const isAtRoot = !window.location.pathname.includes('/outils/');
        const indexPath = isAtRoot ? 'index.html' : '../index.html';

        const cdfPath = isAtRoot 
            ? '../Comité des Fêtes de Toury-Lurcy Les Oudilles/index.html' 
            : '../../Comité des Fêtes de Toury-Lurcy Les Oudilles/index.html';

        let activeCatIdx = parseInt(localStorage.getItem('dd_sidebar_active_cat') || '0');
        if (activeCatIdx >= structure.length) activeCatIdx = 0;

        let sidebarContainer = document.querySelector('.sidebar');
        if (!sidebarContainer) {
            sidebarContainer = document.createElement('div');
            sidebarContainer.className = 'sidebar';
            document.body.prepend(sidebarContainer);
        }

        let html = `
            <div class="workspace-container">
                <button type="button" class="workspace-btn" onclick="toggleWorkspaceDropdown(event)">
                    <div class="workspace-icon-box">
                        <img src="https://dojodornois.fr/public/10057/upload/files/base-de-donnees/logo-dojo-dornois-transparent-contour-blanc_2.png" onerror="this.style.display='none'">
                    </div>
                    <div class="workspace-text">
                        <div class="workspace-title">Dojo Dornois</div>
                        <div class="workspace-sub">Intranet Officiel</div>
                    </div>
                    <span class="workspace-chevron">▼</span>
                </button>

                <div class="workspace-dropdown" id="workspaceDropdown">
                    <div class="workspace-dropdown-header">Changer d'espace</div>
                    
                    <a href="${indexPath}" class="workspace-item active">
                        <div class="workspace-item-icon" style="background-color: #C41E3A;">
                            <img src="https://dojodornois.fr/public/10057/upload/files/base-de-donnees/logo-dojo-dornois-transparent-contour-blanc_2.png">
                        </div>
                        <span style="flex:1;">Dojo Dornois</span>
                        <span style="color: #4ADE80; font-size: 0.85rem; text-shadow: 0 0 8px #4ADE80;">●</span>
                    </a>

                    <a href="${cdfPath}" class="workspace-item">
                        <div class="workspace-item-icon" style="background-color: #1E40AF;">
                            <img src="https://dojodornois.fr/public/10057/upload/files/base-de-donnees/logo-comite-des-fetes-de-toury-lurcy-transparent-contour-blanc.png">
                        </div>
                        <span style="flex:1;">Comité des Fêtes</span>
                    </a>
                </div>
            </div>
        `;

        html += `<div class="sidebar-emoji-grid">`;
        structure.slice(0, 6).forEach((cat, idx) => {
            const isActive = activeCatIdx === idx ? 'active' : '';
            const emoji = cat.titre.substring(0, 2);
            const shortLabel = cat.titre.substring(2).trim().split(' ')[0].split(',')[0];

            html += `
                <div class="emoji-tab-btn ${isActive}" onclick="switchSidebarCat(${idx})">
                    <span class="emoji-tab-icon">${emoji}</span>
                    <span class="emoji-tab-label">${shortLabel}</span>
                </div>
            `;
        });
        html += `</div>`;

        html += `<div class="sidebar-menu">`;
        html += `
            <a href="${indexPath}" class="nav-link ${currentFilename === 'index.html' ? 'active' : ''}">
                <span class="nav-link-icon">🏠</span> Dashboard Central
            </a>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.08); margin: 10px 0;">
        `;

        const activeCat = structure[activeCatIdx];
        if (activeCat && activeCat.outils) {
            activeCat.outils.forEach(tool => {
                let targetUrl = tool.url;
                if (isAtRoot) {
                    if (!targetUrl.startsWith('outils/') && !targetUrl.startsWith('modal:')) targetUrl = 'outils/' + targetUrl;
                } else {
                    if (targetUrl.startsWith('outils/')) targetUrl = targetUrl.replace('outils/', '');
                }

                const isCurrent = currentFilename === targetUrl.split('/').pop();
                const emoji = tool.name.substring(0, 2);
                const propreNom = tool.name.substring(2);

                html += `
                    <a href="${targetUrl}" class="nav-link ${isCurrent ? 'active' : ''}">
                        <span class="nav-link-icon">${emoji}</span> ${propreNom}
                    </a>
                `;
            });
        }

        html += `</div>`;

        html += `
            <div class="sidebar-footer">
                <span>Dojo Dornois &copy; 2026</span>
                <span>v5.0 (Edition Pro)</span>
            </div>
        `;

        sidebarContainer.innerHTML = html;
    }

    window.switchSidebarCat = function(idx) {
        localStorage.setItem('dd_sidebar_active_cat', idx);
        renderSidebar();
    };

    window.toggleWorkspaceDropdown = function(e) {
        e.stopPropagation();
        const drop = document.getElementById('workspaceDropdown');
        if (drop) drop.classList.toggle('show');
    };

    document.addEventListener('click', function() {
        const drop = document.getElementById('workspaceDropdown');
        if (drop && drop.classList.contains('show')) {
            drop.classList.remove('show');
        }
    });

    document.addEventListener("DOMContentLoaded", renderSidebar);
})();
