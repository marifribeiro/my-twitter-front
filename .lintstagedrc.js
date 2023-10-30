module.exports = {
	// Lint & Prettify TS ans JS files
	"*.{js, jsx, ts, tsx}": (filenames) => [
		`npm run lint --fix . ${filenames.join(" --file")}`,
		`prettier --write ${filenames.join(" ")}`,
	],
};
