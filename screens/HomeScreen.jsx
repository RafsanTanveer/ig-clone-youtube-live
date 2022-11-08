import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { ScrollView } from 'react-native'
import { POSTS } from '../data/PostData'

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Stories />
      <ScrollView >
        {POSTS.map((post, index) => (<Post post={post} key={index} />))}
      </ScrollView>
    </View>
  )
}

export default HomeScreen