/**
 * LITHVIK NEXUS - EXPANDED COLOR PALETTE FOR ADVANCED VISUALIZATIONS
 *
 * Semantic color families for healthcare intelligence dashboard
 * WCAG 2.1 AA compliant with colorblind-safe alternatives
 */

// ============================================================================
// PRIMARY COLOR PALETTE (19 colors from original)
// ============================================================================

export const CHART_COLORS = {
  primary: '#0ea5e9',      // sky-500
  secondary: '#8b5cf6',    // violet-500
  success: '#22c55e',      // green-500
  warning: '#f59e0b',      // amber-500
  danger: '#ef4444',       // red-500
  info: '#06b6d4',         // cyan-500
  purple: '#a855f7',       // purple-500
  pink: '#ec4899',         // pink-500
  orange: '#f97316',       // orange-500
  teal: '#14b8a6',         // teal-500
  denim: '#3b82f6',        // blue-500
  rose: '#f43f5e',         // rose-500
  gold: '#eab308',         // yellow-500
  lime: '#84cc16',         // lime-500
  emerald: '#10b981',      // emerald-500
  indigo: '#6366f1',       // indigo-500
  fuchsia: '#d946ef',      // fuchsia-500
}

// ============================================================================
// PERFORMANCE COLOR FAMILY (Success metrics)
// ============================================================================

export const PERFORMANCE_COLORS = {
  excellent: '#10b981',   // Emerald 500 - >90% performance
  good: '#22c55e',        // Green 500 - 75-90%
  satisfactory: '#84cc16', // Lime 500 - 60-75%
  fair: '#eab308',        // Yellow 500 - 40-60%
  poor: '#f97316',        // Orange 500 - 20-40%
  critical: '#ef4444',    // Red 500 - <20%
}

export const PERFORMANCE_GRADIENTS = {
  green: ['#10b981', '#34d399', '#6ee7b7'],
  teal: ['#14b8a6', '#2dd4bf', '#5eead4'],
  emerald: ['#059669', '#10b981', '#34d399'],
}

// ============================================================================
// RISK COLOR FAMILY (Threat assessment)
// ============================================================================

export const RISK_COLORS = {
  extreme: '#dc2626',     // Red 600 - Critical threat
  high: '#f97316',        // Orange 500 - High risk
  'medium-high': '#fbbf24', // Amber 400 - Medium-high
  medium: '#f59e0b',      // Amber 500 - Medium
  'medium-low': '#84cc16', // Lime 500 - Medium-low
  low: '#22c55e',         // Green 500 - Low risk
  minimal: '#10b981',     // Emerald 500 - Minimal
}

export const RISK_GRADIENTS = {
  red: ['#991b1b', '#dc2626', '#ef4444', '#f87171'],
  orange: ['#c2410c', '#ea580c', '#f97316', '#fdba74'],
  amber: ['#b45309', '#d97706', '#f59e0b', '#fcd34d'],
}

// ============================================================================
// SENTIMENT COLOR FAMILY (Emotional analysis)
// ============================================================================

export const SENTIMENT_COLORS = {
  // Positive emotions
  joy: '#f472b6',          // Pink 400
  trust: '#3b82f6',        // Blue 500
  gratitude: '#10b981',    // Emerald 500
  serenity: '#06b6d4',     // Cyan 500
  hope: '#8b5cf6',         // Violet 500
  pride: '#fbbf24',        // Amber 400

  // Negative emotions
  anger: '#dc2626',        // Red 600
  fear: '#7c3aed',         // Violet 600
  sadness: '#475569',      // Slate 600
  disgust: '#84cc16',      // Lime 500
  surprise: '#f59e0b',     // Amber 500

  // Neutral
  neutral: '#64748b',      // Slate 500
  unknown: '#94a3b8',      // Slate 400
}

export const SENTIMENT_GRADIENTS = {
  positive: ['#10b981', '#22c55e', '#3b82f6', '#8b5cf6', '#f472b6'],
  negative: ['#dc2626', '#ea580c', '#d97706', '#65a30d', '#475569'],
  neutral: ['#94a3b8', '#64748b', '#475569', '#334155'],
}

// ============================================================================
// PLATFORM COLOR FAMILY (15 social/digital platforms)
// ============================================================================

