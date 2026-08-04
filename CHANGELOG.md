# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [3.1.0](https://github.com/jalibu/MMM-RAIN-MAP/compare/v3.0.5...v3.1.0) (2026-08-04)

### Added

* add radar layer opacity option ([162447d](https://github.com/jalibu/MMM-RAIN-MAP/commit/162447ddfd63c391c757f7c6583baa3ac842350b))
* **provider:** add LibreWXR support ([0152df9](https://github.com/jalibu/MMM-RAIN-MAP/commit/0152df9a96a8f7614a21353c4e8d6cbc2752e958))

### Chores

* add allowScripts config ([163c73b](https://github.com/jalibu/MMM-RAIN-MAP/commit/163c73bf8621cff654469beb215fb9995fe34370))
* update devDependencies ([878ebef](https://github.com/jalibu/MMM-RAIN-MAP/commit/878ebef2c653bfadcc0c813f43f1dec3cc9c4caf))
* update GitHub Actions ([eadede0](https://github.com/jalibu/MMM-RAIN-MAP/commit/eadede0213cc70311733e3b78c54d680d91042d5))
## [3.0.5](https://github.com/jalibu/MMM-RAIN-MAP/compare/v3.0.4...v3.0.5) (2026-06-15)


### Fixed

* **map:** anchor marker and shadow to pin tip ([#82](https://github.com/jalibu/MMM-RAIN-MAP/issues/82)) ([1880c3c](https://github.com/jalibu/MMM-RAIN-MAP/commit/1880c3cab22321ec5a2263831f931f6249058c81))
* **tsconfig:** add types and include paths for TypeScript compilation ([2706524](https://github.com/jalibu/MMM-RAIN-MAP/commit/2706524b9c16bc127dcbbd18d7bb57f105e257a8))


### Chores

* fix format for module check ([4b1ed9b](https://github.com/jalibu/MMM-RAIN-MAP/commit/4b1ed9b83ed35394f3928efc6d1fe211db698437))
* simplify prepare script ([f146cf5](https://github.com/jalibu/MMM-RAIN-MAP/commit/f146cf5672fc7ac89fa755441221c18f75d2fbc6))
* update devDependencies ([838089a](https://github.com/jalibu/MMM-RAIN-MAP/commit/838089ab8224317fdb3e578166ea0eddfc2e41fd))


### Code Refactoring

* **build:** enhance TypeScript and Rollup config ([cd6115c](https://github.com/jalibu/MMM-RAIN-MAP/commit/cd6115cdfecbef7681de3ab4e5c8a0f7b65f35df))
* **eslint:** improve configuration with global ignores and structured rules ([80c8f23](https://github.com/jalibu/MMM-RAIN-MAP/commit/80c8f23e5845d0f8ca7507ec367b25ac1b785977))


### Build System

* **tsconfig:** switch to ESNext bundler settings ([58f56db](https://github.com/jalibu/MMM-RAIN-MAP/commit/58f56db1096c49b9a0878db75995e0c63141fe70))

## [3.0.4](https://github.com/jalibu/MMM-RAIN-MAP/compare/v3.0.3...v3.0.4) (2026-03-08)


### Fixed

* fix stale radar frames by replacing eachLayer with radarLayers Map iteration ([57cc39e](https://github.com/jalibu/MMM-RAIN-MAP/commit/57cc39e44a0dee2981acd1a863032364be96ab96)), closes [#70](https://github.com/jalibu/MMM-RAIN-MAP/issues/70)
* warn and clamp zoom levels above 7 (RainViewer API limit) ([50eb550](https://github.com/jalibu/MMM-RAIN-MAP/commit/50eb550162cb07c8330d465db67164226e1de4ce))


### Documentation

* fix MagicMirror version reference in bug report template ([0c463ef](https://github.com/jalibu/MMM-RAIN-MAP/commit/0c463ef780d5da0eea9a69bed5718e8abc2af685))


### Chores

* update devDependencies ([235377d](https://github.com/jalibu/MMM-RAIN-MAP/commit/235377deb7e7c7e7077177af5226affb84f7b4ed))

## [3.0.3](https://github.com/jalibu/MMM-RAIN-MAP/compare/v3.0.2...v3.0.3) (2026-02-22)


### Documentation

* enhance README with descriptions for Marker and MapPosition objects ([f7ed50d](https://github.com/jalibu/MMM-RAIN-MAP/commit/f7ed50d46015e554ce685e88c0e79f52996fff62))


### Chores

* add "type" field to package.json ([be2a400](https://github.com/jalibu/MMM-RAIN-MAP/commit/be2a4003d33edf2573564e6fa6d30a66117353c7))
* add tslib as devDependency ([38dae17](https://github.com/jalibu/MMM-RAIN-MAP/commit/38dae1709acfd4d63602c9cfbe44e1bf80d60f1a))
* rename lint job to test in automated tests workflow ([0ef7a49](https://github.com/jalibu/MMM-RAIN-MAP/commit/0ef7a49dce86986cb8036aa53deb040d2c9804ff))
* update devDependencies ([6987db6](https://github.com/jalibu/MMM-RAIN-MAP/commit/6987db6c554ca93cfc8714dcb2bee8035dbf05ae))

## [3.0.2](https://github.com/jalibu/MMM-RAIN-MAP/compare/v3.0.1...v3.0.2) (2026-02-14)


### Chores

* align colorScheme behavior with RainViewer free-tier limits ([577882f](https://github.com/jalibu/MMM-RAIN-MAP/commit/577882f2727b026137448d46d97b3f4fb62c20c7))


### Code Refactoring

* add substituteModules alias with deprecated key fallback ([344d110](https://github.com/jalibu/MMM-RAIN-MAP/commit/344d11051cdb615832fa0338dc090e557e4330e8))


### Build System

* avoid false positives in third-party module lint scanner ([8631d45](https://github.com/jalibu/MMM-RAIN-MAP/commit/8631d452eee0f5946907c2644a9a52b6c22206a4))


### Continuous Integration

* add build step to catch TypeScript/Rollup regressions ([7333d77](https://github.com/jalibu/MMM-RAIN-MAP/commit/7333d77677b3f6cf41ca2e92f6a34c0d635bcee9))

## [3.0.1](https://github.com/jalibu/MMM-RAIN-MAP/compare/v3.0.0...v3.0.1) (2026-02-10)


### Documentation

* clean up forecast references in README ([72e9fd5](https://github.com/jalibu/MMM-RAIN-MAP/commit/72e9fd5131351e284a73bb45b8a8888a2adc2a5e))
* update default zoom level range in README ([8aa7f6c](https://github.com/jalibu/MMM-RAIN-MAP/commit/8aa7f6c67c9914af6d48a2e99c06484d2ac8c81a))


### Chores

* enable TypeScript strict mode ([a501713](https://github.com/jalibu/MMM-RAIN-MAP/commit/a501713d0d67917ad1f1e2d7b32e24feb304f0e1))
* format files ([f55310f](https://github.com/jalibu/MMM-RAIN-MAP/commit/f55310fc92305f330a23becaa400ae3c153bd346))
* remove maxForecastFrames from demo config ([919579d](https://github.com/jalibu/MMM-RAIN-MAP/commit/919579d740cde1bafc2a59cd3f23c6200d437e92))


### Code Refactoring

* Remove debug logging from frame filtering ([2b86f2a](https://github.com/jalibu/MMM-RAIN-MAP/commit/2b86f2a591249a0530a5cad5d32243c61936912f))


### Tests

* Update maxForecastFrames test expectation to 0 ([12a3b5b](https://github.com/jalibu/MMM-RAIN-MAP/commit/12a3b5b9a4a7a28931e283ebf0a086597d96b408))

## [3.0.0](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.11.3...v3.0.0) (2026-02-10)


### ⚠ BREAKING CHANGES

* update forecast frame handling after RainViewer has removed forecast/nowcast data from their free public API

### Fixed

* update forecast frame handling after RainViewer has removed forecast/nowcast data from their free public API ([693e16b](https://github.com/jalibu/MMM-RAIN-MAP/commit/693e16b5d3760c0b9f28bbad4cdd3ce4dfa6d363))

## [2.11.3](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.11.2...v2.11.3) (2026-02-10)


### Fixed

* Correct types and add debug logging for forecast frames ([ad7afc7](https://github.com/jalibu/MMM-RAIN-MAP/commit/ad7afc76995b74e47dedf4a99354485ed0c4f2a0)), closes [#59](https://github.com/jalibu/MMM-RAIN-MAP/issues/59)

## [2.11.2](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.11.1...v2.11.2) (2026-02-09)


### Fixed

* Use correct slice for forecast frames ([07c0bf4](https://github.com/jalibu/MMM-RAIN-MAP/commit/07c0bf4283cbea034996443a6fe3ed70cd449256)), closes [#59](https://github.com/jalibu/MMM-RAIN-MAP/issues/59)


### Chores

* update devDependencies ([9295229](https://github.com/jalibu/MMM-RAIN-MAP/commit/9295229f62741f0cfa60f82459335988c5867b70))

## [2.11.1](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.11.0...v2.11.1) (2026-02-03)


### Fixed

* race condition with MMM-Carousel when using displayHoursBeforeRain ([05a611f](https://github.com/jalibu/MMM-RAIN-MAP/commit/05a611faad8882c41215d2d29cf7615153f770c4)), closes [#58](https://github.com/jalibu/MMM-RAIN-MAP/issues/58)

## [2.11.0](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.10.1...v2.11.0) (2026-02-03)


### Added

* optimize defaults and add exponential backoff for API rate limiting ([f3c9854](https://github.com/jalibu/MMM-RAIN-MAP/commit/f3c98549500af0f000958fcb8e51c70cc07b71bf))


### Fixed

* sanitizeAndFilterFrames returns empty array when maxFrames is 0 ([61ba860](https://github.com/jalibu/MMM-RAIN-MAP/commit/61ba86010ff65bb3ef70f2078cae19121b1abbd8))


### Chores

* add CHANGELOG.md to .prettierignore ([070579a](https://github.com/jalibu/MMM-RAIN-MAP/commit/070579ae3471d93fa7c3bb272952b27dff99ecf1))
* simplify demo script command in package.json ([bb32a0d](https://github.com/jalibu/MMM-RAIN-MAP/commit/bb32a0df31201a997a005293dad52050909f5f7e))
* update devDependencies ([81fc80c](https://github.com/jalibu/MMM-RAIN-MAP/commit/81fc80cdd44ac00d2a8a0b497ad04728b4edba0a))
* update git hooks to use lint-staged for pre-commit ([bbfefc5](https://github.com/jalibu/MMM-RAIN-MAP/commit/bbfefc5ec8cb1e1b2081c28d10f7702ce4cd82e7))


### Code Refactoring

* replace any types with concrete TypeScript interfaces ([1b65796](https://github.com/jalibu/MMM-RAIN-MAP/commit/1b65796ad8c172d1dc350d7c960fe49d20a4a73f))


### Tests

* add unit tests with node:test for configuration and utilities ([e5e34e5](https://github.com/jalibu/MMM-RAIN-MAP/commit/e5e34e542e4d66ec7671409299a45d421b153ec7))

## [2.10.1](https://github.com/jalibu/MMM-RAIN-MAP/compare/v2.10.0...v2.10.1) (2026-01-09)


### Fixed

* prevent animation speed increase with carousel modules ([66bc8e3](https://github.com/jalibu/MMM-RAIN-MAP/commit/66bc8e3909c838ace2f4ab0414bf19dae384eae3)), closes [#54](https://github.com/jalibu/MMM-RAIN-MAP/issues/54)


### Documentation

* add Code of Conduct file to promote community guidelines ([5f74912](https://github.com/jalibu/MMM-RAIN-MAP/commit/5f74912a50249d008966fbeaef0ec29c5ac6ebe4))


### Chores

* add changelog configuration and release script ([6f5d22f](https://github.com/jalibu/MMM-RAIN-MAP/commit/6f5d22fd81ccc2a2162b7c3f690214eb70977d99))
* add demo config ([fc4a7c0](https://github.com/jalibu/MMM-RAIN-MAP/commit/fc4a7c00011a1157f4f2f166ef9c2842e4fc3970))
* add lint-staged and simple-git-hooks for pre-commit linting ([70f2581](https://github.com/jalibu/MMM-RAIN-MAP/commit/70f25810239626a4152a0de74f0c9aaebe608798))
* update devDependencies ([0ed0e2a](https://github.com/jalibu/MMM-RAIN-MAP/commit/0ed0e2a9065322f1a6f2907640267ae028b41394))
* update npm script commands to use 'node --run' ([e45e4cd](https://github.com/jalibu/MMM-RAIN-MAP/commit/e45e4cda7c1c160daffc8f103a7e2c3d6272a864))


### Build System

* change lint job to use ubuntu-slim for reduced image size ([8991f40](https://github.com/jalibu/MMM-RAIN-MAP/commit/8991f40703828c6baa7288e70e320fa311b2b275))

## [2.9.0] - 2023-11-16

### Added
- New configuration option `invertColors` for dark mode display

## [2.8.0] - 2023-11-12

### Fixed
- Transparent background while loading weather data overlays (#37)
- Improvements during map rendering

### Contributors
- [@KristjanESPERANTO](https://github.com/KristjanESPERANTO)

## [2.7.0] - 2022-09-03

### Added
- New option `displayHoursBeforeRain` to show map depending on forecast (#31, #32)
- Forecast-dependent content displaying

### Contributors
- [@JonathanSchostak](https://github.com/JonathanSchostak)

## [2.6.2] - 2022-04-02

### Changed
- Changed default tile server to German fork (old server blocked Electron requests)

## [2.5.0] - 2021-09-18

### Added
- New option to select different color schemes

## [2.4.1] - 2021-09-14

### Fixed
- Fixed lockString usage for MMM-Pages compatibility

## [2.4.0] - 2021-09-11

### Changed
- Internal refactoring of build process (no functional changes)

## [2.3.0] - 2021-08-31

### Added
- Option to specify number of history and forecast layers
- Substitute modules feature (show/hidden when `onlyShowOnRain` is enabled)

## [2.2.0] - 2021-08-25

### Added
- New timeline feature with configuration options

## [2.1.0] - 2021-08-24

### Added
- Support for 30-minute radar layer forecast

## [2.0.2] - 2021-08-23

### Fixed
- MMM-Pages compatibility - module now sets lock when hidden

## [2.0.1] - 2021-08-19

### Fixed
- Fixed `displayOnlyOnRain` feature

## [2.0.0] - 2021-08-18

### Changed
- Complete rewrite from scratch (100%)
- Much more lightweight and resource-efficient
- Redefined configuration (breaking change - old configs not compatible)

### Removed
- GoogleMaps support (maintenance burden too high)

### Fixed
- `onlyOnRain` feature now compatible with default weather module and MMM-OpenWeatherForecast

## [1.1.0] - 2020-08-18

### Added
- New option to select OpenStreetMap URL

### Fixed
- Time format always was 24, regardless of settings

### Contributors
- [@khassel](https://github.com/khassel)

## [1.0.0] - 2020-05-24

### Added
- Initial release
- Shows Rainviewer.com rain data on OpenStreetMap or Google Maps
- Support for multiple, alternating zoom levels
- Option to only show on rain (dependency to currentweather module)
- Option to add markers on map
