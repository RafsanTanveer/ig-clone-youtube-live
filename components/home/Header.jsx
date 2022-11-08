import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={{
          uri: 'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-icon-white-border-text-black-background.png'
        }} />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>

          <Image style={styles.icon} source={{
            uri: 'https://img.icons8.com/plus-2-math'
          }} />
        </TouchableOpacity>
        <TouchableOpacity>

          <Image style={styles.icon} source={{
            uri: 'https://img.icons8.com/like'
          }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>

          <Image style={styles.icon} source={{
            uri: 'https://img.icons8.com/facebook-messenger'
          }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  iconContainer: {
    flexDirection: 'row'
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  icon: {
    width: 23,
    height: 23,
    marginLeft: 10,
    resizeMode: 'contain'
  },
  unreadBadge: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:100
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight:'600'
  }
})

export default Header