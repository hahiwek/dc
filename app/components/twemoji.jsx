// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206
import React, { memo } from "react";

const Twemoji = ({ emoji }) => {
	// Fallback para quando twemoji não está disponível
	if (typeof window === "undefined") {
		return <span>{emoji}</span>;
	}

	try {
		const twemoji = require("@discordapp/twemoji");
		return (
			<span
				dangerouslySetInnerHTML={{
					__html: twemoji.parse(emoji, {
						folder: "svg",
						ext: ".svg",
					}),
				}}
			/>
		);
	} catch (error) {
		// Fallback se twemoji falhar
		return <span>{emoji}</span>;
	}
};

export default memo(Twemoji);
