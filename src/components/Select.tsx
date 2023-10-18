interface SelectProps {
	name: string
	placeholder: string
	options: {
		value: string
		label: string
	}[]
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	defaultValue?: string
}

function Select({ name, placeholder, options, onChange, defaultValue }: SelectProps) {
	return (
		<select defaultValue={defaultValue} name={name} onChange={onChange}>
			{options.map((option, index) => (
				<option key={index} placeholder={placeholder} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}

export default Select
