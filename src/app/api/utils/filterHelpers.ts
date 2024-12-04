import { format, isAfter, isBefore, startOfDay } from 'date-fns';

// Date range helper
export const getDateRange = (date: Date): string => {
	const today = startOfDay(new Date());
	const nextWeek = startOfDay(new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000));
	const nextMonth = startOfDay(new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000));

	if (isBefore(date, today)) return 'Past';
	if (isBefore(date, nextWeek)) return 'This Week';
	if (isBefore(date, nextMonth)) return 'This Month';
	return 'Future';
};

// Event status helper
export const getEventStatus = (startDate: Date, endDate: Date): string => {
	const now = new Date();
	if (isAfter(startDate, now)) return 'Upcoming';
	if (isBefore(endDate, now)) return 'Past';
	return 'Ongoing';
};

// Duration range helper
export const getDurationRange = (minutes: number): string => {
	const hours = minutes / 60;
	if (hours <= 1) return 'Under 1 hour';
	if (hours <= 3) return '1-3 hours';
	if (hours <= 8) return 'Half day';
	if (hours <= 24) return 'Full day';
	return 'Multiple days';
};

// Organization count range helper
export const getOrgCountRange = (count: number): string => {
	if (count <= 5) return '1-5 organizations';
	if (count <= 20) return '6-20 organizations';
	if (count <= 50) return '21-50 organizations';
	return '50+ organizations';
};

// Region helper
export const getRegionFromCountries = (countries: string[]): string => {
	const regionMap: { [key: string]: string[] } = {
		'North America': ['USA', 'Canada', 'Mexico'],
		Europe: ['UK', 'Germany', 'France', 'Spain', 'Italy'],
		'Middle East': ['Palestine', 'Israel', 'Lebanon', 'Jordan'],
		Asia: ['China', 'Japan', 'India', 'South Korea'],
		'Latin America': ['Brazil', 'Argentina', 'Chile', 'Colombia'],
	};

	for (const [region, regionCountries] of Object.entries(regionMap)) {
		if (countries.some((country) => regionCountries.includes(country))) {
			return region;
		}
	}
	return 'Other';
};

// Filter suggestion helper
export const getSuggestedFilters = (
	selectedFilters: Record<string, string[]>,
	allFilters: Record<string, Record<string, number>>,
): { type: string; value: string; label: string; count: number }[] => {
	const suggestions: { type: string; value: string; label: string; count: number }[] = [];

	// Get related filters based on current selection
	Object.entries(selectedFilters).forEach(([type, values]) => {
		if (values.length > 0) {
			// Find related filters in other categories
			Object.entries(allFilters).forEach(([otherType, counts]) => {
				if (otherType !== type) {
					// Sort by count and get top 3 related filters
					const relatedFilters = Object.entries(counts)
						.sort(([, a], [, b]) => b - a)
						.slice(0, 3)
						.map(([value, count]) => ({
							type: otherType,
							value,
							label: `${value} (${count})`,
							count,
						}));
					suggestions.push(...relatedFilters);
				}
			});
		}
	});

	// Remove duplicates and sort by count
	return Array.from(new Set(suggestions.map((s) => JSON.stringify(s))))
		.map((s) => JSON.parse(s))
		.sort((a, b) => b.count - a.count)
		.slice(0, 5);
};

// Save user preferences
export const saveFilterPreferences = (
	catalogType: 'org' | 'event' | 'activity' | 'cause',
	filters: Record<string, string[]>,
): void => {
	localStorage.setItem(`${catalogType}_filter_preferences`, JSON.stringify(filters));
};

// Load user preferences
export const loadFilterPreferences = (
	catalogType: 'org' | 'event' | 'activity' | 'cause',
): Record<string, string[]> | null => {
	const saved = localStorage.getItem(`${catalogType}_filter_preferences`);
	return saved ? JSON.parse(saved) : null;
};

// Add this to existing filterHelpers.ts
const causeMap: Record<number, string> = {
	1: 'LGBTQ+ Rights',
	2: 'Human Rights',
	3: 'Gun Violence Prevention',
	4: 'Palestine Support',
	5: "Women's Rights",
};

export const getCauseName = (causeId: number): string => {
	return causeMap[causeId] || 'Other';
}; 