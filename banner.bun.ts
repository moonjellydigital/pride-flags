// Adds/updates the banner at the top of pride-flags.css with the current package version.
import pkg from './package.json' with { type: 'json' };

const header = `/*! @moonjellydigital/pride-flags v${pkg.version} | MIT License | https://github.com/moonjellydigital/pride-flags */`;

// find the header
const regex = /(?:\/\*!\s+@moonjellydigital).+(?:\*\/)/gim;

const css = await Bun.file('./pride-flags.css').text();

if (!css.match(regex)) {
  await Bun.write('./pride-flags.css', header.concat('\n' + css));
} else {
  await Bun.write('./pride-flags.css', css.replace(regex, header));
}
