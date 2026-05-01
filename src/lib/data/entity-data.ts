/**
 * Entity Data Barrel Export
 *
 * Re-exports entity data from individual entity files.
 * Note: Only includes exports that exist in source files.
 * UAE National Digital Intelligence Platform — Entity Intelligence
 */

// Royal Family Data (MD 1-2)
export {
  royalFamilyData,
  dashboardSummary,
  currentRulers,
  crownPrinces,
  wealthMetrics,
  emirateOverviews,
  familyMemberCounts,
  keyLeadershipAppointments,
  majorInitiatives,
  sourceCredibility,
  type RoyalFamilyMember,
  type RulerData,
  type CrownPrinceData,
  type WealthMetric,
  type EmirateOverview,
} from './entity/royal-family-data'

// Emirate Entities
export {
  emirateEntitiesData,
  type EmirateEntity,
} from './entity/emirate-entities-data'

// Note: Other entity exports (federalOfficialsData, mediaOrganizationsData, etc.)
// are defined in their respective source files but may not be fully exported
// in this barrel due to naming mismatches with index.ts expectations.