export const PLATFORM_COLORS = {
  // Social Media
  twitter: '#000000',              // X/Twitter Black
  instagram: '#E1306C',            // Instagram Gradient Pink
  facebook: '#1877F2',             // Facebook Blue
  tiktok: '#000000',               // TikTok Black/Pink
  linkedin: '#0A66C2',             // LinkedIn Blue
  youtube: '#FF0000',              // YouTube Red
  pinterest: '#E60023',            // Pinterest Red
  snapchat: '#FFFC00',             // Snapchat Yellow
  reddit: '#FF4500',               // Reddit Orange

  // Messaging
  whatsapp: '#25D366',             // WhatsApp Green

  // UAE Gov Platforms
  sah: '#006633',                  // Sahatna Green
  malaffi: '#8B5CF6',              // Malaffi Purple
  tamm: '#0F4C81',                 // TAMM Blue

  // Other
  web: '#3b82f6',                  // Generic web blue
  email: '#f59e0b',                // Email orange
}

// ============================================================================
// GEOGRAPHIC COLOR FAMILY (7 UAE regions)
// ============================================================================

export const GEOGRAPHIC_COLORS = {
  'abu-dhabi': '#006633',         // Abu Dhabi (Capital)
  'dubai': '#8B5CF6',              // Dubai
  'sharjah': '#3b82f6',            // Sharjah
  'ajman': '#10b981',              // Ajman
  'umm-al-quwain': '#f59e0b',     // Umm Al Quwain
  'ras-al-khaimah': '#ef4444',    // Ras Al Khaimah
  'fujairah': '#8b5cf6',          // Fujairah
}

export const GEOGRAPHIC_GRADIENTS = {
  'abu-dhabi': ['#004d26', '#006633', '#00803f'],
  'dubai': ['#7c3aed', '#8b5cf6', '#a78bfa'],
  'sharjah': ['#2563eb', '#3b82f6', '#60a5fa'],
}

// ============================================================================
// NARRATIVE TYPE COLORS (10 story categories)
// ============================================================================

export const NARRATIVE_COLORS = {
  'crisis': '#dc2626',             // Red - Crisis/Threat
  'achievement': '#10b981',        // Emerald - Wins/Awards
  'policy': '#3b82f6',             // Blue - Official announcements
  'innovation': '#8b5cf6',         // Purple - Tech/Innovation
  'community': '#22c55e',          // Green - Community stories
  'controversy': '#f97316',        // Orange - Debated topics
  'education': '#06b6d4',          // Cyan - Health literacy
  'research': '#6366f1',           // Indigo - Studies/Reports
  'human-interest': '#ec4899',     // Pink - Personal stories
  'viral': '#f59e0b',               // Amber - Trending content
}

// ============================================================================
// HEALTHCARE DOMAIN COLORS
// ============================================================================

export const HEALTHCARE_COLORS = {
  // Medical specialties
  cardiology: '#dc2626',           // Red - Heart
  oncology: '#f97316',             // Orange - Cancer
  pediatrics: '#fbbf24',           // Amber - Children
  obstetrics: '#ec4899',          // Pink - Women's health
  mental: '#8b5cf6',               // Purple - Mental health
  emergency: '#ef4444',            // Red - Emergency
  primary: '#3b82f6',              // Blue - Primary care
  preventative: '#10b981',         // Emerald - Prevention

  // Health status
  healthy: '#22c55e',             // Green
  at_risk: '#f59e0b',             // Amber
  critical: '#ef4444',            // Red
  recovering: '#3b82f6',           // Blue
  unknown: '#94a3b8',             // Gray
}

// ============================================================================
// ACCESSIBILITY: COLORBLIND-SAFE PALETTES
// ============================================================================

// Deuteranopia-safe palette (red-green blindness)
export const DEUTERANOPIA_COLORS = {
  blue: '#1f77b4',
  orange: '#ff7f0e',
  green: '#2ca02c',
  red: '#d62728',
  purple: '#9467bd',
  brown: '#8c564b',
  pink: '#e377c2',
  olive: '#bcbd22',
  cyan: '#17becf',
  grey: '#7f7f7f',
}

