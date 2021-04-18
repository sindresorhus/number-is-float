export default function numberIsFloat(value) {
	// eslint-disable-next-line unicorn/prefer-math-trunc
	return Number.isFinite(value) && value !== (value | 0);
}
