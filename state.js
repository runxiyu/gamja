export const SERVER_BUFFER = "*";

export const BufferType = {
	SERVER: "server",
	CHANNEL: "channel",
	NICK: "nick",
};

export const Status = {
	DISCONNECTED: "disconnected",
	CONNECTING: "connecting",
	REGISTERED: "registered",
};

export const Unread = {
	NONE: "",
	MESSAGE: "message",
	HIGHLIGHT: "highlight",

	union: (a, b) => {
		const priority = {
			[Unread.None]: 0,
			[Unread.MESSAGE]: 1,
			[Unread.HIGHLIGHT]: 2,
		};
		return (priority[a] > priority[b]) ? a : b;
	},
};

export function getNickURL(nick) {
	return "irc:///" + encodeURIComponent(nick) + ",isnick";
}

export function getBufferURL(buf) {
	switch (buf.type) {
	case BufferType.SERVER:
		return "irc:///";
	case BufferType.CHANNEL:
		return "irc:///" + encodeURIComponent(buf.name);
	case BufferType.NICK:
		return getNickURL(buf.name);
	}
	throw new Error("Unknown buffer type: " + buf.type);
}

export function getMessageURL(buf, msg) {
	var bufURL = getBufferURL(buf);
	return bufURL + "#timestamp=" + encodeURIComponent(msg.tags.time);
}
