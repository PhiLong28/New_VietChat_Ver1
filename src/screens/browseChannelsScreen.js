// Liệt kê các kênh mà người dùng có thể tham gia

import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { chatkitty, channelDisplayName } from '../chatkitty';

import Loading from '../components/loading';

export default function BrowseChannelsScreen({ navigation }) {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    chatkitty.listChannels({ filter: { joined: false } }).then((result) => {
      setChannels(result.paginator.items);

      if (loading) {
        setLoading(false);
      }
    });
  }, [isFocused, loading]);

  async function handleJoinChannel(channel) {
    const result = await chatkitty.joinChannel({ channel: channel });

    navigation.navigate('Chat', { channel: result.channel });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={channels}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <List.Item
          //Hiển thị tên của các thành viên kênh trực tiếp trong thanh tiêu đề
            title={channelDisplayName(item)} 
            description={item.type}
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            descriptionNumberOfLines={1}
            onPress={() => handleJoinChannel(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  listTitle: {
    fontSize: 22
  },
  listDescription: {
    fontSize: 16
  }
});