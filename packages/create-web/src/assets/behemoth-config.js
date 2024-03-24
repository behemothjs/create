import crypto from 'node:crypto';

export const behemothConfig = {
	logger: {
		logLevel: 'LOG',
	},
	schema: {
		allowAdditionalKeys: false,
		allowUndefinedKeys: false,
		idStrategy: crypto.randomUUID(),
		timestampStrategy: new Date().toISOString(),
	},
};

export default behemothConfig;