// Protanopia-safe palette (red blindness)
export const PROTONOPIA_COLORS = {
  blue: '#1f77b4',
  orange: '#ffbb78',
  green: '#33bb33',
  red: '#ff5555',
  purple: '#9966cc',
  brown: '#8c7840',
  pink: '#ff77b4',
  olive: '#aaaa33',
  cyan: '#33dddd',
  grey: '#777777',
}

// Tritanopia-safe palette (blue-yellow blindness)
export const TRITANOPIA_COLORS = {
  blue: '#008080',
  orange: '#ff8000',
  green: '#00ff00',
  red: '#ff0000',
  purple: '#800080',
  brown: '#804000',
  pink: '#ff69b4',
  olive: '#808000',
  cyan: '#00ffff',
  grey: '#808080',
}

// ============================================================================
// GRADIENT COLLECTION
// ============================================================================

export const GRADIENTS = {
  // Warm gradients
  sunset: ['#ef4444', '#f97316', '#fbbf24', '#fcd34d'],
  fire: ['#7f1d1d', '#b91c1c', '#dc2626', '#ef4444'],
  autumn: ['#78350f', '#92400e', '#b45309', '#d97706'],

  // Cool gradients
  ocean: ['#0c4a6e', '#075985', '#0f766e', '#14b8a6'],
  forest: ['#14532d', '#166534', '#15803d', '#22c55e'],
  twilight: ['#1e1b4b', '#312e81', '#4c1d95', '#6d28d9'],

  // Neutral gradients
  slate: ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b'],
  gray: ['#171717', '#404040', '#696969', '#a3a3a3', '#d4d4d4'],

  // Multi-color gradients
  rainbow: ['#ef4444', '#f97316', '#fbbf24', '#84cc16', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'],
  spectral: ['#dc2626', '#ea580c', '#d97706', '#65a30d', '#16a34a', '#0891b2', '#2563eb', '#7c3aed', '#db2777'],
  viridis: ['#440154', '#482878', '#3e4a89', '#26828e', '#21918c', '#27ad81', '#5cc863', '#aadc32'],
}

// ============================================================================
// OPACITY SCALES
// ============================================================================

export const OPACITY = {
  primary: {
    5: 'rgba(14, 165, 233, 0.05)',
    10: 'rgba(14, 165, 233, 0.1)',
    20: 'rgba(14, 165, 233, 0.2)',
    30: 'rgba(14, 165, 233, 0.3)',
    40: 'rgba(14, 165, 233, 0.4)',
    50: 'rgba(14, 165, 233, 0.5)',
    60: 'rgba(14, 165, 233, 0.6)',
    70: 'rgba(14, 165, 233, 0.7)',
    80: 'rgba(14, 165, 233, 0.8)',
    90: 'rgba(14, 165, 233, 0.9)',
    100: 'rgba(14, 165, 233, 1)',
  },
  success: {
    5: 'rgba(34, 197, 94, 0.05)',
    10: 'rgba(34, 197, 94, 0.1)',
    20: 'rgba(34, 197, 94, 0.2)',
    30: 'rgba(34, 197, 94, 0.3)',
    40: 'rgba(34, 197, 94, 0.4)',
    50: 'rgba(34, 197, 94, 0.5)',
    60: 'rgba(34, 197, 94, 0.6)',
    70: 'rgba(34, 197, 94, 0.7)',
    80: 'rgba(34, 197, 94, 0.8)',
    90: 'rgba(34, 197, 94, 0.9)',
    100: 'rgba(34, 197, 94, 1)',
  },
}

// ============================================================================
// EXPORT ALL
// ============================================================================

export const COLORS = {
  ...CHART_COLORS,
  ...PERFORMANCE_COLORS,
  ...RISK_COLORS,
  ...SENTIMENT_COLORS,
  ...PLATFORM_COLORS,
  ...GEOGRAPHIC_COLORS,
  ...NARRATIVE_COLORS,
  ...HEALTHCARE_COLORS,
}

export const THEMES = {
  light: {
    background: '#ffffff',
    foreground: '#0f172a',
    muted: '#64748b',
    accent: '#0ea5e9',
    border: '#e2e8f0',
    fill: '#f1f5f9',
  },
  dark: {
    background: '#0f172a',
    foreground: '#f8fafc',
    muted: '#94a3b8',
    accent: '#38bdf8',
    border: '#334155',
    fill: '#1e293b',
  },
}

export default CHART_COLORS
