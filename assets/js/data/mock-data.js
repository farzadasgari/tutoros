window.TutorOS = window.TutorOS || {};
window.TutorOS.mockData = {
    "anchorDate": "2026-10-24",
    "teacher": {
        "id": "u_farzad",
        "name": "Farzad Asgari",
        "nameFA": "فرزاد عسگری",
        "email": "khufarzadasgari@gmail.com",
        "initials": "FA",
        "role": "Private teacher",
        "specialties": ["Data Science", "Hybrid Modeling", "Signal Processing", "Python", "React"],
        "phone": "+1 (555) (666) 7777",
        "timezone": "Asia/Tehran",
        "bio": "Water resources engineer and environment researcher.",
    },
    "settings": {
        "theme": "system",
        "density": "comfortable",
        "locale": "en",
        "direction": "ltr",
        "currency": "IRT",
        "calendarSystem": "gregorian",
        "weekStart": 6,
        "durationFormat": "hm",
        "defaultPlatformId": "pf_meet",
        "defaultDuration": 90,
        "reminderLeadMinutes": 15,
        "inactivityDays": 14,
        "packageThresholds": [50, 75, 90, 100],
        "notifications": {
            "unrecordedClass": true,
            "paymentDue": true,
            "packageWarning": true,
            "studentInactivity": true,
            "scheduleConflict": true,
            "upcomingClass": true,
            "dailyReview": true,
            "weeklyReview": false,
            "missingLink": true
        },
        "widgets": ["nextClass", "attention", "today", "tomorrow", "revenue", "hours", "tasks", "insights", "activity"]
    },
    "platforms": [
        {
            "id": "pf_meet",
            "name": "Google Meet",
            "slug": "meet",
            "icon": "bi-camera-video",
            "urlPatterns": ["meet.google.com"],
            "color": "p-meet",
            "isDefault": true,
            "isActive": true,
            "linkHint": "https://meet.google.com/xxx-xxxx-xxx",
        },
    ]
}
