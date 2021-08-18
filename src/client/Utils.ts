export default class RainMapUtils {
	static supportedIconColors = [
		"black",
		"blue",
		"gold",
		"green",
		"grey",
		"orange",
		"red",
		"violet",
		"yellow",
	];

	static getIconColor(marker) {
		return marker.color &&
			RainMapUtils.supportedIconColors.includes(marker.color)
			? marker.color
			: "red";
	}
}
