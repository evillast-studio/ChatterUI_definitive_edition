const IS_DEV = process.env.APP_VARIANT === 'development'

module.exports = {
    expo: {
        name: IS_DEV ? 'ChatterUI (DEV)' : 'ChatterUI',
        newArchEnabled: true,
        slug: 'ChatterUI',
        version: '0.10.0-beta5',
        orientation: 'default',
        icon: './assets/images/icon.png',
        scheme: 'chatterui',
        userInterfaceStyle: 'automatic',
        assetBundlePatterns: ['**/*'],
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/images/adaptive-icon-foreground.png',
                backgroundImage: './assets/images//adaptive-icon-background.png',
                monochromeImage: './assets/images/adaptive-icon-foreground.png',
                backgroundColor: '#000',
            },
            package: IS_DEV ? 'com.Vali98.ChatterUIDev' : 'com.Vali98.ChatterUI',
            userInterfaceStyle: 'dark',
            permissions: [
                'android.permission.FOREGROUND_SERVICE',
                'android.permission.WAKE_LOCK',
                'android.permission.FOREGROUND_SERVICE_DATA_SYNC',
            ],
        },
        plugins: [
            ['expo-asset', { assets: ['./assets/models/aibot.raw', './assets/models/llama3tokenizer.gguf'] }],
            ['expo-build-properties', { android: { largeHeap: true, usesCleartextTraffic: true, enableProguardInReleaseBuilds: true, enableShrinkResourcesInReleaseBuilds: true, useLegacyPackaging: true, extraProguardRules: '-keep class com.rnllama.** { *; }' } }],
            ['expo-splash-screen', { backgroundColor: '#000000', image: './assets/images/adaptive-icon.
