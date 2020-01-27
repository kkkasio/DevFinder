import React, { useState } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Profile({ navigation }) {
  const [loading, setLoading] = useState(true);

  const githubUsername = navigation.getParam('github_username');

  function hideSpinner() {
    setLoading(!loading);
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView
        onLoad={() => hideSpinner()}
        style={{ flex: 1 }}
        source={{ uri: `https://github.com/${githubUsername}` }}
      />
      {loading && (
        <ActivityIndicator
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 }}
          size="large"
          color="#7d40e7"
        />
      )}
    </View>
  );
}
