export const getAbbreviatedMonth = (month: number, language?: string) => {
	const monthsEs = ['Ene', 'Abr', 'Ago', 'Dic']

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	if (language === 'es' && (month === 0 || month === 3 || month === 7 || month === 11)) {
		if (month === 0) return monthsEs[0]
		if (month === 3) return monthsEs[1]
		if (month === 7) return monthsEs[2]
		if (month === 11) return monthsEs[3]
	}

	return months[month]
}
