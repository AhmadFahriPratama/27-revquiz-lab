import type { ProjectData } from "@/types";

export const projectData: ProjectData = {
  "projectId": "27",
  "folder": "27-revquiz-lab",
  "appName": "RevQuiz Lab",
  "domain": "Quiz Platform",
  "heroHeadline": "Test knowledge, track results",
  "heroSubtitle": "Build interactive quizzes, run assessments, and evaluate performance instantly.",
  "features": [
    {
      "icon": "Brain",
      "title": "Question Banks",
      "description": "Store and categorize hundreds of questions for easy reuse."
    },
    {
      "icon": "Timer",
      "title": "Timed Assessments",
      "description": "Set strict time limits to simulate real exam conditions."
    },
    {
      "icon": "Trophy",
      "title": "Leaderboards",
      "description": "Gamify the learning experience with competitive ranking."
    },
    {
      "icon": "PieChart",
      "title": "Instant Grading",
      "description": "Automatic scoring saves you hours of manual grading."
    }
  ],
  "stats": [
    {
      "label": "Active Quizzes",
      "value": "45",
      "trend": "+3"
    },
    {
      "label": "Total Attempts",
      "value": "12.5K",
      "trend": "+1.2K"
    },
    {
      "label": "Avg Score",
      "value": "72%",
      "trend": "+2%"
    },
    {
      "label": "Pass Rate",
      "value": "65%",
      "trend": "Stable"
    }
  ],
  "tableColumns": [
    {
      "key": "quiz",
      "label": "Quiz"
    },
    {
      "key": "category",
      "label": "Category"
    },
    {
      "key": "questions",
      "label": "Questions"
    },
    {
      "key": "attempts",
      "label": "Attempts"
    },
    {
      "key": "avg_score",
      "label": "Avg Score"
    },
    {
      "key": "difficulty",
      "label": "Difficulty"
    },
    {
      "key": "status",
      "label": "Status"
    }
  ],
  "tableRows": [
    {
      "id": "QZ-001",
      "quiz": "Frontend Developer Assessment",
      "category": "Tech",
      "questions": "40",
      "attempts": "1,245",
      "avg_score": "68%",
      "difficulty": "Hard",
      "status": "Trending"
    },
    {
      "id": "QZ-002",
      "quiz": "JavaScript Basics",
      "category": "Tech",
      "questions": "20",
      "attempts": "5,400",
      "avg_score": "82%",
      "difficulty": "Easy",
      "status": "Active"
    },
    {
      "id": "QZ-003",
      "quiz": "Company Onboarding 2026",
      "category": "HR",
      "questions": "15",
      "attempts": "85",
      "avg_score": "95%",
      "difficulty": "Easy",
      "status": "Active"
    },
    {
      "id": "QZ-004",
      "quiz": "Advanced SQL Queries",
      "category": "Data",
      "questions": "25",
      "attempts": "420",
      "avg_score": "55%",
      "difficulty": "Hard",
      "status": "Trending"
    },
    {
      "id": "QZ-005",
      "quiz": "Cybersecurity Awareness",
      "category": "Compliance",
      "questions": "30",
      "attempts": "850",
      "avg_score": "78%",
      "difficulty": "Medium",
      "status": "Active"
    },
    {
      "id": "QZ-006",
      "quiz": "Marketing Math",
      "category": "Marketing",
      "questions": "10",
      "attempts": "320",
      "avg_score": "62%",
      "difficulty": "Medium",
      "status": "Active"
    },
    {
      "id": "QZ-007",
      "quiz": "Python Fundamentals",
      "category": "Tech",
      "questions": "50",
      "attempts": "0",
      "avg_score": "0%",
      "difficulty": "Medium",
      "status": "Draft"
    },
    {
      "id": "QZ-008",
      "quiz": "Legacy PHP Assessment",
      "category": "Tech",
      "questions": "20",
      "attempts": "2,100",
      "avg_score": "70%",
      "difficulty": "Medium",
      "status": "Archived"
    }
  ],
  "statuses": [
    "Active",
    "Draft",
    "Archived",
    "Trending"
  ],
  "ctaHeadline": "Evaluate skills accurately",
  "ctaSubtitle": "Start building your assessment pipeline today.",
  "ctaButtonText": "Create New Quiz",
  "readmeDescription": "An interactive quiz and assessment platform to track scores, attempts, and difficulty metrics.",
  "readmeFeaturesList": [
    "Quiz builder interface",
    "Assessment tracking",
    "Score and completion analytics",
    "Gamified dashboard UI"
  ],
  "theme": {
    "heroLayout": "split",
    "navStyle": "dark",
    "cardStyle": "gradient",
    "primary": "#7e22ce",
    "secondary": "#a855f7",
    "accent": "#faf5ff",
    "background": "#ffffff",
    "text": "#3b0764",
    "heroGradient": "linear-gradient(135deg, rgba(126, 34, 206, 0.98) 0%, rgba(168, 85, 247, 0.88) 100%)",
    "heroGlow": "radial-gradient(circle at 15% 15%, rgba(168, 85, 247, 0.36) 0%, transparent 42%)",
    "heroEdge": "radial-gradient(circle at 90% 10%, rgba(250, 245, 255, 0.14) 0%, transparent 28%)",
    "surface": "rgba(126, 34, 206, 0.05)",
    "surfaceStrong": "rgba(126, 34, 206, 0.08)",
    "border": "rgba(126, 34, 206, 0.12)",
    "borderStrong": "rgba(126, 34, 206, 0.22)",
    "softText": "rgba(59, 7, 100, 0.72)",
    "primarySoft": "rgba(126, 34, 206, 0.12)",
    "secondarySoft": "rgba(168, 85, 247, 0.12)",
    "secondaryStrong": "rgba(168, 85, 247, 0.18)",
    "accentSoft": "rgba(250, 245, 255, 0.8)"
  }
};
