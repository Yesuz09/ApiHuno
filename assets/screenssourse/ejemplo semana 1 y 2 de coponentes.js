import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import { Drawer } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Banner } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { BottomNavigation, Text } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <MyCard />
      
      
    </SafeAreaProvider>
  );
}

const MyComponent1 = () => {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};


const MyComponent2 = () => {
    const [visible, setVisible] = React.useState(true);
  
    return (
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>
    );
  };

const MusicRoute = () => <Text>Musica</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;
const MyComponent3 = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const MyComponent4 = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent5 = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const MyCard = () => (
  <ScrollView>
    <Text style={styles.text} variant="displayMedium">APP Sesual</Text>
    <Avatar.Image size={200} source={require('./assets/imgtest3.png')} />
    
    <Button style={styles.button1} icon="home" mode="elevated" onPress={() => console.log('Pressed')}>
      Iniciar
    </Button>

    <Text style={styles.text} variant="displayMedium">APP Sesual</Text>
    <Avatar.Image size={200} source={require('./assets/imgtest3.png')} />
    
    <Button style={styles.button1} icon="home" mode="elevated" onPress={() => console.log('Pressed')}>
      Iniciar
    </Button>

    <Text style={styles.text} variant="displayMedium">APP Sesual</Text>
    <Avatar.Image size={200} source={require('./assets/imgtest3.png')} />
    
    <Button style={styles.button1} icon="home" mode="elevated" onPress={() => console.log('Pressed')}>
      Iniciar
    </Button>

  </ScrollView>
  );
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'AD71CF',
      marginTop: 70,
      marginBottom:30,
      
    },
    text: {
      fontSize: 24,
      marginBottom:20
    },
    button1:{
      marginTop:20
    }

  });
