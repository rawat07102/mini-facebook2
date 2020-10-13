const {
	FB_API_KEY,
	FB_APP_ID,
	FB_AUTH_DOMAIN,
	FB_DATABASE_URL,
	FB_MEASUREMENT_ID,
	FB_MESSAGING_SENDER_ID,
	FB_PROJECT_ID,
	FB_STORAGE_BUCKET,
} = process.env

export const firebaseConfig = {
	apiKey: FB_API_KEY,
	authDomain: FB_AUTH_DOMAIN,
	databaseURL: FB_DATABASE_URL,
	projectId: FB_PROJECT_ID,
	storageBucket: FB_STORAGE_BUCKET,
	messagingSenderId: FB_MESSAGING_SENDER_ID,
	appId: FB_APP_ID,
	measurementId: FB_MEASUREMENT_ID,
}
