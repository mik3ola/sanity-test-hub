// Configuration for the Sanity Test Reports Hub
// Automatically updated by GitHub Actions on 2025-07-15 01:58:46

const REPOSITORIES = [
    {
        "name": "sample-sanity-pipeline",
        "description": "sample-sanity-pipeline sanity tests",
        "url": "https://mik3ola.github.io/sample-sanity-pipeline/",
        "stats": {
            "total": 3,
            "passed": 2,
            "failed": 1,
            "critical": 1
        },
        "lastUpdate": "Unknown",
        "status": "warning"
    }
];

// Calculate overall statistics
function calculateOverallStats() {
    return {
        repositories: 1,
        tests: 3,
        passed: 2,
        failed: 1,
        critical: 1,
        passRate: 67
    };
}

const OVERALL_STATS = calculateOverallStats();
