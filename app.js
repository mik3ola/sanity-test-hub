// Dynamic repository rendering script
document.addEventListener('DOMContentLoaded', function() {
    // Update dashboard stats
    document.querySelector('.stat-card:nth-child(1) .stat-value').textContent = OVERALL_STATS.repositories;
    document.querySelector('.stat-card:nth-child(2) .stat-value').textContent = OVERALL_STATS.passRate + '%';
    document.querySelector('.stat-card:nth-child(3) .stat-value').textContent = OVERALL_STATS.critical;
    
    // Get current date and time for the last update
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.querySelector('.stat-card:nth-child(4) .stat-value').textContent = `Today, ${hours}:${minutes}`;
    
    // Clear existing repositories
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    gridView.innerHTML = '';
    listView.innerHTML = '';
    
    // Render repositories from config
    REPOSITORIES.forEach(repo => {
        // Create grid view card
        const gridCard = createGridCard(repo);
        gridView.appendChild(gridCard);
        
        // Create list view item
        const listItem = createListItem(repo);
        listView.appendChild(listItem);
    });
});

// Create a repository card for grid view
function createGridCard(repo) {
    const card = document.createElement('div');
    card.className = 'repository-card';
    
    card.innerHTML = `
        <div class="repository-header">
            <div class="repository-name">${repo.name}</div>
            <div class="repository-description">${repo.description}</div>
        </div>
        <div class="repository-stats">
            <div class="repo-stat">
                <div class="repo-stat-value">${repo.stats.total}</div>
                <div class="repo-stat-label">Total Tests</div>
            </div>
            <div class="repo-stat">
                <div class="repo-stat-value">${repo.stats.passed}</div>
                <div class="repo-stat-label">Passed</div>
            </div>
            <div class="repo-stat">
                <div class="repo-stat-value">${repo.stats.failed}</div>
                <div class="repo-stat-label">Failed</div>
            </div>
        </div>
        <div class="repository-footer">
            <div class="last-update">
                <span class="status-indicator status-${repo.status}"></span>
                Updated ${repo.lastUpdate}
            </div>
            <a href="${repo.url}" class="view-report">View Report</a>
        </div>
    `;
    
    return card;
}

// Create a repository item for list view
function createListItem(repo) {
    const item = document.createElement('div');
    item.className = 'repository-list-item';
    
    item.innerHTML = `
        <div class="repository-info">
            <div class="repository-icon">
                <i class="fas fa-code-branch"></i>
            </div>
            <div class="repository-details">
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
            </div>
        </div>
        <div class="repository-metrics">
            <div class="repository-metric">
                <div class="repository-metric-value">${repo.stats.total}</div>
                <div class="repository-metric-label">Total</div>
            </div>
            <div class="repository-metric">
                <div class="repository-metric-value">${repo.stats.passed}</div>
                <div class="repository-metric-label">Passed</div>
            </div>
            <div class="repository-metric">
                <div class="repository-metric-value">${repo.stats.failed}</div>
                <div class="repository-metric-label">Failed</div>
            </div>
        </div>
        <div class="repository-actions">
            <div class="last-update">
                <span class="status-indicator status-${repo.status}"></span>
                ${repo.lastUpdate}
            </div>
            <a href="${repo.url}" class="view-report">View Report</a>
        </div>
    `;
    
    return item;
}
