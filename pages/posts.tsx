import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
// import components
import H2 from '../components/styled-html-tag/H2'

const hatebuPosts = [
  {id: '151329', url: 'https://tech.stmn.co.jp/entry/2020/06/24/151329', title: 'Utility Typesで楽に、Type Transformしよう'},
  {id: '152551', url: 'https://tech.stmn.co.jp/entry/2020/05/28/152551', title: 'Recoil触ってみた'},
  {id: '110247', url: 'https://tech.stmn.co.jp/entry/2020/04/10/110247', title: 'useEffectを理解する'},
  {id: '6830', url: 'https://tech.stmn.co.jp/entry/tech/6830', title: 'AWS Amplify ✕ AppSync でアプリを公開する'},
  {id: '6082', url: 'https://tech.stmn.co.jp/entry/tech/6082', title: '「ヤフー名古屋 Tech Meetup #3 - Webフロントエンドを支えるノウハウ 」に登壇してきました！'},
]

const Posts = ({posts}) => {
  const qiitaPostRender = posts.map(post => {
    return (
      <li key={post.id}>
        <P><a href={post.url} target='blank'>{post.title}</a><Span>（{post.likes_count}LGTM）</Span></P>
      </li>
    )
  })
  const hatebuPostRender = hatebuPosts.map(post => {
    return (
      <li key={post.id}>
        <P><a href={post.url} target='blank'>{post.title}</a></P>
      </li>
    )
  })
  return(
  <div>
    <Head>
      <title>products</title>
      <link rel='icon' href='/static/favicon_me.ico' />
    </Head>
    <Container>
      <Wrapper>
        <H2Wrapper>
          <H2 title='Qiita'/>
        </H2Wrapper>
        <ul>
          {qiitaPostRender}
        </ul>
      </Wrapper>
      <Wrapper>
        <H2Wrapper>
          <H2 title='Hatena Blog'/>
        </H2Wrapper>
        <ul>
          {hatebuPostRender}
        </ul>
      </Wrapper>
    </Container>
  </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('https://qiita.com/api/v2/users/yun8boo/items')
  const json = await res.json()
  return {
    props: { posts: json }
  } 
}

export default Posts

const Container = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`

const H2Wrapper = styled.div`
  margin-bottom: 10px;
`

const P = styled.p`
  word-wrap:break-word;
`

const Span = styled.span``